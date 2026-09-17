# Tasks v3 — delete and reorder Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** To do rows become deletable (right-click) and draggable to reorder; Done rows also gain right-click delete.

**Architecture:** One new engine action `reorder(ids)` — the complete desired id permutation — validated as an exact permutation of the stored tasks (stale views no-op silently, like unknown ids already do). The drag itself is a view-local framer `Reorder` override; a single `reorder` request fires on drag end so the runtime is never spammed per drag frame. Delete reuses the existing `remove` action behind an `onContextMenu` handler — no new visible controls, so every row stays one clean line.

**Tech Stack:** unchanged.

## User-visible contract

- To do: click completes, **drag reorders**, **right-click deletes**, Backspace-on-empty still removes the last open task.
- Done: click reopens, **right-click deletes** (useful for cleaning the archive), filters unchanged.
- Row hover title documents the gestures.

## Tasks

- [x] Engine `reorder`: exact-permutation guard, save-on-change, silent no-op otherwise
- [x] Runtime `tasksAction` `reorder` shape validation (bounded array of non-empty strings; engine owns the permutation invariant)
- [x] View: framer `Reorder.Group/Item` with drag-local override + single settle send; `onContextMenu` delete in both lists; rows unselectable
- [x] Tests: engine permutation/no-op cases; runtime reorder publish/persist + malformed rejection + shape-valid non-permutation no-op
- [x] Version 0.3.0, dist rebuild, PR, merge, release

## Self-review notes

- Done list deliberately not reorderable — it owns its `doneAt`-descending order, which is what its filters group on.
- `Reorder.Item as="button"` keeps the whole row the click target while it is also the drag handle.
