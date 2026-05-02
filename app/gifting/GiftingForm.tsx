"use client";

import { useState } from "react";

export function GiftingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    console.info("[V-CUBE] Gifting enquiry", data);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-ink/15 p-10 text-center bg-bone">
        <p className="label mb-3">Thank you</p>
        <h3 className="font-display text-display-md mb-3">We will write back within a day.</h3>
        <p className="text-ink/75">Until then, our gifting team is reviewing the brief from Shahpur Jat.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handle} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Field label="Name" name="name" required />
      <Field label="Company" name="company" />
      <Field label="Email" name="email" type="email" required />
      <Field label="Phone" name="phone" type="tel" />
      <Field
        label="Volume"
        name="volume"
        as="select"
        options={["25–100", "100–500", "500–5,000", "5,000+"]}
      />
      <Field
        label="Occasion"
        name="occasion"
        as="select"
        options={[
          "New employee welcome",
          "Client appreciation",
          "Annual milestone",
          "Conference / event",
          "Other",
        ]}
      />
      <div className="md:col-span-2">
        <Field label="A short brief" name="brief" as="textarea" />
      </div>
      <button type="submit" disabled={submitting} className="btn-primary md:col-span-2 mt-2">
        {submitting ? "Sending…" : "Send brief"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  as = "input",
  options,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: "input" | "textarea" | "select";
  options?: string[];
}) {
  return (
    <label className="block">
      <span className="label">{label}{required && " *"}</span>
      {as === "input" && (
        <input
          name={name}
          type={type}
          required={required}
          className="mt-2 w-full bg-transparent border-b border-ink/30 py-3 text-base focus:outline-none focus:border-ink"
        />
      )}
      {as === "textarea" && (
        <textarea
          name={name}
          rows={4}
          required={required}
          className="mt-2 w-full bg-transparent border border-ink/20 p-4 text-base focus:outline-none focus:border-ink resize-none"
        />
      )}
      {as === "select" && options && (
        <select
          name={name}
          required={required}
          className="mt-2 w-full bg-transparent border-b border-ink/30 py-3 text-base focus:outline-none focus:border-ink"
        >
          <option value="">Select</option>
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      )}
    </label>
  );
}
