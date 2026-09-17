import assert from 'node:assert/strict'
import { test } from 'node:test'

import { TasksEngine } from '../src/engines/tasks/TasksEngine.ts'

function fixture() {
  const saved = []
  const engine = new TasksEngine({
    save: state => saved.push(structuredClone(state)),
  })
  return { engine, saved }
}

test('add trims text, appends in order, and leaves done false', () => {
  const { engine, saved } = fixture()
  engine.add('  first  ')
  engine.add('second')
  const snapshot = engine.snapshot()
  assert.equal(snapshot.tasks.length, 2)
  assert.equal(snapshot.tasks[0].text, 'first')
  assert.equal(snapshot.tasks[0].done, false)
  // A fresh task carries no completion time; only completing sets it.
  assert.equal(snapshot.tasks[0].doneAt, null)
  assert.equal(snapshot.tasks[1].text, 'second')
  // Save fires per mutation, not per read.
  assert.equal(saved.length, 2)
  assert.equal(saved.at(-1).tasks.length, 2)
  engine.dispose()
})

test('add rejects empty, oversized, and non-finite text without touching state', () => {
  const { engine, saved } = fixture()
  engine.add('kept')
  engine.add('')
  engine.add('   ')
  engine.add('x'.repeat(201))
  engine.add(42)
  const snapshot = engine.snapshot()
  assert.equal(snapshot.tasks.length, 1)
  assert.equal(snapshot.tasks[0].text, 'kept')
  assert.equal(saved.length, 1)
  engine.dispose()
})

test('the task cap drops the add rather than silently discarding old work', () => {
  const { engine } = fixture()
  for (let index = 0; index < 256; index += 1) engine.add(`task ${index}`)
  assert.equal(engine.snapshot().tasks.length, 256)
  engine.add('one too many')
  assert.equal(engine.snapshot().tasks.length, 256)
  assert.equal(engine.snapshot().tasks.at(-1).text, 'task 255')
  engine.dispose()
})

test('toggle flips exactly one task and remove drops exactly one', () => {
  const { engine } = fixture()
  engine.add('a')
  engine.add('b')
  const [a] = engine.snapshot().tasks
  engine.toggle(a.id)
  assert.deepEqual(
    engine.snapshot().tasks.map(task => task.done),
    [true, false],
  )
  // Completing stamps a finite epoch; reopening clears it back to null.
  assert.equal(typeof engine.snapshot().tasks[0].doneAt, 'number')
  assert.ok(Number.isFinite(engine.snapshot().tasks[0].doneAt))
  engine.toggle(a.id)
  assert.deepEqual(
    engine.snapshot().tasks.map(task => task.done),
    [false, false],
  )
  assert.equal(engine.snapshot().tasks[0].doneAt, null)
  engine.remove(a.id)
  assert.deepEqual(
    engine.snapshot().tasks.map(task => task.text),
    ['b'],
  )
  // Unknown ids are no-ops, not crashes — a stale view can send them.
  engine.toggle('missing')
  engine.remove('missing')
  assert.equal(engine.snapshot().tasks.length, 1)
  engine.dispose()
})

test('restore accepts a valid v1 payload and ignores anything malformed', () => {
  const { engine, saved } = fixture()
  engine.restore({
    version: 1,
    tasks: [
      { id: 'one', text: 'read', done: true },
      { id: 'two', text: 'write', done: false },
    ],
  })
  assert.deepEqual(
    engine.snapshot().tasks.map(task => task.text),
    ['read', 'write'],
  )
  assert.equal(engine.snapshot().tasks[0].done, true)
  // v1 had no timestamps: a done task migrates with doneAt = migration time,
  // an open one with null. The date is falsified-but-useful — see restore().
  assert.equal(typeof engine.snapshot().tasks[0].doneAt, 'number')
  assert.equal(engine.snapshot().tasks[1].doneAt, null)
  // Restore itself does not write; the next mutation persists the merged state.
  assert.equal(saved.length, 0)
  engine.add('third')
  assert.equal(saved.at(-1).tasks.length, 3)
  engine.dispose()

  const garbage = fixture()
  for (const invalid of [
    undefined,
    null,
    {},
    { version: 99, tasks: [] },
    { version: 1, tasks: 'nope' },
    { version: 1, tasks: [{ id: 'x' }] },
    { version: 1, tasks: [{ id: 'x', text: 'y'.repeat(201), done: false }] },
    { version: 1, tasks: [{ id: 'x', text: 'y', done: 'yes' }] },
    { version: 2, tasks: [{ id: 'x', text: 'y', done: true, doneAt: 'when' }] },
    { version: 2, tasks: [{ id: 'x', text: 'y', done: false, doneAt: 123 }] },
  ]) {
    garbage.engine.restore(invalid)
  }
  assert.deepEqual(garbage.engine.snapshot().tasks, [])
  garbage.engine.dispose()
})

test('snapshot identity is stable between emits and invalidated by mutations', () => {
  const { engine } = fixture()
  engine.add('a')
  const before = engine.snapshot()
  assert.equal(engine.snapshot(), before)
  engine.toggle(before.tasks[0].id)
  assert.notEqual(engine.snapshot(), before)
  engine.dispose()
})

test('a throwing subscriber is isolated and does not block the mutation', () => {
  const { engine, saved } = fixture()
  const heard = []
  engine.subscribe(state => heard.push(state))
  engine.subscribe(() => { throw new Error('broken view') })
  engine.add('a')
  assert.equal(heard.length, 1)
  assert.equal(saved.length, 1)
  engine.dispose()
})

test('subscribe does not fire synchronously on attachment', () => {
  const { engine } = fixture()
  let fired = 0
  engine.subscribe(() => fired++)
  assert.equal(fired, 0)
  engine.add('a')
  assert.equal(fired, 1)
  engine.dispose()
})

test('v2 persistence round-trips the exact completion timestamp', () => {
  const { engine, saved } = fixture()
  engine.add('a')
  engine.toggle(engine.snapshot().tasks[0].id)
  const persisted = saved.at(-1)
  assert.equal(persisted.version, 2)
  assert.equal(typeof persisted.tasks[0].doneAt, 'number')

  const reborn = fixture()
  reborn.engine.restore(persisted)
  assert.equal(reborn.engine.snapshot().tasks[0].doneAt, persisted.tasks[0].doneAt)
  // The stamp survives reopening and re-completing replaces it with a later one.
  reborn.engine.toggle(persisted.tasks[0].id)
  reborn.engine.toggle(persisted.tasks[0].id)
  assert.ok(reborn.engine.snapshot().tasks[0].doneAt >= persisted.tasks[0].doneAt)
  reborn.engine.dispose()
})

test('reorder rewrites the array only for an exact permutation', () => {
  const { engine, saved } = fixture()
  engine.add('a')
  engine.add('b')
  engine.add('c')
  const [a, b, c] = engine.snapshot().tasks
  engine.reorder([c.id, a.id, b.id])
  assert.deepEqual(
    engine.snapshot().tasks.map(task => task.text),
    ['c', 'a', 'b'],
  )
  assert.equal(saved.length, 4)

  // A stale view that missed an add or delete must not resurrect or drop
  // tasks: anything short of an exact permutation is a silent no-op.
  engine.reorder([a.id, b.id])
  engine.reorder([a.id, b.id, c.id, a.id])
  engine.reorder([a.id, b.id, 'ghost'])
  engine.reorder([])
  assert.deepEqual(
    engine.snapshot().tasks.map(task => task.text),
    ['c', 'a', 'b'],
  )
  assert.equal(saved.length, 4)
  engine.dispose()
})
