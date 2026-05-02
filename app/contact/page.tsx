import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "./ContactForm";
import { brand } from "@/data/brand";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach the V-CUBE Designs atelier in Shahpur Jat, New Delhi. For care, replacements, gifting, wholesale and press.",
};

export default function ContactPage() {
  return (
    <Container className="py-12 lg:py-16">
      <header className="border-b border-ink/15 pb-10 mb-12 max-w-3xl">
        <p className="label mb-4">Contact</p>
        <h1 className="font-display text-display-lg leading-[1.05] text-balance">
          Write to us. We answer.
        </h1>
        <p className="mt-4 text-ink/75 max-w-xl leading-relaxed">
          For care, replacements, gifting, wholesale or press — the form below lands in our atelier inbox in Shahpur Jat.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5 space-y-10">
          <div>
            <p className="label mb-3">Atelier</p>
            <address className="not-italic text-base leading-relaxed">
              {brand.address.line1}<br />
              {brand.address.line2}<br />
              {brand.address.city} {brand.address.postcode}<br />
              {brand.address.country}
            </address>
          </div>

          <div>
            <p className="label mb-3">Telephone</p>
            <ul className="space-y-1">
              {brand.phones.map((p) => (
                <li key={p}><a className="hover:text-brass" href={`tel:${p.replace(/\s+/g, "")}`}>{p}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label mb-3">Email</p>
            <a className="hover:text-brass" href={`mailto:${brand.email}`}>{brand.email}</a>
          </div>

          <div>
            <p className="label mb-3">Hours</p>
            <p className="text-base">Monday — Saturday, 10:00 — 18:30 IST</p>
          </div>

          <div className="border border-ink/15 aspect-[4/3] flex items-center justify-center text-center">
            <iframe
              title="Map to atelier"
              src="https://www.google.com/maps?q=Shahpur+Jat+New+Delhi+110049&output=embed"
              className="w-full h-full grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
