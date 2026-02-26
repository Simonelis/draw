# T-0015: On-canvas dimension labels for selected rectangle

Created: 2026-02-26
Estimate: 3 points
Owner: simonas
Status history (append-only):
- 2026-02-26: OPEN

## Goal
Render clear width/height labels near the selected rectangle on the canvas so dimensions are visible without reading debug/status text.

## Acceptance criteria
- [ ] Selected rectangle shows width/height labels on canvas.
- [ ] Labels use calibrated meters/cm when scale exists; otherwise world units fallback is explicit.
- [ ] Labels remain legible during pan/zoom and do not break drag/resize interactions.
- [ ] Labels update live during drag/resize.
- [ ] No significant performance regression in normal tracing use.

## Notes / formulation
Keep this ticket focused on selected-rectangle labels only.

Scope limits:
- no full dimensioning tool
- no persistent/manual dimension annotations
- no multi-select label layouts

## Implementation notes
(fill in after completion)

## Log (append-only)
- 2026-02-26 19:xx: Ticket created for S004 committed backlog.
