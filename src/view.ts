import { defineView } from 'agent-code-extension-api'
import type { WorkspaceState } from './types'
import { mountWorkspaceView } from './view/mount'

export default defineView<WorkspaceState>({
  mount: mountWorkspaceView,
})
