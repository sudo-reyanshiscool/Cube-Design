"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useCart, cartSubtotal, cartCount } from "@/lib/cart";
import { formatINR } from "@/lib/format";
import { brand } from "@/data/brand";
import { Placeholder } from "./Placeholder";
import { X, Minus, Plus } from "lucide-react";
import Link from "next/link";

export function CartSheet() {
  const isOpen = useCart((s) => s.isOpen);
  const close = useCart((s) => s.close);
  const lines = useCart((s) => s.lines);
  const updateQty = useCart((s) => s.updateQty);
  const remove = useCart((s) => s.remove);
  const hydrated = useCart((s) => s.hydrated);

  const subtotal = cartSubtotal(lines);
  const count = cartCount(lines);
  const remaining = Math.max(0, brand.shippingThreshold - subtotal);
  const progress = Math.min(100, (subtotal / brand.shippingThreshold) * 100);

  return (
    <Dialog.Root open={isOpen} onOpenChange={(v) => !v && close()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-ink/40 z-50 data-[state=open]:animate-fade-up" />
        <Dialog.Content
          className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-bone shadow-xl flex flex-col focus:outline-none"
          aria-describedby={undefined}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-ink/10">
            <Dialog.Title className="text-[0.75rem] tracking-[0.22em] uppercase">
              Your bag {hydrated && count > 0 ? `(${count})` : ""}
            </Dialog.Title>
            <Dialog.Close aria-label="Close cart" className="p-1 hover:text-brass">
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>

          {hydrated && lines.length > 0 && (
            <div className="px-6 py-4 border-b border-ink/10">
              <div className="h-px bg-ink/10 relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 bg-brass" style={{ width: `${progress}%` }} />
              </div>
              <p className="mt-2 text-[0.7rem] tracking-[0.18em] uppercase text-ink/70">
                {remaining > 0
                  ? `Add ${formatINR(remaining)} for free shipping`
                  : "You've unlocked free shipping."}
              </p>
            </div>
          )}

          <div className="flex-1 overflow-y-auto px-6 py-6">
            {!hydrated || lines.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4">
                <p className="font-display text-3xl">Your bag is empty.</p>
                <p className="text-sm text-ink/70 max-w-xs">
                  Begin with the Stitched Desk Mat or our Executive V-Cube Set — quietly considered, made to keep.
                </p>
                <Dialog.Close asChild>
                  <Link href="/shop" className="btn-outline mt-2">Visit the shop</Link>
                </Dialog.Close>
              </div>
            ) : (
              <ul className="divide-y divide-ink/10">
                {lines.map((l) => (
                  <li key={l.id} className="flex gap-4 py-5">
                    <div className="w-20 shrink-0">
                      <Placeholder label={l.name} ratio="1 / 1" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium leading-tight">{l.name}</p>
                      <p className="text-[0.7rem] tracking-[0.18em] uppercase text-ink/60 mt-1">
                        {l.colour}{l.size ? ` · ${l.size}` : ""}
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="inline-flex items-center border border-ink/20">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={() => updateQty(l.id, l.quantity - 1)}
                            className="p-1.5 hover:bg-ink/5"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center text-sm">{l.quantity}</span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() => updateQty(l.id, l.quantity + 1)}
                            className="p-1.5 hover:bg-ink/5"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <p className="text-sm">{formatINR(l.price * l.quantity)}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(l.id)}
                        className="text-[0.65rem] tracking-[0.18em] uppercase text-ink/50 hover:text-ink mt-2"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {hydrated && lines.length > 0 && (
            <div className="border-t border-ink/10 px-6 py-5 space-y-4">
              <div className="flex justify-between items-baseline">
                <p className="text-[0.7rem] tracking-[0.2em] uppercase text-ink/70">Subtotal</p>
                <p className="font-display text-2xl">{formatINR(subtotal)}</p>
              </div>
              <p className="text-[0.7rem] tracking-[0.18em] uppercase text-ink/55">
                Tax included. Shipping calculated at checkout.
              </p>
              <Link href="/cart" onClick={close} className="btn-primary w-full">
                Checkout
              </Link>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
