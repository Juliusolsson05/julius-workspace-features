# Tasks v5 — the full basic todo application Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Every baseline feature plus due dates, search, one level of subtasks, and a second surface — a **modal view alongside the lane**, so the user opens the workspace as a pane or a floating dialog by choice.

**Dual surface (added):** manifest gains view `julius-workspace-features.modal` (mount `modal`) sharing the same `dist/view.js` entry, plus palette commands whose ids equal the view ids (the host's documented open-command mapping): `…main` "Open Workspace (Lane)" and `…modal` "Open Workspace (Modal)". The runtime publishes state to BOTH view ids; `WorkspaceView` reads `context.view.id` to add a `jwf-modal` class (auto height, dialog width, bounded scrolling lists). The old bare `.open` command is replaced by the two explicit ones (with two views the host no longer auto-resolves `.open`).

**Scope decisions (user-approved):** inline edit · undo (single-slot history) · clear completed · remaining count · due dates (midnight-epoch, badge + overdue) · search-as-you-type per subtab · subtasks (ONE level, no nesting deeper) · checkboxes. Still out: tags, projects, priorities, recurring, multi-select.

**Engine contract (TasksEngine v3):**

- `Task { id, text, done, doneAt, parentId | null, dueAt | null }`; `PersistedTasks` v3, v2 migrates by defaulting `parentId: null, dueAt: null`.
- Storage invariant: **subtasks always sit contiguously after their parent** in the flat array. `add(parentId)` inserts directly after the parent's sub-block; `reorder(ids)` is a full permutation that REJECTS any ordering breaking the invariant (a stale view can neither orphan nor bury a sub).
- `toggle` completing a task with open subtasks **cascades** to them (each gets its own `doneAt`); reopening reopens only the clicked task.
- `remove` deletes the task AND its subtasks, recording a single-slot undo entry `{ tasks, indices }`; `clearCompleted` removes all done tasks plus any subtasks under them, recording the same shape; `undo` splices the last entry back (indices clamped) and consumes it. Any later remove/clear replaces the slot.
- `edit { id, text }` (trim, 1–200); `setDue { id, dueAt: number | null }` (integer, 2000-01-01..2099-12-31, else reject); `add { text, parentId? }` (parent must exist and be top-level — no sub-subtasks).
- Published shape stays `{ tasks }`; counts, overdue, search, and undo-availability are view-side derivations.

**View contract:** checkbox toggles; text double-click edits in place (Enter saves, Esc/blur cancels); right-click menu = Set due date · Add subtask · Delete; due date set through an inline native date input on the row; subtasks render indented under their parent with parent progress `1/3`; To do label shows remaining count (`To do · 3`); search box in the subtab row filters the active subtab (drag disabled while searching); Done keeps stamps/filters and gains **Clear completed**; a bottom `Deleted · Undo` toast (5 s) drives `undo`. Completing sounds stay; cascades fire one voice.

**Files:** engines/tasks (types v3 + engine), runtime actions, view split into `view/tasks/` (TasksTab, TaskRow, TaskListInput, UndoToast, ContextMenu grown), tokens.css additions (checkbox — safe now that resets are `:where()` —, subtask indent, date input, search, toast).

- [x] Engine tests first: v3 migrate, cascade complete, cascade delete + undo restore, clearCompleted + undo, edit/setDue bounds, reorder contiguity rejection, add-with-parent placement
- [x] Runtime tests: new actions validated + malformed rejection
- [x] Engine + runtime implementation
- [x] View: components above + wiring + CSS
- [x] Version 0.5.0, verify, dist, PR, merge, release (standing flow)
