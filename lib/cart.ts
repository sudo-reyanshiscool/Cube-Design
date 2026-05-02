"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface CartLine {
  id: string;
  slug: string;
  name: string;
  colour: string;
  size?: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CartState {
  lines: CartLine[];
  isOpen: boolean;
  hydrated: boolean;
  setHydrated: (v: boolean) => void;
  open: () => void;
  close: () => void;
  toggle: () => void;
  add: (line: Omit<CartLine, "id" | "quantity"> & { quantity?: number }) => void;
  remove: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clear: () => void;
}

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      lines: [],
      isOpen: false,
      hydrated: false,
      setHydrated: (v) => set({ hydrated: v }),
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      toggle: () => set((s) => ({ isOpen: !s.isOpen })),
      add: (line) =>
        set((s) => {
          const id = `${line.slug}::${line.colour}::${line.size ?? "-"}`;
          const existing = s.lines.find((l) => l.id === id);
          if (existing) {
            return {
              lines: s.lines.map((l) =>
                l.id === id ? { ...l, quantity: l.quantity + (line.quantity ?? 1) } : l
              ),
              isOpen: true,
            };
          }
          return {
            lines: [
              ...s.lines,
              { ...line, id, quantity: line.quantity ?? 1 },
            ],
            isOpen: true,
          };
        }),
      remove: (id) => set((s) => ({ lines: s.lines.filter((l) => l.id !== id) })),
      updateQty: (id, qty) =>
        set((s) => ({
          lines: s.lines
            .map((l) => (l.id === id ? { ...l, quantity: Math.max(0, qty) } : l))
            .filter((l) => l.quantity > 0),
        })),
      clear: () => set({ lines: [] }),
    }),
    {
      name: "vcube-cart",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ lines: state.lines }),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    }
  )
);

export function cartSubtotal(lines: CartLine[]): number {
  return lines.reduce((sum, l) => sum + l.price * l.quantity, 0);
}

export function cartCount(lines: CartLine[]): number {
  return lines.reduce((sum, l) => sum + l.quantity, 0);
}
