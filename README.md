# V-CUBE Designs — vcubedesigns.com

A production-ready marketing and e-commerce site for **V-CUBE Designs**, a premium handcrafted vegan leather workspace and home accessories brand based in Shahpur Jat, New Delhi.

Built with Next.js 14 (App Router), TypeScript (strict), Tailwind, Framer Motion, Radix primitives and Zustand for cart. Deploys cleanly to Vercel.

---

## Quick start

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

> npm and yarn also work — `pnpm` is recommended for monorepo-friendly install times.

### Other scripts

```bash
pnpm build       # production build
pnpm start       # start the production server
pnpm lint        # ESLint
pnpm typecheck   # tsc --noEmit
```

---

## Environment variables

All variables are **optional** — the site builds and runs without them. Copy `.env.example` to `.env.local` to enable a feature.

| Key | Purpose |
|-----|---------|
| `STRIPE_SECRET_KEY` | Stripe Checkout, server side |
| `STRIPE_PUBLISHABLE_KEY` | Stripe Checkout, client side |
| `NEXT_PUBLIC_STRIPE_ENABLED` | Set to `1` to mark Stripe live in the UI |
| `RAZORPAY_KEY_ID` | Razorpay Order API |
| `RAZORPAY_KEY_SECRET` | Razorpay Order API |
| `NEXT_PUBLIC_GA_ID` | GA4 measurement ID — analytics no-ops if absent |

---

## Structure

```
/app
  /(marketing)/page.tsx            home
  /shop/page.tsx                   shop with filters + sort
  /product/[slug]/page.tsx         product detail
  /the-material/page.tsx           brand story
  /journal/page.tsx                journal index
  /journal/[slug]/page.tsx         journal article
  /gifting/page.tsx                corporate gifting + bulk enquiry form
  /contact/page.tsx                contact + map
  /cart/page.tsx                   bag and checkout
  layout.tsx                       global shell, fonts, JSON-LD Organization
  sitemap.ts, robots.ts            SEO infrastructure
/components
  /commerce                        ProductCard, ColourSwatch, SizeSelector, CartSheet, Accordion, Placeholder
  /editorial                       Hero, SectionHeader, PullQuote, Newsletter, LifestyleStrip
  /layout                          Header, Footer, Container, Logo
/data
  products.ts                      typed catalogue (10 SKUs, easy Sanity/Shopify swap)
  journal.ts                       3 seeded articles
  brand.ts                         contact info, social, copy blocks
/lib
  cart.ts                          Zustand store with localStorage persistence
  format.ts                        INR formatter + cn helper
/public/brand                      SVG logo placeholders (dark + light)
/public/favicon.svg
/styles/globals.css                tokens, layered base/components/utilities
/tokens.ts                         runtime access to design tokens
/tailwind.config.ts                tokens wired into the Tailwind theme
/BRAND.md                          palette, type scale, voice
/TODO_IMAGES.md                    full inventory of image slots, grouped by surface
```

---

## Catalogue

The 10 launch products are seeded in `data/products.ts`:

1. Desk Mat — Stitched
2. Desk Mat — Dual Colour
3. Executive V-Cube Set (best seller, gifting favourite)
4. Mouse Pad
5. Valet Tray
6. Pen Holder
7. Coaster Set
8. Tissue Holder
9. Mobile Stand
10. Dining Table Placemats

Prices are stored as `null` with a `fromPrice` indicative figure; the UI renders "from ₹X" until firm prices are dropped in. Cart line items use `fromPrice` as the unit price for the stub checkout.

---

## Imagery

The build never fetches or generates real photography — every image slot is rendered by `<Placeholder/>` with a labelled, mid-warm tile.

When real assets land, drop them in at the paths documented in [TODO_IMAGES.md](./TODO_IMAGES.md) and replace the `<Placeholder>` calls with `<Image>` from `next/image`. Aspect ratios and recommended dimensions are listed for every slot.

---

## Cart & checkout

- Cart state lives in `lib/cart.ts` (Zustand + `persist` to `localStorage`).
- Hydration-safe: `hydrated` flag prevents SSR/CSR count mismatches.
- `/cart` shows two payment paths — Razorpay (India-first) and Stripe (international). Both are stubs that log the payload to the console; wire to API routes when keys are added.
- `Buy Now` on the PDP adds to cart and redirects to `/cart`.

---

## Accessibility

- All interactive elements are keyboard-navigable; focus rings use the brand brass colour.
- Colour swatches expose `aria-label` and `aria-pressed`; size selectors use `aria-pressed` too.
- Mobile menu uses a full-screen overlay with focus management.
- Cart sheet is a Radix `Dialog` with proper portal, overlay and escape handling.
- All animations are `motion-safe:` only — `prefers-reduced-motion` is respected globally.

---

## SEO

- Per-page metadata (title, description, OG).
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt`.
- JSON-LD: Organization on root layout, Product on every PDP.
- Canonical URLs via `metadataBase` in the root layout.

---

## Deploy (Vercel)

1. Push to a GitHub repo.
2. Import into Vercel.
3. Add any optional env variables under Project Settings → Environment Variables.
4. Trigger a deploy — no other configuration required.

---

## Voice & visual

See [BRAND.md](./BRAND.md). In short: **quiet luxury, not loud**. Editorial, not retail. British English. INR.
