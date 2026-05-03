"use client";

import { useState } from "react";
import { ColourSwatchGroup } from "@/components/commerce/ColourSwatch";
import { SizeSelector } from "@/components/commerce/SizeSelector";
import { Magnetic } from "@/components/motion/Magnetic";
import { useCart } from "@/lib/cart";
import { formatINR, discountPct } from "@/lib/format";
import type { Product } from "@/data/products";
import type { ColourName } from "@/tokens";
import { Minus, Plus } from "lucide-react";

export function ProductBuyPanel({ product }: { product: Product }) {
  const [colour, setColour] = useState<ColourName>(product.colours[0]);
  const [size, setSize] = useState<string | undefined>(product.sizes?.[0]?.label);
  const [qty, setQty] = useState(1);
  const add = useCart((s) => s.add);

  const unitPrice = product.fromPrice ?? 0;
  const off = discountPct(product.mrp, product.fromPrice);

  const handleAdd = () => {
    if (!unitPrice) return;
    add({
      slug: product.slug,
      name: product.name,
      colour,
      size,
      price: unitPrice,
      quantity: qty,
    });
  };

  const handleBuyNow = () => {
    handleAdd();
    if (typeof window !== "undefined") window.location.href = "/cart";
  };

  return (
    <div id="buy-panel" className="space-y-6">
      <div className="flex items-baseline justify-between gap-4 flex-wrap">
        <div className="flex items-baseline gap-3 flex-wrap">
          <p className="font-display text-3xl">
            {unitPrice ? `from ${formatINR(unitPrice)}` : "Enquire for pricing"}
          </p>
          {product.mrp && off !== null && (
            <>
              <span className="text-ink/45 line-through text-lg">{formatINR(product.mrp)}</span>
              <span className="bg-[#8a1f1f] text-bone text-[0.65rem] tracking-[0.2em] uppercase px-2 py-1">
                Save {off}%
              </span>
            </>
          )}
        </div>
        {product.colourPairs && (
          <p className="label">{product.colourPairs.length} dual-tone pairs</p>
        )}
      </div>
      <p className="text-[0.65rem] tracking-[0.2em] uppercase text-ink/55">
        Inclusive of all taxes
      </p>

      <div>
        <p className="label mb-3">Colour · {colour}</p>
        <ColourSwatchGroup
          colours={product.colours}
          selected={colour}
          onSelect={setColour}
          size="lg"
        />
      </div>

      {product.sizes && (
        <div>
          <p className="label mb-3">Size</p>
          <SizeSelector sizes={product.sizes} selected={size} onSelect={setSize} />
        </div>
      )}

      <div>
        <p className="label mb-3">Quantity</p>
        <div className="inline-flex items-center border border-ink/25">
          <button
            type="button"
            onClick={() => setQty(Math.max(1, qty - 1))}
            aria-label="Decrease quantity"
            className="p-3 hover:bg-ink/5"
          >
            <Minus className="h-3.5 w-3.5" />
          </button>
          <span className="w-12 text-center text-sm">{qty}</span>
          <button
            type="button"
            onClick={() => setQty(qty + 1)}
            aria-label="Increase quantity"
            className="p-3 hover:bg-ink/5"
          >
            <Plus className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 pt-2">
        <Magnetic strength={0.2}>
          <button
            type="button"
            onClick={handleAdd}
            className="btn-primary w-full"
            disabled={!unitPrice}
            data-cursor="hover"
          >
            Add to Bag
          </button>
        </Magnetic>
        <Magnetic strength={0.2}>
          <button
            type="button"
            onClick={handleBuyNow}
            className="btn-outline w-full"
            disabled={!unitPrice}
            data-cursor="hover"
          >
            Buy Now
          </button>
        </Magnetic>
      </div>
    </div>
  );
}
