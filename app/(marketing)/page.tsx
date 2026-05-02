import Link from "next/link";
import { Hero } from "@/components/editorial/Hero";
import { Container } from "@/components/layout/Container";
import { Placeholder } from "@/components/commerce/Placeholder";
import { ProductCard } from "@/components/commerce/ProductCard";
import { SectionHeader } from "@/components/editorial/SectionHeader";
import { LifestyleStrip } from "@/components/editorial/LifestyleStrip";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { Ticker } from "@/components/motion/Ticker";
import { products, getProduct } from "@/data/products";
import { journal } from "@/data/journal";
import { brand } from "@/data/brand";

const triptych = [
  {
    href: "/shop?category=Desk",
    eyebrow: "Desk",
    title: "Mats, mouse pads, mobile stands.",
    tone: "warm" as const,
    no: "01",
  },
  {
    href: "/shop?category=Home",
    eyebrow: "Home",
    title: "Trays, coasters, placemats, tissue.",
    tone: "navy" as const,
    no: "02",
  },
  {
    href: "/shop?category=Sets",
    eyebrow: "Sets",
    title: "Compositions, considered together.",
    tone: "tan" as const,
    no: "03",
  },
];

export default function HomePage() {
  const featured = getProduct("executive-v-cube-set");
  const bestsellers = ["desk-mat-stitched", "valet-tray", "tissue-holder", "mobile-stand"]
    .map((s) => products.find((p) => p.slug === s))
    .filter(Boolean) as typeof products;

  return (
    <>
      <Hero />

      <Ticker />

      {/* Category triptych */}
      <section className="py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="The catalogue"
              title="Three rooms, one language."
              intro="We design across the desk and the home using a single material vocabulary — so a tray on the dresser belongs to the same family as the mat on the desk."
            />
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {triptych.map((card, i) => (
              <StaggerItem key={card.eyebrow}>
                <Link
                  href={card.href}
                  data-cursor="hover"
                  className={`group relative block overflow-hidden ${i === 1 ? "md:translate-y-8" : ""}`}
                >
                  <div className="transition-transform duration-700 ease-editorial group-hover:scale-[1.04]">
                    <Placeholder label={`Category — ${card.eyebrow}`} ratio="3 / 4" tone={card.tone} />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-bone">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="label-light mb-2">{card.eyebrow}</p>
                        <p className="font-display text-2xl leading-tight max-w-[16ch]">{card.title}</p>
                      </div>
                      <span className="font-display text-3xl text-bone/60">{card.no}</span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* Featured: Executive set */}
      {featured && (
        <section className="bg-ink text-bone py-24 lg:py-32 grain relative">
          <span className="hidden lg:block absolute right-6 top-12 vrt-label text-bone/35">
            Featured composition · Nº 03
          </span>
          <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative">
            <Reveal className="lg:col-span-7 order-2 lg:order-1">
              <Placeholder label="Executive V-Cube Set — flat lay" ratio="5 / 4" tone="navy" />
            </Reveal>
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
              <Reveal delay={0}>
                <p className="label-light">Featured composition</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-display text-display-lg leading-[1.05] text-balance">
                  The Executive V-Cube Set.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-bone/75 leading-relaxed text-pretty">
                  Six considered objects, drawn as one — the Stitched Desk Mat, Valet Tray, Coaster set, Tissue Holder, Mobile Stand and Pen Holder. Arrives boxed, ready to gift.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Magnetic>
                    <Link
                      href={`/product/${featured.slug}`}
                      data-cursor="hover"
                      className="btn bg-bone text-ink hover:bg-bone-alt"
                    >
                      View the set
                    </Link>
                  </Magnetic>
                  <Magnetic>
                    <Link
                      href="/gifting"
                      data-cursor="hover"
                      className="btn border border-bone/40 text-bone hover:bg-bone hover:text-ink"
                    >
                      Corporate gifting
                    </Link>
                  </Magnetic>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>
      )}

      {/* The Material */}
      <section className="py-24 lg:py-32 relative">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionHeader
              eyebrow="Chapter 02 · The material"
              title={<>A vegan leather we trust on a real desk.</>}
              intro="A polyurethane-based faux leather over a fibre backing, finished with hand stitching over MDF cores or steel inserts. We chose it after two years of testing against real leather, recycled leather, cork and several plant-based alternatives."
            />
            <div className="mt-8 space-y-5">
              {[
                ["Stitched edge", "Hand-finished by artisans in Shahpur Jat."],
                ["6 mm MDF core", "Squareness that lasts beyond a season."],
                ["Wipe-clean", "A soft damp cloth and a quiet routine."],
              ].map(([t, b]) => (
                <div key={t} className="grid grid-cols-[140px_1fr] gap-4 border-t border-ink/15 pt-4">
                  <p className="label">{t}</p>
                  <p className="text-sm text-ink/80 leading-relaxed">{b}</p>
                </div>
              ))}
              <Magnetic>
                <Link href="/the-material" className="btn-outline mt-4" data-cursor="hover">
                  Read the full note
                </Link>
              </Magnetic>
            </div>
          </Reveal>
          <StaggerGroup className="lg:col-span-7 grid grid-cols-2 gap-4 lg:gap-6">
            <StaggerItem>
              <Placeholder label="Atelier — cutting table" ratio="4 / 5" tone="warm" className="mt-12" />
            </StaggerItem>
            <StaggerItem>
              <Placeholder label="Stitched edge — macro" ratio="4 / 5" tone="navy" />
            </StaggerItem>
            <StaggerItem>
              <Placeholder label="Tan mat in window light" ratio="4 / 5" tone="tan" />
            </StaggerItem>
            <StaggerItem>
              <Placeholder label="MDF core layer" ratio="4 / 5" tone="warm" className="mt-8" />
            </StaggerItem>
          </StaggerGroup>
        </Container>
      </section>

      {/* Bestseller carousel */}
      <section className="py-24 lg:py-28 bg-bone-alt border-y border-ink/10">
        <Container>
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
              <SectionHeader eyebrow="Chapter 03 · Bestsellers" title={<>Most-ordered, most repeated.</>} />
              <Link href="/shop" className="label hover:text-brass transition-colors underline-animate" data-cursor="hover">View all →</Link>
            </div>
          </Reveal>
          <StaggerGroup className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" staggerChildren={0.1}>
            {bestsellers.map((p) => (
              <StaggerItem key={p.slug}>
                <ProductCard product={p} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* Trust strip */}
      <section className="py-14 border-b border-ink/10">
        <Container>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {brand.trust.map((t) => (
              <StaggerItem key={t}>
                <p className="label">{t}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* Lifestyle strip */}
      <LifestyleStrip />

      {/* Journal teaser */}
      <section className="py-24 lg:py-32">
        <Container>
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
              <SectionHeader eyebrow="Chapter 04 · Journal" title={<>Notes from the atelier.</>} />
              <Link href="/journal" className="label hover:text-brass transition-colors underline-animate" data-cursor="hover">All articles →</Link>
            </div>
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10" staggerChildren={0.12}>
            {journal.map((a) => (
              <StaggerItem key={a.slug}>
                <Link href={`/journal/${a.slug}`} className="group block" data-cursor="hover">
                  <div className="overflow-hidden">
                    <div className="transition-transform duration-700 ease-editorial group-hover:scale-[1.04]">
                      <Placeholder label={`Journal — ${a.slug}`} ratio="4 / 3" tone="warm" />
                    </div>
                  </div>
                  <div className="pt-5 space-y-2">
                    <p className="label">{a.category} · {a.readingTime}</p>
                    <h3 className="font-display text-2xl leading-snug text-balance group-hover:text-brass transition-colors">
                      <span className="underline-animate">{a.title}</span>
                    </h3>
                    <p className="text-sm text-ink/75 leading-relaxed">{a.dek}</p>
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
