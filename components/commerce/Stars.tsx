import { Star } from "lucide-react";
import { cn } from "@/lib/format";

export function Stars({
  value,
  reviewCount,
  size = "sm",
  className,
  showCount = true,
}: {
  value: number;
  reviewCount?: number;
  size?: "xs" | "sm" | "md";
  className?: string;
  showCount?: boolean;
}) {
  const dim = size === "xs" ? "h-2.5 w-2.5" : size === "md" ? "h-3.5 w-3.5" : "h-3 w-3";
  const text = size === "xs" ? "text-[0.65rem]" : size === "md" ? "text-xs" : "text-[0.7rem]";
  return (
    <div className={cn("inline-flex items-center gap-1.5", className)} aria-label={`${value} stars from ${reviewCount ?? 0} reviews`}>
      <span className="inline-flex items-center gap-px text-brass">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(dim, i < Math.round(value) ? "fill-brass" : "fill-none stroke-brass/40")}
            strokeWidth={1.5}
          />
        ))}
      </span>
      {showCount && reviewCount && (
        <span className={cn(text, "tracking-wide text-ink/65")}>
          {value.toFixed(1)} · {formatCount(reviewCount)}
        </span>
      )}
    </div>
  );
}

function formatCount(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k`;
  return String(n);
}
