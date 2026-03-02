# T-0029: Generalized boundary segments v1 (baseboard + paint foundation)

Created: 2026-03-01
Estimate: 5 points
Owner: simonas
Status history (append-only):
- 2026-03-01: OPEN
- 2026-03-02: DONE

## Goal
Create one canonical boundary-segment model that can power both baseboard calculations and paint-surface calculations.

## Acceptance criteria
- [x] Add a derived segment model with explicit fields: `roomId`, `rectangleId`, `side`, `start/end`, `lengthWorld`, `kind`.
- [x] Classify segments into at least: `interior_perimeter`, `opening`, `excluded`, `debug_only`.
- [x] Existing baseboard totals are computed from this model (no behavior regression).
- [x] Exported debug payload includes derived boundary segments for repro.

## Notes / formulation
- This ticket is infrastructure: one geometry truth for linear quantities.
- Keep segment math independent of UI to stay testable.

## Implementation notes
- Added `boundarySegments` canonical derived model in baseboard geometry output.
- Segment kinds now include: `interior_perimeter`, `opening`, `excluded`, `debug_only`.
- Counted baseboard totals are now summed from `boundarySegments(kind=interior_perimeter)`.
- Exported `derived.baseboards` snapshot now includes normalized `boundarySegments`.
- Added regression tests for boundary kind coverage and export shape.

## Log (append-only)
- 2026-03-01 13:xx: Ticket created from planning discussion (paint + openings + perimeter reuse).
- 2026-03-02 15:xx: Implemented generalized boundary segment model and wired export snapshot coverage.
