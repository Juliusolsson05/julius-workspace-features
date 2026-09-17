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
  assert.equal(snapshot.tasks[0].doneAt, null)
  assert.equal(snapshot.tasks[0].parentId, null)
  assert.equal(snapshot.tasks[1].text, 'second')
  assert.equal(saved.length, 2)
  engine.dispose()
})

test('add rejects empty, oversized, and non-finite text without touching state', () => {
  const { engine, saved } = fixture()
  engine.add('kept')
  engine.add('')
  engine.add('   ')
  engine.add('x'.repeat(201))
  engine.add(42)
  assert.equal(engine.snapshot().tasks.length, 1)
  assert.equal(saved.length, 1)
  engine.dispose()
})

test('the task cap drops the add rather than silently discarding old work', () => {
  const { engine } = fixture()
  for (let index = 0; index < 256; index += 1) engine.add(`task ${index}`)
  assert.equal(engine.snapshot().tasks.length, 256)
  engine.add('one too many')
  assert.equal(engine.snapshot().tasks.length, 256)
  engine.dispose()
})

test('toggle flips exactly one task; remove drops exactly one', () => {
  const { engine } = fixture()
  engine.add('a')
  engine.add('b')
  const [a] = engine.snapshot().tasks
  engine.toggle(a.id)
  assert.deepEqual(
    engine.snapshot().tasks.map(task => task.done),
    [true, false],
  )
  assert.equal(typeof engine.snapshot().tasks[0].doneAt, 'number')
  engine.toggle(a.id)
  assert.equal(engine.snapshot().tasks[0].doneAt, null)
  engine.remove(a.id)
  assert.deepEqual(
    engine.snapshot().tasks.map(task => task.text),
    ['b'],
  )
  engine.toggle('missing')
  engine.remove('missing')
  engine.edit('missing', 'x')
  engine.setDue('missing', Date.now())
  assert.equal(engine.snapshot().tasks.length, 1)
  engine.dispose()
})

test('subtasks attach one level deep, land after their parent block, and never nest', () => {
  const { engine } = fixture()
  engine.add('parent')
  const parent = engine.snapshot().tasks[0]
  engine.add('sub 1', parent.id)
  engine.add('top')
  engine.add('sub 2', parent.id) // must insert into parent's block, not append
  assert.deepEqual(
    engine.snapshot().tasks.map(task => task.text),
    ['parent', 'sub 1', 'sub 2', 'top'],
  )
  // A subtask cannot gain its own subtasks.
  const sub1 = engine.snapshot().tasks[1]
  engine.add('grandchild', sub1.id)
  assert.deepEqual(
    engine.snapshot().tasks.map(task => task.text),
    ['parent', 'sub 1', 'sub 2', 'top'],
  )
  // Unknown parents are no-ops.
  engine.add('ghost child', 'missing')
  assert.equal(engine.snapshot().tasks.length, 4)
  engine.dispose()
})

test('completing a parent cascades to its open subtasks; reopening does not', () => {
  const { engine } = fixture()
  engine.add('parent')
  const parent = engine.snapshot().tasks[0]
  engine.add('sub 1', parent.id)
  engine.add('sub 2', parent.id)
  engine.toggle(parent.id)
  assert.deepEqual(
    engine.snapshot().tasks.map(task => task.done),
    [true, true, true],
  )
  const stamps = engine.snapshot().tasks.map(task => task.doneAt)
  assert.ok(stamps.every(stamp => typeof stamp === 'number'))
  engine.toggle(parent.id)
  assert.deepEqual(
    engine.snapshot().tasks.map(task => task.done),
    [false, true, true],
  )
  // A sub completed on its own leaves siblings alone.
  engine.toggle(engine.snapshot().tasks[1].id)
  assert.deepEqual(
    engine.snapshot().tasks.map(task => task.done),
    [false, false, true],
  )
  engine.dispose()
})

test('edit rewrites trimmed text in place and rejects invalid text', () => {
  const { engine, saved } = fixture()
  engine.add('a')
  const id = engine.snapshot().tasks[0].id
  engine.edit(id, '  fixed  ')
  assert.equal(engine.snapshot().tasks[0].text, 'fixed')
  const before = engine.snapshot()
  engine.edit(id, '')
  engine.edit(id, 'x'.repeat(201))
  assert.equal(engine.snapshot(), before)
  assert.equal(saved.length, 2)
  engine.dispose()
})

test('setDue accepts calendar epochs and null, rejects out-of-range values', () => {
  const { engine, saved } = fixture()
  engine.add('a')
  const id = engine.snapshot().tasks[0].id
  const due = Date.UTC(2026, 8, 20)
  engine.setDue(id, due)
  assert.equal(engine.snapshot().tasks[0].dueAt, due)
  engine.setDue(id, null)
  assert.equal(engine.snapshot().tasks[0].dueAt, null)
  const before = engine.snapshot()
  engine.setDue(id, DUE_MIN_MS - 1)
  engine.setDue(id, DUE_MAX_MS + 1)
  engine.setDue(id, 1.5)
  assert.equal(engine.snapshot(), before)
  assert.equal(saved.length, 3)
  engine.dispose()
})

function DUE_MIN_MS() { return Date.UTC(2000, 0, 1) }
function DUE_MAX_MS() { return Date.UTC(2100, 0, 1) - 1 }

test('remove takes the whole sub-block and undo restores it exactly', () => {
  const { engine } = fixture()
  engine.add('a')
  engine.add('parent')
  const parent = engine.snapshot().tasks[1]
  engine.add('sub', parent.id)
  engine.add('z')
  const before = engine.snapshot().tasks

  engine.remove(parent.id)
  assert.deepEqual(
    engine.snapshot().tasks.map(task => task.text),
    ['a', 'z'],
  )
  // Unknown-but-valid undo is a no-op when nothing was removed.
  engine.undo()
  assert.deepEqual(
    engine.snapshot().tasks.map(task => task.text),
    before.map(task => task.text),
  )
  // Undo is single-shot: a second call does nothing.
  engine.undo()
  assert.deepEqual(
    engine.snapshot().tasks.map(task => task.text),
    before.map(task => task.text),
  )
  engine.dispose()
})

test('clearCompleted sweeps done tasks and their subs as one undoable action', () => {
  const { engine } = fixture()
  engine.add('open')
  engine.add('done parent')
  const parent = engine.snapshot().tasks[1]
  engine.add('open sub', parent.id)
  engine.toggle(parent.id) // cascades to 'open sub'
  engine.add('done solo')
  engine.toggle(engine.snapshot().tasks[3].id)

  engine.clearCompleted()
  assert.deepEqual(
    engine.snapshot().tasks.map(task => task.text),
    ['open'],
  )
  engine.undo()
  assert.deepEqual(
    engine.snapshot().tasks.map(task => task.text),
    ['open', 'done parent', 'open sub', 'done solo'],
  )
  assert.deepEqual(
    engine.snapshot().tasks.map(task => task.done),
    [false, true, true, true],
  )

  // An empty sweep preserves the previous undo slot instead of wiping it.
  engine.remove('open')
  engine.clearCompleted() // nothing done left
  engine.undo()
  assert.deepEqual(
    engine.snapshot().tasks.map(task => task.text),
    ['open', 'done parent', 'open sub', 'done solo'],
  )
  engine.dispose()
})

test('a destructive action replaces the undo slot (single level)', () => {
  const { engine } = fixture()
  engine.add('a')
  engine.add('b')
  const [a, b] = engine.snapshot().tasks
  engine.remove(a.id)
  engine.remove(b.id)
  engine.undo()
  // Only the LAST removal is restorable; 'a' is gone for good.
  assert.deepEqual(
    engine.snapshot().tasks.map(task => task.text),
    ['b'],
  )
  engine.dispose()
})

test('restore accepts valid payloads from every version and rejects malformed ones', () => {
  const { engine, saved } = fixture()
  const v1 = {
    version: 1,
    tasks: [{ id: 'one', text: 'read', done: true }],
  }
  engine.restore(v1)
  const migrated = engine.snapshot().tasks[0]
  assert.equal(migrated.text, 'read')
  assert.equal(typeof migrated.doneAt, 'number')
  assert.equal(migrated.parentId, null)
  assert.equal(migrated.dueAt, null)
  assert.equal(saved.length, 0)

  const v2 = {
    version: 2,
    tasks: [{ id: 'two', text: 'write', done: true, doneAt: 123456 }],
  }
  engine.restore(v2)
  assert.equal(engine.snapshot().tasks[0].doneAt, 123456)
  assert.equal(engine.snapshot().tasks[0].parentId, null)

  const due = Date.UTC(2026, 8, 20)
  const v3 = {
    version: 3,
    tasks: [
      { id: 'p', text: 'parent', done: false, doneAt: null, parentId: null, dueAt: due },
      { id: 's', text: 'sub', done: false, doneAt: null, parentId: 'p', dueAt: null },
    ],
  }
  engine.restore(v3)
  assert.deepEqual(
    engine.snapshot().tasks.map(task => task.id),
    ['p', 's'],
  )
  assert.equal(engine.snapshot().tasks[0].dueAt, due)

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
    { version: 3, tasks: [{ id: 'x', text: 'y', done: false, doneAt: null, parentId: 'ghost', dueAt: null }] },
    // Contiguity violations reject wholesale.
    { version: 3, tasks: [
      { id: 'p1', text: 'p1', done: false, doneAt: null, parentId: null, dueAt: null },
      { id: 'p2', text: 'p2', done: false, doneAt: null, parentId: null, dueAt: null },
      { id: 's', text: 's', done: false, doneAt: null, parentId: 'p1', dueAt: null },
    ] },
    { version: 3, tasks: [{ id: 'x', text: 'y', done: false, doneAt: null, parentId: null, dueAt: Date.UTC(1999, 0, 1) }] },
  ]) {
    garbage.engine.restore(invalid)
  }
  assert.deepEqual(garbage.engine.snapshot().tasks, [])
  garbage.engine.dispose()
  engine.dispose()
})

test('reorder accepts valid parent-block permutations and rejects invariant breaks', () => {
  const { engine } = fixture()
  engine.add('a')
  engine.add('parent')
  const parent = engine.snapshot().tasks[1]
  engine.add('sub', parent.id)
  engine.add('b')
  const [a, , sub, b] = engine.snapshot().tasks

  // Drag 'parent' block before 'a' — subs travel with their parent.
  engine.reorder([parent.id, sub.id, a.id, b.id])
  assert.deepEqual(
    engine.snapshot().tasks.map(task => task.text),
    ['parent', 'sub', 'a', 'b'],
  )

  const before = engine.snapshot()
  // A sub separated from its parent rejects.
  engine.reorder([a.id, sub.id, parent.id, b.id])
  // Missing/extra/unknown ids reject.
  engine.reorder([a.id, parent.id, sub.id])
  engine.reorder([a.id, parent.id, sub.id, b.id, a.id])
  engine.reorder([a.id, parent.id, sub.id, 'ghost'])
  // A sub following a DIFFERENT top-level rejects.
  engine.reorder([b.id, sub.id, parent.id, a.id])
  assert.equal(engine.snapshot(), before)
  engine.dispose()
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

test('v3 persistence round-trips the exact completion timestamp and due date', () => {
  const { engine, saved } = fixture()
  engine.add('a')
  const due = Date.UTC(2026, 8, 20)
  engine.setDue(engine.snapshot().tasks[0].id, due)
  engine.toggle(engine.snapshot().tasks[0].id)
  const persisted = saved.at(-1)
  assert.equal(persisted.version, 3)
  assert.equal(persisted.tasks[0].dueAt, due)
  assert.equal(typeof persisted.tasks[0].doneAt, 'number')

  const reborn = fixture()
  reborn.engine.restore(persisted)
  assert.equal(reborn.engine.snapshot().tasks[0].doneAt, persisted.tasks[0].doneAt)
  assert.equal(reborn.engine.snapshot().tasks[0].dueAt, due)
  reborn.engine.dispose()
})
