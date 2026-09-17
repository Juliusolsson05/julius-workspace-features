import type { TimerState } from './engines/timer/types'
import type { TasksState } from './engines/tasks/types'

/**
 * The combined published state, shared by the runtime and the view.
 *
 * WHY this module exists at all: the runtime entry and the view entry are
 * separately bundled modules that must never import each other — pulling
 * runtime.ts into view.ts would drag both engines into the disposable view
 * bundle, recreating the API v1 bug where closing the panel killed the timer.
 * Types-only imports erase at compile time, but keeping the published contract
 * in a leaf module makes that boundary structural instead of conventional.
 */
export type TabId = 'timer' | 'tasks'

export type WorkspaceState = {
  activeTab: TabId
  timer: TimerState
  tasks: TasksState
}
