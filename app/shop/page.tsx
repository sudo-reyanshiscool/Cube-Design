import type { Metadata } from "next";
import { ShopView } from "./ShopView";

export const metadata: Metadata = {
  title: "Shop — Desk, Home & Sets",
  description:
    "Handcrafted vegan leather desk mats, valet trays, pen holders, mobile stands, coasters, placemats and complete sets from V-CUBE Designs.",
};

export default function ShopPage() {
  return <ShopView />;
}
