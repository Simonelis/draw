# T-0002: Define editor architecture + Plan Model v0 (prototype inventory first)

Created: 2026-02-25
Estimate: 3 points
Owner: simonas
Status history (append-only):
- 2026-02-25: OPEN
- 2026-02-26: RESCOPED
- 2026-02-26: IN_PROGRESS
- 2026-02-26: DONE

## Goal
Define the editor architecture and initial plan data model before reimplementing behaviors, using the prototypes as references rather than code to port.

## Acceptance criteria
- [x] Prototype capabilities are inventoried (keep/change/later/drop) from `main8`-`main11`.
- [x] `docs/architecture.md` is updated with editor module boundaries and state flow.
- [x] `docs/plan_model_v0.md` is created with entities, invariants, and example JSON.
- [x] Testability strategy is documented for pure modules (geometry/snap/units) and UI integration checks.
- [x] Follow-on implementation tickets are split into small, testable slices (not an all-at-once port).

## Notes / formulation
Target reference is the latest prototype (for behavior ideas only):
- `design/stage0_initial_sketches/main11.html`

Prototype code and data structures are not assumed correct.

We should:
- extract proven interactions,
- redesign the plan model against the full known feature set (rooms, openings, estimates, persistence),
- and reimplement in slices with clear seams and acceptance criteria.

## Implementation notes
- Created prototype capability inventory:
  - `docs/prototype_capability_inventory.md`
  - Includes keep/change/later/drop decisions for `main8`-`main11`, cross-version observations, and reimplementation guidance.
- Created Plan Model v0:
  - `docs/plan_model_v0.md`
  - Defines persisted plan schema, entities (`rectangles`, `rooms`, `openings`), invariants, and example JSON.
- Updated architecture doc:
  - `docs/architecture.md`
  - Added editor module boundaries, state flow, state separation rules, and testability strategy.
- Follow-on implementation tickets were already split and remain the execution path:
  - `T-0004`, `T-0005`, `T-0006`

## Completion evidence (append-only)
- 2026-02-26: T-0002 complete; architecture/model artifacts are documented and T-0003 remains deferred until persistence targets Plan Model v0.

## Log (append-only)
- 2026-02-25 10:05: Ticket created.
- 2026-02-26 10:20: Rescoped after review. Replaced "port main11 behavior" scope with architecture + Plan Model v0 + prototype capability inventory.
- 2026-02-26 10:35: Started T-0002 documentation work (prototype inventory, plan model, architecture update).
- 2026-02-26 10:44: Added `docs/prototype_capability_inventory.md`.
- 2026-02-26 10:46: Added `docs/plan_model_v0.md`.
- 2026-02-26 10:48: Updated `docs/architecture.md` with module boundaries, state flow, and testability strategy.
- 2026-02-26 10:50: Marked T-0002 done.
