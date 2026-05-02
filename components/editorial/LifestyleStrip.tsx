import { Placeholder } from "@/components/commerce/Placeholder";

const slots = [
  "atelier-cutting-table",
  "warm-desk-evening",
  "valet-tray-detail",
  "stitched-edge-macro",
  "pen-holder-on-mat",
  "coaster-with-cup",
  "navy-mat-bookshelf",
  "tan-mat-window-light",
];

export function LifestyleStrip() {
  return (
    <div className="overflow-hidden border-y border-ink/10 py-12">
      <div className="flex gap-6 motion-safe:animate-marquee" style={{ width: "max-content" }}>
        {[...slots, ...slots].map((slot, i) => (
          <div key={`${slot}-${i}`} className="w-[320px] shrink-0">
            <Placeholder label={slot.replace(/-/g, " ")} ratio="3 / 4" tone={i % 3 === 0 ? "navy" : "warm"} />
          </div>
        ))}
      </div>
    </div>
  );
}
