"use client";

import Link from "next/link";
import type { Product } from "@/data/products";
import { Placeholder } from "./Placeholder";
import { ColourSwatch } from "./ColourSwatch";
import { Stars } from "./Stars";
import { formatPriceFrom, formatINR, discountPct } from "@/lib/format";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useCart } from "@/lib/cart";
import { ShoppingBag } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function ProductCard({
  product,
  priority,
  compact,
}: {
  product: Product;
  priority?: boolean;
  compact?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const reduce = useReducedMotion();
  const add = useCart((s) => s.add);
  void priority;

  const unitPrice = product.fromPrice ?? 0;
  const off = discountPct(product.mrp, product.fromPrice);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!unitPrice) return;
    add({
      slug: product.slug,
      name: product.name,
      colour: product.colours[0],
      size: product.sizes?.[0]?.label,
      price: unitPrice,
    });
  };

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor="hover"
    >
      <div className="relative overflow-hidden bg-bone-alt">
        <motion.div
          animate={reduce ? undefined : { scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.9, ease }}
        >
          <Placeholder
            label={`${product.name} — ${hovered ? "angle" : "front"}`}
            ratio="4 / 5"
            tone={product.category === "Sets" ? "navy" : "warm"}
            src={hovered && product.imageUrls?.[1] ? product.imageUrls[1] : product.imageUrl}
            priority={priority}
            sizes="(min-width: 1024px) 25vw, 50vw"
          />
        </motion.div>

        {/* Top-left badges stack */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {off !== null && (
            <span className="bg-[#8a1f1f] text-bone text-[0.6rem] tracking-[0.2em] uppercase px-2 py-1">
              {off}% off
            </span>
          )}
          {product.bestSeller && (
            <span className="bg-ink text-bone text-[0.6rem] tracking-[0.2em] uppercase px-2 py-1">
              Bestseller
            </span>
          )}
          {product.badges?.[0] && !product.bestSeller && (
            <span className="bg-bone text-ink text-[0.6rem] tracking-[0.2em] uppercase px-2 py-1 border border-ink/10">
              {product.badges[0]}
            </span>
          )}
        </div>

        {/* Top-right wishlist / stock */}
        {product.inStock && (
          <span className="absolute top-3 right-3 flex items-center gap-1.5 bg-bone/95 text-ink text-[0.6rem] tracking-[0.2em] uppercase px-2 py-1 border border-ink/10">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-700/80" />
            In stock
          </span>
        )}

        {/* Quick add overlay */}
        {unitPrice > 0 && (
          <motion.button
            type="button"
            onClick={handleQuickAdd}
            aria-label={`Quick add ${product.name} to bag`}
            className="absolute inset-x-3 bottom-3 bg-ink text-bone px-3 py-2.5 text-[0.7rem] tracking-[0.22em] uppercase flex items-center justify-center gap-2 hover:bg-ink-soft"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: hovered ? 0 : 24, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.4, ease }}
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Quick add
          </motion.button>
        )}
      </div>

      <motion.div
        className="pt-4 space-y-2"
        animate={reduce ? undefined : { y: hovered ? -2 : 0 }}
        transition={{ duration: 0.5, ease }}
      >
        <div className="flex items-baseline justify-between gap-3">
          <p className="text-[0.62rem] tracking-[0.22em] uppercase text-ink/55">
            {product.category}
          </p>
          {product.rating && product.reviewCount && (
            <Stars value={product.rating} reviewCount={product.reviewCount} size="xs" />
          )}
        </div>

        <h3 className={compact ? "font-display text-lg leading-tight" : "font-display text-xl leading-tight"}>
          <span className="underline-animate">{product.name}</span>
        </h3>

        <div className="flex items-center justify-between gap-3 pt-1">
          <div className="flex items-center gap-1.5">
            {product.colours.slice(0, 5).map((c) => (
              <ColourSwatch key={c} colour={c} size="sm" asLabel />
            ))}
            {product.colours.length > 5 && (
              <span className="text-[0.6rem] text-ink/50 ml-1">
                +{product.colours.length - 5}
              </span>
            )}
          </div>
          <div className="text-right whitespace-nowrap">
            {product.fromPrice ? (
              <>
                <p className="text-sm font-medium text-ink leading-tight">
                  <span className="text-[0.65rem] text-ink/55 mr-1 tracking-wider uppercase">from</span>
                  {formatINR(product.fromPrice)}
                </p>
                {product.mrp && off !== null && (
                  <p className="text-[0.7rem] text-ink/50 leading-tight mt-0.5">
                    <span className="line-through">{formatINR(product.mrp)}</span>
                  </p>
                )}
              </>
            ) : (
              <span className="text-ink/55 text-[0.7rem] tracking-widest uppercase">Enquire</span>
            )}
          </div>
        </div>

        {product.shipsIn && !compact && (
          <p className="text-[0.62rem] tracking-[0.18em] uppercase text-ink/55 pt-1">
            {product.shipsIn}
          </p>
        )}
      </motion.div>
    </Link>
  );
}
