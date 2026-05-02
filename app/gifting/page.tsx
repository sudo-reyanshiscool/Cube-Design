import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Placeholder } from "@/components/commerce/Placeholder";
import { GiftingForm } from "./GiftingForm";

export const metadata: Metadata = {
  title: "Gifting & Wholesale",
  description:
    "Corporate gifting and bulk orders from V-CUBE Designs. Compose desk sets for teams, clients and milestones, with deboss, colour-match and monogrammed packaging.",
};

const tiers = [
  { range: "25–100", label: "Boutique" },
  { range: "100–500", label: "Mid-volume" },
  { range: "500–5,000", label: "Programme" },
];

export default function GiftingPage() {
  return (
    <>
      <section className="bg-ink text-bone py-20 lg:py-28 grain">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end relative">
          <div className="lg:col-span-6 space-y-6">
            <p className="label-light">Corporate gifting</p>
            <h1 className="font-display text-display-xl leading-[1.04] text-balance text-bone">
              The gift that gets used on a Tuesday.
            </h1>
            <p className="text-lg text-bone/75 leading-relaxed max-w-md">
              Considered desk objects for teams, clients and milestones. Compose a set, deboss the box, ship across India in eight working days.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#enquiry" className="btn bg-bone text-ink hover:bg-bone-alt">Start an enquiry</a>
              <Link href="/product/executive-v-cube-set" className="btn border border-bone/40 text-bone hover:bg-bone hover:text-ink">
                View the Executive Set
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <Placeholder label="Gifting hero — boxed sets" ratio="5 / 4" tone="navy" />
          </div>
        </Container>
      </section>

      <Container className="py-20 lg:py-24 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
        {tiers.map((t) => (
          <div key={t.label} className="border-t border-ink pt-5">
            <p className="label mb-3">{t.label}</p>
            <p className="font-display text-display-md leading-none">{t.range}</p>
            <p className="mt-2 text-sm text-ink/70">units per programme</p>
          </div>
        ))}
      </Container>

      <Container className="pb-24 lg:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5 space-y-5">
          <p className="label">What we offer</p>
          <h2 className="font-display text-display-md text-balance">A small, considered set of choices.</h2>
          <ul className="space-y-3 text-sm text-ink/85 leading-relaxed">
            {[
              "Colour-matched leather across mat, tray, holder and coasters",
              "Blind deboss or foil on the inside of the gift box",
              "Monogrammed paper sleeves, ribbon-tied",
              "Bilingual care card in English and Hindi",
              "Eight-working-day production from sign-off",
              "Pan-India distribution with named-recipient shipping",
            ].map((line) => (
              <li key={line} className="flex gap-3 border-t border-ink/10 pt-3">
                <span className="text-brass mt-1">·</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-7 grid grid-cols-2 gap-4">
          <Placeholder label="Box — open with set" ratio="4 / 5" tone="warm" />
          <Placeholder label="Deboss detail" ratio="4 / 5" tone="navy" className="mt-12" />
          <Placeholder label="Monogrammed sleeve" ratio="4 / 5" tone="tan" className="mt-8" />
          <Placeholder label="Care card" ratio="4 / 5" tone="warm" />
        </div>
      </Container>

      <section id="enquiry" className="bg-bone-alt border-t border-ink/10 py-20 lg:py-24">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 space-y-4">
            <p className="label">Brief</p>
            <h2 className="font-display text-display-md text-balance">Tell us a little. We will reply within a day.</h2>
            <p className="text-ink/75 leading-relaxed">
              The brief takes a minute. We do not hand it to a sales engine — it lands with our gifting team in Shahpur Jat.
            </p>
          </div>
          <div className="lg:col-span-7">
            <GiftingForm />
          </div>
        </Container>
      </section>
    </>
  );
}
