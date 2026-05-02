"use client";

import { useState } from "react";
import { ColourSwatchGroup } from "@/components/commerce/ColourSwatch";
import { SizeSelector } from "@/components/commerce/SizeSelector";
import { useCart } from "@/lib/cart";
import { formatINR } from "@/lib/format";
import type { Product } from "@/data/products";
import type { ColourName } from "@/tokens";
import { Minus, Plus } from "lucide-react";

export function ProductBuyPanel({ product }: { product: Product }) {
  const [colour, setColour] = useState<ColourName>(product.colours[0]);
  const [size, setSize] = useState<string | undefined>(product.sizes?.[0]?.label);
  const [qty, setQty] = useState(1);
  const add = useCart((s) => s.add);

  const unitPrice = product.fromPrice ?? 0;

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
      <div className="flex items-baseline justify-between">
        <p className="font-display text-3xl">
          {unitPrice ? `from ${formatINR(unitPrice)}` : "Enquire for pricing"}
        </p>
        {product.colourPairs && (
          <p className="label">{product.colourPairs.length} dual-tone pairs</p>
        )}
      </div>

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
        <button type="button" onClick={handleAdd} className="btn-primary" disabled={!unitPrice}>
          Add to Bag
        </button>
        <button type="button" onClick={handleBuyNow} className="btn-outline" disabled={!unitPrice}>
          Buy Now
        </button>
      </div>
    </div>
  );
}
