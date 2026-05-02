import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Placeholder } from "@/components/commerce/Placeholder";
import { PullQuote } from "@/components/editorial/PullQuote";
import { journal, getArticle } from "@/data/journal";

export function generateStaticParams() {
  return journal.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = getArticle(params.slug);
  if (!a) return { title: "Not found" };
  return {
    title: a.title,
    description: a.dek,
    openGraph: { title: a.title, description: a.dek, type: "article" },
  };
}

export default function JournalArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const others = journal.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <article>
      <Container className="pt-12 lg:pt-16 pb-12 max-w-3xl">
        <p className="label mb-4">{article.category} · {article.readingTime}</p>
        <h1 className="font-display text-display-xl leading-[1.04] text-balance">{article.title}</h1>
        <p className="mt-5 text-lg text-ink/75 leading-relaxed">{article.dek}</p>
      </Container>

      <Container className="mb-16 max-w-5xl">
        <Placeholder label={`Journal hero — ${article.slug}`} ratio="16 / 9" tone="navy" />
      </Container>

      <Container className="max-w-2xl pb-24">
        <div className="space-y-6">
          {article.body.map((b, i) => {
            if (b.type === "h2") {
              return (
                <h2 key={i} className="font-display text-display-md mt-12 text-balance">
                  {b.text}
                </h2>
              );
            }
            if (b.type === "pullquote") {
              return <PullQuote key={i}>{b.text}</PullQuote>;
            }
            return (
              <p key={i} className="text-base leading-relaxed text-ink/85">
                {b.text}
              </p>
            );
          })}
        </div>

        <div className="mt-16 pt-8 border-t border-ink/15 flex justify-between items-center text-sm">
          <Link href="/journal" className="label hover:text-brass">← All articles</Link>
          <Link href="/shop" className="label hover:text-brass">Shop the studio →</Link>
        </div>
      </Container>

      {others.length > 0 && (
        <section className="border-t border-ink/15 py-20 bg-bone-alt">
          <Container>
            <p className="label mb-10">Continue reading</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
              {others.map((a) => (
                <Link key={a.slug} href={`/journal/${a.slug}`} className="group">
                  <div className="overflow-hidden">
                    <div className="transition-transform duration-700 ease-editorial group-hover:scale-[1.025]">
                      <Placeholder label={`Journal — ${a.slug}`} ratio="4 / 3" tone="warm" />
                    </div>
                  </div>
                  <div className="pt-4 space-y-1.5">
                    <p className="label">{a.category}</p>
                    <h3 className="font-display text-2xl leading-snug group-hover:text-brass transition-colors">
                      {a.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </article>
  );
}
