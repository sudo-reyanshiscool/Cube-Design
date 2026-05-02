import { cn } from "@/lib/format";
import type { ReactNode } from "react";

export function PullQuote({
  children,
  attribution,
  className,
}: {
  children: ReactNode;
  attribution?: string;
  className?: string;
}) {
  return (
    <figure className={cn("my-12 max-w-3xl", className)}>
      <blockquote className="font-display text-display-md italic leading-tight text-balance text-ink">
        “{children}”
      </blockquote>
      {attribution && (
        <figcaption className="mt-5 label">— {attribution}</figcaption>
      )}
    </figure>
  );
}
