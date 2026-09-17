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
    if (!data || data.version !== 1 || !Array.isArray(data.tasks)) return
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
      restored.push({ id: task.id, text: task.text, done: task.done })
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
    this.tasks = [...this.tasks, { id: crypto.randomUUID(), text: trimmed, done: false }]
    this.commit()
  }

  toggle(id: string): void {
    if (this.tasks.every(task => task.id !== id)) return
    this.tasks = this.tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task,
    )
    this.commit()
  }

  remove(id: string): void {
    if (this.tasks.every(task => task.id !== id)) return
    this.tasks = this.tasks.filter(task => task.id !== id)
    this.commit()
  }

  // ---------------------------------------------------------------- internals

  private persisted(): PersistedTasks {
    return { version: 1, tasks: this.tasks }
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
