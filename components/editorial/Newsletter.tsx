"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    console.info("[V-CUBE] newsletter signup", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="space-y-3">
      <p className="label-light">Letters from the atelier</p>
      <p className="text-sm text-bone/70 max-w-xs leading-relaxed">
        New compositions, atelier notes and the occasional reader-only release. No discount nag.
      </p>
      <form onSubmit={handle} className="flex border-b border-bone/30 max-w-sm">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          aria-label="Email address"
          className="flex-1 bg-transparent py-3 text-sm placeholder:text-bone/40 text-bone focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="px-3 hover:text-brass transition-colors"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
      {submitted && (
        <p className="text-[0.72rem] tracking-[0.18em] uppercase text-brass">Thank you — see you in your inbox.</p>
      )}
    </div>
  );
}
