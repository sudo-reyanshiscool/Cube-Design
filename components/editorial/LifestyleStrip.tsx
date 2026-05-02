"use client";

import { Placeholder } from "@/components/commerce/Placeholder";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

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
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  return (
    <div
      className="overflow-hidden border-y border-ink/10 py-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        className="flex gap-6"
        style={{ width: "max-content" }}
        animate={reduce ? undefined : { x: paused ? undefined : ["0%", "-50%"] }}
        transition={reduce ? undefined : { duration: 50, repeat: Infinity, ease: "linear" }}
      >
        {[...slots, ...slots].map((slot, i) => (
          <div key={`${slot}-${i}`} className="w-[320px] shrink-0">
            <Placeholder
              label={slot.replace(/-/g, " ")}
              ratio="3 / 4"
              tone={i % 3 === 0 ? "navy" : "warm"}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
