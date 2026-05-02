import { cn } from "@/lib/format";

export function Placeholder({
  label,
  ratio = "4 / 3",
  className,
  tone = "warm",
}: {
  label: string;
  ratio?: string;
  className?: string;
  tone?: "warm" | "ink" | "navy" | "tan";
}) {
  const bg = {
    warm: "bg-[#E6DFD2]",
    ink: "bg-ink text-bone",
    navy: "bg-navy text-bone",
    tan: "bg-tan/80 text-bone",
  }[tone];
  return (
    <div
      data-placeholder="true"
      className={cn(
        "relative overflow-hidden border border-ink/8 grain",
        bg,
        className
      )}
      style={{ aspectRatio: ratio }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6">
        <span className="font-display text-2xl tracking-tight opacity-90">V-Cube</span>
        <span className="text-[0.65rem] tracking-[0.22em] uppercase opacity-50">
          {label}
        </span>
      </div>
      <div className="absolute inset-0 pointer-events-none border border-ink/10" aria-hidden="true" />
    </div>
  );
}
