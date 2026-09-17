import { motion, Reorder } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import type { KeyboardEvent as ReactKeyboardEvent, MouseEvent as ReactMouseEvent } from 'react'

import type { Task } from '../../engines/tasks/types'
import { MAX_TASK_TEXT_CHARS } from '../../engines/tasks/types'

/** Human label for a due date: Today / Tomorrow / short date, with an
 *  overdue marker when the day has passed and the task is still open. */
export function dueLabel(dueAt: number): { text: string; overdue: boolean } {
  const date = new Date(dueAt)
  const startOfToday = new Date()
  startOfToday.setHours(0, 0, 0, 0)
  const days = Math.round((date.getTime() - startOfToday.getTime()) / 86_400_000)
  if (days < 0) return { text: date.toLocaleDateString([], { month: 'short', day: 'numeric' }), overdue: true }
  if (days === 0) return { text: 'Today', overdue: false }
  if (days === 1) return { text: 'Tomorrow', overdue: false }
  return { text: date.toLocaleDateString([], { month: 'short', day: 'numeric' }), overdue: false }
}

/**
 * One line, explicit affordances:
 *   checkbox  → toggle (the deliberate, discoverable completion control)
 *   text      → double-click to edit in place (Enter saves, Esc cancels)
 *   row drag  → reorder (top-level only; the whole subtree travels)
 *   right-click → the context menu (due date, subtask, delete)
 *
 * The row is NOT itself a button anymore: with a checkbox back, a
 * click-anywhere toggle caused accidental completions and fought the
 * double-click-to-edit gesture.
 */
export function TaskRow({
  task,
  subProgress,
  dueEditing,
  onDueDismiss,
  onToggle,
  onEdit,
  onSetDue,
  onMenu,
  drag = false,
  onDragState,
  onDragSettled,
}: {
  task: Task
  /** `done/total` for a parent's subtasks, shown beside its text. */
  subProgress?: { done: number; total: number }
  /** The lane asks this row to enter date-editing (menu → Set due date). */
  dueEditing?: boolean
  onDueDismiss?: () => void
  onToggle: (task: Task) => void
  onEdit: (task: Task, text: string) => void
  onSetDue: (task: Task, dueAt: number | null) => void
  onMenu: (event: ReactMouseEvent, task: Task) => void
  drag?: boolean
  onDragState?: (active: boolean) => void
  onDragSettled?: () => void
}) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(task.text)
  const [dueDraft, setDueDraft] = useState('')
  const editInput = useRef<HTMLInputElement | null>(null)

  // Reset transient editors whenever a different task's data arrives on this
  // row instance (React reuses components across list reorders).
  useEffect(() => {
    setEditing(false)
    if (!dueEditing) setDueDraft('')
  }, [task.id, dueEditing])

  // Entering due-editing seeds the input from the task (or today, when
  // setting a first due date — opening on the current date is the common case).
  useEffect(() => {
    if (!dueEditing) return
    const seed = task.dueAt != null
      ? new Date(task.dueAt).toISOString().slice(0, 10)
      : new Date().toISOString().slice(0, 10)
    setDueDraft(seed)
  }, [dueEditing, task.dueAt])

  useEffect(() => {
    if (editing) editInput.current?.select()
  }, [editing])

  const commitEdit = () => {
    setEditing(false)
    const trimmed = draft.trim()
    if (trimmed.length > 0 && trimmed !== task.text) onEdit(task, trimmed)
    else setDraft(task.text)
  }

  const hint = 'Double-click to edit · right-click for options'

  const due = task.dueAt != null && !task.done ? dueLabel(task.dueAt) : null
  // The date input replaces the row while the lane has asked for due-editing
  // on this row (menu → Set due date).
  const showingDueInput = dueEditing === true

  const checkbox = (
    <button
      type="button"
      className="jwf-check"
      data-done={task.done}
      data-sub={task.parentId != null}
      onClick={() => onToggle(task)}
      title={task.done ? 'Mark as not done' : 'Mark as done'}
      aria-label={task.done ? 'Mark as not done' : 'Mark as done'}
    />
  )

  const text = (
    <span className="jwf-task-text" data-done={task.done} onDoubleClick={() => setEditing(true)}>
      {task.text}
      {subProgress ? (
        <span className="jwf-task-progress">{subProgress.done}/{subProgress.total}</span>
      ) : null}
    </span>
  )

  const badge = task.done && task.doneAt != null ? (
    <span className="jwf-task-date">
      {new Date(task.doneAt).toLocaleDateString([], { month: 'short', day: 'numeric' })}
    </span>
  ) : due ? (
    <span className="jwf-task-date" data-overdue={due.overdue}>
      {due.overdue ? `${due.text} · overdue` : due.text}
    </span>
  ) : null

  const shared = {
    className: 'jwf-task',
    'data-done': task.done,
    'data-sub': task.parentId != null,
    title: hint,
    onContextMenu: (event: ReactMouseEvent) => onMenu(event, task),
  }

  if (showingDueInput) {
    return (
      <motion.div
        {...shared}
        initial={{ opacity: 0, x: -6 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 6 }}
        transition={{ duration: 0.16 }}
      >
        {checkbox}
        <input
          autoFocus
          className="jwf-due-input"
          type="date"
          value={dueDraft}
          onChange={event => setDueDraft(event.target.value)}
          onKeyDown={(event: ReactKeyboardEvent<HTMLInputElement>) => {
            event.stopPropagation()
            if (event.key === 'Enter') {
              event.preventDefault()
              onSetDue(task, dueDraft ? new Date(`${dueDraft}T00:00:00`).getTime() : null)
              onDueDismiss?.()
            } else if (event.key === 'Escape') {
              onDueDismiss?.()
            }
          }}
          onBlur={() => onDueDismiss?.()}
        />
        <button
          type="button"
          className="jwf-ghost-clear"
          title="Clear due date"
          onClick={() => {
            onSetDue(task, null)
            onDueDismiss?.()
          }}
        >
          Clear
        </button>
      </motion.div>
    )
  }

  if (editing) {
    return (
      <motion.div
        {...shared}
        initial={{ opacity: 0, x: -6 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 6 }}
        transition={{ duration: 0.16 }}
      >
        {checkbox}
        <input
          ref={editInput}
          autoFocus
          className="jwf-edit-input"
          type="text"
          value={draft}
          maxLength={MAX_TASK_TEXT_CHARS}
          onChange={event => setDraft(event.target.value)}
          onKeyDown={(event: ReactKeyboardEvent<HTMLInputElement>) => {
            event.stopPropagation()
            if (event.key === 'Enter') {
              event.preventDefault()
              commitEdit()
            } else if (event.key === 'Escape') {
              setDraft(task.text)
              setEditing(false)
            }
          }}
          onBlur={commitEdit}
        />
      </motion.div>
    )
  }

  if (drag) {
    return (
      <Reorder.Item
        as="div"
        value={task}
        {...shared}
        onDragStart={() => onDragState?.(true)}
        onDragEnd={() => onDragSettled?.()}
        initial={{ opacity: 0, x: -6 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 6 }}
        transition={{ duration: 0.16 }}
        style={{ position: 'relative' }}
      >
        {checkbox}
        {text}
        {badge}
      </Reorder.Item>
    )
  }

  return (
    <motion.div
      {...shared}
      initial={{ opacity: 0, x: -6 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 6 }}
      transition={{ duration: 0.16 }}
    >
      {checkbox}
      {text}
      {badge}
    </motion.div>
  )
}
