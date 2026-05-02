import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Accordion } from "@/components/commerce/Accordion";
import { Placeholder } from "@/components/commerce/Placeholder";
import { ProductCard } from "@/components/commerce/ProductCard";
import { products, getProduct } from "@/data/products";
import { brand } from "@/data/brand";
import { ProductBuyPanel } from "./ProductBuyPanel";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = getProduct(params.slug);
  if (!product) return { title: "Not found" };
  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} — V-CUBE Designs`,
      description: product.shortDescription,
      type: "website",
    },
  };
}

export default function ProductPage({ params }: Props) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const related = (product.pairsWith ?? [])
    .map((s) => products.find((p) => p.slug === s))
    .filter(Boolean) as typeof products;

  const includes = (product.includes ?? [])
    .map((s) => products.find((p) => p.slug === s))
    .filter(Boolean) as typeof products;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    brand: { "@type": "Brand", name: brand.name },
    category: product.category,
    material: product.material,
    image: [`https://www.vcubedesigns.com/products/${product.slug}/01.jpg`],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: product.fromPrice ?? 0,
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: brand.name },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container className="pt-8 lg:pt-12 pb-24">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap gap-2 text-[0.7rem] tracking-[0.18em] uppercase text-ink/55">
            <li><Link href="/" className="hover:text-ink">Home</Link></li>
            <li aria-hidden>/</li>
            <li><Link href="/shop" className="hover:text-ink">Shop</Link></li>
            <li aria-hidden>/</li>
            <li><Link href={`/shop?category=${product.category}`} className="hover:text-ink">{product.category}</Link></li>
            <li aria-hidden>/</li>
            <li className="text-ink">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="lg:col-span-7 lg:flex lg:gap-4">
            <ol className="hidden lg:flex flex-col gap-3 w-20 shrink-0">
              {Array.from({ length: product.imageCount }).map((_, i) => (
                <li key={i}>
                  <Placeholder label={`thumb ${i + 1}`} ratio="1 / 1" />
                </li>
              ))}
            </ol>
            <div className="flex-1 space-y-4">
              <Placeholder label={`${product.name} — primary`} ratio="4 / 5" tone={product.category === "Sets" ? "navy" : "warm"} />
              <div className="grid grid-cols-2 gap-4">
                {Array.from({ length: Math.max(0, product.imageCount - 1) }).slice(0, 2).map((_, i) => (
                  <Placeholder key={i} label={`${product.name} — angle ${i + 1}`} ratio="1 / 1" />
                ))}
              </div>
              <div className="lg:hidden flex gap-3 overflow-x-auto pb-2">
                {Array.from({ length: product.imageCount }).map((_, i) => (
                  <div key={i} className="w-20 shrink-0">
                    <Placeholder label={`thumb ${i + 1}`} ratio="1 / 1" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Buy panel */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 space-y-7">
              <div>
                <p className="label mb-4">{product.category}{product.bestSeller ? " · Bestseller" : ""}</p>
                <h1 className="font-display text-display-lg leading-[1.05] text-balance">{product.name}</h1>
                {product.blurb && <p className="mt-3 font-display text-2xl text-ink/70 italic">{product.blurb}</p>}
                <p className="mt-5 text-base text-ink/80 leading-relaxed text-pretty">
                  {product.description}
                </p>
              </div>

              <ProductBuyPanel product={product} />

              <ul className="grid grid-cols-3 gap-3 pt-4 border-t border-ink/15">
                {[
                  "Handcrafted in India",
                  "Cruelty-free",
                  "Free shipping over ₹2,000",
                ].map((b) => (
                  <li key={b} className="text-[0.65rem] tracking-[0.18em] uppercase text-ink/65 leading-snug">
                    {b}
                  </li>
                ))}
              </ul>

              <Accordion
                items={[
                  {
                    value: "details",
                    title: "Details",
                    content: (
                      <div className="space-y-3">
                        <p>{product.description}</p>
                        {includes.length > 0 && (
                          <>
                            <p className="font-medium pt-2">Includes:</p>
                            <ul className="list-disc pl-5 space-y-1">
                              {includes.map((i) => (
                                <li key={i.slug}>
                                  <Link href={`/product/${i.slug}`} className="underline-offset-4 hover:underline">
                                    {i.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    ),
                  },
                  {
                    value: "materials",
                    title: "Materials & Care",
                    content: (
                      <div className="space-y-3">
                        <p><span className="font-medium">Material:</span> {product.material}</p>
                        <p><span className="font-medium">Care:</span> {brand.care}</p>
                      </div>
                    ),
                  },
                  ...(product.sizes
                    ? [
                        {
                          value: "dimensions",
                          title: "Dimensions",
                          content: (
                            <ul className="space-y-2">
                              {product.sizes.map((s) => (
                                <li key={s.label} className="flex justify-between border-b border-ink/10 pb-2">
                                  <span>{s.label}</span>
                                  <span className="text-ink/70">
                                    {s.dimensions}{s.thickness ? ` · ${s.thickness}` : ""}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          ),
                        },
                      ]
                    : []),
                  {
                    value: "shipping",
                    title: "Shipping & Returns",
                    content: (
                      <div className="space-y-3">
                        <p>Free shipping across India on orders over ₹2,000. Standard delivery in 5–8 working days from our atelier in Shahpur Jat, New Delhi.</p>
                        <p>30-day returns on unused items in original packaging. Bespoke and corporate-gifting orders are non-returnable.</p>
                      </div>
                    ),
                  },
                ]}
                defaultValue="details"
              />
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-24 pt-16 border-t border-ink/15">
            <p className="label mb-3">Pairs well with</p>
            <h2 className="font-display text-display-md mb-12 text-balance max-w-2xl">
              A composition begins with one object, then another.
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {related.slice(0, 3).map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </section>
        )}
      </Container>

      {/* Mobile sticky bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-bone border-t border-ink/15 px-5 py-3 flex items-center justify-between gap-4">
        <p className="text-sm">
          <span className="font-medium">{product.name}</span>{" "}
          <span className="text-ink/60">
            {product.fromPrice ? `from ₹${product.fromPrice.toLocaleString("en-IN")}` : "Enquire"}
          </span>
        </p>
        <a href="#buy-panel" className="btn-primary text-xs px-4 py-2.5">Add to Bag</a>
      </div>
    </>
  );
}
