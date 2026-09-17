import assert from 'node:assert/strict'
import { afterEach, test } from 'node:test'

import runtime from '../src/runtime.ts'

const MAIN_VIEW = 'julius-workspace-features.main'
const MODAL_VIEW = 'julius-workspace-features.modal'

// Fixtures are tracked as live references, not spread snapshots: activate()
// pushes disposables into the subscriptions array AFTER context() returns, so
// a spread-at-creation capture is always empty and the disposal loop below
// would be dead code. Keeping the array reference makes the host-style
// disposal path (subscriptions) actually run in teardown, alongside
// deactivate()'s engine disposal.
const fixtures = []
afterEach(async () => {
  await runtime.deactivate?.()
  for (const fixture of fixtures.splice(0)) {
    for (const disposable of fixture.subscriptions.splice(0)) await disposable.dispose()
  }
})

function context(initial = {}) {
  const storage = new Map(Object.entries(initial))
  const commands = new Map()
  const requests = new Map()
  const publications = []
  const notifications = []
  const subscriptions = []
  const value = {
    api: {
      extension: { id: 'julius-workspace-features', apiVersion: 2 },
      storage: {
        async get(key) { return storage.get(key) },
        async set(key, next) { storage.set(key, structuredClone(next)) },
        async delete(key) { storage.delete(key) },
        async keys() { return [...storage.keys()] },
      },
      files: {},
      notifications: { async show(message) { notifications.push(message) } },
    },
    subscriptions,
    registerCommand(id, handler) { commands.set(id, handler); return { dispose() {} } },
    registerRequest(name, handler) { requests.set(name, handler); return { dispose() {} } },
    views: { async publish(viewId, state) {
      publications.push({ viewId, state: structuredClone(state) })
    } },
  }
  fixtures.push({ subscriptions })
  return { value, storage, commands, requests, publications, notifications }
}

function view(viewId = MAIN_VIEW) {
  return { id: viewId, instanceId: 'view-1' }
}

/** The latest state published to the LANE surface (the modal mirrors it). */
function mainState(fixture) {
  const published = fixture.publications.filter(entry => entry.viewId === MAIN_VIEW).at(-1)
  return published.state
}

test('startup restores an expired session, notifies without a view, and publishes finished state to both surfaces', async () => {
  const expired = {
    version: 1, phase: 'running', totalSeconds: 60, reminders: [],
    firedReminderKeys: [], inheritTheme: false, deadlineAt: Date.now() - 1,
    pausedElapsedSeconds: null,
  }
  const fixture = context({ session: expired })
  await runtime.activate(fixture.value)
  assert.deepEqual(fixture.notifications, ['Focus session complete'])
  assert.equal(fixture.storage.get('session').version, 2)
  assert.equal(fixture.storage.get('session').phase, 'finished')
  const main = fixture.publications.filter(entry => entry.viewId === MAIN_VIEW).at(-1)
  const modal = fixture.publications.filter(entry => entry.viewId === MODAL_VIEW).at(-1)
  assert.equal(main.state.timer.phase, 'finished')
  assert.deepEqual(main.state.tasks, { tasks: [], canUndo: false })
  assert.equal(main.state.activeTab, 'timer')
  // Same combined state reaches the modal surface — not a frozen copy.
  assert.deepEqual(modal.state, main.state)
  assert.deepEqual([...fixture.commands.keys()], [
    'julius-workspace-features.timer.start',
    'julius-workspace-features.timer.pause',
    'julius-workspace-features.timer.reset',
  ])
  assert.deepEqual([...fixture.requests.keys()], ['timerAction', 'tasksAction', 'selectTab'])
})

test('settings seed idle state and view actions mutate the one background engine', async () => {
  const fixture = context({
    'julius-workspace-features.defaultMinutes': 45,
    'julius-workspace-features.inheritTheme': true,
  })
  await runtime.activate(fixture.value)
  const action = fixture.requests.get('timerAction')
  assert.equal(mainState(fixture).timer.totalSeconds, 45 * 60)
  assert.equal(mainState(fixture).timer.inheritTheme, true)

  await action({ type: 'setDuration', minutes: 25 }, view())
  await action({ type: 'addReminder', label: '  Stretch  ', intervalMinutes: 5 }, view())
  await action({ type: 'start' }, view())
  assert.equal(mainState(fixture).timer.phase, 'running')
  assert.equal(mainState(fixture).timer.totalSeconds, 25 * 60)
  assert.deepEqual(
    mainState(fixture).timer.reminders.map(item => item.label),
    ['Stretch'],
  )

  await action({ type: 'setInheritTheme', value: false }, view())
  assert.equal(fixture.storage.get('julius-workspace-features.inheritTheme'), false)
  assert.equal(mainState(fixture).timer.inheritTheme, false)
  await fixture.commands.get('julius-workspace-features.timer.pause')()
  assert.equal(mainState(fixture).timer.phase, 'paused')
  await fixture.commands.get('julius-workspace-features.timer.reset')()
  assert.equal(mainState(fixture).timer.phase, 'idle')
})

test('settings reconciliation cannot rewrite an active deadline', async () => {
  const fixture = context({ 'julius-workspace-features.defaultMinutes': 30 })
  await runtime.activate(fixture.value)
  const action = fixture.requests.get('timerAction')
  await action({ type: 'setDuration', minutes: 25 }, view())
  await action({ type: 'start' }, view())
  fixture.storage.set('julius-workspace-features.defaultMinutes', 90)
  await action({ type: 'syncSettings' }, view())
  assert.equal(mainState(fixture).timer.totalSeconds, 25 * 60)
  assert.equal(mainState(fixture).timer.phase, 'running')
})

test('a viewless start command reads the latest contributed default', async () => {
  const fixture = context({ 'julius-workspace-features.defaultMinutes': 30 })
  await runtime.activate(fixture.value)
  fixture.storage.set('julius-workspace-features.defaultMinutes', 90)
  await fixture.commands.get('julius-workspace-features.timer.start')()
  assert.equal(mainState(fixture).timer.phase, 'running')
  assert.equal(mainState(fixture).timer.totalSeconds, 90 * 60)
})

test('malformed view actions reject without changing published timer state', async () => {
  const fixture = context()
  await runtime.activate(fixture.value)
  const action = fixture.requests.get('timerAction')
  const before = mainState(fixture)
  for (const invalid of [
    null,
    { type: 'setDuration', minutes: 0 },
    { type: 'setDuration', minutes: 481 },
    { type: 'addReminder', label: '', intervalMinutes: 5 },
    { type: 'addReminder', label: 'x'.repeat(81), intervalMinutes: 5 },
    { type: 'removeReminder', id: '' },
    { type: 'unknown' },
  ]) await assert.rejects(
    action(invalid, view()),
    /Invalid timer action|JSON objects/,
  )
  assert.deepEqual(mainState(fixture), before)
})

test('tasks persist, publish through the combined state, and survive reactivation', async () => {
  const fixture = context({ tasks: { version: 1, tasks: [{ id: 'one', text: 'read', done: true }] } })
  await runtime.activate(fixture.value)
  const action = fixture.requests.get('tasksAction')
  assert.deepEqual(
    mainState(fixture).tasks.tasks.map(task => task.text),
    ['read'],
  )
  // v1 rows migrate with the new shape's defaults.
  assert.equal(mainState(fixture).tasks.tasks[0].parentId, null)
  assert.equal(mainState(fixture).tasks.tasks[0].dueAt, null)

  await action({ type: 'add', text: '  write  ' }, view())
  // The engine mints a random UUID on add; read it back rather than assuming one.
  const added = mainState(fixture).tasks.tasks.find(task => task.text === 'write')
  await action({ type: 'toggle', id: added.id }, view())
  const completedAt = mainState(fixture).tasks.tasks.find(task => task.id === added.id).doneAt
  assert.equal(typeof completedAt, 'number')
  await action({ type: 'remove', id: 'one' }, view())
  assert.deepEqual(
    mainState(fixture).tasks.tasks.map(task => task.text),
    ['write'],
  )
  assert.deepEqual(
    fixture.storage.get('tasks').tasks,
    [{ id: added.id, text: 'write', done: true, doneAt: completedAt, parentId: null, dueAt: null }],
  )

  // Real reactivation, not just a seeded store: tear the runtime down, bring
  // it back over the same persisted bytes, and require the tasks to return.
  await runtime.deactivate?.()
  const reborn = context(Object.fromEntries(fixture.storage))
  await runtime.activate(reborn.value)
  assert.deepEqual(
    mainState(reborn).tasks.tasks.map(task => task.text),
    ['write'],
  )
  assert.equal(mainState(reborn).tasks.tasks[0].done, true)

  for (const invalid of [
    null,
    { type: 'add', text: '' },
    { type: 'add', text: 'x'.repeat(201) },
    { type: 'add', text: 'ok', parentId: '' },
    { type: 'toggle', id: '' },
    { type: 'remove', id: '' },
    { type: 'unknown' },
  ]) await assert.rejects(
    action(invalid, view()),
    /Invalid tasks action|JSON objects/,
  )
  assert.equal(mainState(fixture).tasks.tasks.length, 1)
})

test('edit, setDue, subtasks, clearCompleted, and undo round-trip through the runtime', async () => {
  const fixture = context()
  await runtime.activate(fixture.value)
  const action = fixture.requests.get('tasksAction')

  await action({ type: 'add', text: 'parent' }, view())
  const parent = mainState(fixture).tasks.tasks[0]
  await action({ type: 'add', text: 'sub', parentId: parent.id }, view())
  assert.equal(mainState(fixture).tasks.tasks[1].parentId, parent.id)

  await action({ type: 'edit', id: parent.id, text: '  renamed  ' }, view())
  assert.equal(mainState(fixture).tasks.tasks[0].text, 'renamed')

  const due = Date.UTC(2026, 8, 20)
  await action({ type: 'setDue', id: parent.id, dueAt: due }, view())
  assert.equal(mainState(fixture).tasks.tasks[0].dueAt, due)
  await action({ type: 'setDue', id: parent.id, dueAt: null }, view())
  assert.equal(mainState(fixture).tasks.tasks[0].dueAt, null)

  await action({ type: 'toggle', id: parent.id }, view())
  assert.deepEqual(
    mainState(fixture).tasks.tasks.map(task => task.done),
    [true, true],
  )
  await action({ type: 'clearCompleted' }, view())
  assert.deepEqual(mainState(fixture).tasks.tasks, [])
  await action({ type: 'undo' }, view())
  assert.deepEqual(
    mainState(fixture).tasks.tasks.map(task => task.text),
    ['renamed', 'sub'],
  )
  // A no-op undo (slot consumed) is a plain no-op, not an error.
  await action({ type: 'undo' }, view())
  assert.equal(mainState(fixture).tasks.tasks.length, 2)

  for (const invalid of [
    { type: 'edit', id: parent.id },
    { type: 'edit', id: parent.id, text: ' ' },
    { type: 'edit', id: '', text: 'x' },
    { type: 'setDue', id: parent.id, dueAt: 'tomorrow' },
    { type: 'setDue', id: parent.id, dueAt: Date.UTC(1999, 0, 1) },
    { type: 'setDue', id: '', dueAt: null },
  ]) await assert.rejects(action(invalid, view()), /Invalid tasks action/)
})

test('reorder rewrites the open order and malformed payloads reject', async () => {
  const fixture = context()
  await runtime.activate(fixture.value)
  const action = fixture.requests.get('tasksAction')
  await action({ type: 'add', text: 'first' }, view())
  await action({ type: 'add', text: 'second' }, view())
  const [first, second] = mainState(fixture).tasks.tasks
  assert.deepEqual(
    mainState(fixture).tasks.tasks.map(task => task.text),
    ['first', 'second'],
  )

  await action({ type: 'reorder', ids: [second.id, first.id] }, view())
  assert.deepEqual(
    mainState(fixture).tasks.tasks.map(task => task.text),
    ['second', 'first'],
  )
  assert.deepEqual(fixture.storage.get('tasks').tasks.map(task => task.text), ['second', 'first'])

  const before = mainState(fixture)
  for (const invalid of [
    { type: 'reorder' },
    { type: 'reorder', ids: 'nope' },
    { type: 'reorder', ids: [first.id, 42] },
  ]) await assert.rejects(action(invalid, view()), /Invalid tasks action/)
  // Shape-valid but non-permutation payloads reach the engine and no-op: []
  // is the exact permutation of an empty list, so it must stay legal.
  await action({ type: 'reorder', ids: [first.id] }, view())
  await action({ type: 'reorder', ids: [] }, view())
  assert.deepEqual(mainState(fixture), before)
})

test('selectTab persists the lane choice and rejects unknown tabs', async () => {
  const fixture = context({ activeTab: 'tasks' })
  await runtime.activate(fixture.value)
  assert.equal(mainState(fixture).activeTab, 'tasks')

  const selectTab = fixture.requests.get('selectTab')
  await selectTab({ tab: 'timer' }, view())
  assert.equal(fixture.storage.get('activeTab'), 'timer')
  assert.equal(mainState(fixture).activeTab, 'timer')

  for (const invalid of [null, { tab: 'notes' }, { tab: '' }, 'tasks']) {
    await assert.rejects(selectTab(invalid, view()), /Invalid tab/)
  }
  assert.equal(mainState(fixture).activeTab, 'timer')

  // A corrupt persisted tab falls back to the timer lane rather than bricking
  // the pane on a shape the runtime never wrote.
  const corrupt = context({ activeTab: 'garbage' })
  await runtime.activate(corrupt.value)
  assert.equal(mainState(corrupt).activeTab, 'timer')
})
