export type Task = {
  id: string
  text: string
  done: boolean
  /** Epoch ms when the task was completed; null while it is open. */
  doneAt: number | null
  /** Set for a subtask: the id of its parent. ONE level only — a parent must
   *  itself have parentId null, enforced by the engine. */
  parentId: string | null
  /** Epoch ms at midnight of the due date; null = no due date. */
  dueAt: number | null
}

/**
 * Everything the view needs. A plain serializable object — API v2 publishes it
 * across the runtime boundary, so no methods and no live references.
 */
export type TasksState = {
  tasks: Task[]
}

/** v1 had no timestamps; v2 added doneAt; v3 adds parentId + dueAt. */
export type PersistedTasksV1 = {
  version: 1
  tasks: Array<{ id: string; text: string; done: boolean }>
}
export type PersistedTasksV2 = {
  version: 2
  tasks: Array<{ id: string; text: string; done: boolean; doneAt: number | null }>
}
export type PersistedTasksV3 = {
  version: 3
  tasks: Task[]
}

export type PersistedTasks = PersistedTasksV1 | PersistedTasksV2 | PersistedTasksV3

// Bounds shared by the engine and the runtime's action validation. 256 tasks of
// 200 chars is ~52 KiB of JSON — comfortably inside the host's 128 Ki-character
// transport bound and the 1 MiB storage namespace, so the cap exists to keep the
// list honest rather than to dodge a limit.
export const MAX_TASKS = 256
export const MAX_TASK_TEXT_CHARS = 200

// Due dates are calendar days, stored as midnight epochs. The bounds exist so a
// fat-fingered or hostile payload cannot smuggle arbitrary epoch values through
// storage; anything outside 2000..2099 is not a due date anyone can act on.
export const DUE_MIN_MS = Date.UTC(2000, 0, 1)
export const DUE_MAX_MS = Date.UTC(2100, 0, 1) - 1

export function isValidDueAt(value: unknown): value is number {
  return typeof value === 'number' && Number.isInteger(value)
    && value >= DUE_MIN_MS && value <= DUE_MAX_MS
}
