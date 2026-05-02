import { cn } from "@/lib/format";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
  invert,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
  invert?: boolean;
}) {
  return (
    <header
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className={cn("mb-5", invert ? "label-light" : "label")}>{eyebrow}</p>
      )}
      <h2
        className={cn(
          "font-display text-display-md text-balance",
          invert && "text-bone"
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed text-pretty max-w-2xl",
            align === "center" && "mx-auto",
            invert ? "text-bone/80" : "text-ink/75"
          )}
        >
          {intro}
        </p>
      )}
    </header>
  );
}
