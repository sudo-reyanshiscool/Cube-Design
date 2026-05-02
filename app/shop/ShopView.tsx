"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useMemo, useCallback } from "react";
import { Container } from "@/components/layout/Container";
import { ProductCard } from "@/components/commerce/ProductCard";
import { ColourSwatch } from "@/components/commerce/ColourSwatch";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { products } from "@/data/products";
import { tokens, type ColourName } from "@/tokens";
import { cn } from "@/lib/format";

const CATEGORIES: ("All" | "Desk" | "Home" | "Sets")[] = ["All", "Desk", "Home", "Sets"];
const ALL_COLOURS = Array.from(
  new Set(products.flatMap((p) => p.colours))
) as ColourName[];

const SIZE_GROUPS = ["Small", "Medium", "Large", "Standard", "Set"];

const SORTS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price · low to high" },
  { value: "price-desc", label: "Price · high to low" },
  { value: "newest", label: "Newest" },
];

export function ShopView() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const category = params.get("category") ?? "All";
  const selectedColours = (params.get("colour") ?? "")
    .split(",")
    .filter(Boolean) as ColourName[];
  const selectedSizes = (params.get("size") ?? "").split(",").filter(Boolean);
  const sort = params.get("sort") ?? "featured";

  const setParam = useCallback(
    (key: string, value: string | null) => {
      const next = new URLSearchParams(params.toString());
      if (!value) next.delete(key);
      else next.set(key, value);
      router.replace(`${pathname}?${next.toString()}`, { scroll: false });
    },
    [params, pathname, router]
  );

  const toggleListParam = useCallback(
    (key: string, value: string) => {
      const list = (params.get(key) ?? "").split(",").filter(Boolean);
      const next = list.includes(value)
        ? list.filter((v) => v !== value)
        : [...list, value];
      setParam(key, next.length ? next.join(",") : null);
    },
    [params, setParam]
  );

  const filtered = useMemo(() => {
    let list = products.slice();
    if (category !== "All") list = list.filter((p) => p.category === category);
    if (selectedColours.length)
      list = list.filter((p) => p.colours.some((c) => selectedColours.includes(c)));
    if (selectedSizes.length)
      list = list.filter((p) =>
        p.sizes?.some((s) => selectedSizes.includes(s.label))
      );
    switch (sort) {
      case "price-asc":
        list.sort((a, b) => (a.fromPrice ?? Infinity) - (b.fromPrice ?? Infinity));
        break;
      case "price-desc":
        list.sort((a, b) => (b.fromPrice ?? -Infinity) - (a.fromPrice ?? -Infinity));
        break;
      case "newest":
        list.reverse();
        break;
      default:
        list.sort((a, b) => Number(!!b.bestSeller) - Number(!!a.bestSeller));
    }
    return list;
  }, [category, selectedColours, selectedSizes, sort]);

  const clearAll = () => {
    router.replace(pathname, { scroll: false });
  };

  return (
    <Container className="py-12 lg:py-16">
      <header className="border-b border-ink/15 pb-10 mb-12">
        <p className="label mb-4">Shop</p>
        <h1 className="font-display text-display-lg leading-[1.05] text-balance max-w-3xl">
          A small catalogue, repeated until it earned its place.
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 lg:gap-16">
        <aside className="space-y-10">
          <FilterGroup label="Category">
            <ul className="space-y-2.5">
              {CATEGORIES.map((c) => (
                <li key={c}>
                  <button
                    type="button"
                    onClick={() => setParam("category", c === "All" ? null : c)}
                    aria-pressed={category === c}
                    className={cn(
                      "text-sm transition-colors",
                      category === c ? "text-ink font-medium" : "text-ink/65 hover:text-ink"
                    )}
                  >
                    {c}
                  </button>
                </li>
              ))}
            </ul>
          </FilterGroup>

          <FilterGroup label="Colour">
            <div className="flex flex-wrap gap-2">
              {ALL_COLOURS.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => toggleListParam("colour", c)}
                  aria-pressed={selectedColours.includes(c)}
                  aria-label={`Toggle colour ${c}`}
                  className={cn(
                    "p-1 -m-1 cursor-pointer flex items-center gap-2 text-[0.7rem] tracking-[0.16em] uppercase transition-colors",
                    selectedColours.includes(c) ? "text-ink" : "text-ink/55 hover:text-ink"
                  )}
                >
                  <span
                    className={cn(
                      "h-4 w-4 rounded-full border border-ink/25",
                      selectedColours.includes(c) && "ring-1 ring-offset-2 ring-offset-bone ring-ink"
                    )}
                    style={{ backgroundColor: tokens.swatches[c] }}
                  />
                  {c}
                </button>
              ))}
            </div>
          </FilterGroup>

          <FilterGroup label="Size">
            <div className="flex flex-wrap gap-2">
              {SIZE_GROUPS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => toggleListParam("size", s)}
                  aria-pressed={selectedSizes.includes(s)}
                  className={cn(
                    "px-3 py-1.5 text-[0.7rem] tracking-[0.18em] uppercase border transition-colors",
                    selectedSizes.includes(s)
                      ? "border-ink bg-ink text-bone"
                      : "border-ink/25 text-ink/70 hover:border-ink hover:text-ink"
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </FilterGroup>

          {(category !== "All" || selectedColours.length || selectedSizes.length) ? (
            <button
              type="button"
              onClick={clearAll}
              className="label hover:text-brass transition-colors"
            >
              Clear filters
            </button>
          ) : null}
        </aside>

        <section>
          <div className="flex items-center justify-between border-b border-ink/15 pb-4 mb-8 flex-wrap gap-4">
            <p className="text-sm text-ink/70">
              {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </p>
            <label className="flex items-center gap-3 text-sm">
              <span className="label">Sort</span>
              <select
                value={sort}
                onChange={(e) => setParam("sort", e.target.value === "featured" ? null : e.target.value)}
                className="bg-transparent border-b border-ink/30 py-1 text-sm focus:outline-none focus:border-ink"
              >
                {SORTS.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {filtered.length === 0 ? (
            <p className="text-ink/65 py-20 text-center">
              Nothing matches that combination — try clearing a filter.
            </p>
          ) : (
            <StaggerGroup
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12"
              staggerChildren={0.06}
            >
              {filtered.map((p) => (
                <StaggerItem key={p.slug}>
                  <ProductCard product={p} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          )}
        </section>
      </div>
    </Container>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="label mb-4">{label}</p>
      {children}
    </div>
  );
}
