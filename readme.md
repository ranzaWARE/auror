# AUROR

Design system for a drawing and annotation workspace. Three themes — light,
dark, and an e-ink mode for greyscale panels, where every surface is white and
every edge is black.

## Components

- **Button** — default, primary, danger; active and disabled states.
- **Card** — the panel every section sits in; optional header and meta.
- **Notice** — in-page message in four tones, tied to what it is about.
- **TextField** — label, control and help as one unit; input or select.

## Patterns in `css/ui.css`

Not every part of the system is a React component yet. The shared stylesheet
also carries the header and nav drawer, the floating audio bar, tags, the
stacked-table treatment for narrow screens, modal, toast and empty state.

## Behaviour

- `js/brand.js` — one stored brand name driving every header.
- `js/i18n.js` — the string table (IT is the base and source of truth; EN
  is filled in over time and falls back to Italian for keys it does not
  carry yet) and the `data-i18n` / `-placeholder` / `-title` resolver.
  `AurorI18n.todo()` lists what still needs an English string.
- `js/audio-bar.js` — drag and width-resize for the floating audio bar.
- `js/overlays.js` — modal focus trap and the toast stack.

## Type

Space Grotesk for the interface, Space Mono for coordinates, code and timers.
Self-hosted from `fonts/` (SIL OFL). `--auror-font` and `--auror-mono`.

## Consuming AUROR

Load `css/tokens.css` then `css/ui.css`, plus the scripts in `js/` for the
behaviour. Components come from the compiled bundle.

Pin a version rather than tracking the tip: a shared folder or CDN pushes
every edit into every app at once, and a change that reads fine here can
quietly break a screen elsewhere. A submodule on a commit, or a versioned
package, lets you upgrade one app at a time.

`CHANGELOG.md` says what changed and whether you have to do anything.
`DECISIONS.md` says why.

## Rules

- Components consume semantic tokens only. No hex or rgb values outside
  `css/tokens.css`.
- The brand mark is dark on `--text`, fixed in height and free in width.
- `--record` means "capture running", not "destructive" — it is a separate
  token from `--danger`.
