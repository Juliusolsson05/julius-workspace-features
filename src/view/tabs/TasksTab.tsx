import { AnimatePresence, Reorder } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { MouseEvent as ReactMouseEvent } from 'react'

import type { JsonValue } from 'agent-code-extension-api'
import type { Task, TasksState } from '../../engines/tasks/types'
import { MAX_TASK_TEXT_CHARS } from '../../engines/tasks/types'
import { ContextMenu, type ContextMenuTarget } from '../shell/ContextMenu'
import { Sfx } from '../sounds'
import { TaskRow } from '../tasks/TaskRow'

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

// The undo toast's auto-dismiss handle. Module-level rather than a ref
// because the toast outlives row re-renders and a ref keyed to the component
// would leak timers across subtab switches.
let undoToastTimer: number | null = null

/**
 * The Tasks lane — a complete basic todo application, nothing more.
 *
 *   To do — checkbox to complete, double-click to edit, drag to reorder,
 *           right-click for due date / subtask / delete, Backspace on the
 *           empty input removes the last open task, search filters.
 *   Done  — completion stamps, date filters, Clear completed, search.
 *
 * Deletions (menu, clear, backspace) surface a 5s Undo toast backed by the
 * engine's single-slot history.
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
  const [query, setQuery] = useState('')
  const [menu, setMenu] = useState<ContextMenuTarget | null>(null)
  const [dueEditingId, setDueEditingId] = useState<string | null>(null)
  const [subInputParentId, setSubInputParentId] = useState<string | null>(null)
  const [undoToast, setUndoToast] = useState<string | null>(null)
  // Two-step confirm for Clear completed: the first click arms it, the second
  // within the window executes. Inline, no dialog — bulk destruction deserves
  // one extra beat, not a modal.
  const [clearArmed, setClearArmed] = useState(false)

  // One shared voice for the lane, created lazily on first gesture so the
  // AudioContext is born inside a user activation (autoplay policy).
  const sfx = useRef<Sfx | null>(null)
  const voice = () => (sfx.current ??= new Sfx())

  const topLevel = useMemo(() => state.tasks.filter(task => task.parentId === null), [state.tasks])
  const subsOf = useMemo(() => {
    const byParent = new Map<string, Task[]>()
    for (const task of state.tasks) {
      if (task.parentId == null) continue
      const bucket = byParent.get(task.parentId) ?? []
      bucket.push(task)
      byParent.set(task.parentId, bucket)
    }
    return byParent
  }, [state.tasks])

  const openTop = useMemo(() => topLevel.filter(task => !task.done), [topLevel])
  const doneTop = useMemo(
    () => topLevel.filter(task => task.done)
      .sort((a, b) => (b.doneAt ?? 0) - (a.doneAt ?? 0)),
    [topLevel],
  )
  const remaining = state.tasks.filter(task => !task.done).length

  const needle = query.trim().toLowerCase()
  const matches = (task: Task) => task.text.toLowerCase().includes(needle)
  const visibleOpen = needle
    ? openTop.filter(task => matches(task) || (subsOf.get(task.id) ?? []).some(matches))
    : openTop
  const visibleDone = needle ? doneTop.filter(matches) : doneTop

  const filteredDone = visibleDone.filter(task => {
    if (doneFilter === 'all' || task.doneAt == null) return true
    return task.doneAt >= (doneFilter === 'today' ? startOfToday() : Date.now() - 7 * 86_400_000)
  })

  // ── Drag reorder ──────────────────────────────────────────────────────────
  // Dragging is disabled while a search is active: reordering a filtered view
  // is how tasks end up somewhere the user did not see them land. Otherwise
  // the drag lives in a local override (framer commits continuously, the
  // runtime gets ONE request on drag end) and subs always travel with their
  // parent because the drag values are top-level tasks only.
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
  const dragTopView = dragOrder ?? visibleOpen

  const settleDrag = () => {
    dragging.current = false
    const next = dragOrderRef.current
    dragOrderRef.current = null
    setDragOrderState(null)
    if (!next) return
    // The full permutation: each parent id followed by its sub ids, so the
    // engine's contiguity invariant holds by construction.
    const ids: string[] = []
    for (const parent of next) {
      ids.push(parent.id)
      for (const sub of subsOf.get(parent.id) ?? []) ids.push(sub.id)
    }
    for (const parent of topLevel) {
      if (parent.done) {
        ids.push(parent.id)
        for (const sub of subsOf.get(parent.id) ?? []) ids.push(sub.id)
      }
    }
    send({ type: 'reorder', ids })
  }

  // ── Actions with sound + undo plumbing ───────────────────────────────────
  const flashUndo = (label: string) => {
    setUndoToast(label)
    if (undoToastTimer != null) window.clearTimeout(undoToastTimer)
    // 8s: long enough to register the toast after the interaction, short
    // enough not to linger — and the persistent canUndo chip below is the
    // real net once this expires.
    undoToastTimer = window.setTimeout(() => setUndoToast(null), 8_000)
  }

  const toggle = (task: Task) => {
    const wasDone = task.done
    if (wasDone) voice().taskReopen()
    else voice().taskComplete()
    send({ type: 'toggle', id: task.id })
  }

  const submit = () => {
    const trimmed = draft.trim()
    if (trimmed.length === 0) return
    voice().taskAdd()
    send({ type: 'add', text: trimmed })
    setDraft('')
  }

  const deleteFromMenu = (task: { id: string }) => {
    voice().taskDelete()
    send({ type: 'remove', id: task.id })
    flashUndo('Deleted')
  }

  const clearCompleted = () => {
    if (doneTop.length === 0) return
    if (!clearArmed) {
      setClearArmed(true)
      window.setTimeout(() => setClearArmed(false), 3_000)
      return
    }
    setClearArmed(false)
    voice().taskDelete()
    send({ type: 'clearCompleted' })
    flashUndo(`Cleared ${doneTop.length}`)
  }

  const undo = () => {
    if (undoToastTimer != null) window.clearTimeout(undoToastTimer)
    setUndoToast(null)
    voice().taskAdd()
    send({ type: 'undo' })
  }

  // Menu coordinates are relative to this lane root (position: relative) so
  // the card lands under the cursor regardless of pane scroll.
  const laneRef = useRef<HTMLDivElement | null>(null)
  const openMenu = (event: ReactMouseEvent, task: Task) => {
    event.preventDefault()
    event.stopPropagation()
    const rect = laneRef.current?.getBoundingClientRect()
    setMenu({
      taskId: task.id,
      label: task.text,
      x: event.clientX - (rect?.left ?? 0),
      y: event.clientY - (rect?.top ?? 0),
    })
  }

  const searchBox = (
    <input
      className="jwf-search"
      type="search"
      aria-label="Search tasks"
      placeholder="Search"
      value={query}
      onChange={event => setQuery(event.target.value)}
      onKeyDown={event => {
        event.stopPropagation()
        if (event.key === 'Escape') setQuery('')
      }}
    />
  )

  return (
    <div className="jwf-tasks" ref={laneRef}>
      <div className="jwf-subtabs" role="tablist" aria-label="Task lists">
        <button
          type="button"
          className="jwf-subtab"
          role="tab"
          aria-selected={subTab === 'todo'}
          data-active={subTab === 'todo'}
          onClick={() => setSubTab('todo')}
        >
          To do{remaining > 0 ? ` · ${remaining}` : ''}
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
        {searchBox}
      </div>

      {subTab === 'todo' ? (
        <>
          <Reorder.Group
            axis="y"
            values={dragTopView}
            onReorder={next => setDragOrder(next)}
            className="jwf-task-list"
            as="div"
          >
            <AnimatePresence initial={false}>
              {dragTopView.map(task => (
                <TaskBlock
                  key={task.id}
                  task={task}
                  subs={subsOf.get(task.id) ?? []}
                  subInputOpen={subInputParentId === task.id}
                  onSubInputClose={() => setSubInputParentId(null)}
                  dueEditingId={dueEditingId}
                  onDueEditingDone={() => setDueEditingId(null)}
                  onToggle={toggle}
                  onEdit={(edited, text) => send({ type: 'edit', id: edited.id, text })}
                  onSetDue={(edited, dueAt) => send({ type: 'setDue', id: edited.id, dueAt })}
                  onMenu={openMenu}
                  onAddSub={(text, parentId) => {
                    voice().taskAdd()
                    send({ type: 'add', text, parentId })
                  }}
                  onDragState={active => { dragging.current = active }}
                  onDragSettled={settleDrag}
                  drag={!needle}
                />
              ))}
            </AnimatePresence>
            {visibleOpen.length === 0 ? (
              <p className="jwf-done-empty">
                {needle ? 'Nothing matches' : 'Add a task below'}
              </p>
            ) : null}
          </Reorder.Group>

          <div className="jwf-task-input-row">
            <input
              autoFocus
              className="jwf-task-input"
              type="text"
              aria-label="Add a task"
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
                }
                // DELIBERATELY no Backspace-on-empty delete: a hidden keystroke
                // that destroys work is how the last entry vanished on a
                // misclick. Deletion lives in the menu, behind undo.
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
            <button
              type="button"
              className="jwf-ghost-clear"
              onClick={clearCompleted}
              disabled={doneTop.length === 0}
              title={
                clearArmed
                  ? 'Click again to remove every completed task'
                  : 'Remove every completed task (two-click confirm, undoable)'
              }
            >
              {clearArmed ? 'Confirm clear?' : 'Clear completed'}
            </button>
          </div>

          <div className="jwf-task-list" role="list">
            <AnimatePresence initial={false}>
              {filteredDone.map(task => (
                <TaskRow
                  key={task.id}
                  task={task}
                  dueEditing={dueEditingId === task.id}
                  onDueEditingDone={() => setDueEditingId(null)}
                  onToggle={toggle}
                  onEdit={(edited, text) => send({ type: 'edit', id: edited.id, text })}
                  onSetDue={(edited, dueAt) => send({ type: 'setDue', id: edited.id, dueAt })}
                  onMenu={openMenu}
                />
              ))}
            </AnimatePresence>
            {filteredDone.length === 0 ? (
              <p className="jwf-done-empty">
                {doneTop.length === 0 ? 'Nothing completed yet' : 'Nothing in this range'}
              </p>
            ) : null}
          </div>
        </>
      )}

      {menu ? (
        <ContextMenu
          target={menu}
          onSetDue={({ id }) => setDueEditingId(id)}
          onAddSubtask={({ id }) => setSubInputParentId(id)}
          onDelete={deleteFromMenu}
          onClose={() => setMenu(null)}
        />
      ) : null}

      {undoToast ? (
        <div className="jwf-undo" role="status">
          <span>{undoToast}</span>
          <button type="button" onClick={undo}>Undo</button>
        </div>
      ) : state.canUndo ? (
        // The quiet persistent net: the engine still holds a recoverable
        // deletion even after the toast expired, so the affordance stays
        // until the slot is consumed or replaced.
        <button type="button" className="jwf-undo-chip" onClick={undo} title="Restore the last deleted tasks">
          Deleted · Undo
        </button>
      ) : null}
    </div>
  )
}

/** One top-level task with its subtask block, kept contiguous exactly the way
 *  the engine's storage invariant expects. */
function TaskBlock({
  task,
  subs,
  subInputOpen,
  onSubInputClose,
  dueEditingId,
  onDueEditingDone,
  onToggle,
  onEdit,
  onSetDue,
  onMenu,
  onAddSub,
  onDragState,
  onDragSettled,
  drag,
}: {
  task: Task
  subs: Task[]
  subInputOpen: boolean
  onSubInputClose: () => void
  dueEditingId: string | null
  onDueEditingDone: () => void
  onToggle: (task: Task) => void
  onEdit: (task: Task, text: string) => void
  onSetDue: (task: Task, dueAt: number | null) => void
  onMenu: (event: ReactMouseEvent, task: Task) => void
  onAddSub: (text: string, parentId: string) => void
  onDragState: (active: boolean) => void
  onDragSettled: () => void
  drag: boolean
}) {
  const [subDraft, setSubDraft] = useState('')

  // Reorder.Group requires direct children to be the draggable items, so the
  // whole block renders as ONE fragment wrapper: the parent is the Reorder
  // item, and the subs ride along inside its subtree (they move with it by
  // construction — the engine's invariant guarantees their array position).
  return (
    <>
      <TaskRow
        task={task}
        subProgress={subs.length > 0
          ? { done: subs.filter(sub => sub.done).length, total: subs.length }
          : undefined}
        dueEditing={dueEditingId === task.id}
        onDueEditingDone={onDueEditingDone}
        onToggle={onToggle}
        onEdit={onEdit}
        onSetDue={onSetDue}
        onMenu={onMenu}
        drag={drag}
        onDragState={onDragState}
        onDragSettled={onDragSettled}
      />
      {subs.map(sub => (
        <TaskRow
          key={sub.id}
          task={sub}
          dueEditing={dueEditingId === sub.id}
          onDueEditingDone={onDueEditingDone}
          onToggle={onToggle}
          onEdit={onEdit}
          onSetDue={onSetDue}
          onMenu={onMenu}
        />
      ))}
      {subInputOpen ? (
        <div className="jwf-sub-input-row">
          <input
            autoFocus
            className="jwf-task-input jwf-sub-input"
            type="text"
            aria-label="Add a subtask"
            maxLength={MAX_TASK_TEXT_CHARS}
            placeholder="Add a subtask…"
            value={subDraft}
            onChange={event => setSubDraft(event.target.value)}
            onKeyDown={event => {
              event.stopPropagation()
              if (event.key === 'Enter') {
                event.preventDefault()
                const trimmed = subDraft.trim()
                if (trimmed.length > 0) {
                  onAddSub(trimmed, task.id)
                  setSubDraft('')
                }
              } else if (event.key === 'Escape') {
                onSubInputClose()
              }
            }}
            onBlur={onSubInputClose}
          />
        </div>
      ) : null}
    </>
  )
}
