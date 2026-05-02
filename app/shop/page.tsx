import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/layout/Container";
import { ShopView } from "./ShopView";

export const metadata: Metadata = {
  title: "Shop — Desk, Home & Sets",
  description:
    "Handcrafted vegan leather desk mats, valet trays, pen holders, mobile stands, coasters, placemats and complete sets from V-CUBE Designs.",
};

export default function ShopPage() {
  return (
    <Suspense fallback={<ShopFallback />}>
      <ShopView />
    </Suspense>
  );
}

function ShopFallback() {
  return (
    <Container className="py-12 lg:py-16">
      <header className="border-b border-ink/15 pb-10 mb-12">
        <p className="label mb-4">Shop</p>
        <h1 className="font-display text-display-lg leading-[1.05] text-balance max-w-3xl">
          A small catalogue, repeated until it earned its place.
        </h1>
      </header>
      <p className="label">Loading the catalogue…</p>
    </Container>
  );
}
