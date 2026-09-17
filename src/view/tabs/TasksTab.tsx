import { AnimatePresence, motion, Reorder } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

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
 *   To do — the input and the open lines. Click a line to complete it; drag a
 *           line to reorder; right-click to delete. Backspace on the empty
 *           input removes the last open task.
 *   Done  — completed lines, struck through, with a completion stamp and date
 *           filters. Click a line to reopen it; right-click to delete.
 *
 * There is no checkbox anywhere: the line itself is the toggle, one affordance
 * instead of two, and no per-row delete button — right-click is the delete
 * gesture in both lists, which keeps every row a single clean line of text.
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

  // ── Drag reorder ──────────────────────────────────────────────────────────
  // framer's Reorder commits continuously through onReorder, but a request per
  // drag frame would spam the runtime. So the drag lives in a local override:
  // onReorder only updates the override, and the SINGLE engine mutation fires
  // on drag end. The ref mirrors the override so the settle handler reads the
  // final order without a stale closure; `dragging` distinguishes "published
  // state changed" (adopt it) from "we are mid-drag" (the override wins).
  const dragging = useRef(false)
  const dragOrderRef = useRef<Task[] | null>(null)
  const [dragOrder, setDragOrderState] = useState<Task[] | null>(null)
  const setDragOrder = (next: Task[]) => {
    dragOrderRef.current = next
    setDragOrderState(next)
  }
  useEffect(() => {
    if (!dragging.current) {
      dragOrderRef.current = null
      setDragOrderState(null)
    }
  }, [state.tasks])
  const openView = dragOrder ?? open

  const settleDrag = () => {
    dragging.current = false
    const next = dragOrderRef.current
    dragOrderRef.current = null
    setDragOrderState(null)
    if (!next) return
    // The engine's reorder wants the FULL id permutation; done tasks keep
    // their storage order behind the reordered open ones.
    send({ type: 'reorder', ids: [...next.map(task => task.id), ...done.map(task => task.id)] })
  }

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
          <Reorder.Group
            axis="y"
            values={openView}
            onReorder={next => setDragOrder(next)}
            className="jwf-task-list"
            as="div"
          >
            <AnimatePresence initial={false}>
              {openView.map(task => (
                <TaskRow
                  key={task.id}
                  task={task}
                  send={send}
                  drag
                  onDragState={active => { dragging.current = active }}
                  onDragSettled={settleDrag}
                />
              ))}
            </AnimatePresence>
          </Reorder.Group>

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
                  const last = openView.at(-1)
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

/**
 * One line, two gestures: click toggles, right-click deletes, drag reorders
 * (To do only — the Done list owns its doneAt-descending order). The row is a
 * button so the whole line stays the click target.
 */
function TaskRow({
  task,
  send,
  drag = false,
  onDragState,
  onDragSettled,
}: {
  task: Task
  send: (action: JsonValue) => void
  drag?: boolean
  onDragState?: (active: boolean) => void
  onDragSettled?: () => void
}) {
  const hint = task.done ? 'Click to reopen · right-click to delete' : 'Click to complete · drag to reorder · right-click to delete'

  const body = (
    <>
      <span className="jwf-task-text">{task.text}</span>
      {task.done && task.doneAt != null ? (
        <span className="jwf-task-date">{formatDoneAt(task.doneAt)}</span>
      ) : null}
    </>
  )

  const shared = {
    className: 'jwf-task',
    'data-done': task.done,
    title: hint,
    onClick: () => send({ type: 'toggle', id: task.id }),
    // Right-click is the delete gesture — the only way a row grows a second
    // action without growing a second visible control.
    onContextMenu: (event: { preventDefault(): void }) => {
      event.preventDefault()
      send({ type: 'remove', id: task.id })
    },
  }

  if (drag) {
    return (
      <Reorder.Item
        as="button"
        type="button"
        value={task}
        {...shared}
        // onDragEnd fires after the final onReorder, so the parent's mirrored
        // ref already holds the settled order when this calls settleDrag.
        onDragStart={() => onDragState?.(true)}
        onDragEnd={() => onDragSettled?.()}
        initial={{ opacity: 0, x: -6 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 6 }}
        transition={{ duration: 0.16 }}
        style={{ position: 'relative' }}
      >
        {body}
      </Reorder.Item>
    )
  }

  return (
    <motion.button
      type="button"
      role="listitem"
      {...shared}
      initial={{ opacity: 0, x: -6 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 6 }}
      transition={{ duration: 0.16 }}
    >
      {body}
    </motion.button>
  )
}
