# S003: Calibration + confidence sprint — “close the loop”

Dates: 2026-02-26 → 2026-03-05
Goal: Finish calibration, add test confidence, and resolve the deferred snapping regression.

## Sprint backlog (committed)
- T-0009 (3 pts, carry-over open): Scale calibration (reference line -> meters).
- T-0011 (2 pts, carry-over open): Pure geometry/reducer unit tests (browser harness).
- T-0012 (2 pts, carry-over open): Fix side-touch drag `top-top` snapping regression.

Committed points: 7

## Stretch backlog
- T-0013 (5 pts): Multi-constraint snap resolution (preserve active snaps).

Stretch points: 5

## Notes / estimates (append-only)
- 2026-02-26: S003 starts immediately after S002 early close. Date overlap is intentional for historical continuity; sprint IDs are the source of truth.
- 2026-02-26: `T-0009` and `T-0011` are implementation-complete enough to focus first on manual verification + closeout before adding new scope.
- 2026-02-26: `T-0012` should be fixed with a regression test in the `T-0011` harness before any new snapping enhancements.

## Daily notes (append-only)
- 2026-02-26: Sprint created from S002 early close. Carry-over tickets entered as open work: `T-0009`, `T-0011`, `T-0012`.
- 2026-02-26: Suggested execution order: run `/tests/` and T-0009 smoke-check, close those tickets, then fix `T-0012`.
- 2026-02-26: Started `T-0012`. Patched drag snap single-axis selection to avoid zero-delta maintained-contact candidates blocking side-touch `top-top` / `bottom-bottom` alignment snaps; added regression tests in `T-0011` harness. Pending manual verification.
- 2026-02-26: `T-0012` manually verified by user after follow-up drag-path patch (raw dual-axis candidate composition). Ticket marked DONE.
- 2026-02-26: User manually verified `T-0011` (`/tests/` passes) and `T-0009` (scale calibration flow good). Both tickets marked DONE.
- 2026-02-26: Started `T-0013` as stretch. Extended multi-constraint raw dual-axis candidate composition to resize snapping and added a resize regression test; pending manual verification.
- 2026-02-26: Added `docs/snapping_scenarios.md` (human-readable snapping rules + scenario check list) and linked it from `app/README.md` to reduce ambiguity during `T-0013` verification and future snap changes.
- 2026-02-26: User verified `T-0013` snapping behavior and scenario documentation is in place. Ticket marked DONE.
- 2026-02-26: S003 closed after delivering committed backlog and stretch (`T-0013`). S004 starts for dimension correctness + geometry validation.

## Review (append-only)
### Shipped
- T-0009 (3 pts): Scale calibration (reference line -> meters) with persisted scale/readout.
- T-0011 (2 pts): Browser-based unit test harness for pure geometry/reducer/scale logic.
- T-0012 (2 pts): Fix side-touch drag `top-top` snapping regression.
- T-0013 (5 pts, stretch): Multi-constraint snap resolution (drag + resize) plus snapping scenario documentation.
- Actual shipped points: 12 (7 committed + 5 stretch).

### Missed / deferred
- None.

### Lessons / changes
- Snapping bugs become much easier to resolve when behavior is documented as a scenario matrix (`docs/snapping_scenarios.md`).
- Small pure-test coverage plus fast manual verification works well for interaction-heavy geometry code.
- Closing and restarting sprints immediately keeps backlog/accounting clearer than extending an already-complete sprint.
