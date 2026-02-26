# T-0014: Selected rectangle dimension readouts (world + meters/cm)

Created: 2026-02-26
Estimate: 3 points
Owner: simonas
Status history (append-only):
- 2026-02-26: OPEN
- 2026-02-26: IN_PROGRESS
- 2026-02-26: DONE

## Goal
Show selected rectangle dimensions in the UI in world units and, when calibrated, in meters/cm so the user can trust what a drag/resize changed.

## Acceptance criteria
- [x] When a rectangle is selected, width/height are visible in world units.
- [x] When the plan scale is calibrated, width/height are also visible in meters/cm.
- [x] Dimension readouts update live during drag and resize.
- [x] With no selected rectangle, the UI shows a safe “none” state.
- [x] Unit conversion/formatting uses pure helpers with `T-0011` test coverage.
- [x] Manual browser verification completed and recorded.

## Notes / formulation
This ticket is a readout/debug-UX slice, not the final annotation UX.

Scope limits:
- no on-canvas dimension labels attached to rectangle edges (that is `T-0015`)
- no unit-system switching (meters/cm only)
- no estimate calculations

## Implementation notes
- Added pure helpers in `app/src/editor/geometry/scale.js`:
  - `worldLengthToMeters(...)`
  - `formatMetersAndCentimeters(...)`
- Added scale helper tests in `app/tests/specs/scale.test.js`.
- Updated runtime UI readouts in `app/src/editor/runtime.js`:
  - top-left debug box now includes selected dimensions (world + metric)
  - status line includes selected dimensions (compact form)
  - overlay text includes selected dimensions
- Updated `app/src/ui-shell.js` to `S004 / T-0014` copy.
- Manual smoke-check steps added in `app/README.md`.

## Log (append-only)
- 2026-02-26 19:xx: Ticket created for S004 committed backlog.
- 2026-02-26 19:xx: Implemented dimension readouts + unit helpers/tests; pending manual browser verification before DONE.
- 2026-02-26 20:xx: User manually verified selected dimension readouts (world + metric), live drag/resize updates, and safe no-selection state. Ticket marked DONE.
