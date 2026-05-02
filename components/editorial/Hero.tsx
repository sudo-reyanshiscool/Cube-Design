"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Placeholder } from "@/components/commerce/Placeholder";
import { Magnetic } from "@/components/motion/Magnetic";
import { SplitWords } from "@/components/motion/SplitWords";
import { Parallax } from "@/components/motion/Parallax";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative bg-bone-alt overflow-hidden border-b border-ink/10">
      {/* Vertical edition label */}
      <span className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 vrt-label text-ink/40 z-10">
        Edition Nº 01 · Spring 2026
      </span>

      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end pt-16 pb-20 lg:pt-24 lg:pb-28 relative">
        <div className="lg:col-span-5 space-y-7">
          <motion.p
            className="label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Founded 2023 · New Delhi
          </motion.p>
          <h1 className="font-display text-display-xl leading-[1.02] text-balance">
            <SplitWords text="Premium workspace essentials," delay={0.15} />
            <br />
            <SplitWords text="built to inspire." delay={0.45} />
          </h1>
          <motion.p
            className="text-lg text-ink/75 leading-relaxed max-w-md text-pretty"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease }}
          >
            Handcrafted vegan leather objects from our atelier in Shahpur Jat — a quiet, considered language for the desk and the home.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-3 pt-2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05, ease }}
          >
            <Magnetic>
              <Link href="/shop?category=Desk" className="btn-primary" data-cursor="hover">
                Shop Desk
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href="/shop?category=Sets" className="btn-outline" data-cursor="hover">
                Shop Sets
              </Link>
            </Magnetic>
          </motion.div>
          <motion.div
            className="pt-8 grid grid-cols-3 gap-4 text-[0.7rem] tracking-[0.18em] uppercase text-ink/65 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.25 }}
          >
            <div className="border-t border-ink/15 pt-3">100k+ customers</div>
            <div className="border-t border-ink/15 pt-3">28 states</div>
            <div className="border-t border-ink/15 pt-3">Made in India</div>
          </motion.div>
        </div>

        <div className="lg:col-span-7 lg:-mr-10">
          <Parallax offset={reduce ? 0 : 50}>
            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease }}
            >
              <Placeholder
                label="Hero — executive desk, evening light"
                ratio="5 / 4"
                tone="navy"
                className="lg:rounded-none"
              />
            </motion.div>
          </Parallax>
        </div>
      </Container>
    </section>
  );
}
