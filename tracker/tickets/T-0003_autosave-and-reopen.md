# T-0003: Autosave + reopen last plan

Created: 2026-02-25
Estimate: 3 points
Owner: simonas
Status history (append-only):
- 2026-02-25: OPEN
- 2026-02-26: DEFERRED (out of S001 pending Plan Model v0 stability)

## Goal
Closing and reopening the app restores the last drawing state automatically.

## Acceptance criteria
- [ ] App autosaves on edits (throttled/debounced).
- [ ] App loads the last saved plan on startup.
- [ ] If no saved plan exists, app starts with a sensible default (and/or sample background).
- [ ] “Reset plan” exists (to recover from bad saved state).

## Notes / formulation
First storage target: local persisted JSON (likely localStorage for MVP).

Export/import to a JSON file can be a separate ticket.

Dependency note:
- This should happen after `T-0002` defines Plan Model v0, so we do not bake unstable structures into persistence.

## Implementation notes
(fill in after completion)

## Log (append-only)
- 2026-02-25 10:05: Ticket created.
- 2026-02-26 10:21: Deferred from S001. Will re-enter sprint planning after Plan Model v0 is defined and editor state shape is stable enough to persist.
