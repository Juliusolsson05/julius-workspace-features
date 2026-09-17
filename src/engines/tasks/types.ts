export type Task = {
  id: string
  text: string
  done: boolean
  /** Epoch ms when the task was completed; null while it is open. The stamp is
   *  what the Done subtab's date filters group on. */
  doneAt: number | null
}

/**
 * Everything the view needs. A plain serializable object — API v2 publishes it
 * across the runtime boundary, so no methods and no live references.
 */
export type TasksState = {
  tasks: Task[]
}

/** v1 had no completion timestamps — `done` was a bare boolean. */
export type PersistedTasksV1 = {
  version: 1
  tasks: Array<{ id: string; text: string; done: boolean }>
}

export type PersistedTasksV2 = {
  version: 2
  tasks: Task[]
}

export type PersistedTasks = PersistedTasksV1 | PersistedTasksV2

// Bounds shared by the engine and the runtime's action validation. 256 tasks of
// 200 chars is ~52 KiB of JSON — comfortably inside the host's 128 Ki-character
// transport bound and the 1 MiB storage namespace, so the cap exists to keep the
// list honest rather than to dodge a limit.
export const MAX_TASKS = 256
export const MAX_TASK_TEXT_CHARS = 200
