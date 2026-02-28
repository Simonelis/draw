# T-0021: Room tagging v1 (single-rectangle assignment + room type)

Created: 2026-02-26
Estimate: 3 points
Owner: simonas
Status history (append-only):
- 2026-02-26: OPEN
- 2026-02-28: IN_PROGRESS
- 2026-02-28: DONE

## Goal
Add a simple room-tagging workflow so perimeter/baseboard exclusions can be layered on later without redesigning the room model.

## Acceptance criteria
- [x] User can assign a selected rectangle to a logical room.
- [x] User can set a room type tag (at least generic/bathroom/toilet/kitchen/etc.).
- [x] Room assignment persists in the plan model (`roomId`, `entities.rooms`).
- [x] UI reflects current room assignment/type for the selected rectangle.
- [x] Existing editing interactions remain intact.

## Notes / formulation
This is intentionally v1 and can be limited to single-rectangle room assignment.

Scope limits:
- no multi-rectangle merge UX yet (L-shapes later)
- no exclusions/calculations in this ticket
- no advanced room editing UI

## Implementation notes
- Added reducer actions in `app/src/editor/state/plan.js`:
  - `plan/rooms/upsertForRectangle`
  - `plan/rooms/clearForRectangle`
- Room assignment now detaches rectangle from previous room references, prunes empty rooms, and updates `rectangle.roomId`.
- Converting a rectangle to `wallRect` now clears any room assignment and room references.
- Added room-tagging controls in toolbar (`Room Tag` panel) with name + type + save/clear actions.
- Runtime sync shows current room status for selection and keeps overlay/status readouts updated.
- Plan migration now normalizes `entities.rooms` payload for imported/persisted JSON.
- Added reducer coverage in `app/tests/specs/plan-reducer.test.js`.

## Log (append-only)
- 2026-02-26 19:xx: Ticket created as S005 stretch backlog to prepare for exclusion rules after first perimeter outputs.
- 2026-02-28 10:xx: Implemented room-tagging v1 UI + reducer + persistence normalization + reducer tests.
