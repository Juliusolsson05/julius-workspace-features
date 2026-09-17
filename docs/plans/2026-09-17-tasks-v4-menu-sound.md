# Tasks v4 — context menu + sound design Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Right-click opens a small context menu with Delete (no instant delete), and the extension gets deliberate, satisfying synthesized feedback sounds for its interactions.

**Architecture:** The menu is a lane-scoped overlay inside `.jwf` (the sandboxed iframe cannot reach native menus): a positioned card + transparent backdrop for click-away/Escape, owned by `TasksTab`, fed by row `onContextMenu` events carrying screen point + task id. Sounds are a new view-owned `Sfx` class — small oscillator-stack synth (sine fundamental + octave partial, 5 ms attack, exponential decay) with one lazily resumed AudioContext; the reminder ALARM keeps the existing view-owned `Chime` (repeating = demanding), while transitions (complete/add/delete/start/finish) get short one-shot voices. Everything stays in the view bundle: the committed-manifest contract already pins AudioContext out of the runtime.

## User-visible contract

- Right-click a task row (either subtab) → menu with **Delete**; left-click still completes/reopens, drag still reorders. Menu closes on outside click, Escape, or delete.
- Sounds (quiet, short, warm): task complete = ascending dink; add = soft blip; delete = muted descending pair; reopen = gentle single; timer start = two-note lift; timer completion = major arpeggio (replaces the alarm chime for finish — the alarm remains for reminders, where repeating is the point).
- No settings surface in this version (scope discipline; can come later if wanted).

## Tasks

- [x] `src/view/sounds.ts` — Sfx class, six voices, one lazily-resumed context, per-voice envelopes; never throws
- [x] `src/view/shell/ContextMenu.tsx` — backdrop + positioned menu, Escape/outside/Delete handling
- [x] `TasksTab` wiring — rows report context-menu events instead of deleting; play sounds on add/toggle/delete-submit; hint copy updated to "right-click for options"
- [x] `TimerTab` wiring — start button plays timerStart; finish-while-open plays the completion arpeggio instead of the alarm chime (reminder keeps Chime)
- [x] `tokens.css` — menu + backdrop styles (B/W, scoped under `.jwf`)
- [x] Version 0.4.0, verify (25 tests + build + contract incl. AudioContext-stays-in-view), dist, PR, merge, release (standing no-review flow)

## Self-review notes

- Sounds fire on the click itself, not the published round-trip — feedback must be instant.
- Menu coordinates are computed relative to the `.jwf` root (`position: relative` exists), so the overlay survives pane scrolling by closing on backdrop interaction rather than repositioning.
- `Sfx` deliberately does NOT close its context per play (the alarm `Chime` closes because it is rare); a shared context avoids hardware churn on rapid task edits, with `resume()` per play for autoplay policy.
