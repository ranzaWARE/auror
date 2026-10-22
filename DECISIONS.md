# AUROR — Design System Consolidation · DECISIONS

Date: 2026-06-03

## Problem
There was no shared component layer. The only common file was `tokens.css`.
The three pages each invented their own class names for the same components,
and the brand mark was dark on one page but amber on another.

## Operator decisions (adopted as the single convention)
| Topic | Decision | Rejected alternative |
|---|---|---|
| **Canon** | `design-system.html` | settings.html |
| **Brand mark** | Dark — fill `var(--text)`, glyph `var(--surface-raised)` (flips per theme) | Amber on `var(--accent)` |
| **Component layer** | New `css/ui.css`, consumed by every page | per-page inline `<style>` |

## What changed
1. **`css/ui.css`** — new, single component layer extracted from the canon.
   Contains: reset/base · floating header (`.dsHeader` family, `.themeToggle`/`.iconBtn`,
   `.iconBtn--accent`, `.verTag`) · `.card`/`.cardHeader`/`.cardBody` ·
   `.aurorBtn` (+`.primary`/`.danger`/`.active`/`[disabled]`) + `.btnIco` + `.iconBtnSm` ·
   `.aurorInput`/`.aurorSelect`/`.aurorLabel` · `.dsTag`/`.badgeSm`/`.kbd`.
   Uses **only** semantic tokens + named scales (`--auror-r`, `--auror-s-*`,
   `--auror-fs-*`, `--shadow-*`, `--focus-ring`, …). **Zero hex/rgb.**
2. **`css/tokens.css`** — `tokens.css` relocated under `css/`. Token *values* are
   untouched; only the `@font-face` `url()` paths were re-based `fonts/ → ../fonts/`
   so the moved file still resolves the font files. The AUROR switch stays here.
3. **All three pages** now load `css/tokens.css` then `css/ui.css`, dropped their
   inline component CSS, and were renamed to the canonical classes. Each keeps only
   genuinely page-specific layout (built on the canonical components).
4. Fixed a malformed leftover `</div></header>` in the settings header.

## Class mapping — old → new
### login.html
| Old | New |
|---|---|
| `.input` | `.aurorInput` |
| `.primaryBtn` | `.aurorBtn.primary` (full-width via local `.loginCard .aurorBtn`) |
| `.iconBtn` / `.iconBtn.themeToggle` | `.themeToggle` (in ui.css) |
| `.topBrand .mark`, `.cardHead .bigMark` (amber) | recoloured to the dark brand treatment |
| *(kept page-local)* | `.topRail`, `.topBrand`, `.pageWrap`, `.loginCard`, `.cardHead`, `.methods`/`.methodBtn`, `.formPane`, `.field`, `.row`, `.infoNote`, `.footer`, `.err`, `.demoHint`, `.versionBar` |

### settings.html
| Old | New |
|---|---|
| `.cardHd` | `.cardHeader` |
| `.cardBd` | `.cardBody` |
| `.btn` / `.btn.primary` / `.btn.danger` | `.aurorBtn` / `.aurorBtn.primary` / `.aurorBtn.danger` |
| `.input` | `.aurorInput` |
| `.select` | `.aurorSelect` (native chevron, per canon) |
| `.kbd` (local) | `.kbd` (ui.css) + local `.shortItem .kbd` alignment tweak |
| `.dsBrandMark` (amber) | dark brand treatment (ui.css) |
| `.dsBack` | removed (dead; back uses `.iconBtn.iconBtn--accent`) |
| *(kept page-local)* | `.wrap`, `.pageHead`, `.tabs`/`.tab`, `.toggleRow`, `.row`, `.field`, `.stats`, tables (`.userTable`/`.perUserTable`), `.modal*`, `.svcBar`, `.roleSim`, admin/storage widgets, etc. |

### design-system.html (the canon)
Already used the canonical class names. Its component rules were **moved verbatim**
into `css/ui.css` (with the brand-mark hex fix). All showcase/demo CSS (hero, swatches,
type specimens, token grids, dock/layer/inspector/canvas demos, motion, footer) stays
page-local.

## Accepted exceptions
- Status **tint** backgrounds in *page-specific* CSS (e.g. settings alerts/connStatus/
  svcBar pulse, modal scrim) still use `rgba(...)` because tokens.css (frozen) has no
  `*-soft` surface token for success/warn/info. These are page chrome, **not** shared
  components, so `css/ui.css` remains 100% token-based.
- The palette **swatches** in design-system.html intentionally reference raw
  `--auror-*` tokens — they document the raw palette and are page content, not components.

## Verification
- `grep` hex/rgb in `css/ui.css` → **0**.
- All three pages link `css/tokens.css` then `css/ui.css`; no page keeps inline
  component definitions (only contextual overrides like `.loginCard .aurorBtn`).
- Both light and `[data-theme="dark"]` render correctly on every page.

## Audio bar (voice capture)

Ported from Quetza (`ranzaWARE/quetza`, `backend/public` — see github.md), then
reworked rather than copied.

- **Floating object, not a docked strip.** The source bar was pinned to the
  bottom of the canvas. Here it is absolutely positioned inside the canvas,
  dragged by a grip, and clamped to its stage so it cannot be lost off-edge.
- **User-set width with a declared shrink order.** Because the user controls
  the width, the bar decides what to drop, via container queries on its own
  inline size: labels at 340px, waveform at 240px, grip narrows at 170px.
  Record, play and discard never leave. Min width 132px.
- **Simplified.** Dropped the second line of hint copy, the running-commentary
  message next to the timer, and the stacked `.am` column. Every state is now
  a single row.
- **Discard is a cross, and it asks.** A bin implies deleting a stored file;
  what the button does is dismiss the current take, so it is an X. Because it
  is destructive it opens `.abConfirm`, a popover riding above the bar (so it
  travels with it). Confirming fires `auror-audio-discard` on the bar and lets
  the host decide what deletion means.
- **Handles are one object.** Grip and resize are the same continuous 2px rule
  at either end, same colour and hover; only the cursor distinguishes the axis.
- **Transport sizes.** Play and pause match the record trigger at 26px so the
  primary control of each state reads as a pair; discard steps down to 20px so
  it never looks like a peer of the thing it undoes.
- **`--record` is not `--danger`.** The source carried
  `--acc: #c0392b /* no AUROR equiv */`. Promoted to a token pair
  (`--record`, `--record-fg`) kept separate from `--danger`: red here means
  "capture running", not "destructive".
- **Behaviour is shared, not inline.** Drag and resize live in
  `js/audio-bar.js` (`AurorAudioBar.init` / auto-init on `[data-ab-auto]`),
  so consuming pages get the interaction, not just the skin.

## Typeface

Inter out, **Space Grotesk** in, across the whole interface; **Space Mono**
for anything that has to line up. Both self-hosted from `fonts/`, both OFL.

- **Why.** Inter is the default of everything; a surveying tool that ships its
  own mark deserves a voice that is not shared with every dashboard. Space
  Grotesk is a grotesque with enough character to be recognised and enough
  restraint to run at 11px.
- **One family, two widths.** Space Mono is Space Grotesk's monospaced
  sibling, so coordinates and timers read as part of the same voice instead of
  a borrowed technical face. It replaces the old trick of tabular figures in
  the sans — `--auror-mono` used to point at Inter, so nothing actually
  lined up.
- **Mono is placed, not sprinkled.** Inline code and `.kbd`, status-bar
  coordinates, audio-bar timers, hex values. Not uppercase labels or tags,
  where it would compete.
- **Metrics.** Space Grotesk has a lower x-height than Inter, so 11px meta
  lost contrast. Rather than raise the size — which would move every
  component — `--auror-muted` went one step darker (#6B7280 → #5D6472
  light, #8A93A0 → #99A2AF dark). Sizes, spacing, icons and components are
  untouched.
- **Axes.** Space Grotesk carries `wght 300–700` and no optical size, so the
  type specimen's `opsz` slider is gone and the weight range is capped to what
  the file holds.
