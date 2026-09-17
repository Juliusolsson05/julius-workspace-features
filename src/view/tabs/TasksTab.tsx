import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import type { JsonValue } from 'agent-code-extension-api'
import type { Task, TasksState } from '../../engines/tasks/types'
import { MAX_TASK_TEXT_CHARS } from '../../engines/tasks/types'

type SubTab = 'todo' | 'done'
type DoneFilter = 'today' | 'week' | 'all'

const DONE_FILTERS: Array<{ id: DoneFilter; label: string }> = [
  { id: 'today', label: 'Today' },
  { id: 'week', label: '7 days' },
  { id: 'all', label: 'All' },
]

function startOfToday(): number {
  const now = new Date()
  now.setHours(0, 0, 0, 0)
  return now.getTime()
}

/** A dim right-aligned stamp: the time for same-day completions, a short date
 *  for older ones. This is the only metadata the Done lane shows. */
function formatDoneAt(doneAt: number): string {
  const date = new Date(doneAt)
  if (date.getTime() >= startOfToday()) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }
  return date.toLocaleDateString([], { month: 'short', day: 'numeric' })
}

/**
 * The Tasks lane. Two subtabs over one published array:
 *
 *   To do — the input and the open lines. Click a line to complete it: it
 *           leaves immediately. Backspace on the empty input removes the last
 *           open task. Deliberately nothing else renders here.
 *   Done  — completed lines, struck through, with a completion stamp and date
 *           filters. Click a line to reopen it.
 *
 * There is no checkbox anywhere: the line itself is the toggle, which is one
 * affordance instead of two and removes the custom checkmark CSS that v0.1's
 * rendering hung on.
 */
export function TasksTab({
  state,
  send,
}: {
  state: TasksState
  send: (action: JsonValue) => void
}) {
  const [subTab, setSubTab] = useState<SubTab>('todo')
  const [doneFilter, setDoneFilter] = useState<DoneFilter>('all')
  const [draft, setDraft] = useState('')

  const open = state.tasks.filter(task => !task.done)
  // Newest completion first: the freshest items sit where the eye lands, and
  // Today/7-day filters would otherwise force scrolling past stale history.
  const done = state.tasks
    .filter(task => task.done)
    .sort((a, b) => (b.doneAt ?? 0) - (a.doneAt ?? 0))
  const filtered = done.filter(task => {
    if (doneFilter === 'all' || task.doneAt == null) return true
    return task.doneAt >= (doneFilter === 'today' ? startOfToday() : Date.now() - 7 * 86_400_000)
  })

  const submit = () => {
    const trimmed = draft.trim()
    if (trimmed.length === 0) return
    send({ type: 'add', text: trimmed })
    setDraft('')
  }

  return (
    <div className="jwf-tasks">
      <div className="jwf-subtabs" role="tablist" aria-label="Task lists">
        <button
          type="button"
          className="jwf-subtab"
          role="tab"
          aria-selected={subTab === 'todo'}
          data-active={subTab === 'todo'}
          onClick={() => setSubTab('todo')}
        >
          To do
        </button>
        <button
          type="button"
          className="jwf-subtab"
          role="tab"
          aria-selected={subTab === 'done'}
          data-active={subTab === 'done'}
          onClick={() => setSubTab('done')}
        >
          Done
        </button>
      </div>

      {subTab === 'todo' ? (
        <>
          <div className="jwf-task-list" role="list">
            <AnimatePresence initial={false}>
              {open.map(task => (
                <TaskRow key={task.id} task={task} send={send} />
              ))}
            </AnimatePresence>
          </div>

          <div className="jwf-task-input-row">
            <input
              // Keeps the "always ready for the next line" contract the moment the
              // Tasks lane becomes the visible tab.
              autoFocus
              className="jwf-task-input"
              type="text"
              aria-label="Add a task"
              // The runtime rejects text beyond its bound anyway; clamping here
              // turns that rejection into a normal truncation instead of a toast.
              maxLength={MAX_TASK_TEXT_CHARS}
              placeholder="Add a task…"
              value={draft}
              onChange={event => setDraft(event.target.value)}
              onKeyDown={event => {
                // Same containment stance as the ported timer inputs: the lane lives
                // inside host chrome, so keystrokes must not escape to handlers above.
                event.stopPropagation()
                if (event.key === 'Enter') {
                  event.preventDefault()
                  submit()
                } else if (event.key === 'Backspace' && draft.length === 0) {
                  const last = open.at(-1)
                  if (last) send({ type: 'remove', id: last.id })
                }
              }}
            />
          </div>
        </>
      ) : (
        <>
          <div className="jwf-filters">
            {DONE_FILTERS.map(filter => (
              <button
                key={filter.id}
                type="button"
                className="jwf-filter"
                data-active={doneFilter === filter.id}
                aria-pressed={doneFilter === filter.id}
                onClick={() => setDoneFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="jwf-task-list" role="list">
            <AnimatePresence initial={false}>
              {filtered.map(task => (
                <TaskRow key={task.id} task={task} send={send} />
              ))}
            </AnimatePresence>
            {filtered.length === 0 ? (
              <p className="jwf-done-empty">
                {done.length === 0 ? 'Nothing completed yet' : 'Nothing in this range'}
              </p>
            ) : null}
          </div>
        </>
      )}
    </div>
  )
}

/** One line, one action. The row is a button so the whole line is clickable —
 *  that click is the only completion affordance in either subtab. */
function TaskRow({ task, send }: { task: Task; send: (action: JsonValue) => void }) {
  return (
    <motion.button
      type="button"
      role="listitem"
      className="jwf-task"
      data-done={task.done}
      title={task.done ? 'Reopen this task' : 'Complete this task'}
      onClick={() => send({ type: 'toggle', id: task.id })}
      initial={{ opacity: 0, x: -6 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 6 }}
      transition={{ duration: 0.16 }}
    >
      <span className="jwf-task-text">{task.text}</span>
      {task.done && task.doneAt != null ? (
        <span className="jwf-task-date">{formatDoneAt(task.doneAt)}</span>
      ) : null}
    </motion.button>
  )
}
