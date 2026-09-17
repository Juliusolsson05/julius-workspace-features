export type Task = {
  id: string
  text: string
  done: boolean
}

/**
 * Everything the view needs. A plain serializable object — API v2 publishes it
 * across the runtime boundary, so no methods and no live references.
 */
export type TasksState = {
  tasks: Task[]
}

/** The persisted shape. Versioned so a future migration can tell shapes apart. */
export type PersistedTasks = {
  version: 1
  tasks: Task[]
}

// Bounds shared by the engine and the runtime's action validation. 256 tasks of
// 200 chars is ~52 KiB of JSON — comfortably inside the host's 128 Ki-character
// transport bound and the 1 MiB storage namespace, so the cap exists to keep the
// list honest rather than to dodge a limit.
export const MAX_TASKS = 256
export const MAX_TASK_TEXT_CHARS = 200
