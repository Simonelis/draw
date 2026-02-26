# T-0005: Rectangle selection + drag on Plan Model v0

Created: 2026-02-26
Estimate: 2 points
Owner: simonas
Status history (append-only):
- 2026-02-26: OPEN

## Goal
Implement the first rectangle interaction slice (select + drag) on top of the new editor foundation and Plan Model v0.

## Acceptance criteria
- [ ] Seeded rectangles render from plan state (not hardcoded canvas draw-only logic).
- [ ] Click selects the topmost rectangle.
- [ ] Drag moves the selected rectangle.
- [ ] Behavior remains responsive and does not fight camera pan.
- [ ] Hit-testing / drag math is factored cleanly enough for later resize/snap extensions.

## Notes / formulation
This intentionally excludes:
- rectangle creation,
- resize handles,
- snapping,
- magnetic links.

Those will be separate tickets.

## Implementation notes
(fill in after completion)

## Log (append-only)
- 2026-02-26 10:23: Ticket created from T-0002 split.

