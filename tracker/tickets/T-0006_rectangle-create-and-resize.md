# T-0006: Rectangle creation + resize (no snapping yet)

Created: 2026-02-26
Estimate: 3 points
Owner: simonas
Status history (append-only):
- 2026-02-26: OPEN
- 2026-02-26: IN_PROGRESS
- 2026-02-26: DONE

## Goal
Add rectangle creation and resizing on the new editor foundation before introducing snapping/magnetic behavior.

## Acceptance criteria
- [x] Toolbar/tool mode supports rectangle creation.
- [x] Drag-to-create rectangle works with a minimum size threshold.
- [x] Resize handles appear for selected rectangle and resize works.
- [x] Interaction states are explicit and do not regress select/drag behavior.
- [x] No snapping behavior is required in this ticket.

## Notes / formulation
This is the last “plain rectangle” step before snap/scale/background layers are added.

## Implementation notes
- Added explicit tool mode (`navigate` / `drawRect`) in `editor-ui` state and runtime toolbar bindings.
- Added pure rectangle helpers for draft normalization, resize handles, handle hit-testing, and resize math.
- Added plan reducer actions for rectangle creation and geometry updates (`create`, `setGeometry`).
- Runtime now supports:
  - drag-create rectangle in Draw Rect mode (minimum size threshold)
  - selected rectangle resize via edge/corner handles in Navigate mode
  - existing pan / selection / drag interactions preserved
- Manual browser verification passed (user) before commit.

## Log (append-only)
- 2026-02-26 10:24: Ticket created from T-0002 split.
- 2026-02-26 11:05: Implementation wired into runtime and reducers; awaiting manual smoke-check before DONE.
- 2026-02-26 11:17: User manual smoke-check passed (create, resize, existing interactions stable). Marked DONE and prepared commit.
