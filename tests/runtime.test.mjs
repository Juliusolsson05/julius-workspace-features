import assert from 'node:assert/strict'
import { afterEach, test } from 'node:test'

import runtime from '../src/runtime.ts'

const VIEW_ID = 'julius-workspace-features.main'

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

function view(viewId = VIEW_ID) {
  return { id: viewId, instanceId: 'view-1' }
}

test('startup restores an expired session, notifies without a view, and publishes finished state', async () => {
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
  const published = fixture.publications.at(-1)
  assert.equal(published.viewId, VIEW_ID)
  assert.equal(published.state.timer.phase, 'finished')
  assert.deepEqual(published.state.tasks, { tasks: [] })
  assert.equal(published.state.activeTab, 'timer')
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
  assert.equal(fixture.publications.at(-1).state.timer.totalSeconds, 45 * 60)
  assert.equal(fixture.publications.at(-1).state.timer.inheritTheme, true)

  await action({ type: 'setDuration', minutes: 25 }, view())
  await action({ type: 'addReminder', label: '  Stretch  ', intervalMinutes: 5 }, view())
  await action({ type: 'start' }, view())
  assert.equal(fixture.publications.at(-1).state.timer.phase, 'running')
  assert.equal(fixture.publications.at(-1).state.timer.totalSeconds, 25 * 60)
  assert.deepEqual(
    fixture.publications.at(-1).state.timer.reminders.map(item => item.label),
    ['Stretch'],
  )

  await action({ type: 'setInheritTheme', value: false }, view())
  assert.equal(fixture.storage.get('julius-workspace-features.inheritTheme'), false)
  assert.equal(fixture.publications.at(-1).state.timer.inheritTheme, false)
  await fixture.commands.get('julius-workspace-features.timer.pause')()
  assert.equal(fixture.publications.at(-1).state.timer.phase, 'paused')
  await fixture.commands.get('julius-workspace-features.timer.reset')()
  assert.equal(fixture.publications.at(-1).state.timer.phase, 'idle')
})

test('settings reconciliation cannot rewrite an active deadline', async () => {
  const fixture = context({ 'julius-workspace-features.defaultMinutes': 30 })
  await runtime.activate(fixture.value)
  const action = fixture.requests.get('timerAction')
  await action({ type: 'setDuration', minutes: 25 }, view())
  await action({ type: 'start' }, view())
  fixture.storage.set('julius-workspace-features.defaultMinutes', 90)
  await action({ type: 'syncSettings' }, view())
  assert.equal(fixture.publications.at(-1).state.timer.totalSeconds, 25 * 60)
  assert.equal(fixture.publications.at(-1).state.timer.phase, 'running')
})

test('a viewless start command reads the latest contributed default', async () => {
  const fixture = context({ 'julius-workspace-features.defaultMinutes': 30 })
  await runtime.activate(fixture.value)
  fixture.storage.set('julius-workspace-features.defaultMinutes', 90)
  await fixture.commands.get('julius-workspace-features.timer.start')()
  assert.equal(fixture.publications.at(-1).state.timer.phase, 'running')
  assert.equal(fixture.publications.at(-1).state.timer.totalSeconds, 90 * 60)
})

test('malformed view actions reject without changing published timer state', async () => {
  const fixture = context()
  await runtime.activate(fixture.value)
  const action = fixture.requests.get('timerAction')
  const before = fixture.publications.at(-1).state
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
  assert.deepEqual(fixture.publications.at(-1).state, before)
})

test('tasks persist, publish through the combined state, and survive reactivation', async () => {
  const fixture = context({ tasks: { version: 1, tasks: [{ id: 'one', text: 'read', done: true }] } })
  await runtime.activate(fixture.value)
  const action = fixture.requests.get('tasksAction')
  assert.deepEqual(
    fixture.publications.at(-1).state.tasks.tasks.map(task => task.text),
    ['read'],
  )

  await action({ type: 'add', text: '  write  ' }, view())
  // The engine mints a random UUID on add; read it back rather than assuming one.
  const added = fixture.publications.at(-1).state.tasks.tasks.find(task => task.text === 'write')
  assert.deepEqual(
    fixture.publications.at(-1).state.tasks.tasks.map(task => task.text),
    ['read', 'write'],
  )
  await action({ type: 'toggle', id: added.id }, view())
  assert.deepEqual(
    fixture.publications.at(-1).state.tasks.tasks.map(task => task.done),
    [true, true],
  )
  await action({ type: 'remove', id: 'one' }, view())
  assert.deepEqual(
    fixture.publications.at(-1).state.tasks.tasks.map(task => task.text),
    ['write'],
  )
  assert.deepEqual(fixture.storage.get('tasks').tasks, [{ id: added.id, text: 'write', done: true }])

  // Real reactivation, not just a seeded store: tear the runtime down, bring
  // it back over the same persisted bytes, and require the tasks to return.
  await runtime.deactivate?.()
  const reborn = context(Object.fromEntries(fixture.storage))
  await runtime.activate(reborn.value)
  assert.deepEqual(
    reborn.publications.at(-1).state.tasks.tasks.map(task => task.text),
    ['write'],
  )
  assert.equal(reborn.publications.at(-1).state.tasks.tasks[0].done, true)

  for (const invalid of [
    null,
    { type: 'add', text: '' },
    { type: 'add', text: 'x'.repeat(201) },
    { type: 'toggle', id: '' },
    { type: 'remove', id: '' },
    { type: 'unknown' },
  ]) await assert.rejects(
    action(invalid, view()),
    /Invalid tasks action|JSON objects/,
  )
  assert.equal(fixture.publications.at(-1).state.tasks.tasks.length, 1)
})

test('selectTab persists the lane choice and rejects unknown tabs', async () => {
  const fixture = context({ activeTab: 'tasks' })
  await runtime.activate(fixture.value)
  assert.equal(fixture.publications.at(-1).state.activeTab, 'tasks')

  const selectTab = fixture.requests.get('selectTab')
  await selectTab({ tab: 'timer' }, view())
  assert.equal(fixture.storage.get('activeTab'), 'timer')
  assert.equal(fixture.publications.at(-1).state.activeTab, 'timer')

  for (const invalid of [null, { tab: 'notes' }, { tab: '' }, 'tasks']) {
    await assert.rejects(selectTab(invalid, view()), /Invalid tab/)
  }
  assert.equal(fixture.publications.at(-1).state.activeTab, 'timer')

  // A corrupt persisted tab falls back to the timer lane rather than bricking
  // the pane on a shape the runtime never wrote.
  const corrupt = context({ activeTab: 'garbage' })
  await runtime.activate(corrupt.value)
  assert.equal(corrupt.publications.at(-1).state.activeTab, 'timer')
})
