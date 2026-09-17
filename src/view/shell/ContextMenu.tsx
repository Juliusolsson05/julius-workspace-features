import { useEffect, useRef } from 'react'

/**
 * The lane's context menu. The sandboxed iframe cannot reach Electron's native
 * menus, so this is a small positioned card plus a transparent backdrop that
 * closes on any outside interaction. Three actions, one per row-level need:
 * due date, subtask, delete.
 *
 * Coordinates are relative to the lane root (position: relative), computed by
 * the caller from the context-menu event, so the card lands exactly under
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
  onSetDue,
  onAddSubtask,
  onDelete,
  onClose,
}: {
  target: ContextMenuTarget
  onSetDue: (task: { id: string }) => void
  onAddSubtask: (task: { id: string }) => void
  onDelete: (task: { id: string }) => void
  onClose: () => void
}) {
  const firstButton = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    // Focus the first action: Enter activates it, Escape closes, and the menu
    // is immediately keyboard-operable without a tab stop hunt.
    firstButton.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.stopPropagation()
        onClose()
      }
    }
    window.addEventListener('keydown', onKey, true)
    return () => window.removeEventListener('keydown', onKey, true)
  }, [onClose])

  const run = (action: () => void) => () => {
    action()
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
          ref={firstButton}
          type="button"
          className="jwf-menu-item"
          role="menuitem"
          onClick={run(() => onSetDue({ id: target.taskId }))}
        >
          Set due date
        </button>
        <button
          type="button"
          className="jwf-menu-item"
          role="menuitem"
          onClick={run(() => onAddSubtask({ id: target.taskId }))}
        >
          Add subtask
        </button>
        <button
          type="button"
          className="jwf-menu-item"
          role="menuitem"
          data-danger
          onClick={run(() => onDelete({ id: target.taskId }))}
        >
          Delete
        </button>
      </div>
    </>
  )
}
