import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { journal } from "@/data/journal";

const BASE = "https://www.vcubedesigns.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/shop",
    "/the-material",
    "/journal",
    "/gifting",
    "/contact",
    "/cart",
  ];
  const now = new Date();
  return [
    ...staticRoutes.map((r) => ({
      url: `${BASE}${r}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: r === "" ? 1 : 0.7,
    })),
    ...products.map((p) => ({
      url: `${BASE}/product/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...journal.map((a) => ({
      url: `${BASE}/journal/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
