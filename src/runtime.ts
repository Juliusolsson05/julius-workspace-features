import { defineRuntime } from 'agent-code-extension-api'
import type { JsonValue, RuntimeContext } from 'agent-code-extension-api'

import { TimerEngine } from './engines/timer/TimerEngine'
import type { PersistedTimer, TimerState } from './engines/timer/types'
import { TasksEngine } from './engines/tasks/TasksEngine'
import type { PersistedTasks } from './engines/tasks/types'
import { MAX_TASK_TEXT_CHARS } from './engines/tasks/types'
import type { TabId, WorkspaceState } from './types'

export type { TabId, WorkspaceState }

// Storage keys. 'session', 'tasks' and 'activeTab' are bare because the host
// namespaces extension storage by extension id — two extensions may both use a
// key named 'session' without colliding. The settings keys are different: a
// contributed setting's storage key IS its full namespaced contribution id.
const TIMER_SESSION_KEY = 'session'
const TASKS_KEY = 'tasks'
const ACTIVE_TAB_KEY = 'activeTab'
const DEFAULT_MINUTES_KEY = 'julius-workspace-features.defaultMinutes'
const INHERIT_THEME_KEY = 'julius-workspace-features.inheritTheme'

const VIEW_ID = 'julius-workspace-features.main'

type TimerAction =
  | { type: 'setDuration'; minutes: number }
  | { type: 'start' }
  | { type: 'pause' }
  | { type: 'resume' }
  | { type: 'reset' }
  | { type: 'addReminder'; label: string; intervalMinutes: number }
  | { type: 'removeReminder'; id: string }
  | { type: 'dismissReminder' }
  | { type: 'setInheritTheme'; value: boolean }
  | { type: 'syncSettings' }

type TasksAction =
  | { type: 'add'; text: string }
  | { type: 'toggle'; id: string }
  | { type: 'remove'; id: string }

function record(value: JsonValue): Record<string, JsonValue> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error('Timer actions must be JSON objects.')
  }
  return value
}

function actionFrom(input: JsonValue): TimerAction {
  const value = record(input)
  switch (value.type) {
    case 'setDuration':
      if (typeof value.minutes === 'number' && Number.isFinite(value.minutes)
        && value.minutes >= 1 && value.minutes <= 480) {
        return { type: value.type, minutes: value.minutes }
      }
      break
    case 'addReminder':
      if (typeof value.label === 'string' && value.label.trim().length > 0
        && value.label.length <= 80 && typeof value.intervalMinutes === 'number'
        && Number.isInteger(value.intervalMinutes) && value.intervalMinutes >= 1
        && value.intervalMinutes <= 480) {
        return {
          type: value.type,
          label: value.label,
          intervalMinutes: value.intervalMinutes,
        }
      }
      break
    case 'removeReminder':
      if (typeof value.id === 'string' && value.id.length > 0) {
        return { type: value.type, id: value.id }
      }
      break
    case 'setInheritTheme':
      if (typeof value.value === 'boolean') return { type: value.type, value: value.value }
      break
    case 'start':
    case 'pause':
    case 'resume':
    case 'reset':
    case 'dismissReminder':
    case 'syncSettings':
      return { type: value.type }
  }
  // The view is untrusted transport input even though our own bundle normally
  // creates it. Reject malformed actions here so a stale or edited view cannot
  // push impossible values into the long-lived engine.
  throw new Error('Invalid timer action.')
}

// Sibling of actionFrom with the same stance: the engine also validates, but
// the transport boundary rejects first so a malformed action can never even
// reach a partially-applied state.
function tasksActionFrom(input: JsonValue): TasksAction {
  if (!input || typeof input !== 'object' || Array.isArray(input)) {
    throw new Error('Tasks actions must be JSON objects.')
  }
  const value = input as Record<string, JsonValue>
  switch (value.type) {
    case 'add':
      if (typeof value.text === 'string' && value.text.trim().length > 0
        && value.text.trim().length <= MAX_TASK_TEXT_CHARS) {
        return { type: value.type, text: value.text }
      }
      break
    case 'toggle':
    case 'remove':
      if (typeof value.id === 'string' && value.id.length > 0) {
        return { type: value.type, id: value.id }
      }
      break
  }
  throw new Error('Invalid tasks action.')
}

function tabFrom(input: JsonValue): TabId {
  if (input && typeof input === 'object' && !Array.isArray(input)) {
    const tab = (input as Record<string, JsonValue>).tab
    if (tab === 'timer' || tab === 'tasks') return tab
  }
  throw new Error('Invalid tab.')
}

async function syncSettings(context: RuntimeContext, timer: TimerEngine): Promise<void> {
  const [defaultMinutes, inheritTheme] = await Promise.all([
    context.api.storage.get<number>(DEFAULT_MINUTES_KEY),
    context.api.storage.get<boolean>(INHERIT_THEME_KEY),
  ])
  // Settings are an input to the next idle session. A preference change must not
  // rewrite the deadline of a timer that is already running or paused.
  if (timer.snapshot().phase === 'idle'
    && typeof defaultMinutes === 'number'
    && Number.isFinite(defaultMinutes)
    && defaultMinutes >= 1
    && defaultMinutes <= 480) {
    timer.setDuration(defaultMinutes)
  }
  if (typeof inheritTheme === 'boolean') timer.setInheritTheme(inheritTheme)
}

async function performAction(
  context: RuntimeContext,
  timer: TimerEngine,
  input: JsonValue,
): Promise<TimerState> {
  const action = actionFrom(input)
  switch (action.type) {
    case 'setDuration': timer.setDuration(action.minutes); break
    case 'start': timer.start(); break
    case 'pause': timer.pause(); break
    case 'resume': timer.resume(); break
    case 'reset': timer.reset(); break
    case 'addReminder': timer.addReminder(action.label, action.intervalMinutes); break
    case 'removeReminder': timer.removeReminder(action.id); break
    case 'dismissReminder': timer.dismissReminder(); break
    case 'syncSettings': await syncSettings(context, timer); break
    case 'setInheritTheme':
      // The contributed Settings row and the in-view toggle share this key. Save
      // it before changing the live engine so a storage failure cannot make the
      // UI claim a preference that will disappear on the next activation.
      await context.api.storage.set(INHERIT_THEME_KEY, action.value)
      timer.setInheritTheme(action.value)
      break
  }
  return timer.snapshot()
}

// Module-level engine handles, cleared by deactivate. The ported timer runtime
// used the same shape: tests and the host both tear down through deactivate(),
// and a started timer's real 250 ms interval would otherwise outlive every
// test that pressed "start", hanging the process.
let timerEngine: TimerEngine | null = null
let tasksEngine: TasksEngine | null = null

export default defineRuntime({
  async activate(context) {
    const timer = new TimerEngine({
      // Persistence and notification failures should not stop the clock that
      // produced them. Both services report independently through host status.
      save: data => { void context.api.storage.set(TIMER_SESSION_KEY, data).catch(() => {}) },
      notify: message => { void context.api.notifications.show(message).catch(() => {}) },
    })
    const tasks = new TasksEngine({
      save: data => { void context.api.storage.set(TASKS_KEY, data).catch(() => {}) },
    })
    let activeTab: TabId = 'timer'

    try {
      const savedTimer = await context.api.storage.get<PersistedTimer>(TIMER_SESSION_KEY)
      timer.restore(savedTimer)
    } catch {
      // A corrupt/unreadable prior session starts clean. The host preserves the
      // bytes for diagnosis; this extension must still activate and be usable.
    }
    try {
      const savedTasks = await context.api.storage.get<PersistedTasks>(TASKS_KEY)
      tasks.restore(savedTasks)
    } catch {
      // Same stance as the timer session: usability over salvage.
    }
    try {
      const savedTab = await context.api.storage.get<JsonValue>(ACTIVE_TAB_KEY)
      // tabFrom throws on garbage; a saved tab this runtime never wrote must not
      // brick the pane, so fall back to the timer lane on anything invalid.
      activeTab = savedTab === undefined ? 'timer' : tabFrom({ tab: savedTab })
    } catch {
      activeTab = 'timer'
    }
    await syncSettings(context, timer).catch(() => {})

    // One publisher over both engines. Each engine notifies independently (the
    // timer ticks, tasks mutate), and either notification republishes the FULL
    // combined state — views.publish replaces the latest state wholesale, so a
    // partial publish would blank the other lane's slice.
    const publish = () => context.views.publish(VIEW_ID, {
      activeTab,
      timer: timer.snapshot(),
      tasks: tasks.snapshot(),
    })
    timerEngine = timer
    tasksEngine = tasks
    const unsubscribeTimer = timer.subscribe(() => { void publish().catch(() => {}) })
    const unsubscribeTasks = tasks.subscribe(() => { void publish().catch(() => {}) })
    context.subscriptions.push(
      { dispose: unsubscribeTimer },
      { dispose: unsubscribeTasks },
      { dispose: () => timer.dispose() },
      { dispose: () => tasks.dispose() },
    )

    context.registerCommand('julius-workspace-features.timer.start', async () => {
      // A command can start the timer without ever opening its panel. Re-read
      // contributed settings here so that path honors a newly selected default.
      await syncSettings(context, timer).catch(() => {})
      timer.start()
    })
    context.registerCommand('julius-workspace-features.timer.pause', () => timer.pause())
    context.registerCommand('julius-workspace-features.timer.reset', () => timer.reset())
    context.registerRequest('timerAction', input => performAction(context, timer, input))
    // Handlers are async so validation failures become rejected promises, not
    // synchronous throws — the host transport awaits handler results, and the
    // ported timer's performAction already had exactly this shape.
    context.registerRequest('tasksAction', async input => {
      const action = tasksActionFrom(input)
      switch (action.type) {
        case 'add': tasks.add(action.text); break
        case 'toggle': tasks.toggle(action.id); break
        case 'remove': tasks.remove(action.id); break
      }
      return tasks.snapshot()
    })
    context.registerRequest('selectTab', async input => {
      activeTab = tabFrom(input)
      // Persist BEFORE publishing and await it, mirroring setInheritTheme: a
      // failed write must not leave the UI showing a tab choice the next
      // activation loses. A rejection here surfaces to the view as a failed
      // request instead of a silently unsaved preference.
      await context.api.storage.set(ACTIVE_TAB_KEY, activeTab)
      await publish()
      return activeTab
    })
    await publish()
  },

  deactivate() {
    timerEngine?.dispose()
    timerEngine = null
    tasksEngine?.dispose()
    tasksEngine = null
  },
})
