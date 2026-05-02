import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Placeholder } from "@/components/commerce/Placeholder";
import { journal } from "@/data/journal";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes from the V-CUBE Designs atelier — on materials, the desk, and the craft of corporate gifting.",
};

export default function JournalIndex() {
  const [lead, ...rest] = journal;
  return (
    <Container className="py-12 lg:py-16">
      <header className="border-b border-ink/15 pb-10 mb-12 max-w-3xl">
        <p className="label mb-4">Journal</p>
        <h1 className="font-display text-display-lg leading-[1.05] text-balance">
          Notes from the atelier — on material, on the desk, on the quiet craft of making.
        </h1>
      </header>

      {lead && (
        <Link href={`/journal/${lead.slug}`} className="group grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20">
          <div className="lg:col-span-7 overflow-hidden">
            <div className="transition-transform duration-700 ease-editorial group-hover:scale-[1.025]">
              <Placeholder label={`Journal — ${lead.slug}`} ratio="4 / 3" tone="warm" />
            </div>
          </div>
          <div className="lg:col-span-5 self-end space-y-4">
            <p className="label">{lead.category} · {lead.readingTime}</p>
            <h2 className="font-display text-display-md text-balance group-hover:text-brass transition-colors">{lead.title}</h2>
            <p className="text-ink/75 leading-relaxed">{lead.dek}</p>
            <p className="label">Read the article →</p>
          </div>
        </Link>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
        {rest.map((a) => (
          <Link key={a.slug} href={`/journal/${a.slug}`} className="group">
            <div className="overflow-hidden">
              <div className="transition-transform duration-700 ease-editorial group-hover:scale-[1.025]">
                <Placeholder label={`Journal — ${a.slug}`} ratio="4 / 3" tone={a.slug.includes("vegan") ? "navy" : "warm"} />
              </div>
            </div>
            <div className="pt-5 space-y-2">
              <p className="label">{a.category} · {a.readingTime}</p>
              <h3 className="font-display text-2xl leading-snug text-balance group-hover:text-brass transition-colors">{a.title}</h3>
              <p className="text-sm text-ink/75 leading-relaxed">{a.dek}</p>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
