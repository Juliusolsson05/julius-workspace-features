import type { TabId } from '../../types'

/**
 * The lane's tab bar. Two quiet text tabs and a passive running-dot —
 * deliberately nothing else. The dot is a status LED, not a control: it says
 * "the timer is still running" while you work in the Tasks lane, which is the
 * one fact worth glancing at.
 */
export function TabBar({
  activeTab,
  timerRunning,
  onSelect,
}: {
  activeTab: TabId
  timerRunning: boolean
  onSelect: (tab: TabId) => void
}) {
  return (
    <nav className="jwf-tabs" role="tablist" aria-label="Workspace lanes">
      <button
        type="button"
        className="jwf-tab"
        role="tab"
        aria-selected={activeTab === 'timer'}
        data-active={activeTab === 'timer'}
        onClick={() => onSelect('timer')}
      >
        Timer
        {timerRunning && activeTab !== 'timer' ? <span className="jwf-tab-dot" /> : null}
      </button>
      <button
        type="button"
        className="jwf-tab"
        role="tab"
        aria-selected={activeTab === 'tasks'}
        data-active={activeTab === 'tasks'}
        onClick={() => onSelect('tasks')}
      >
        Tasks
      </button>
    </nav>
  )
}
