# Changelog

AUROR follows [semantic versioning](https://semver.org). Read this file
before upgrading: it says what changed and what you have to touch.

**How to read a version bump**

| Bump | Means | What you do |
| --- | --- | --- |
| Patch — `1.0.x` | Fixes inside existing components. Contrast, rounding, a broken state. | Nothing. Pull it. |
| Minor — `1.x.0` | New components, new tokens, new modifiers. Nothing existing changes meaning. | Nothing. Pull it, use the new parts when you need them. |
| Major — `x.0.0` | A class, token or component behaves differently than before. | Read the **Breaking** section and change your app. |

A rename, a token whose meaning shifts, or a component that changes its
visual weight (outline becoming solid, light becoming dark) is breaking even
when nothing throws — it silently changes how your screens read.

---

## 1.0.0 — 2026-09-21

First versioned release. Everything below is the starting point, not a change.

### Components

`Button`, `Card`, `Notice`, `TextField` — compiled, importable from the
bundle. Everything else is a CSS pattern in `css/ui.css`.

### Patterns in `css/ui.css`

Header with nav drawer and current-section highlight, floating audio bar,
tags, stacked tables for narrow screens, modal, toast, notice, empty state.

### Behaviour

`js/brand.js`, `js/audio-bar.js`, `js/overlays.js`.

### Themes

Light, dark, and e-ink — white surfaces, black outlines, no shadows, colour
carrying no meaning.

### Type

Space Grotesk for the interface, Space Mono for coordinates, code and
timers. Both self-hosted, SIL OFL.

---

## Unreleased

### Added
- `js/i18n.js` — the string table the Voice section always documented, now
  real. IT default, EN equal, `data-i18n` / `-placeholder` / `-title`
  resolved on load, choice persisted and shared across open pages.
- `js/number-field.js` + `.inputUnit .stepper` — number inputs get AUROR's
  own step buttons. The native spinner is tiny, hover-only, and lands on top
  of a unit suffix.

### Fixed
- Switch thumb travel is a transform instead of a change of `left`. Layout
  offsets round per element, so at fractional device-pixel ratios the 3px
  gap survived on some rows and collapsed on others.
- Settings is fully keyed: every tab, not just General.
