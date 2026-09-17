import assert from 'node:assert/strict'
import { readdir, readFile } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import { test } from 'node:test'

test('the committed API v2 bundle has independent runtime and panel entries', async () => {
  const manifest = JSON.parse(await readFile('agent-code.extension.json', 'utf8'))
  assert.equal(manifest.apiVersion, 2)
  assert.equal(manifest.id, 'julius-workspace-features')
  assert.equal(manifest.entry, 'dist/runtime.js')
  assert.deepEqual(manifest.permissions, ['sessions.observe', 'notifications.show'])
  assert.deepEqual(manifest.activationEvents, ['onStartupFinished'])
  // Two surfaces over one entry: the lane pane and the modal. Their ids also
  // exist as commands so the palette opens each through the host's own
  // view-id routing (a command whose id equals a view id opens that view).
  assert.deepEqual(manifest.contributes.views, [
    { id: 'julius-workspace-features.main', title: 'Workspace', mount: 'panel', entry: 'dist/view.js' },
    { id: 'julius-workspace-features.modal', title: 'Workspace', mount: 'modal', entry: 'dist/view.js' },
  ])
  const commandIds = manifest.contributes.commands.map(command => command.id)
  for (const view of manifest.contributes.views) {
    assert.ok(commandIds.includes(view.id), `missing open command for ${view.id}`)
  }

  // Every contribution must live inside the extension's own namespace — the
  // host rejects a manifest whose ids escape it, so the committed bundle must
  // never regress there either.
  for (const command of manifest.contributes.commands) {
    assert.ok(command.id.startsWith('julius-workspace-features.'))
  }
  for (const setting of manifest.contributes.settings) {
    assert.ok(setting.id.startsWith('julius-workspace-features.'))
  }

  const runtime = await import(pathToFileURL(`${process.cwd()}/${manifest.entry}`).href)
  const view = await import(pathToFileURL(
    `${process.cwd()}/${manifest.contributes.views[0].entry}`,
  ).href)
  assert.equal(typeof runtime.default.activate, 'function')
  assert.equal(typeof view.default.mount, 'function')
  assert.equal(view.default.activate, undefined)

  // Audio belongs to visible view feedback. Keeping it out of the hidden engine
  // prevents an autoplay-dependent browser primitive from becoming completion's
  // only signal; the permissioned host notification is the durable path. Scan
  // EVERY emitted chunk, not just the manifest entries — a future build that
  // moves the chime into a shared chunk would otherwise slip past a single-file
  // check while still running inside the hidden runtime.
  const viewEntry = manifest.contributes.views[0].entry
  for (const file of (await readdir('dist')).filter(name => name.endsWith('.js'))) {
    const source = await readFile(`dist/${file}`, 'utf8')
    if (`dist/${file}` === viewEntry) assert.match(source, /AudioContext/)
    else assert.doesNotMatch(source, /AudioContext/)
  }
})
