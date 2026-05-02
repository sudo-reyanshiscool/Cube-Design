"use client";

import { cn } from "@/lib/format";
import type { ProductSize } from "@/data/products";

export function SizeSelector({
  sizes,
  selected,
  onSelect,
}: {
  sizes: ProductSize[];
  selected?: string;
  onSelect: (label: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((s) => {
        const active = selected === s.label;
        return (
          <button
            key={s.label}
            type="button"
            onClick={() => onSelect(s.label)}
            aria-pressed={active}
            className={cn(
              "px-4 py-2.5 text-[0.7rem] tracking-[0.18em] uppercase border transition-colors",
              active
                ? "border-ink bg-ink text-bone"
                : "border-ink/25 text-ink hover:border-ink"
            )}
          >
            <span className="block font-medium">{s.label}</span>
            <span className="block text-[0.62rem] mt-0.5 opacity-70 normal-case tracking-normal">
              {s.dimensions}
            </span>
          </button>
        );
      })}
    </div>
  );
}
