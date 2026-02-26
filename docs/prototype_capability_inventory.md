# Prototype Capability Inventory (`main8` -> `main11`)

Purpose: treat the stage-0 prototypes as interaction references, not implementation targets.

Source files reviewed:
- `design/stage0_initial_sketches/main8.html`
- `design/stage0_initial_sketches/main9.html`
- `design/stage0_initial_sketches/main10.html`
- `design/stage0_initial_sketches/main11.html`

## Summary

What the prototypes prove well:
- Canvas-based interaction can feel good for this problem.
- Cursor-anchored zoom + pan + rectangle workflows are viable.
- Scale setting (reference line -> meters) is a good UX anchor.
- Per-side wall thickness and visual dimension overlays are useful during editing.

What the prototypes do not prove:
- Final plan data model shape.
- Correctness of geometry/calculation algorithms.
- Feature ordering for production implementation.
- Testability or maintainability of a monolithic single-file editor.

## Capability inventory (keep / change / later / drop)

### Keep now (reimplement early)
- **Canvas editor + camera (pan/zoom)**
  - Present in `main8`-`main11`.
  - Decision: **Keep**
  - Reason: foundation for all other interactions.

- **Rectangle selection / drag / resize**
  - Present in `main8`-`main11`.
  - Decision: **Keep**
  - Reason: core tracing workflow.

- **Screen <-> world coordinates + scale conversion**
  - `cmToWorld`, `worldToCm`, scale reference flow present in `main8`-`main11`.
  - Decision: **Keep (redesign into pure modules)**
  - Reason: critical for quantities and estimates.

### Keep, but redesign structure
- **Snapping behavior**
  - Present in `main8`-`main11` via snap candidates and thresholds.
  - Decision: **Keep (reimplement later in slices)**
  - Reason: essential for clean geometry, but needs testable pure logic and clearer constraints.

- **Magnetic links / persistent alignment**
  - Stronger in `main10`/`main11` (`magneticLinks`, `commitSnapLinks`, unlink control).
  - Decision: **Keep concept, redesign data model and lifecycle**
  - Reason: useful UX, but prototype implementation is tightly coupled to pointer state and rectangle representation.

- **Background screenshot overlay**
  - Present in `main8`-`main11` (`background.image.src = "apartment1.png"`).
  - Decision: **Keep (rebuild as separate background layer module)**
  - Reason: core to tracing workflow.

- **Wall-thickness UI (`wallCm`) + `isWall` toggle**
  - Present in `main8`-`main11`.
  - Decision: **Keep for MVP, but redesign around Plan Model v0**
  - Reason: useful for visual/editing model, but may not be the final calculation model.

- **Dimension overlays**
  - Present in `main8`-`main11` (`formatDimension`, `drawDimensionOverlays`).
  - Decision: **Keep (later in editor polish slice)**
  - Reason: helpful feedback/debugging, but not required for initial runtime foundation.

### Later (do not block editor foundation)
- **Room tags + merged rooms**
  - Not present in these prototypes.
  - Decision: **Later**
  - Reason: requires Plan Model v0 and room entity design.

- **Doors/windows as first-class openings**
  - Not implemented in `main8`-`main11`.
  - Decision: **Later (but model planned now)**
  - Reason: needed for baseboard exclusions; depends on stable wall/opening model.

- **Persistence (autosave/reopen)**
  - Not present.
  - Decision: **Later (after Plan Model v0)**
  - Reason: avoid persisting unstable state shape.

- **Baseboard quantity / estimate engine**
  - Not present.
  - Decision: **Later**
  - Reason: depends on geometry derivation + rooms + openings.

### Drop (from prototypes)
- **Single-file all-in-one architecture**
  - Prototype pattern only.
  - Decision: **Drop**
  - Reason: not testable or maintainable for staged feature delivery.

- **Treat prototype data structures as authoritative**
  - `objects`, `pointer`, `ui`, `magneticLinks` are useful references but not final contracts.
  - Decision: **Drop**
  - Reason: they encode implementation shortcuts and mixed concerns.

## Cross-version observations (`main8` -> `main11`)

- `main8`: strong baseline for scale, walls (`wallCm`), dimensions, and rectangle editing.
- `main9`: extends snapping/visual feedback and dimension overlay refinements.
- `main10`: introduces persistent magnetic links + unlink behavior.
- `main11`: improves magnetic-link safety/cleanup (`isLinkUsable`, pruning/filtering) and is the best interaction reference for snapping-link behavior.

## Prototype data-model risks (why we are not porting 1:1)

- `objects` mixes authored geometry and behavior assumptions in one flat array.
- `pointer` holds many transient interaction concerns in a single mutable structure.
- UI mode and editor domain state are interleaved.
- Derived geometry (outer rects, wall world dimensions, snap candidates) is computed inline near rendering and input handling.
- These patterns are fast for prototyping, but they make testing and staged reimplementation harder.

## Reimplementation guidance

- Reuse prototype *interaction ideas*, not prototype file structure.
- Extract pure functions for:
  - coordinates/units
  - hit testing
  - resize math
  - snap candidate calculation
  - magnetic-link application rules
- Keep persisted plan state separate from transient editor UI state.

