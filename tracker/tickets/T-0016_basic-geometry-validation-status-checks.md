# T-0016: Basic geometry validation status checks

Created: 2026-02-26
Estimate: 3 points
Owner: simonas
Status history (append-only):
- 2026-02-26: OPEN

## Goal
Surface simple geometry issues early (via status/debug UI) so the user can tell whether a plan is “good enough” before quantity/estimate work.

## Acceptance criteria
- [ ] App computes a small set of basic validation checks for the current plan.
- [ ] Validation status is visible in the UI (debug/status panel is acceptable).
- [ ] At least one warning scenario is detectable (for example overlapping rectangles or missing scale).
- [ ] Validation logic is implemented in pure helpers with test coverage where practical.
- [ ] Existing edit interactions remain responsive.

## Notes / formulation
This is a lightweight validation slice, not a full geometry engine.

Scope limits:
- no automatic repair
- no hard blocking of edits
- no exhaustive CAD correctness checks

## Implementation notes
(fill in after completion)

## Log (append-only)
- 2026-02-26 19:xx: Ticket created for S004 committed backlog.
