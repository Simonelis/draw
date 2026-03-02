# T-0027: Geometry closure diagnostics v1

Created: 2026-02-28
Estimate: 3 points
Owner: simonas
Status history (append-only):
- 2026-02-28: OPEN
- 2026-03-02: DONE

## Goal
Add a first-pass closure diagnostic that flags clearly open/disconnected enclosure geometry before quantities are trusted.

## Acceptance criteria
- [x] Validation reports at least one explicit “closure” warning type when enclosure continuity is broken.
- [x] UI shows closure warning count/message in existing validation surfaces.
- [x] Debug view can visually locate closure gaps (segment marker/highlight).
- [x] Existing overlap and invalid-rectangle checks remain unchanged.

## Notes / formulation
- Keep v1 intentionally conservative: catch obvious gaps, avoid expensive full CAD topology solving.

## Implementation notes
- Added closure validation finding (`closure_gap_detected`) based on unsupported open-side segments.
- Validation/status/overlay now include explicit closure warning count + message.
- Baseboard debug overlay now highlights closure gaps as blue dashed segments for visual localization.
- Existing overlap/invalid-rectangle validation pipeline is preserved and extended (not replaced).

## Log (append-only)
- 2026-02-28 13:xx: Ticket created for S006 stretch backlog.
- 2026-03-02 16:xx: Implemented first-pass closure diagnostics with visual gap highlighting.
