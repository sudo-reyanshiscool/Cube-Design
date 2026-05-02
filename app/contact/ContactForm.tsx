"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    console.info("[V-CUBE] Contact form", data);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-ink/15 p-10 bg-bone-alt">
        <p className="label mb-3">Received</p>
        <h2 className="font-display text-display-md mb-3">Thank you for writing.</h2>
        <p className="text-ink/75">A real person from the atelier will reply within one working day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handle} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <label className="block">
        <span className="label">Name *</span>
        <input name="name" required className="mt-2 w-full bg-transparent border-b border-ink/30 py-3 focus:outline-none focus:border-ink" />
      </label>
      <label className="block">
        <span className="label">Email *</span>
        <input name="email" type="email" required className="mt-2 w-full bg-transparent border-b border-ink/30 py-3 focus:outline-none focus:border-ink" />
      </label>
      <fieldset className="md:col-span-2">
        <legend className="label mb-3">Reason for writing</legend>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {["General", "Care / replacement", "Gifting / wholesale", "Press"].map((r) => (
            <label key={r} className="inline-flex items-center gap-2">
              <input type="radio" name="reason" value={r} defaultChecked={r === "General"} className="accent-ink" />
              {r}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="block md:col-span-2">
        <span className="label">Message *</span>
        <textarea name="message" required rows={6} className="mt-2 w-full bg-transparent border border-ink/20 p-4 focus:outline-none focus:border-ink resize-none" />
      </label>
      <button type="submit" disabled={submitting} className="btn-primary md:col-span-2 mt-1">
        {submitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
