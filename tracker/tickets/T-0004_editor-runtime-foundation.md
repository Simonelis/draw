# T-0004: Editor runtime foundation (canvas, camera, render pipeline, state shell)

Created: 2026-02-26
Estimate: 3 points
Owner: simonas
Status history (append-only):
- 2026-02-26: OPEN
- 2026-02-26: IN_PROGRESS
- 2026-02-26: DONE

## Goal
Build the editor runtime foundation in the new architecture so later features can plug in without rewriting the shell.

## Acceptance criteria
- [x] Canvas module initializes with DPR-aware sizing and render loop.
- [x] Camera model supports pan/zoom with cursor-anchored zoom.
- [x] Plan state shell exists (empty/minimal model) with explicit update path (actions or reducer-like functions).
- [x] Core coordinate transforms (`screenToWorld`, `worldToScreen`) live in testable/pure functions.
- [x] Manual smoke check instructions are added/updated for this slice.

## Notes / formulation
This is infrastructure only. No rectangle authoring required beyond optional seeded debug primitives.

The output should make later tickets cheaper, not just reproduce prototype code shape.

## Implementation notes
- Added editor runtime foundation modules:
  - `app/src/editor/runtime.js`
  - `app/src/editor/geometry/coordinates.js`
  - `app/src/editor/state/plan.js`
  - `app/src/editor/state/editor-ui.js`
  - `app/src/editor/state/session-store.js`
- Replaced placeholder canvas setup with runtime mount in:
  - `app/src/ui-shell.js`
- Updated editor shell UI to expose reducer-driven controls (`New Empty Plan`, `Seed Debug Rects`, `Reset View`).
- Updated styles for runtime canvas interaction cursors and overlay:
  - `app/styles.css`
- Added T-0004 manual smoke-check steps:
  - `app/README.md`

Behavior included in this slice:
- DPR-aware canvas sizing via resize observer + viewport state updates
- Continuous render loop (grid, axes, background frame, seeded debug rectangles)
- Camera pan (drag canvas) + cursor-anchored wheel zoom
- Explicit persisted `plan` state and transient `editorState` with reducer-style dispatch

## Completion evidence (append-only)
- 2026-02-26: Local dev server served the app page (`HEAD /` -> `HTTP 200`) on `127.0.0.1:4173`.
- 2026-02-26: Browser interaction smoke-check steps documented in `app/README.md` (manual run still required outside sandbox).

## Log (append-only)
- 2026-02-26 10:22: Ticket created from T-0002 split.
- 2026-02-26 10:58: Started implementation.
- 2026-02-26 11:04: Added runtime foundation modules (camera, reducers, render loop, pure coordinate transforms).
- 2026-02-26 11:06: Wired app shell to runtime and added reducer-driven toolbar controls.
- 2026-02-26 11:07: Added T-0004 manual smoke-check instructions to `app/README.md`.
- 2026-02-26 11:09: Verified local server responds (`HEAD /` 200); browser interaction smoke-check remains manual.
- 2026-02-26 11:10: Marked ticket done.
