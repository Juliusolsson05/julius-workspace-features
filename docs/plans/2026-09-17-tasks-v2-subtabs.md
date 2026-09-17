# Tasks v2 — Todo/Done subtabs Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Split the Tasks lane into To do / Done subtabs: click-to-complete (no checkboxes), completed tasks move to Done with strikethrough and a completion timestamp, Done gains date filters, To do stays completely clean.

**Architecture:** No new actions or permissions. `TasksEngine.Task` gains `doneAt: number | null`, set on complete and cleared on restore; persistence moves to `PersistedTasks` v2 with v1 migration (done tasks get `doneAt = Date.now()` at restore — falsified-but-useful for a personal list, documented). Subtab selection and date filtering are view-local: the runtime publishes the same single task array and the view projects it.

**Tech Stack:** unchanged (TypeScript, React, framer-motion, node:test).

## User-visible contract

- Tasks lane has a small subtab row: **To do** | **Done**.
- To do: the input, and open task lines. Click a line → it completes and leaves the list. Backspace on the empty input removes the last open task. Nothing else — no counts, no checkboxes, no dates.
- Done: completed lines, strikethrough + dim, a dim completion date on the right, and a filter row (Today / 7 days / All, default All). Click a line → it reopens (returns to To do, `doneAt` cleared). The input is NOT rendered here.
- The broken custom checkbox CSS is deleted, not restyled — click-the-line is the only completion affordance.

## Tasks

### Task 1: Engine — doneAt + v2 persistence (TDD)

- [ ] Extend `tests/tasks.test.mjs`: completing sets `doneAt` to a finite epoch ms; reopening clears it; v1 restore migrates done→`doneAt`/open→null; v2 restore round-trips; v2 field garbage (`doneAt: 'when'`) rejects the whole restore
- [ ] Run → FAIL, then implement `src/engines/tasks/types.ts` (v1/v2 persisted union, `Task.doneAt`) and `TasksEngine` (toggle sets/clears `doneAt`, persisted() emits v2, restore handles both versions)
- [ ] `npm test` → PASS. Commit `feat(tasks): record completion timestamps with v1 migration`

### Task 2: View — subtabs, click-to-complete, filters

- [ ] Rewrite `src/view/tabs/TasksTab.tsx`: subtab state, todo projection (open tasks + input), done projection (filters + date labels), click handlers send the unchanged `toggle` action
- [ ] Replace the tasks section of `src/theme/tokens.css`: delete `.jwf-check`, add `.jwf-subtabs`/`.jwf-subtab`, row-as-button styles, dim date, filter row
- [ ] Update `tests/runtime.test.mjs` assertions for the v2 persisted shape. `npm run verify` → PASS
- [ ] Commit `feat(view): todo and done subtabs with click-to-complete and date filters`

### Task 3: Release v0.2.0

- [ ] Bump `package.json` + manifest to 0.2.0. `npm run verify` (fresh dist) → PASS
- [ ] Commits `chore: bump version to 0.2.0` + `build: commit the v0.2.0 dist bundle`
- [ ] Branch `feat/tasks-v2-subtabs`, PR, merge immediately (review waived by user), tag `v0.2.0`, GitHub release

## Self-review notes

- "Overlined" read as strikethrough (the standard completed affordance, matching v0.1.0's done style); noted in the release notes.
- Done-subtab Backspace-delete was dropped during implementation: Done's only row action is click-to-reopen, which needs no keyboard delete target and keeps the archive read-mostly. Deleting stays a To do affordance (Backspace on the empty input).
- No engine-level filter API — view-side projection keeps the transport and storage shapes unchanged.
