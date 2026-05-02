"use client";

import { motion, useReducedMotion } from "framer-motion";

const facts = [
  "Est. 2023",
  "Shahpur Jat, New Delhi",
  "100,000+ customers",
  "28 states",
  "Hand-stitched edge",
  "6 mm MDF cores",
  "2.4 mm faux leather",
  "Wipes clean",
  "Made in India",
];

export function Ticker({ invert = false }: { invert?: boolean }) {
  const reduce = useReducedMotion();
  const items = [...facts, ...facts];
  const colorClass = invert ? "text-bone/80" : "text-ink/70";

  return (
    <div className={`overflow-hidden border-y ${invert ? "border-bone/15" : "border-ink/10"}`}>
      <motion.div
        className="flex gap-12 py-4 whitespace-nowrap"
        style={{ width: "max-content" }}
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={reduce ? undefined : { duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {items.map((f, i) => (
          <span
            key={`${f}-${i}`}
            className={`text-[0.7rem] tracking-[0.22em] uppercase ${colorClass} flex items-center gap-12`}
          >
            {f}
            <span aria-hidden className={invert ? "text-bone/40" : "text-ink/40"}>·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
