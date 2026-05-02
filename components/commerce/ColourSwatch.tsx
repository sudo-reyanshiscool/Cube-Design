"use client";

import { tokens, type ColourName } from "@/tokens";
import { cn } from "@/lib/format";

interface Props {
  colour: ColourName;
  active?: boolean;
  size?: "sm" | "md" | "lg";
  onSelect?: (colour: ColourName) => void;
  asLabel?: boolean;
  ariaLabel?: string;
}

export function ColourSwatch({ colour, active, size = "md", onSelect, asLabel, ariaLabel }: Props) {
  const dim = size === "sm" ? "h-3.5 w-3.5" : size === "lg" ? "h-7 w-7" : "h-5 w-5";
  const hex = tokens.swatches[colour];

  const swatch = (
    <span
      className={cn(
        "inline-block rounded-full border border-ink/25",
        dim,
        active && "ring-1 ring-offset-2 ring-offset-bone ring-ink"
      )}
      style={{ backgroundColor: hex }}
      aria-hidden="true"
    />
  );

  if (asLabel || !onSelect) {
    return (
      <span className="inline-flex items-center" title={colour} aria-label={ariaLabel ?? colour}>
        {swatch}
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onSelect(colour)}
      aria-label={ariaLabel ?? `Select colour ${colour}`}
      aria-pressed={active}
      className="p-1 -m-1 cursor-pointer"
    >
      {swatch}
    </button>
  );
}

export function ColourSwatchGroup({
  colours,
  selected,
  onSelect,
  size,
  showLabel,
}: {
  colours: ColourName[];
  selected?: ColourName;
  onSelect?: (c: ColourName) => void;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {colours.map((c) => (
        <ColourSwatch key={c} colour={c} active={selected === c} onSelect={onSelect} size={size} />
      ))}
      {showLabel && selected && (
        <span className="ml-2 text-[0.7rem] tracking-[0.18em] uppercase text-ink/70">
          {selected}
        </span>
      )}
    </div>
  );
}
