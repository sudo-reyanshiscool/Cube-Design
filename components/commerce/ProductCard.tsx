"use client";

import Link from "next/link";
import type { Product } from "@/data/products";
import { Placeholder } from "./Placeholder";
import { ColourSwatch } from "./ColourSwatch";
import { formatPriceFrom } from "@/lib/format";
import { useState } from "react";

export function ProductCard({ product, priority }: { product: Product; priority?: boolean }) {
  const [hovered, setHovered] = useState(false);
  void priority;

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden">
        <div className="transition-transform duration-700 ease-editorial group-hover:scale-[1.025]">
          <Placeholder
            label={`${product.name} — ${hovered ? "angle" : "front"}`}
            ratio="4 / 5"
            tone={product.category === "Sets" ? "navy" : "warm"}
          />
        </div>
        {product.badges?.[0] && (
          <span className="absolute top-3 left-3 bg-bone text-ink text-[0.6rem] tracking-[0.2em] uppercase px-2 py-1 border border-ink/10">
            {product.badges[0]}
          </span>
        )}
      </div>
      <div className="pt-4 flex items-start justify-between gap-4">
        <div className="space-y-1.5">
          <p className="text-[0.65rem] tracking-[0.22em] uppercase text-ink/55">
            {product.category}
          </p>
          <h3 className="font-display text-xl leading-tight">{product.name}</h3>
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
      </div>
    </Link>
  );
}
