"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Placeholder } from "@/components/commerce/Placeholder";
import { useCart, cartSubtotal } from "@/lib/cart";
import { formatINR } from "@/lib/format";
import { brand } from "@/data/brand";
import { getProduct } from "@/data/products";
import { Minus, Plus } from "lucide-react";

export function CartView() {
  const lines = useCart((s) => s.lines);
  const updateQty = useCart((s) => s.updateQty);
  const remove = useCart((s) => s.remove);
  const hydrated = useCart((s) => s.hydrated);
  const [provider, setProvider] = useState<"stripe" | "razorpay">("razorpay");
  const [submitting, setSubmitting] = useState(false);

  const subtotal = cartSubtotal(lines);
  const remaining = Math.max(0, brand.shippingThreshold - subtotal);

  const handleCheckout = async () => {
    setSubmitting(true);
    if (provider === "stripe") {
      const hasKey = Boolean(process.env.NEXT_PUBLIC_STRIPE_ENABLED);
      console.info("[V-CUBE] Stripe checkout stub", { lines, subtotal, hasKey });
      alert(hasKey ? "Stripe checkout would launch here." : "Stripe is not configured. Add STRIPE_SECRET_KEY and STRIPE_PUBLISHABLE_KEY to enable.");
    } else {
      console.info("[V-CUBE] Razorpay checkout stub", { lines, subtotal });
      alert("Razorpay checkout stub — wire up server route to create an order.");
    }
    setSubmitting(false);
  };

  if (!hydrated) {
    return (
      <Container className="py-24">
        <p className="label">Loading your bag…</p>
      </Container>
    );
  }

  if (lines.length === 0) {
    return (
      <Container className="py-24 lg:py-32 text-center max-w-xl">
        <p className="label mb-6">Bag</p>
        <h1 className="font-display text-display-lg leading-[1.05] text-balance">
          Nothing here, yet.
        </h1>
        <p className="mt-5 text-ink/75">
          Begin with the Stitched Desk Mat or the Executive V-Cube Set — quietly considered, made to keep.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/shop" className="btn-primary">Visit the shop</Link>
          <Link href="/product/executive-v-cube-set" className="btn-outline">View the Set</Link>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-12 lg:py-16">
      <header className="border-b border-ink/15 pb-8 mb-12">
        <p className="label mb-3">Your bag</p>
        <h1 className="font-display text-display-lg leading-[1.05]">Review &amp; checkout.</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <ul className="lg:col-span-8 divide-y divide-ink/15">
          {lines.map((l) => (
            <li key={l.id} className="grid grid-cols-[100px_1fr_auto] gap-6 py-6 items-start">
              <Placeholder label={l.name} ratio="1 / 1" src={getProduct(l.slug)?.imageUrl} sizes="100px" />
              <div>
                <p className="font-display text-xl">{l.name}</p>
                <p className="label mt-1">{l.colour}{l.size ? ` · ${l.size}` : ""}</p>
                <div className="mt-4 inline-flex items-center border border-ink/25">
                  <button
                    type="button"
                    aria-label="Decrease"
                    onClick={() => updateQty(l.id, l.quantity - 1)}
                    className="p-2 hover:bg-ink/5"
                  >
                    <Minus className="h-3.5 w-3.5" />
                  </button>
                  <span className="w-10 text-center text-sm">{l.quantity}</span>
                  <button
                    type="button"
                    aria-label="Increase"
                    onClick={() => updateQty(l.id, l.quantity + 1)}
                    className="p-2 hover:bg-ink/5"
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => remove(l.id)}
                  className="ml-4 label hover:text-brass"
                >
                  Remove
                </button>
              </div>
              <p className="text-right">{formatINR(l.price * l.quantity)}</p>
            </li>
          ))}
        </ul>

        <aside className="lg:col-span-4 lg:sticky lg:top-28 self-start space-y-5 border border-ink/15 p-7">
          <h2 className="label">Summary</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>{formatINR(subtotal)}</span></div>
            <div className="flex justify-between text-ink/70">
              <span>Shipping</span>
              <span>{remaining > 0 ? "Calculated at checkout" : "Free"}</span>
            </div>
            <div className="flex justify-between text-ink/70">
              <span>Tax</span>
              <span>Included</span>
            </div>
          </div>
          <div className="border-t border-ink/15 pt-4 flex justify-between items-baseline">
            <p className="label">Total</p>
            <p className="font-display text-2xl">{formatINR(subtotal)}</p>
          </div>

          <fieldset className="space-y-2 pt-2">
            <legend className="label mb-2">Payment</legend>
            {[
              { value: "razorpay", label: "Razorpay · India" },
              { value: "stripe", label: "Stripe · International" },
            ].map((opt) => (
              <label key={opt.value} className="flex items-center gap-3 text-sm cursor-pointer">
                <input
                  type="radio"
                  name="provider"
                  value={opt.value}
                  checked={provider === opt.value}
                  onChange={() => setProvider(opt.value as "stripe" | "razorpay")}
                  className="accent-ink"
                />
                {opt.label}
              </label>
            ))}
          </fieldset>

          <button type="button" onClick={handleCheckout} disabled={submitting} className="btn-primary w-full">
            {submitting ? "One moment…" : "Proceed to checkout"}
          </button>
          <p className="text-[0.65rem] tracking-[0.18em] uppercase text-ink/55 leading-relaxed">
            Tax included. Shipping calculated at checkout.
          </p>
        </aside>
      </div>
    </Container>
  );
}
