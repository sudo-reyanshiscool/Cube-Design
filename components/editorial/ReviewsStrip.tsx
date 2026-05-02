import { Stars } from "@/components/commerce/Stars";
import { Container } from "@/components/layout/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

const testimonials = [
  {
    quote: "The mat I have been waiting for. Stitching is genuinely beautiful and it does not slide on a glass desk.",
    author: "Aanya R.",
    location: "Bengaluru",
    product: "Desk Mat — Stitched, Tan",
    rating: 5,
  },
  {
    quote: "Bought the Executive Set as a gift for my CTO. He emailed the next morning. The box itself is the kind you keep.",
    author: "Vikram S.",
    location: "Mumbai",
    product: "Executive V-Cube Set, Navy",
    rating: 5,
  },
  {
    quote: "Three years on the same desk mat, daily. Still looks new. I order one for every new joiner now.",
    author: "Priya K.",
    location: "New Delhi",
    product: "Desk Mat — Stitched, Black",
    rating: 5,
  },
];

export function ReviewsStrip() {
  return (
    <section className="py-20 lg:py-24 border-y border-ink/10">
      <Container>
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <div className="space-y-3">
              <p className="label">Trusted at scale</p>
              <h2 className="font-display text-display-md leading-tight text-balance max-w-2xl">
                4.8 stars across 50,000+ verified reviews on Amazon.
              </h2>
            </div>
            <div className="flex items-center gap-6">
              <Stars value={4.8} size="md" showCount={false} />
              <div className="border-l border-ink/15 pl-6">
                <p className="font-display text-3xl leading-none">100k+</p>
                <p className="label mt-1">Happy customers</p>
              </div>
              <div className="border-l border-ink/15 pl-6 hidden md:block">
                <p className="font-display text-3xl leading-none">28</p>
                <p className="label mt-1">Indian states</p>
              </div>
            </div>
          </div>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" staggerChildren={0.1}>
          {testimonials.map((t) => (
            <StaggerItem key={t.author}>
              <article className="border border-ink/12 p-6 lg:p-7 h-full flex flex-col gap-5 bg-bone hover:border-ink/30 transition-colors duration-500">
                <Stars value={t.rating} size="sm" showCount={false} />
                <blockquote className="font-display text-xl leading-snug text-balance flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer className="space-y-1 pt-3 border-t border-ink/10">
                  <p className="text-sm font-medium">{t.author}</p>
                  <p className="text-[0.65rem] tracking-[0.18em] uppercase text-ink/55">
                    {t.location} · {t.product}
                  </p>
                </footer>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
