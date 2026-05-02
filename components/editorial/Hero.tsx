"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Placeholder } from "@/components/commerce/Placeholder";
import { Stars } from "@/components/commerce/Stars";
import { ColourSwatch } from "@/components/commerce/ColourSwatch";
import { Magnetic } from "@/components/motion/Magnetic";
import { SplitWords } from "@/components/motion/SplitWords";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getProduct } from "@/data/products";
import { formatINR } from "@/lib/format";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const featured = getProduct("desk-mat-stitched");
  const secondary = getProduct("executive-v-cube-set");

  return (
    <section className="relative bg-bone-alt overflow-hidden border-b border-ink/10">
      <span className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 vrt-label text-ink/40 z-10">
        Edition Nº 01 · Spring 2026
      </span>

      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch pt-14 pb-14 lg:pt-20 lg:pb-20 relative">
        {/* Copy column */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
          <motion.p
            className="label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Handcrafted · New Delhi · Since 2023
          </motion.p>
          <h1 className="font-display text-display-xl leading-[1.02] text-balance">
            <SplitWords text="The desk," delay={0.15} />
            <br />
            <SplitWords text="quietly composed." delay={0.4} />
          </h1>
          <motion.p
            className="text-base text-ink/75 leading-relaxed max-w-md text-pretty"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease }}
          >
            Premium vegan leather desk mats, valet trays, pen holders and full sets. Handcrafted in Shahpur Jat. Trusted by 100,000+ customers.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease }}
          >
            <Magnetic>
              <Link href="/shop" className="btn-primary" data-cursor="hover">
                Shop all <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href="/product/executive-v-cube-set" className="btn-outline" data-cursor="hover">
                The Executive Set
              </Link>
            </Magnetic>
          </motion.div>

          <motion.div
            className="flex items-center gap-6 pt-4 text-[0.7rem] tracking-[0.18em] uppercase text-ink/65"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="flex items-center gap-2">
              <Stars value={4.8} size="md" showCount={false} />
              <span>4.8 · 50k+ reviews</span>
            </div>
            <span aria-hidden className="text-ink/30">·</span>
            <span>28 states</span>
          </motion.div>
        </div>

        {/* Featured-product hero card */}
        {featured && (
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
          >
            <Link
              href={`/product/${featured.slug}`}
              data-cursor="hover"
              className="group relative block overflow-hidden bg-bone"
            >
              <div className="transition-transform duration-700 ease-editorial group-hover:scale-[1.02]">
                <Placeholder
                  label={`Hero — ${featured.name}, evening light`}
                  ratio="5 / 4"
                  tone="navy"
                />
              </div>

              {/* Featured product overlay panel */}
              <div className="absolute left-4 right-4 bottom-4 lg:left-6 lg:right-6 lg:bottom-6 bg-bone/95 backdrop-blur-sm border border-ink/10 p-5 lg:p-6 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 items-center">
                <div className="space-y-1.5">
                  <p className="label">Featured · {featured.category}</p>
                  <p className="font-display text-2xl lg:text-3xl leading-tight">
                    {featured.name}
                  </p>
                  <div className="flex items-center gap-3 pt-1">
                    {featured.rating && featured.reviewCount && (
                      <Stars value={featured.rating} reviewCount={featured.reviewCount} size="xs" />
                    )}
                    <div className="flex items-center gap-1.5">
                      {featured.colours.slice(0, 4).map((c) => (
                        <ColourSwatch key={c} colour={c} size="sm" asLabel />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-right space-y-2">
                  <p className="text-[0.62rem] tracking-[0.22em] uppercase text-ink/55">From</p>
                  <p className="font-display text-3xl lg:text-4xl leading-none">
                    {featured.fromPrice ? formatINR(featured.fromPrice) : "—"}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[0.62rem] tracking-[0.18em] uppercase text-ink/65">
                    {featured.shipsIn ?? "In stock"}
                  </span>
                </div>
              </div>
            </Link>

            {/* Secondary featured strip */}
            {secondary && (
              <Link
                href={`/product/${secondary.slug}`}
                data-cursor="hover"
                className="mt-3 lg:mt-4 group flex items-center justify-between gap-4 border border-ink/15 px-4 py-3 hover:bg-ink hover:text-bone transition-colors duration-500 ease-editorial"
              >
                <div className="flex items-center gap-3">
                  <span className="label group-hover:text-bone/80">Also new</span>
                  <span className="font-display text-base">{secondary.name}</span>
                </div>
                <span className="flex items-center gap-3 text-sm">
                  <span>from {secondary.fromPrice ? formatINR(secondary.fromPrice) : "—"}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            )}
          </motion.div>
        )}
      </Container>

      <span className="absolute -bottom-px left-1/2 -translate-x-1/2 w-32 h-px bg-ink/40" aria-hidden />
    </section>
  );
}
