# julius-workspace-features Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A personal Agent Code extension — one always-open panel ("one lane with tabs") whose Timer tab is a 1:1 port of `agent-code-timer-extension-v2` and whose Tasks tab is a deliberately minimal newline-per-task todo list.

**Architecture:** API v2 extension. One background runtime (activates `onStartupFinished`) owns a ported headless `TimerEngine` and a new `TasksEngine` plus the selected tab, publishing one combined JSON state to a single `panel` view. The view is a disposable subscriber: a tab shell hosting the ported timer UI and the new tasks UI. State persists on mutation through extension storage; the timer keeps its wall-clock-deadline persistence semantics byte-for-byte.

**Tech Stack:** TypeScript, React 18 (bundled privately per extension frame), framer-motion, lucide-react, `agent-code-extension-api` SDK (Vite multi-entry preset), node:test + esbuild for tests.

**Source of truth for the port:** `/Users/juliusolsson/Desktop/Development/agent-code-timer-extension-v2` (v0.4.0, commit on disk). "1:1" means behavior-identical; the only permitted deltas are listed in the Port Deltas table below.

---

## Approved design recap

- One contributed view `julius-workspace-features.main`, `mount: 'panel'` — a tile-grid leaf that survives app reloads (workspace `SessionMeta.extensionViewId`), fill-edge-to-edge.
- Tabs inside the lane: **Timer** (ported) and **Tasks** (new). Selected tab is runtime state, persisted, so the pane reopens where you left it.
- Timer port preserves: deadline-at persistence (restart/sleep-correct), reminder ordinal firing (late ticks fire exactly once), reminder pause with banked elapsed, 250 ms tick with stable cached snapshot (React #185 guard), view-owned chime, black-and-white default theme with opt-in host inheritance, settings sync only affecting idle sessions, `sessions.observe` agent count degrading silently.
- Tasks feature is exactly: type + Enter appends a task and keeps focus; click checkbox toggles done (strikethrough, dim, stays in place, never reorders); Backspace on the empty input removes the last task. No dates, tags, priorities, projects, reordering, counts, or archive.
- The old `timer` extension must be uninstalled once this one works — two runtimes would both toast "Focus session complete".

## File structure

```
julius-workspace-features/
  agent-code.extension.json        NEW  manifest, id julius-workspace-features
  package.json                     PORT + rename
  tsconfig.json                    PORT identical
  vite.config.ts                   PORT identical
  .gitignore                       PORT identical (dist/ committed on purpose)
  README.md                        NEW  short
  dev/test.mjs                     PORT identical (test bundler)
  docs/plans/2026-09-16-julius-workspace-features.md   this plan (first commit)
  src/
    vite-env.d.ts                  PORT identical
    runtime.ts                     NEW  owns TimerEngine + TasksEngine + activeTab
    view.ts                        NEW  defineView<WorkspaceState>
    engines/
      timer/TimerEngine.ts         PORT byte-identical
      timer/types.ts               PORT byte-identical
      timer/alert.ts               PORT byte-identical
      tasks/TaskkesEngine.ts … see Task 3 (TasksEngine.ts, types.ts)
    view/
      mount.tsx                    PORT + genericize state type
      WorkspaceView.tsx            NEW  tab shell: subscribe, theme, tab bar, slice state
      shell/TabBar.tsx             NEW
      tabs/TimerTab.tsx            PORT of TimerView.tsx (props-based slices)
      tabs/TasksTab.tsx            NEW
      components/CurrentTime.tsx        PORT (import path fix only)
      components/DurationPicker.tsx     PORT (import path fix only)
      components/TimerDisplay.tsx       PORT (import path fix only)
      components/ReminderAlert.tsx      PORT (import path fix only)
      components/ReminderManager.tsx    PORT (import path fix only)
    theme/
      tokens.css                   PORT + shell/task/tab styles (see Task 5)
      inherit.ts                   PORT byte-identical
      injectStyles.ts              PORT + style-id rename
  tests/
    engine.test.mjs                PORT (import path fix only)
    tasks.test.mjs                 NEW  TDD: written before TasksEngine
    runtime.test.mjs               PORT + reworked for combined runtime
  testing/
    extension-contract.test.mjs    PORT + manifest expectations updated
```

## Port deltas — the ONLY intended changes to ported code

| File | Delta |
| --- | --- |
| `package.json` | name `julius-workspace-features`, version `0.1.0`, description; deps identical |
| `runtime.ts` | becomes the combined runtime: adds TasksEngine + activeTab; request `'action'` → `'timerAction'`; adds `'tasksAction'`, `'selectTab'`; settings keys re-prefixed; command ids re-prefixed; publish target `julius-workspace-features.main` |
| `view.ts` / `mount.tsx` | state type `WorkspaceState`; render `WorkspaceView` |
| `TimerView.tsx` → `tabs/TimerTab.tsx` | receives `{ api, state: TimerState, send }` props instead of whole `ViewContext`; request name `'timerAction'`; theme-inheritance effect moves to shell |
| `components/*` | import path `../../engine/…` → `../../engines/timer/…` only |
| `tokens.css` | token block + base resets move from `.agent-code-timer` onto shell `.jwf`; add `.jwf-tabs`, `.jwf-tab`, task list, task input styles |
| `injectStyles.ts` | style element id `jwf-styles` |
| `tests/engine.test.mjs` | import path only |
| `tests/runtime.test.mjs` | reworked: new view id, keys, request names, combined publish shape, tasks + tab coverage |
| `testing/extension-contract.test.mjs` | new manifest expectations; runtime-has-no-AudioContext / view-has-AudioContext invariant kept |
| storage keys | `'session'` (timer) unchanged — host namespaces storage by extension id; settings keys become `julius-workspace-features.defaultMinutes` / `.inheritTheme` (settings contributions must be namespaced by the new id); new keys `'tasks'`, `'activeTab'` |

Everything not listed is copied byte-identical. Do not "improve" ported code.

## Combined published state

```ts
type WorkspaceState = {
  activeTab: 'timer' | 'tasks'
  timer: TimerState        // ported shape, unchanged
  tasks: TasksState
}
type TasksState = { tasks: Task[] }
type Task = { id: string; text: string; done: boolean }
```

`TasksEngine` mirrors `TimerEngine`'s subscription contract exactly: `subscribe` does not call the listener immediately; `snapshot()` returns a cached stable reference invalidated only in `emit()`; every mutation goes `save() → emit()` (save-on-mutation, because shutdown has no persistence guarantee).

## Tasks action validation (runtime side, mirroring timer rigor)

```ts
type TasksAction =
  | { type: 'add'; text: string }   // trimmed non-empty, ≤ 200 chars, ≤ 256 tasks total
  | { type: 'toggle'; id: string }  // non-empty id
  | { type: 'remove'; id: string }  // non-empty id
```

Malformed input rejects; valid state is untouched on rejection.

---

### Task 1: Scaffold + plan commit

- [x] `git init -b main` in `/Users/juliusolsson/Desktop/Development/julius-workspace-features`
- [x] Commit this plan as the first commit: `docs: record the workspace-features implementation plan`

### Task 2: Timer engine port (TDD — ported tests must pass against ported engine)

- [x] Copy `src/engine/{TimerEngine.ts,types.ts,alert.ts}` → `src/engines/timer/` byte-identical
- [x] Copy `tests/engine.test.mjs` → fix import to `../src/engines/timer/TimerEngine.ts`
- [x] Copy `dev/test.mjs`, `tsconfig.json`, `vite.config.ts`, `.gitignore`, `src/vite-env.d.ts`
- [x] Write `package.json` (rename + identical deps/scripts)
- [x] `npm install`
- [x] `npm test` → all 7 ported engine tests PASS
- [x] Commit: `feat(timer): port the headless timer engine and its tests 1:1`

### Task 3: TasksEngine (TDD — test first)

- [x] Write `tests/tasks.test.mjs` covering: add trims and appends; add ignores empty/oversized/over-count; toggle flips one; remove drops one; restore accepts valid v1 and ignores garbage; snapshot identity is stable between emits; save fires on mutation only; throwing subscriber is isolated
- [x] Run `npm test` → tasks tests FAIL (module absent)
- [x] Implement `src/engines/tasks/types.ts` + `TasksEngine.ts`
- [x] `npm test` → PASS
- [x] Commit: `feat(tasks): add the minimal task engine`

### Task 4: Combined runtime (TDD — reworked runtime tests)

- [x] Rework `tests/runtime.test.mjs`: ported assertions updated (ids/keys/request names) + new cases for tasksAction publish, selectTab persistence, combined `{ activeTab, timer, tasks }` shape, malformed tasks/tab actions rejecting
- [x] Run → FAIL (runtime absent)
- [x] Write `src/runtime.ts` (ported timer logic + tasks + tab)
- [x] `npm test` → PASS
- [x] Commit: `feat(runtime): own both engines and the selected tab in one v2 runtime`

### Task 5: View shell + tabs + theme

- [x] Port `components/*` (import path fix), `theme/inherit.ts` (identical), `theme/injectStyles.ts` (id rename)
- [x] Write `theme/tokens.css`: ported token block on `.jwf` shell + tab bar + task styles
- [x] Write `view/shell/TabBar.tsx`, `view/tabs/TasksTab.tsx`, `view/WorkspaceView.tsx`
- [x] Port `TimerView.tsx` → `view/tabs/TimerTab.tsx` (props delta), `view/mount.tsx`, `src/view.ts`
- [x] `npm run build` (vite build + tsc --noEmit) → PASS
- [x] Commit: `feat(view): one lane with tabs hosting the timer and task list`

### Task 6: Manifest + contract test

- [x] Write `agent-code.extension.json` (ids namespaced under `julius-workspace-features`)
- [x] Update `testing/extension-contract.test.mjs` to the new manifest; keep the AudioContext split invariant
- [x] `npm run test:extension` → PASS
- [x] Commit: `feat(manifest): declare the workspace panel and its commands`

### Task 7: Build artifacts + verify

- [x] `NODE_ENV=production npm run build` → dist/ emitted
- [x] `npm run verify` (unit + production build + contract test) → PASS
- [x] Commit dist: `build: commit the v0.1.0 dist bundle`
- [x] README: install via folder load / `Juliusolsson05/julius-workspace-features` once pushed; note the old `timer` extension must be uninstalled

## Verification

```
npm test                 # engine + tasks + runtime (esbuild-bundled node:test)
npm run build            # vite build + tsc --noEmit
npm run test:extension   # committed-manifest contract test
npm run verify           # all of the above against the production build
```

## Self-review notes

- Spec coverage: lane-with-tabs ✓ (Task 5), 1:1 timer ✓ (Task 2 + deltas table), minimal tasks ✓ (Task 3), persistence ✓ (storage keys, Task 4), palette commands ✓ (Task 6), committed dist ✓ (Task 7).
- One deliberate addition beyond the approved design: a passive running-dot on the Timer tab while it is inactive. No interaction, cut it in review if unwanted.
- No GitHub issue/PR: the repo has no remote yet; flagged for the user at handoff.
