import type { PersistedTasks, Task, TasksState } from './types'
import { MAX_TASKS, MAX_TASK_TEXT_CHARS } from './types'
export type TasksEngineHost = {
  /** Persist. Called on every mutation — shutdown has no persistence guarantee. */
  save(data: PersistedTasks): void
}

type Listener = (state: TasksState) => void

/**
 * The task list. Headless, like TimerEngine, for the same reason: the lane is a
 * pane the user keeps open, but it must also survive reloads, closed views, and
 * app restarts without losing a single line.
 *
 * WHY this engine is deliberately dumb: the feature is "new line, new task".
 * Every addition beyond add/toggle/remove has a cost in attention — the exact
 * resource the list exists to protect. No ordering, no dates, no counts.
 */
export class TasksEngine {
  private listeners = new Set<Listener>()
  /** Null means "rebuild on next read". See snapshot(). */
  private cachedSnapshot: TasksState | null = null

  private tasks: Task[] = []

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
    for (const task of data.tasks) {
      if (task === null || typeof task !== 'object') return
      if (typeof task.id !== 'string' || task.id.length === 0) return
      if (typeof task.text !== 'string' || task.text.length === 0) return
      if (task.text.length > MAX_TASK_TEXT_CHARS) return
      if (typeof task.done !== 'boolean') return
      let doneAt: number | null = null
      if (data.version === 1) {
        // v1 predates timestamps. A done task migrates with doneAt = now: the
        // date is falsified, but the alternative — doneAt: null on a done task —
        // hides it from every date filter forever, which is strictly worse for
        // a personal list. An open task correctly starts at null.
        doneAt = task.done ? Date.now() : null
      } else if (data.version === 2) {
        // The version guard above already discriminated the union at runtime;
        // the cast only re-narrows the element type the loop variable lost.
        const row = task as Task
        // Incoherent stamps reject the whole restore rather than being silently
        // normalized: doneAt must be a finite epoch exactly when done is true.
        if (row.done) {
          if (typeof row.doneAt !== 'number' || !Number.isFinite(row.doneAt)) return
          doneAt = row.doneAt
        } else if (row.doneAt !== null) {
          return
        }
      } else {
        return
      }
      restored.push({ id: task.id, text: task.text, done: task.done, doneAt })
    }
    this.tasks = restored
    this.emit()
  }

  dispose(): void {
    this.listeners.clear()
  }

  // ------------------------------------------------------------- subscription

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener)
    // Deliberately does NOT call the listener here — same contract and same
    // reason as TimerEngine: the view reads the current snapshot itself, and an
    // immediate push fires a state update during subscription.
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
      this.cachedSnapshot = { tasks: this.tasks }
    }
    return this.cachedSnapshot
  }

  // ------------------------------------------------------------------ actions

  add(text: unknown): void {
    if (typeof text !== 'string') return
    const trimmed = text.trim()
    if (trimmed.length === 0 || trimmed.length > MAX_TASK_TEXT_CHARS) return
    // A full list drops the add rather than evicting the oldest task: silent
    // data loss in a todo list is the one failure this tool must never have.
    if (this.tasks.length >= MAX_TASKS) return
    this.tasks = [...this.tasks, { id: crypto.randomUUID(), text: trimmed, done: false, doneAt: null }]
    this.commit()
  }

  toggle(id: string): void {
    if (this.tasks.every(task => task.id !== id)) return
    this.tasks = this.tasks.map(task => {
      if (task.id !== id) return task
      // Completing stamps the wall clock; reopening clears it. A reopened task
      // that completes again gets a fresh stamp — the Done filters group on the
      // most recent completion, which is the date the user actually cares about.
      return task.done
        ? { ...task, done: false, doneAt: null }
        : { ...task, done: true, doneAt: Date.now() }
    })
    this.commit()
  }

  remove(id: string): void {
    if (this.tasks.every(task => task.id !== id)) return
    this.tasks = this.tasks.filter(task => task.id !== id)
    this.commit()
  }

  /**
   * Reorder by the complete desired id sequence. Must be an exact permutation
   * of the current task ids: a stale view that missed an add or delete would
   * otherwise resurrect or drop tasks by rebuilding the array from its own
   * outdated picture. Anything not an exact match is a silent no-op — same
   * stance as unknown ids in toggle/remove.
   */
  reorder(ids: readonly string[]): void {
    if (ids.length !== this.tasks.length) return
    const byId = new Map(this.tasks.map(task => [task.id, task]))
    const rebuilt: Task[] = []
    const seen = new Set<string>()
    for (const id of ids) {
      if (seen.has(id) || !byId.has(id)) return
      seen.add(id)
      rebuilt.push(byId.get(id)!)
    }
    this.tasks = rebuilt
    this.commit()
  }

  // ---------------------------------------------------------------- internals

  private persisted(): PersistedTasks {
    // Always v2 once this build has run: the timestamps are load-bearing for
    // the Done filters, so there is no value in writing a v1 shape back.
    return { version: 2, tasks: this.tasks }
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
