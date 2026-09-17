import type { PersistedTasks, Task, TasksState } from './types'
import { DUE_MAX_MS, DUE_MIN_MS, MAX_TASKS, MAX_TASK_TEXT_CHARS, isValidDueAt } from './types'

export type TasksEngineHost = {
  /** Persist. Called on every mutation — shutdown has no persistence guarantee. */
  save(data: PersistedTasks): void
}

type Listener = (state: TasksState) => void

/** Single-slot undo history: the tasks removed by one destructive action, and
 *  the flat-array indices they came from. A later destructive action replaces
 *  the slot — one level of undo is the deliberate scope. */
type UndoEntry = { tasks: Task[]; indices: number[] }

/**
 * The task list. Headless, like TimerEngine, for the same reason: the lane is a
 * pane the user keeps open, but it must also survive reloads, closed views, and
 * app restarts without losing a single line.
 *
 * ── THE STORAGE INVARIANT THIS ENGINE EXISTS TO PROTECT ──
 * The flat array always keeps a subtask's block DIRECTLY after its parent:
 *
 *     parent, sub, sub, parent, sub, parent, ...
 *
 * Every mutator preserves it (add inserts after the parent's sub-block, reorder
 * REJECTS permutations that break it, remove/clear take whole blocks, undo
 * restores indices that satisfied it). The view can therefore render and
 * drag-reorder by simple array walking with no grouping logic of its own — and
 * a stale view can never orphan or bury a subtask.
 */
export class TasksEngine {
  private listeners = new Set<Listener>()
  /** Null means "rebuild on next read". See snapshot(). */
  private cachedSnapshot: TasksState | null = null

  private tasks: Task[] = []
  private undoEntry: UndoEntry | null = null

  constructor(private host: TasksEngineHost) {}

  // ---------------------------------------------------------------- lifecycle

  restore(data: PersistedTasks | undefined): void {
    if (!data || !Array.isArray(data.tasks)) return
    // Defensive field-level validation: storage is durable state we do not
    // control the provenance of (a hand-edited file, a future schema). One bad
    // row must not poison the whole list — but silently dropping only the bad
    // rows hides data loss, so a malformed ANYTHING discards the restore and
    // starts clean, exactly like TimerEngine's corrupt-session path.
    const restored: Task[] = []
    let lastTopId: string | null = null
    for (const task of data.tasks) {
      if (task === null || typeof task !== 'object') return
      if (typeof task.id !== 'string' || task.id.length === 0) return
      if (typeof task.text !== 'string' || task.text.length === 0) return
      if (task.text.length > MAX_TASK_TEXT_CHARS) return
      if (typeof task.done !== 'boolean') return

      let parentId: string | null = null
      if (data.version === 3) {
        // The version guard discriminated the union at runtime; the cast only
        // re-narrows the loop variable's element type.
        const row = task as Task
        // The contiguity invariant is verified on the way in: a subtask must
        // belong to the most recent top-level task above it. A hand-reordered
        // or hand-edited file that violates it is rejected wholesale —
        // accepting it would strand the view's grouping forever after.
        if (row.parentId !== null && row.parentId !== undefined) {
          if (typeof row.parentId !== 'string' || row.parentId !== lastTopId) return
          parentId = row.parentId
        }
        if (row.dueAt !== null && row.dueAt !== undefined && !isValidDueAt(row.dueAt)) return
      }

      // v1 rows have no doneAt field at all in the union type; the widened
      // read keeps the version branches working over all three shapes.
      const stamp = (task as Partial<Task>).doneAt
      let doneAt: number | null = null
      if (data.version === 1) {
        // v1 predates timestamps: a done task migrates with doneAt = now (the
        // falsified-but-useful date beats hiding it from every filter).
        doneAt = task.done ? Date.now() : null
      } else if (task.done) {
        // v2/v3: a done task MUST carry its completion wall-clock; anything
        // else is a corrupt row. (doneAt is NOT bounded like dueAt — it is a
        // point-in-time stamp, not a calendar day.)
        if (typeof stamp !== 'number' || !Number.isFinite(stamp)) return
        doneAt = stamp
      }

      restored.push({
        id: task.id,
        text: task.text,
        done: task.done,
        doneAt,
        parentId,
        // v3's dueAt was validated in the version branch above (row); every
        // earlier version predates the field and migrates as null.
        dueAt: data.version === 3 ? ((task as Task).dueAt ?? null) : null,
      })
      if (parentId === null) lastTopId = task.id
    }
    this.tasks = restored
    // A destructive action from a PREVIOUS session cannot be undone into this
    // one — indices reference an array shape this process never saw.
    this.undoEntry = null
    this.emit()
  }

  dispose(): void {
    this.listeners.clear()
  }

  // ------------------------------------------------------------- subscription

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener)
    // Deliberately does NOT call the listener here — same contract and same
    // reason as TimerEngine: the view reads the current snapshot itself.
    return () => {
      this.listeners.delete(listener)
    }
  }

  /**
   * The current state, as a STABLE reference — a correctness requirement of
   * snapshot-diffing subscribers, not a performance tweak. Invalidation happens
   * only in emit(), which every mutation routes through.
   */
  snapshot(): TasksState {
    if (!this.cachedSnapshot) {
      this.cachedSnapshot = { tasks: this.tasks, canUndo: this.undoEntry != null }
    }
    return this.cachedSnapshot
  }

  // ------------------------------------------------------------------ actions

  add(text: unknown, parentId?: string): void {
    if (typeof text !== 'string') return
    const trimmed = text.trim()
    if (trimmed.length === 0 || trimmed.length > MAX_TASK_TEXT_CHARS) return
    if (this.tasks.length >= MAX_TASKS) return
    const task: Task = {
      id: crypto.randomUUID(),
      text: trimmed,
      done: false,
      doneAt: null,
      parentId: null,
      dueAt: null,
    }
    if (parentId != null) {
      // ONE level of nesting, ever: a subtask can only attach to a top-level
      // task, and it inserts directly after that parent's existing sub-block
      // to keep the invariant (parent, sub, sub, …) true by construction.
      const parentIndex = this.tasks.findIndex(candidate =>
        candidate.id === parentId && candidate.parentId === null)
      if (parentIndex < 0) return
      let insertAt = parentIndex + 1
      while (insertAt < this.tasks.length && this.tasks[insertAt].parentId === parentId) {
        insertAt += 1
      }
      task.parentId = parentId
      this.tasks = [...this.tasks.slice(0, insertAt), task, ...this.tasks.slice(insertAt)]
    } else {
      this.tasks = [...this.tasks, task]
    }
    this.commit()
  }

  /** Completing a task with open subtasks cascades to them (each stamped);
   *  reopening reopens exactly the clicked task. */
  toggle(id: string): void {
    const target = this.tasks.find(task => task.id === id)
    if (!target) return
    const completing = !target.done
    const now = Date.now()
    let touched = false
    this.tasks = this.tasks.map(task => {
      if (task.id === id) {
        touched = true
        return task.done
          ? { ...task, done: false, doneAt: null }
          : { ...task, done: true, doneAt: now }
      }
      // Only a completing PARENT cascades — and only its own open subs.
      if (completing && task.parentId === id && !task.done) {
        touched = true
        return { ...task, done: true, doneAt: now }
      }
      return task
    })
    if (touched) this.commit()
  }

  edit(id: string, text: string): void {
    const trimmed = text.trim()
    if (trimmed.length === 0 || trimmed.length > MAX_TASK_TEXT_CHARS) return
    if (this.tasks.every(task => task.id !== id)) return
    this.tasks = this.tasks.map(task =>
      task.id === id ? { ...task, text: trimmed } : task,
    )
    this.commit()
  }

  setDue(id: string, dueAt: number | null): void {
    if (dueAt !== null && !isValidDueAt(dueAt)) return
    if (this.tasks.every(task => task.id !== id)) return
    this.tasks = this.tasks.map(task =>
      task.id === id ? { ...task, dueAt } : task,
    )
    this.commit()
  }

  /** Removes a task and its whole sub-block, recording a single undo entry. */
  remove(id: string): void {
    const index = this.tasks.findIndex(task => task.id === id)
    if (index < 0) return
    const block: Task[] = [this.tasks[index]]
    let end = index + 1
    while (end < this.tasks.length && this.tasks[end].parentId === id) {
      block.push(this.tasks[end])
      end += 1
    }
    this.recordUndo(block, block.map((_task, offset) => index + offset))
    this.tasks = [...this.tasks.slice(0, index), ...this.tasks.slice(end)]
    this.commit()
  }

  /** Removes every done task plus any subtasks under them, as one undo entry. */
  clearCompleted(): void {
    const removed: Task[] = []
    const indices: number[] = []
    for (let index = 0; index < this.tasks.length; index += 1) {
      const task = this.tasks[index]
      const parent = task.parentId == null ? null : this.tasks.find(t => t.id === task.parentId)
      if (task.done || (parent && removed.some(removedTask => removedTask.id === parent.id))) {
        removed.push(task)
        indices.push(index)
      }
    }
    // An empty sweep must not wipe the previous undo entry: the user's last
    // real destructive action stays undoable.
    if (removed.length === 0) return
    this.recordUndo(removed, indices)
    const removedIds = new Set(removed.map(task => task.id))
    this.tasks = this.tasks.filter(task => !removedIds.has(task.id))
    this.commit()
  }

  /** Restores the last destructive action's tasks at their former indices. */
  undo(): void {
    const entry = this.undoEntry
    if (!entry) return
    this.undoEntry = null
    // Insert at ORIGINAL indices, ascending. No drift adjustment is needed:
    // each insertion shifts the surviving items right, which is exactly the
    // compensation the next original index requires — two removals at 1 and 3
    // restore as insert-at-1 then insert-at-3 around the untouched 2. Indices
    // clamp so a shape that changed in between still lands the tasks.
    const order = [...entry.tasks.keys()].sort((a, b) => entry.indices[a] - entry.indices[b])
    let tasks = [...this.tasks]
    for (const key of order) {
      const at = Math.min(entry.indices[key], tasks.length)
      tasks = [...tasks.slice(0, at), entry.tasks[key], ...tasks.slice(at)]
    }
    this.tasks = tasks
    this.commit()
  }

  reorder(ids: readonly string[]): void {
    if (ids.length !== this.tasks.length) return
    const byId = new Map(this.tasks.map(task => [task.id, task]))
    const rebuilt: Task[] = []
    const seen = new Set<string>()
    let lastTopId: string | null = null
    for (const id of ids) {
      if (seen.has(id) || !byId.has(id)) return
      const task = byId.get(id)!
      // Same rule the restore path enforces: a subtask only ever follows its
      // own parent. This is what lets the view drag whole parent-blocks by
      // dragging the parent, and what stops a stale view from orphaning one.
      if (task.parentId !== null && task.parentId !== lastTopId) return
      seen.add(id)
      rebuilt.push(task)
      if (task.parentId === null) lastTopId = task.id
    }
    this.tasks = rebuilt
    this.commit()
  }

  // ---------------------------------------------------------------- internals

  private recordUndo(tasks: Task[], indices: number[]): void {
    this.undoEntry = { tasks: [...tasks], indices: [...indices] }
  }

  private persisted(): PersistedTasks {
    // Always the current version once this build has run.
    return { version: 3, tasks: this.tasks }
  }

  /** Emit + persist. The single mutation exit path. */
  private commit(): void {
    this.host.save(this.persisted())
    this.emit()
  }

  private emit(): void {
    this.cachedSnapshot = null
    const state = this.snapshot()
    for (const listener of this.listeners) {
      try {
        listener(state)
      } catch {
        // A throwing subscriber must not starve its siblings or lose the save.
      }
    }
  }
}

// Re-exported for the runtime's validation so the bounds have one home.
export { DUE_MIN_MS, DUE_MAX_MS }
