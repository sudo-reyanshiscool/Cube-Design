const inrFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export function formatINR(value: number): string {
  return inrFormatter.format(value);
}

export function formatPriceFrom(price: number | null | undefined, fromPrice?: number | null): string {
  if (typeof price === "number") return formatINR(price);
  if (typeof fromPrice === "number") return `from ${formatINR(fromPrice)}`;
  return "Enquire for pricing";
}

export function discountPct(mrp: number | null | undefined, sale: number | null | undefined): number | null {
  if (!mrp || !sale || sale >= mrp) return null;
  return Math.round(((mrp - sale) / mrp) * 100);
}

export function cn(...inputs: (string | undefined | false | null)[]): string {
  return inputs.filter(Boolean).join(" ");
}
