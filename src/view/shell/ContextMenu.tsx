import { useEffect, useRef } from 'react'

import type { JsonValue } from 'agent-code-extension-api'

/**
 * The lane's context menu. The sandboxed iframe cannot reach Electron's native
 * menus, so this is a small positioned card plus a transparent backdrop that
 * closes on any outside interaction — the menu is deliberately spare (one
 * action) because its job is to make destructive gestures deliberate, not to
 * be a toolbar.
 *
 * Coordinates are relative to the `.jwf` root (position: relative), computed
 * by the caller from the context-menu event, so the card lands exactly under
 * the cursor regardless of pane scroll.
 */
export type ContextMenuTarget = {
  taskId: string
  /** Task label for the menu's description line. */
  label: string
  /** Position relative to the lane root, in px. */
  x: number
  y: number
}

export function ContextMenu({
  target,
  onDelete,
  onClose,
}: {
  target: ContextMenuTarget
  onDelete: (action: JsonValue) => void
  onClose: () => void
}) {
  const deleteButton = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    // Focus the action itself: Enter deletes, Escape closes, and the menu is
    // immediately keyboard-operable without a tab stop hunt.
    deleteButton.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.stopPropagation()
        onClose()
      }
    }
    window.addEventListener('keydown', onKey, true)
    return () => window.removeEventListener('keydown', onKey, true)
  }, [onClose])

  const deleteTask = () => {
    onDelete({ type: 'remove', id: target.taskId })
    onClose()
  }

  return (
    <>
      {/* Transparent click-away. Also swallows the browser's own context
          menu on the backdrop so a second right-click closes instead of
          stacking a native menu on top. */}
      <div
        className="jwf-menu-backdrop"
        onClick={onClose}
        onContextMenu={event => {
          event.preventDefault()
          onClose()
        }}
      />
      <div
        className="jwf-menu"
        role="menu"
        aria-label={`Actions for “${target.label}”`}
        style={{ left: target.x, top: target.y }}
      >
        <button
          ref={deleteButton}
          type="button"
          className="jwf-menu-item"
          role="menuitem"
          onClick={deleteTask}
        >
          Delete
        </button>
      </div>
    </>
  )
}
