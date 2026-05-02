"use client";

import Link from "next/link";
import type { Product } from "@/data/products";
import { Placeholder } from "./Placeholder";
import { ColourSwatch } from "./ColourSwatch";
import { formatPriceFrom } from "@/lib/format";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function ProductCard({ product, priority }: { product: Product; priority?: boolean }) {
  const [hovered, setHovered] = useState(false);
  const reduce = useReducedMotion();
  void priority;

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor="hover"
    >
      <div className="relative overflow-hidden">
        <motion.div
          animate={reduce ? undefined : { scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.9, ease }}
        >
          <Placeholder
            label={`${product.name} — ${hovered ? "angle" : "front"}`}
            ratio="4 / 5"
            tone={product.category === "Sets" ? "navy" : "warm"}
          />
        </motion.div>

        {product.badges?.[0] && (
          <span className="absolute top-3 left-3 bg-bone text-ink text-[0.6rem] tracking-[0.2em] uppercase px-2 py-1 border border-ink/10">
            {product.badges[0]}
          </span>
        )}

        {/* View overlay */}
        <motion.div
          className="absolute inset-x-3 bottom-3 bg-ink text-bone px-3 py-2 text-[0.65rem] tracking-[0.22em] uppercase flex items-center justify-between"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: hovered ? 0 : 20, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.45, ease }}
        >
          <span>View piece</span>
          <span aria-hidden>→</span>
        </motion.div>
      </div>

      <motion.div
        className="pt-4 flex items-start justify-between gap-4"
        animate={reduce ? undefined : { y: hovered ? -2 : 0 }}
        transition={{ duration: 0.5, ease }}
      >
        <div className="space-y-1.5">
          <p className="text-[0.65rem] tracking-[0.22em] uppercase text-ink/55">
            {product.category}
          </p>
          <h3 className="font-display text-xl leading-tight">
            <span className="underline-animate">{product.name}</span>
          </h3>
          <div className="flex items-center gap-1.5 pt-1">
            {product.colours.slice(0, 5).map((c) => (
              <ColourSwatch key={c} colour={c} size="sm" asLabel />
            ))}
            {product.colours.length > 5 && (
              <span className="text-[0.65rem] text-ink/50 ml-1">+{product.colours.length - 5}</span>
            )}
          </div>
        </div>
        <p className="text-sm text-ink/80 whitespace-nowrap pt-1">
          {formatPriceFrom(product.price, product.fromPrice)}
        </p>
      </motion.div>
    </Link>
  );
}
