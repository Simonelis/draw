# T-0020: Perimeter debug readout + highlight overlay

Created: 2026-02-26
Estimate: 3 points
Owner: simonas
Status history (append-only):
- 2026-02-26: OPEN

## Goal
Show the derived perimeter/baseboard-candidate result in the UI with a visual overlay so the user can inspect what geometry is being counted.

## Acceptance criteria
- [ ] UI shows a perimeter/baseboard-candidate total (pre-exclusion is acceptable for this ticket).
- [ ] A debug overlay highlights counted segments on the canvas.
- [ ] The displayed total and overlay update after relevant edits.
- [ ] Behavior is explainable enough to compare visually against the plan.
- [ ] No noticeable regression in editor interactivity for typical tracing use.

## Notes / formulation
This is the first “trustable perimeter output” step, not the final estimate UX.

Scope limits:
- no pricing/catalog integration
- no exclusions by room/openings yet (unless trivial and already available)
- no report/export formatting

## Implementation notes
(fill in after completion)

## Log (append-only)
- 2026-02-26 19:xx: Ticket created for S005 committed backlog to surface perimeter results early and visually.
