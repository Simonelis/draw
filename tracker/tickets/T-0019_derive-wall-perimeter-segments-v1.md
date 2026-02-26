# T-0019: Derive wall/perimeter segments v1 from authored rectangles

Created: 2026-02-26
Estimate: 5 points
Owner: simonas
Status history (append-only):
- 2026-02-26: OPEN

## Goal
Compute a first explainable derived perimeter geometry from authored rectangles (including per-side wall thickness metadata where relevant), so perimeter/baseboard calculations can start.

## Acceptance criteria
- [ ] Derived geometry helper(s) produce a segment list / perimeter representation from current authored rectangles.
- [ ] Output is deterministic and debuggable (not just a single number).
- [ ] Pure helper tests cover at least simple and adjacent-rectangle scenarios.
- [ ] Derived geometry is separated from authoring primitives (no direct mutation of plan rectangles).
- [ ] Current editor interactions remain responsive when derived geometry recomputes.

## Notes / formulation
This is a v1 foundation ticket, not the final estimator.

Scope limits:
- no doors/windows exclusions yet
- no room-type exclusions yet
- no pricing logic
- no persistent magnetic-link solver dependencies

Prefer an intermediate segment model that can later support:
- exclusions (openings)
- room-rule filtering
- debug overlays

## Implementation notes
(fill in after completion)

## Log (append-only)
- 2026-02-26 19:xx: Ticket created for S005 committed backlog to prioritize perimeter work ahead of magnetic links.
