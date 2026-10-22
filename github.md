# AUROR design system — source repository

repo: ranzaWARE/quetza
branch: main
path: backend/public

Quetza is the product this design system was extracted from and documents.
Its `backend/public/css/app.css` already aliases AUROR tokens, so it is the
reference implementation for any component brought back into the system.

## Last sync

date: 2026-08-16T12:52:00Z

### Updated in this project

- Added the audio bar (voice capture) to the Components section, ported from Quetza's `.AB` strip.
- Added a `--record` / `--record-fg` token pair — the source marked recording red as "no AUROR equiv".
- Rebuilt the bar's three states (idle / recording / playback) on `data-state`, token-only, with light, dark and e-ink treatments.

## Screen map

| Screen / section | Built from |
| --- | --- |
| design-system.html — Components › Audio bar | backend/public/index.html (`.AB` block), backend/public/css/app.css (`.AB .rb .am .ah .ar2 .rd .rt .rmsg .pb2 .apl .aro .pw .sc .at2`) |
| css/tokens.css — `--record` | backend/public/css/app.css (`--acc: #c0392b`) |
