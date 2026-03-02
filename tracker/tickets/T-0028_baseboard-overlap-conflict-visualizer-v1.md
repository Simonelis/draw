# T-0028: Baseboard overlap conflict visualizer v1

Created: 2026-02-28
Estimate: 3 points
Owner: simonas
Status history (append-only):
- 2026-02-28: OPEN
- 2026-03-02: DONE

## Goal
Add a dedicated visualizer for baseboard counting conflicts so missing/duplicate intervals can be debugged quickly.

## Acceptance criteria
- [x] Conflicting baseboard intervals are highlighted separately from generic rectangle-overlap warnings.
- [x] Readout reports conflict count and total conflict length.
- [x] Conflict highlight can be toggled to keep normal drawing readable.
- [x] No regression in existing baseboard debug overlay toggle behavior.

## Notes / formulation
- This is a debugging productivity ticket; it should not change final counted totals by itself.

## Implementation notes
- Added conflict interval derivation over counted baseboard segments (axis/line overlap model).
- Added dedicated `Baseboard Conflicts` debug toggle and magenta dashed conflict rendering.
- Added status + overlay summaries for conflict count and total conflict length.
- Existing `Baseboard Debug` toggle remains unchanged and independent.

## Log (append-only)
- 2026-02-28 13:xx: Ticket created for S006 stretch backlog.
- 2026-03-02 16:xx: Implemented conflict overlay + readouts with separate toggle.
