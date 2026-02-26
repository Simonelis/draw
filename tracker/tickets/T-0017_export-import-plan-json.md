# T-0017: Export/import plan JSON (local file round-trip)

Created: 2026-02-26
Estimate: 3 points
Owner: simonas
Status history (append-only):
- 2026-02-26: OPEN

## Goal
Allow the user to export the current plan JSON and import a saved plan file, enabling manual backups and sharing before report/export UX exists.

## Acceptance criteria
- [ ] User can export current `plan` JSON to a local file.
- [ ] User can import a previously exported JSON file and replace the current plan.
- [ ] Imported plan goes through the existing plan migration/normalization path.
- [ ] Autosave and current editor interactions continue to work after import.
- [ ] Invalid JSON / invalid plan shape failures are shown safely (no crash).

## Notes / formulation
This is a local-file round-trip feature only.

Scope limits:
- no cloud sync
- no merge/conflict resolution
- no multi-file project management

## Implementation notes
(fill in after completion)

## Log (append-only)
- 2026-02-26 19:xx: Ticket created as S004 stretch backlog.
