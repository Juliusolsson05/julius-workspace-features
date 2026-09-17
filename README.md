# julius-workspace-features

One lane with tabs for [Agent Code](https://github.com/Juliusolsson05/agent-code):
a focus timer and a minimal task list in a single always-open panel.

## Install

Agent Code → Settings → Extensions → paste:

```
Juliusolsson05/julius-workspace-features
```

Then `Open Workspace Features` from the command palette. **Uninstall the
standalone `timer` extension first** — this one contains it, and two installed
copies would both toast "Focus session complete".

## What it does

- **Timer tab** — ported 1:1 from
  [agent-code-timer](https://github.com/Juliusolsson05/agent-code-timer):
  duration presets plus custom, interval reminders that pause the session until
  dismissed, a wall clock, black-and-white default with an inherit toggle, and
  it keeps running when the panel is closed or the app restarts.
- **Tasks tab** — the whole interaction model: type + Enter appends a task,
  click the checkbox to toggle done, Backspace on the empty input removes the
  last task. Nothing else, on purpose.

## Why the engines survive closing the panel

Same design decision the timer was built around, now carrying two engines: the
API v2 runtime activates on `onStartupFinished` and owns a headless
`TimerEngine` (deadline-based, so sessions survive restarts and machine sleep)
and a `TasksEngine` (save-on-mutation). The view is a disposable subscriber —
mounting attaches it through published JSON state, closing detaches it, and
neither engine notices. The selected tab persists too, so the lane reopens
exactly where you left it.

## Layout

```
src/
  runtime.ts            background activation, both engines, commands, persistence
  view.ts               API v2 view entry
  types.ts              the combined published-state contract
  engines/
    timer/              ported headless timer (engine, types, chime)
    tasks/              minimal task engine
  view/
    WorkspaceView.tsx   the lane shell: subscribe, theme, tab bar
    shell/TabBar.tsx
    tabs/TimerTab.tsx   ported timer UI
    tabs/TasksTab.tsx
    components/         ported timer components
  theme/                black & white tokens + opt-in host inheritance
```

### `dist/` is committed on purpose

Agent Code's installer downloads the repository **source tarball**, not a
release asset, so the built entry named in `agent-code.extension.json` has to
exist in the repo.

## Development

```bash
npm install
npm run build     # vite build + tsc --noEmit
npm test          # engine + tasks + runtime tests
npm run verify    # tests + production build + committed-manifest contract test
```

After building, commit `dist/`. For local iteration, use Agent Code's
**Load extension from folder** on this repository (rebuild + reload).

## License

MIT
