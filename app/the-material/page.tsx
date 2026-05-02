import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Placeholder } from "@/components/commerce/Placeholder";
import { PullQuote } from "@/components/editorial/PullQuote";
import { brand } from "@/data/brand";

export const metadata: Metadata = {
  title: "The Material",
  description:
    "On the vegan leather, the MDF cores, the artisans of Shahpur Jat, and how a desk object earns its place.",
};

export default function TheMaterialPage() {
  return (
    <>
      <section className="bg-bone-alt border-b border-ink/10">
        <Container className="py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7 space-y-6">
            <p className="label">The material</p>
            <h1 className="font-display text-display-xl leading-[1.02] text-balance">
              A small studio,<br />a steady material,<br />a long view.
            </h1>
            <p className="text-lg text-ink/75 leading-relaxed max-w-xl">
              {brand.story.long}
            </p>
          </div>
          <div className="lg:col-span-5">
            <Placeholder label="Atelier — overhead, hands at work" ratio="4 / 5" tone="warm" />
          </div>
        </Container>
      </section>

      <Container className="py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-3">
          <p className="label">Chapter one</p>
          <h2 className="font-display text-display-md text-balance">The Material.</h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-base leading-relaxed text-ink/85">
          <p>
            We use a polyurethane-based faux leather over a fibre backing. It takes a stitch cleanly, it wipes clean, it ages slowly, and it is consistent across batches. We did not pick the material that sounded best in a press release. We picked the one that lasted longest on a real desk.
          </p>
          <p>
            Beneath the leather, an MDF core engineered to 6 mm — square, dense, quiet. For the mobile stand, a steel insert wrapped in non-slip leather so a phone does not glide on a glass desk. The detail is small. The difference is daily.
          </p>
          <Placeholder label="Material lay-up — close" ratio="16 / 9" tone="navy" />
        </div>
      </Container>

      <PullQuote attribution="V-Cube Designs">
        We did not pick the material that sounded best. We picked the one that lasted longest on a real desk.
      </PullQuote>

      <Container className="pb-24 lg:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-3">
          <p className="label">Chapter two</p>
          <h2 className="font-display text-display-md">The Craft.</h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-base leading-relaxed text-ink/85">
          <p>
            Every object is cut, glued, lined and stitched by an artisan at our atelier in Shahpur Jat. A desk mat is touched by four pairs of hands before it is rolled and packed. We mark the maker on the inside of the box, not on the front of the product.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Placeholder label="Cutting — hand-marked" ratio="4 / 5" tone="warm" />
            <Placeholder label="Edge stitching" ratio="4 / 5" tone="navy" />
          </div>
        </div>
      </Container>

      <section className="bg-ink text-bone py-24 lg:py-32 grain">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">
          <div className="lg:col-span-5 space-y-3">
            <p className="label-light">Chapter three</p>
            <h2 className="font-display text-display-md text-bone">The Atelier.</h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-base leading-relaxed text-bone/85">
            <p>
              Shahpur Jat is an old village inside the city — narrow lanes, low rooftops, ateliers tucked above metalworkers and tailors. We took two floors of an unmarked building in 2023 and have not moved.
            </p>
            <Placeholder label="Atelier — exterior, evening" ratio="16 / 9" tone="navy" />
            <p className="font-display text-2xl text-bone leading-snug max-w-xl">
              {brand.founderNote}
            </p>
          </div>
        </Container>
      </section>

      <Container className="py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-3">
          <p className="label">Chapter four</p>
          <h2 className="font-display text-display-md">Sustainability.</h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-base leading-relaxed text-ink/85">
          <p>
            We do not believe the most useful thing a small workshop can do is shout about sustainability. We believe it is to make objects that last a decade, ship them in recycled paperboard, repair them when they need repair, and pay the artisans who make them properly.
          </p>
          <p>
            The honest gap is end-of-life. Faux leather is not yet compostable. We are following the work being done on plant-based polyurethanes and will move when the lifespan and finish meet the bar.
          </p>
          <Link href="/shop" className="btn-outline mt-2">Browse the catalogue</Link>
        </div>
      </Container>
    </>
  );
}
