import Link from "next/link";
import { Hero } from "@/components/editorial/Hero";
import { Container } from "@/components/layout/Container";
import { Placeholder } from "@/components/commerce/Placeholder";
import { ProductCard } from "@/components/commerce/ProductCard";
import { SectionHeader } from "@/components/editorial/SectionHeader";
import { ReviewsStrip } from "@/components/editorial/ReviewsStrip";
import { LifestyleStrip } from "@/components/editorial/LifestyleStrip";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { Ticker } from "@/components/motion/Ticker";
import { products, getProduct } from "@/data/products";
import { journal } from "@/data/journal";
import { ArrowRight } from "lucide-react";

const categoryTiles = [
  { href: "/shop?category=Desk", eyebrow: "Desk", count: 4, tone: "warm" as const },
  { href: "/shop?category=Home", eyebrow: "Home", count: 4, tone: "navy" as const },
  { href: "/shop?category=Sets", eyebrow: "Sets", count: 1, tone: "tan" as const },
];

export default function HomePage() {
  const featured = getProduct("executive-v-cube-set");

  // Lead with the products people actually buy.
  const topPicks = [
    "desk-mat-stitched",
    "executive-v-cube-set",
    "valet-tray",
    "tissue-holder",
    "mobile-stand",
    "coaster-set",
  ]
    .map((s) => products.find((p) => p.slug === s))
    .filter(Boolean) as typeof products;

  const newArrivals = ["desk-mat-dual-color", "dining-table-placemats", "pen-holder", "mouse-pad"]
    .map((s) => products.find((p) => p.slug === s))
    .filter(Boolean) as typeof products;

  return (
    <>
      <Hero />

      <Ticker />

      {/* Shop by category — quick links */}
      <section className="py-10 lg:py-14 border-b border-ink/10">
        <Container>
          <StaggerGroup className="grid grid-cols-3 gap-3 lg:gap-5">
            {categoryTiles.map((c) => (
              <StaggerItem key={c.eyebrow}>
                <Link
                  href={c.href}
                  data-cursor="hover"
                  className="group relative block overflow-hidden border border-ink/10"
                >
                  <div className="transition-transform duration-700 ease-editorial group-hover:scale-[1.04]">
                    <Placeholder label={`Shop ${c.eyebrow}`} ratio="16 / 10" tone={c.tone} />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-3 lg:p-5 flex items-center justify-between text-bone">
                    <div>
                      <p className="label-light mb-0.5">{c.eyebrow}</p>
                      <p className="text-[0.7rem] tracking-[0.18em] uppercase text-bone/70">
                        Shop {c.count} {c.count === 1 ? "piece" : "pieces"}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* TOP PICKS — the big product grid above the fold */}
      <section className="py-20 lg:py-24">
        <Container>
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
              <div className="space-y-3">
                <p className="label">Most ordered</p>
                <h2 className="font-display text-display-md leading-tight text-balance">
                  The catalogue, by popularity.
                </h2>
              </div>
              <Magnetic>
                <Link href="/shop" className="btn-outline" data-cursor="hover">
                  Shop all 10 pieces <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Magnetic>
            </div>
          </Reveal>

          <StaggerGroup className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12 lg:gap-x-8" staggerChildren={0.08}>
            {topPicks.map((p) => (
              <StaggerItem key={p.slug}>
                <ProductCard product={p} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* Featured set — Executive V-Cube */}
      {featured && (
        <section className="bg-ink text-bone py-20 lg:py-28 grain relative">
          <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative">
            <Reveal className="lg:col-span-7">
              <Placeholder label="Executive V-Cube Set — flat lay" ratio="5 / 4" tone="navy" />
            </Reveal>
            <div className="lg:col-span-5 space-y-5">
              <Reveal><p className="label-light">Save 18% as a set</p></Reveal>
              <Reveal delay={0.05}>
                <h2 className="font-display text-display-lg leading-[1.05] text-balance">
                  Six pieces. One desk. <span className="italic text-bone/70">From ₹5,990.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="text-bone/75 leading-relaxed text-pretty">
                  The Stitched Desk Mat, Valet Tray, Coaster set, Tissue Holder, Mobile Stand and Pen Holder — composed in matched leather and stitched edges. Arrives boxed, ready to gift.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 pt-2 text-sm">
                  {[
                    "Mat 90 × 45 cm",
                    "Tray 30 × 20 cm",
                    "4 coasters + holder",
                    "Pen holder + stand",
                  ].map((line) => (
                    <li key={line} className="border-t border-bone/15 pt-2 text-bone/80 text-[0.75rem]">
                      {line}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Magnetic>
                    <Link
                      href={`/product/${featured.slug}`}
                      data-cursor="hover"
                      className="btn bg-bone text-ink hover:bg-bone-alt"
                    >
                      Shop the set <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </Magnetic>
                  <Magnetic>
                    <Link
                      href="/gifting"
                      data-cursor="hover"
                      className="btn border border-bone/40 text-bone hover:bg-bone hover:text-ink"
                    >
                      Bulk gifting
                    </Link>
                  </Magnetic>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>
      )}

      {/* New arrivals */}
      <section className="py-20 lg:py-24 bg-bone-alt border-y border-ink/10">
        <Container>
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
              <div className="space-y-3">
                <p className="label">Just landed</p>
                <h2 className="font-display text-display-md leading-tight text-balance">
                  New arrivals.
                </h2>
              </div>
              <Link href="/shop?sort=newest" className="label hover:text-brass underline-animate" data-cursor="hover">
                Shop new →
              </Link>
            </div>
          </Reveal>
          <StaggerGroup className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7" staggerChildren={0.1}>
            {newArrivals.map((p) => (
              <StaggerItem key={p.slug}>
                <ProductCard product={p} compact />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* Reviews / social proof */}
      <ReviewsStrip />

      {/* Why V-Cube — short, scannable, image right */}
      <section className="py-20 lg:py-24">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <Reveal>
              <p className="label">Why V-Cube</p>
              <h2 className="font-display text-display-md leading-tight text-balance mt-3">
                Premium build. Honest pricing. Made in Shahpur Jat.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-2">
                {[
                  ["2.4 mm leather", "Twice the thickness of fast-fashion mats."],
                  ["6 mm MDF cores", "Trays and holders that hold their square."],
                  ["Stitched edges", "Hand-finished — no fraying."],
                  ["Wipes clean", "Soft damp cloth, daily."],
                  ["Free shipping", "On orders over ₹2,000, anywhere in India."],
                  ["30-day returns", "Unused, in original packaging."],
                ].map(([t, b]) => (
                  <li key={t as string} className="border-t border-ink/12 pt-3">
                    <p className="label">{t}</p>
                    <p className="text-sm text-ink/75 leading-relaxed mt-1">{b}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.18}>
              <Magnetic>
                <Link href="/the-material" className="btn-outline mt-4" data-cursor="hover">
                  Read the material note
                </Link>
              </Magnetic>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-6">
            <Placeholder label="Atelier — stitched edge macro" ratio="4 / 5" tone="warm" />
          </Reveal>
        </Container>
      </section>

      {/* Lifestyle marquee */}
      <LifestyleStrip />

      {/* Journal — kept compact, lower on page */}
      <section className="py-20 lg:py-24">
        <Container>
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
              <SectionHeader eyebrow="Journal" title={<>Notes from the atelier.</>} />
              <Link href="/journal" className="label hover:text-brass underline-animate" data-cursor="hover">
                All articles →
              </Link>
            </div>
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10" staggerChildren={0.1}>
            {journal.map((a) => (
              <StaggerItem key={a.slug}>
                <Link href={`/journal/${a.slug}`} className="group block" data-cursor="hover">
                  <div className="overflow-hidden">
                    <div className="transition-transform duration-700 ease-editorial group-hover:scale-[1.04]">
                      <Placeholder label={`Journal — ${a.slug}`} ratio="4 / 3" tone="warm" />
                    </div>
                  </div>
                  <div className="pt-4 space-y-1.5">
                    <p className="label">{a.category} · {a.readingTime}</p>
                    <h3 className="font-display text-xl leading-snug text-balance group-hover:text-brass transition-colors">
                      <span className="underline-animate">{a.title}</span>
                    </h3>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>
    </>
  );
}
