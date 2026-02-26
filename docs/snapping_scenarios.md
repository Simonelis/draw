# Snapping Scenarios (Current Behavior + Human Check List)

This document explains how rectangle snapping currently works in the editor and what a human should test when snapping code changes.

Scope:
- rectangle drag snapping
- rectangle resize snapping
- contact-only snapping rules (no persistent constraints, no guide lines)

Out of scope:
- magnetic links / persistent constraints
- openings/doors/windows snapping
- room-aware snapping

## Core rules (important)

1. Contact-only snapping
- The app should not do free-space PowerPoint-style alignment snapping.
- A snap is valid only when contact/overlap rules are satisfied (depending on edge pairing).

2. Pixel-based tolerance
- Snap tolerance is defined in screen pixels and converted by zoom.
- Expected “snap feel” should stay roughly consistent when zoom changes.

3. No persistent linking
- Snapping helps placement only.
- After snapping, moving the other rectangle should not drag the first rectangle along.

## Edge pair types

### Opposite-edge pairs (contact-producing)
These produce edge or corner contact.

- X axis:
  - `left -> right`
  - `right -> left`
- Y axis:
  - `top -> bottom`
  - `bottom -> top`

Validation rule:
- The snapped axis must touch.
- The perpendicular axis must contact or overlap.

Examples:
- Drag rectangle to touch another rectangle’s side (edge contact).
- Drag rectangle corner to another rectangle corner (`top-bottom` + `left-right`, etc.).

### Same-edge pairs (alignment while already touching)
These align same edges while preserving contact on the other axis.

- X axis:
  - `left -> left`
  - `right -> right`
- Y axis:
  - `top -> top`
  - `bottom -> bottom`

Validation rule:
- The perpendicular axis must already be touching (or be corrected to touching in the same multi-constraint solve path).

Examples:
- Two rectangles already side-touching left/right; drag vertically to align `top-top`.
- Same setup; align `bottom-bottom`.

## Current drag snapping behavior (implemented)

Drag snapping currently resolves in layers:

1. Corner dual-snap (explicit corner path)
- Opposite-edge `x+y` pair to the same target rectangle.
- Used for direct corner-touch snapping.

2. Compatible raw dual-axis pair composition
- Tries combining raw `x` and `y` candidates (before single-axis filtering picks winners).
- This allows:
  - correcting side contact on `x`
  - while also applying `top-top` / `bottom-bottom` alignment on `y`
  - in the same drag step

3. Compatible filtered dual-axis pair
- If single-axis winners are both valid together, apply both.

4. Single-axis fallback
- Applies one axis snap if a compatible dual-axis snap is not found.

Why this matters:
- Without dual-axis composition, a valid `y` alignment snap can be blocked because `x` contact is slightly off and needs correction at the same time.

## Current resize snapping behavior (implemented)

Resize snapping follows similar logic, but only on axes allowed by the active handle:

- `n` / `s` handles can move `y`
- `e` / `w` handles can move `x`
- corner handles (`nw`, `ne`, `sw`, `se`) can move both

Resize-specific constraints:
- minimum rectangle size must be preserved
- handle movement rules still apply

Multi-constraint resize path (current):
- corner dual-snap (existing)
- compatible raw dual-axis pair composition (added during `T-0013`)
- compatible filtered dual-axis pair
- single-axis fallback

## Human test matrix (what to check)

Use at least two rectangles. Prefer one target rectangle and one moving rectangle.

### A. Non-snap safety (should NOT snap)
- Rectangles separated in space (no contact path)
- Align `top-top` visually in free space
- Expectation: no snap

### B. Basic edge contact (drag)
- Drag near target side with overlap on perpendicular axis
- Expectation: side contact snap (`left-right` or `right-left`)

### C. Corner touch (drag)
- Drag near a target corner
- Expectation: both axes snap together for corner touch

### D. Same-edge alignment while already side-touching (drag)
- First make rectangles side-touching (left/right)
- Drag vertically
- Expectation:
  - `top-top` snaps
  - `bottom-bottom` snaps
- This is the historical regression area (`T-0012`)

### E. Contact correction + alignment in one drag
- Start side-touching but with a small x drift (a few pixels)
- Drag vertically toward `top-top`
- Expectation: drag solver corrects x contact and aligns y in one move

### F. Same-edge alignment while already side-touching (resize)
- Side-touch rectangles
- Resize top edge (`n`) or corner (`nw`)
- Expectation: `top-top` can snap without breaking side contact

### G. Corner resize with dual correction
- Use a corner handle (for example `nw`) with slight x/y offsets
- Expectation: resize can snap both axes in one move when valid

### H. Zoom consistency
- Repeat one drag snap and one resize snap while zoomed in and zoomed out
- Expectation: snap trigger feels similar (pixel-based tolerance)

### I. No persistent linking
- After a snap, move the other rectangle away
- Expectation: the first rectangle stays where it is

## What to report when a snap bug happens

When reporting a bug, include:
- Drag or resize?
- Which handle (if resize)?
- Left-touch or right-touch setup?
- Which alignment expected (`top-top`, `bottom-bottom`, `top-bottom`, etc.)?
- Was contact already exact, or off by a few pixels?
- Did corner snapping still work?
- Zoom level (roughly)

This is enough to reproduce most snapping failures quickly.
