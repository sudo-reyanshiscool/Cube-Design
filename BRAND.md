# V-CUBE Designs — Brand Guide

A short reference for anyone shipping pixels or copy for vcubedesigns.com. This is not a manifesto; it is a contract with the reader. Stay quiet, stay specific.

---

## 1. Identity

- **Name:** V-CUBE Designs (in body copy, **V-Cube** is acceptable from the second mention).
- **Tagline:** *Premium Workspace Essentials, Built to Inspire.*
- **Founded:** 2023, New Delhi.
- **Atelier:** 125A, 2nd Floor, Shahpur Jat, New Delhi 110049.
- **Domain:** [www.vcubedesigns.com](http://www.vcubedesigns.com)
- **Logo:** A V-shaped hexagonal-cube monogram. Dark variant at `/public/brand/logo.svg`, inverted at `/public/brand/logo-light.svg`. Minimum width 96px on screen. Always 24px clearspace on every side. Never recolour outside the palette below.

---

## 2. Palette

| Token  | Hex      | Use |
|--------|----------|-----|
| Ink    | `#0E0E0C` | Primary text, primary buttons, footer |
| Bone   | `#F5F1EA` | Page ground, light surfaces |
| Bone alt | `#EFE9DE` | Section backgrounds |
| Navy   | `#1B2A40` | Signature accent — sets, hero photography |
| Tan    | `#8B5E3C` | Signature accent — desk products |
| Oxblood | `#5C1A1B` | Editorial accent — sparingly |
| Teal   | `#1F4A48` | Editorial accent — sparingly |
| Brass  | `#B08D57` | Hover states, focus rings, marks |
| Line   | `rgba(14,14,12,0.12)` | Hairlines, dividers |

**Rules:** No gradients. No drop shadows on every component. No glassmorphism. Hairlines are 1px, ink at 12–22% opacity. Brand SVGs use Ink or Bone only.

---

## 3. Typography

- **Display:** Cormorant Garamond (Canela acceptable for print). Weights 400, 500, 600. Italics permitted in pull quotes only.
- **UI:** Inter (Söhne acceptable). Weights 300–600. Use `font-feature-settings` defaults; do not apply small caps.

### Scale

| Token       | Size                          | Use |
|-------------|-------------------------------|-----|
| display-xl  | clamp(2.75rem, 6vw, 5.5rem)   | Hero |
| display-lg  | clamp(2.25rem, 4.5vw, 4rem)   | Page H1 |
| display-md  | clamp(1.75rem, 3vw, 2.75rem)  | Section H2 |
| body        | 15–16px / 1.6                 | Default reading |
| label       | 11–12px, 0.16–0.20em tracked, uppercase | Eyebrows, categories |

Headings live in Display. Labels live in UI sans, in all caps with letter-spacing. Body never uses caps.

---

## 4. Voice

V-Cube speaks **considered, plain, British English**. Sentences are short. Adjectives earn their place. Numbers are specific. Reverence for craft is communicated by description, never by claims of luxury.

### Do

- "A polyurethane-based faux leather over a fibre backing."
- "Wipes clean with a soft damp cloth."
- "Made in Shahpur Jat, New Delhi."
- "Used on a Tuesday."

### Don't

- "Luxurious. Premium. Exquisite." (Adjective stacks.)
- "Sustainable, eco-friendly, planet-loving." (Buzzwords without backing.)
- "Hurry — sale ends Sunday!" (We don't beg.)
- "Game-changing." (We don't change games.)
- Emoji. Excessive em-dashes. ALL CAPS for emphasis.

### Spelling

British English throughout: *colour*, *organise*, *catalogue*, *centrepiece*. Currency in INR with the ₹ symbol, no decimals (`₹2,000`, not `₹2000.00`).

---

## 5. Imagery

- **Direction:** Warm, low-key, executive. Dark wood desks. Natural and tungsten light, not LED-cool. Tan, navy and bone dominate.
- **People:** Hands at work, never staged smiles. Faces optional, intent obligatory.
- **Crop:** Generous negative space at the top of frames. Objects sit on the lower thirds.
- **Don't:** Floating products on white seamless. Heavy editing. Vignettes. Lifestyle photography that looks like a stock library.

Placeholder slots are documented in `TODO_IMAGES.md`.

---

## 6. Layout

- Editorial 12-column grid. Asymmetric heroes. Generous whitespace.
- Hairline 1px borders. No card shadows on grids — let images do the lifting.
- Sections breathe at 80–128px vertical padding on desktop.
- Buttons are square-edged, all-caps, 0.2em tracked.
- Animations are slow (600–700ms) and use `cubic-bezier(0.22, 1, 0.36, 1)`. Respect `prefers-reduced-motion`.

---

## 7. Logo usage

- **Wordmark + monogram** is the default lockup.
- **Monogram alone** for app icons, favicons, social avatars.
- Never recolour, outline, drop-shadow, or place over busy imagery without a Bone or Ink overlay at 0.6 opacity minimum.

---

## 8. The promise

Quiet luxury, not loud. Editorial, not retail. We are a craft studio, and the writing should always sound like one.
