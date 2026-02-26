# T-0004: Editor runtime foundation (canvas, camera, render pipeline, state shell)

Created: 2026-02-26
Estimate: 3 points
Owner: simonas
Status history (append-only):
- 2026-02-26: OPEN

## Goal
Build the editor runtime foundation in the new architecture so later features can plug in without rewriting the shell.

## Acceptance criteria
- [ ] Canvas module initializes with DPR-aware sizing and render loop.
- [ ] Camera model supports pan/zoom with cursor-anchored zoom.
- [ ] Plan state shell exists (empty/minimal model) with explicit update path (actions or reducer-like functions).
- [ ] Core coordinate transforms (`screenToWorld`, `worldToScreen`) live in testable/pure functions.
- [ ] Manual smoke check instructions are added/updated for this slice.

## Notes / formulation
This is infrastructure only. No rectangle authoring required beyond optional seeded debug primitives.

The output should make later tickets cheaper, not just reproduce prototype code shape.

## Implementation notes
(fill in after completion)

## Log (append-only)
- 2026-02-26 10:22: Ticket created from T-0002 split.

