# T-0018: Per-side wall thickness editing controls (selected rectangle)

Created: 2026-02-26
Estimate: 3 points
Owner: simonas
Status history (append-only):
- 2026-02-26: OPEN

## Goal
Let the user edit wall thickness per side (`top/right/bottom/left`) for a selected rectangle, preserving the prototype-style workflow needed for later perimeter/baseboard logic.

## Acceptance criteria
- [ ] When a rectangle is selected, the user can increase/decrease `wallCm.top/right/bottom/left`.
- [ ] Values persist in `plan.entities.rectangles[*].wallCm`.
- [ ] UI shows the current per-side wall thickness values for the selected rectangle.
- [ ] Editing wall thickness does not break draw/select/drag/resize/snapping flows.
- [ ] Safe no-op / disabled UI when no rectangle is selected.

## Notes / formulation
This ticket is about authoring controls and state updates only.

Scope limits:
- no derived perimeter math yet (that is `T-0019`)
- no linked updates between neighboring rectangles
- no wall style presets / bulk edit UX

## Implementation notes
(fill in after completion)

## Log (append-only)
- 2026-02-26 19:xx: Ticket created for S005 committed backlog after confirming wall thickness authoring remains required for the intended workflow.
