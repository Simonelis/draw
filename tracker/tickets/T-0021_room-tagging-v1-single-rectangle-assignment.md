# T-0021: Room tagging v1 (single-rectangle assignment + room type)

Created: 2026-02-26
Estimate: 3 points
Owner: simonas
Status history (append-only):
- 2026-02-26: OPEN

## Goal
Add a simple room-tagging workflow so perimeter/baseboard exclusions can be layered on later without redesigning the room model.

## Acceptance criteria
- [ ] User can assign a selected rectangle to a logical room.
- [ ] User can set a room type tag (at least generic/bathroom/toilet/kitchen/etc.).
- [ ] Room assignment persists in the plan model (`roomId`, `entities.rooms`).
- [ ] UI reflects current room assignment/type for the selected rectangle.
- [ ] Existing editing interactions remain intact.

## Notes / formulation
This is intentionally v1 and can be limited to single-rectangle room assignment.

Scope limits:
- no multi-rectangle merge UX yet (L-shapes later)
- no exclusions/calculations in this ticket
- no advanced room editing UI

## Implementation notes
(fill in after completion)

## Log (append-only)
- 2026-02-26 19:xx: Ticket created as S005 stretch backlog to prepare for exclusion rules after first perimeter outputs.
