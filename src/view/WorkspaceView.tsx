import type { JsonValue, ViewContext } from 'agent-code-extension-api'
import { useCallback, useEffect, useRef, useState } from 'react'

import type { TabId, WorkspaceState } from '../types'
import { applyThemeInheritance, watchHostTheme } from '../theme/inherit'
import { TabBar } from './shell/TabBar'
import { TasksTab } from './tabs/TasksTab'
import { TimerTab } from './tabs/TimerTab'

/**
 * The lane shell — the "one lane with tabs" the extension is shaped around.
 *
 * It subscribes once to the combined published state, owns the tab bar and the
 * theme (so inheritance covers the tab bar, not just the timer's content), and
 * renders exactly one tab at a time from the runtime's persisted choice. Tabs
 * receive plain slices and `send` functions; neither knows the other exists,
 * which is what keeps the timer port 1:1 and the tasks tab minimal.
 */
const EMPTY_WORKSPACE: WorkspaceState = {
  activeTab: 'timer',
  timer: {
    phase: 'idle', totalSeconds: 30 * 60, remainingSeconds: 30 * 60,
    reminders: [], activeReminderId: null, firedReminderKeys: [], inheritTheme: false,
  },
  tasks: { tasks: [] },
}

export function WorkspaceView({ context }: { context: ViewContext<WorkspaceState> }) {
  const { api } = context
  const [state, setState] = useState(() => context.runtime.state() ?? EMPTY_WORKSPACE)
  useEffect(() => context.runtime.subscribe(setState), [context])

  // One error surface for every lane: request failures surface as host toasts,
  // exactly like the ported timer view's own catch did.
  const request = useCallback((name: string, action: JsonValue) => {
    void context.runtime.request(name, action).catch(error => {
      void api.ui.showToast(error instanceof Error ? error.message : String(error))
    })
  }, [api.ui, context.runtime])
  const sendTimer = useCallback((action: JsonValue) => request('timerAction', action), [request])
  const sendTasks = useCallback((action: JsonValue) => request('tasksAction', action), [request])
  const selectTab = useCallback((tab: TabId) => request('selectTab', { tab }), [request])

  // Theme inheritance moved up from the ported timer view to the shell root:
  // the tab bar and the task list must follow the same palette as the timer
  // content, and the root is the only element that spans every tab.
  const rootRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const apply = () => applyThemeInheritance(root, state.timer.inheritTheme)
    apply()
    // Re-apply when the HOST theme changes, not just when the toggle flips —
    // otherwise switching Agent Code from dark to light leaves an inherited
    // lane showing the old palette until it is reopened.
    return state.timer.inheritTheme ? watchHostTheme(apply) : undefined
  }, [state.timer.inheritTheme])

  return (
    <div className="jwf" ref={rootRef}>
      <TabBar
        activeTab={state.activeTab}
        timerRunning={state.timer.phase === 'running'}
        onSelect={selectTab}
      />
      {state.activeTab === 'tasks' ? (
        <TasksTab state={state.tasks} send={sendTasks} />
      ) : (
        <TimerTab api={api} state={state.timer} send={sendTimer} />
      )}
    </div>
  )
}
