# TODO_IMAGES.md — V-CUBE Designs

Every image slot in the build, grouped by surface. Drop production photography into `/public` at the paths below; the components are wired to read them once available. Until then, the `<Placeholder/>` component renders a labelled tile.

**Recommended formats:** AVIF + WebP, served via `next/image` with `placeholder="blur"`. Aspect ratios listed are the design intent; cropping should be done before export so `next/image` does not letterbox.

---

## 1. Brand & favicon

| Slot | Path | Aspect | Notes |
|------|------|--------|-------|
| Wordmark + monogram (dark) | `/public/brand/logo.svg` | 200x64 | SVG placeholder shipped |
| Wordmark + monogram (light) | `/public/brand/logo-light.svg` | 200x64 | SVG placeholder shipped |
| Favicon | `/public/favicon.svg` | 32x32 | SVG placeholder shipped |
| App icon (PNG) | `/public/brand/app-icon-512.png` | 512x512 | Generated from monogram |
| OG card (default) | `/public/og/default.jpg` | 1200x630 | Hero crop with wordmark |

---

## 2. Home `/`

### Hero
| Slot | Path | Aspect |
|------|------|--------|
| Hero — executive desk, evening light | `/public/lifestyle/home-hero.jpg` | 5:4 |

### Category triptych
| Slot | Path | Aspect |
|------|------|--------|
| Desk — overhead with Stitched Mat | `/public/lifestyle/cat-desk.jpg` | 3:4 |
| Home — Valet Tray on dresser | `/public/lifestyle/cat-home.jpg` | 3:4 |
| Sets — Executive set, navy | `/public/lifestyle/cat-sets.jpg` | 3:4 |

### Featured composition
| Slot | Path | Aspect |
|------|------|--------|
| Executive V-Cube Set — flat lay | `/public/lifestyle/featured-executive-set.jpg` | 5:4 |

### The Material strip
| Slot | Path | Aspect |
|------|------|--------|
| Atelier — cutting table | `/public/lifestyle/atelier-cutting.jpg` | 4:5 |
| Stitched edge — macro | `/public/lifestyle/stitched-edge-macro.jpg` | 4:5 |
| Tan mat in window light | `/public/lifestyle/tan-mat-window.jpg` | 4:5 |
| MDF core layer | `/public/lifestyle/mdf-core.jpg` | 4:5 |

### Lifestyle marquee
| Slot | Path | Aspect |
|------|------|--------|
| Atelier cutting table | `/public/lifestyle/marquee-01.jpg` | 3:4 |
| Warm desk evening | `/public/lifestyle/marquee-02.jpg` | 3:4 |
| Valet tray detail | `/public/lifestyle/marquee-03.jpg` | 3:4 |
| Stitched edge macro | `/public/lifestyle/marquee-04.jpg` | 3:4 |
| Pen holder on mat | `/public/lifestyle/marquee-05.jpg` | 3:4 |
| Coaster with cup | `/public/lifestyle/marquee-06.jpg` | 3:4 |
| Navy mat bookshelf | `/public/lifestyle/marquee-07.jpg` | 3:4 |
| Tan mat window light | `/public/lifestyle/marquee-08.jpg` | 3:4 |

---

## 3. Products `/product/[slug]`

Path convention: `/public/products/{slug}/{nn}.jpg`. Each product needs its primary, two angle/detail, and any in-context shots up to `imageCount`.

### desk-mat-stitched (4 images)
- `/public/products/desk-mat-stitched/01.jpg` — primary, top-down (4:5)
- `/public/products/desk-mat-stitched/02.jpg` — angle, edge stitching (1:1)
- `/public/products/desk-mat-stitched/03.jpg` — in-context with laptop (1:1)
- `/public/products/desk-mat-stitched/04.jpg` — colour spread (1:1)

### desk-mat-dual-color (3 images)
- `/public/products/desk-mat-dual-color/01.jpg` — primary, both faces (4:5)
- `/public/products/desk-mat-dual-color/02.jpg` — flipped detail (1:1)
- `/public/products/desk-mat-dual-color/03.jpg` — in-context (1:1)

### executive-v-cube-set (5 images)
- `/public/products/executive-v-cube-set/01.jpg` — primary, full set on desk (4:5)
- `/public/products/executive-v-cube-set/02.jpg` — boxed, ribbon-tied (1:1)
- `/public/products/executive-v-cube-set/03.jpg` — overhead lay (1:1)
- `/public/products/executive-v-cube-set/04.jpg` — colour-matched detail (1:1)
- `/public/products/executive-v-cube-set/05.jpg` — gifting context (1:1)

### mouse-pad (3 images)
- `/public/products/mouse-pad/01.jpg` — primary (4:5)
- `/public/products/mouse-pad/02.jpg` — stitched edge close (1:1)
- `/public/products/mouse-pad/03.jpg` — with mouse, in use (1:1)

### valet-tray (3 images)
- `/public/products/valet-tray/01.jpg` — primary, with watch + glasses (4:5)
- `/public/products/valet-tray/02.jpg` — empty, top-down (1:1)
- `/public/products/valet-tray/03.jpg` — on nightstand (1:1)

### pen-holder (3 images)
- `/public/products/pen-holder/01.jpg` — primary (4:5)
- `/public/products/pen-holder/02.jpg` — with pens and brushes (1:1)
- `/public/products/pen-holder/03.jpg` — colour spread (1:1)

### coaster-set (3 images)
- `/public/products/coaster-set/01.jpg` — primary, set in holder (4:5)
- `/public/products/coaster-set/02.jpg` — coaster under cup (1:1)
- `/public/products/coaster-set/03.jpg` — stitched detail (1:1)

### tissue-holder (3 images)
- `/public/products/tissue-holder/01.jpg` — primary (4:5)
- `/public/products/tissue-holder/02.jpg` — top dispensing slit (1:1)
- `/public/products/tissue-holder/03.jpg` — on side table (1:1)

### mobile-stand (3 images)
- `/public/products/mobile-stand/01.jpg` — primary, with phone (4:5)
- `/public/products/mobile-stand/02.jpg` — cable slot detail (1:1)
- `/public/products/mobile-stand/03.jpg` — empty, side angle (1:1)

### dining-table-placemats (3 images)
- `/public/products/dining-table-placemats/01.jpg` — primary, set of 6 (4:5)
- `/public/products/dining-table-placemats/02.jpg` — table laid for dinner (1:1)
- `/public/products/dining-table-placemats/03.jpg` — stitched border close (1:1)

---

## 4. The Material `/the-material`

| Slot | Path | Aspect |
|------|------|--------|
| Atelier — overhead, hands at work | `/public/lifestyle/material-hero.jpg` | 4:5 |
| Material lay-up — close | `/public/lifestyle/material-layup.jpg` | 16:9 |
| Cutting — hand-marked | `/public/lifestyle/atelier-cutting-hand.jpg` | 4:5 |
| Edge stitching | `/public/lifestyle/atelier-stitching.jpg` | 4:5 |
| Atelier — exterior, evening | `/public/lifestyle/atelier-exterior.jpg` | 16:9 |

---

## 5. Journal `/journal/[slug]`

| Slot | Path | Aspect |
|------|------|--------|
| Anatomy of a Desk — hero | `/public/journal/anatomy-of-a-desk.jpg` | 16:9 |
| Why We Use Vegan Leather — hero | `/public/journal/why-vegan-leather.jpg` | 16:9 |
| Corporate Gifting Done Quietly — hero | `/public/journal/corporate-gifting-done-quietly.jpg` | 16:9 |
| Index thumbnails (per article) | `/public/journal/{slug}-thumb.jpg` | 4:3 |

---

## 6. Gifting `/gifting`

| Slot | Path | Aspect |
|------|------|--------|
| Gifting hero — boxed sets | `/public/lifestyle/gifting-hero.jpg` | 5:4 |
| Box — open with set | `/public/lifestyle/gifting-box-open.jpg` | 4:5 |
| Deboss detail | `/public/lifestyle/gifting-deboss.jpg` | 4:5 |
| Monogrammed sleeve | `/public/lifestyle/gifting-sleeve.jpg` | 4:5 |
| Care card | `/public/lifestyle/gifting-care-card.jpg` | 4:5 |

---

## 7. Open Graph (per surface)

| Surface | Path | Aspect |
|---------|------|--------|
| Home OG | `/public/og/home.jpg` | 1200x630 |
| Shop OG | `/public/og/shop.jpg` | 1200x630 |
| The Material OG | `/public/og/material.jpg` | 1200x630 |
| Gifting OG | `/public/og/gifting.jpg` | 1200x630 |
| Per product OG | `/public/og/product-{slug}.jpg` | 1200x630 |
| Per article OG | `/public/og/journal-{slug}.jpg` | 1200x630 |

---

## Notes for the photographer

- Source: dark wood desks, navy linen, warm tungsten or window light, no on-camera flash.
- Hero crops should leave the top third quiet — the headline lives there.
- Detail shots: macro at f/4–5.6, focus on the stitch, not the leather face.
- Atelier shots: shoot wide, then close — we use both.
- All product photography should match across the catalogue. Same camera, same light, same height for the primary shot.
