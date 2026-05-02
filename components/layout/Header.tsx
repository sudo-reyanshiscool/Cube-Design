"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart, cartCount } from "@/lib/cart";

const nav = [
  { href: "/shop", label: "Shop" },
  { href: "/shop?category=Sets", label: "Sets" },
  { href: "/the-material", label: "The Material" },
  { href: "/journal", label: "Journal" },
  { href: "/gifting", label: "Gifting" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const lines = useCart((s) => s.lines);
  const hydrated = useCart((s) => s.hydrated);
  const open = useCart((s) => s.open);
  const count = hydrated ? cartCount(lines) : 0;

  return (
    <header className="sticky top-0 z-40 bg-bone/95 backdrop-blur-sm border-b border-ink/10">
      <div className="bg-ink text-bone">
        <Container className="flex justify-center items-center py-2 text-[0.7rem] tracking-[0.18em] uppercase">
          Free shipping across India on orders over ₹2,000
        </Container>
      </div>
      <Container className="flex items-center justify-between py-5 lg:py-6">
        <button
          type="button"
          className="lg:hidden -ml-1 p-1"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link href="/" aria-label="V-CUBE Designs home" className="lg:flex-1" data-cursor="hover">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-9 flex-1 justify-center" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              data-cursor="hover"
              className="text-[0.72rem] tracking-[0.2em] uppercase text-ink/85 hover:text-ink transition-colors underline-animate"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 lg:flex-1 lg:justify-end">
          <Link href="/shop" aria-label="Search" className="p-1 hover:text-brass transition-colors">
            <Search className="h-5 w-5" />
          </Link>
          <button
            type="button"
            onClick={open}
            aria-label={`Cart with ${count} items`}
            className="relative p-1 hover:text-brass transition-colors"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-ink text-bone text-[0.65rem] flex items-center justify-center tracking-normal">
                {count}
              </span>
            )}
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-bone lg:hidden">
          <div className="flex items-center justify-between px-5 py-5 border-b border-ink/10">
            <Logo />
            <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col px-5 py-8 gap-6" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-display tracking-tight"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
