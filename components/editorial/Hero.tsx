import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Placeholder } from "@/components/commerce/Placeholder";

export function Hero() {
  return (
    <section className="relative bg-bone-alt overflow-hidden border-b border-ink/10">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end pt-16 pb-20 lg:pt-24 lg:pb-28 relative">
        <div className="lg:col-span-5 space-y-7 motion-safe:animate-fade-up">
          <p className="label">Founded 2023 · New Delhi</p>
          <h1 className="font-display text-display-xl leading-[1.02] text-balance">
            Premium workspace essentials, built to inspire.
          </h1>
          <p className="text-lg text-ink/75 leading-relaxed max-w-md text-pretty">
            Handcrafted vegan leather objects from our atelier in Shahpur Jat — a quiet, considered language for the desk and the home.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/shop?category=Desk" className="btn-primary">Shop Desk</Link>
            <Link href="/shop?category=Sets" className="btn-outline">Shop Sets</Link>
          </div>
          <div className="pt-8 grid grid-cols-3 gap-4 text-[0.7rem] tracking-[0.18em] uppercase text-ink/65 max-w-md">
            <div className="border-t border-ink/15 pt-3">100k+ customers</div>
            <div className="border-t border-ink/15 pt-3">28 states</div>
            <div className="border-t border-ink/15 pt-3">Made in India</div>
          </div>
        </div>
        <div className="lg:col-span-7 lg:-mr-10 motion-safe:animate-fade-up [animation-delay:120ms]">
          <Placeholder label="Hero — executive desk, evening light" ratio="5 / 4" tone="navy" className="lg:rounded-none" />
        </div>
      </Container>
    </section>
  );
}
