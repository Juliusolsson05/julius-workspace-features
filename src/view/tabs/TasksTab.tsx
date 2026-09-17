import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import type { JsonValue } from 'agent-code-extension-api'
import type { TasksState } from '../../engines/tasks/types'

/**
 * The task list. The entire interaction model:
 *   type + Enter    → append, keep focus for the next line
 *   click checkbox  → toggle done (strikethrough, dim, stays in place)
 *   Backspace empty → remove the last task
 *
 * Nothing else — no dates, tags, reorder, counts, or archive. Every one of
 * those costs attention, which is the resource this list exists to protect.
 */
export function TasksTab({
  state,
  send,
}: {
  state: TasksState
  send: (action: JsonValue) => void
}) {
  const [draft, setDraft] = useState('')

  const submit = () => {
    const trimmed = draft.trim()
    if (trimmed.length === 0) return
    send({ type: 'add', text: trimmed })
    setDraft('')
  }

  return (
    <div className="jwf-tasks">
      <div className="jwf-task-list">
        <AnimatePresence initial={false}>
          {state.tasks.map(task => (
            <motion.div
              key={task.id}
              className="jwf-task"
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 6 }}
              transition={{ duration: 0.16 }}
            >
              <button
                type="button"
                className="jwf-check"
                data-done={task.done}
                onClick={() => send({ type: 'toggle', id: task.id })}
                title={task.done ? 'Mark as not done' : 'Mark as done'}
                aria-label={task.done ? 'Mark as not done' : 'Mark as done'}
              />
              <span className="jwf-task-text" data-done={task.done}>{task.text}</span>
            </motion.div>
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
              const last = state.tasks.at(-1)
              if (last) send({ type: 'remove', id: last.id })
            }
          }}
        />
      </div>
    </div>
  )
}
