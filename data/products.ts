import type { ColourName } from "@/tokens";

export type Category = "Desk" | "Home" | "Sets";

export interface ProductSize {
  label: string;
  dimensions: string;
  thickness?: string;
}

export interface Product {
  slug: string;
  name: string;
  category: Category;
  shortDescription: string;
  description: string;
  sizes?: ProductSize[];
  colours: ColourName[];
  colourPairs?: { name: string; swatches: ColourName[] }[];
  material: string;
  price: number | null;
  fromPrice?: number | null;
  badges?: string[];
  includes?: string[];
  pairsWith?: string[];
  featured?: boolean;
  bestSeller?: boolean;
  imageCount: number;
  blurb?: string;
  rating?: number;
  reviewCount?: number;
  inStock?: boolean;
  shipsIn?: string;
}

export const products: Product[] = [
  {
    slug: "desk-mat-stitched",
    name: "Desk Mat — Stitched",
    category: "Desk",
    shortDescription:
      "Reversible vegan leather desk mat with stitched edges. The quiet centrepiece of an executive desk.",
    description:
      "A handcrafted vegan leather desk mat with finely stitched edges, made to anchor a workspace. Reversible, anti-skid, water-resistant and scratch-resistant; rolls without creasing for travel between desks. Protects glass and wooden desktops from scratches, spills and stains.",
    sizes: [
      { label: "Large", dimensions: "90 x 45 cm", thickness: "2.4 mm" },
      { label: "Medium", dimensions: "75 x 40 cm", thickness: "2.4 mm" },
      { label: "Small", dimensions: "60 x 35 cm", thickness: "2.4 mm" },
    ],
    colours: ["Tan", "Black", "Blue", "Gray", "Maroon", "Teal"],
    material: "Faux leather, stitched edge",
    price: null,
    fromPrice: 1490,
    bestSeller: true,
    pairsWith: ["mouse-pad", "pen-holder", "coaster-set"],
    imageCount: 4,
    blurb: "The desk, undivided.",
    rating: 4.8,
    reviewCount: 12480,
    inStock: true,
    shipsIn: "Ships in 24 hours",
  },
  {
    slug: "desk-mat-dual-color",
    name: "Desk Mat — Dual Colour",
    category: "Desk",
    shortDescription:
      "Two looks in one mat. A reversible 1.8 mm vegan leather mat with high tear and peel strength.",
    description:
      "Reversible dual-tone desk mat in 1.8 mm vegan leather, engineered with high tear and peel strength. Flip it for a different mood — same craftsmanship on both faces.",
    sizes: [
      { label: "Large", dimensions: "90 x 45 cm", thickness: "1.8 mm" },
      { label: "Medium", dimensions: "75 x 40 cm", thickness: "1.8 mm" },
      { label: "Small", dimensions: "60 x 35 cm", thickness: "1.8 mm" },
    ],
    colours: ["Black", "Orange", "Navy", "Yellow"],
    colourPairs: [
      { name: "Black & Orange", swatches: ["Black", "Orange"] },
      { name: "Navy & Yellow", swatches: ["Navy", "Yellow"] },
    ],
    material: "Faux leather, dual-tone",
    price: null,
    fromPrice: 1290,
    pairsWith: ["mouse-pad", "valet-tray", "mobile-stand"],
    imageCount: 3,
    rating: 4.7,
    reviewCount: 3210,
    inStock: true,
    shipsIn: "Ships in 24 hours",
  },
  {
    slug: "executive-v-cube-set",
    name: "Executive V-Cube Set",
    category: "Sets",
    shortDescription:
      "A six-piece composition for the considered desk. Our gifting favourite.",
    description:
      "Our complete executive workspace, curated as a single composition: the Stitched Desk Mat, Valet Tray, Coaster set, Tissue Holder, Mobile Stand and Pen Holder. Arrives boxed, ready to gift.",
    colours: ["Tan", "Black", "Blue", "Gray", "Teal"],
    material: "Faux leather, MDF cores, steel inserts",
    price: null,
    fromPrice: 5990,
    badges: ["Best Seller", "Gifting Favourite"],
    includes: [
      "desk-mat-stitched",
      "valet-tray",
      "coaster-set",
      "tissue-holder",
      "mobile-stand",
      "pen-holder",
    ],
    featured: true,
    bestSeller: true,
    pairsWith: ["dining-table-placemats", "desk-mat-dual-color", "mouse-pad"],
    imageCount: 5,
    blurb: "One desk, six considered objects.",
    rating: 4.9,
    reviewCount: 2840,
    inStock: true,
    shipsIn: "Ships in 48 hours",
  },
  {
    slug: "mouse-pad",
    name: "Mouse Pad",
    category: "Desk",
    shortDescription:
      "A stitched-edge pad with a fast, accurate surface for mechanical and optical mice.",
    description:
      "A stitched-edge vegan leather mouse pad with a fast, accurate surface that suits mechanical and optical mice alike. Anti-skid, water-resistant and easy to sanitise.",
    sizes: [
      { label: "Compact", dimensions: "25 x 21 cm", thickness: "2.4 mm" },
      { label: "Standard", dimensions: "32 x 27 cm", thickness: "2.4 mm" },
      { label: "Wide", dimensions: "35 x 25 cm", thickness: "2.4 mm" },
    ],
    colours: ["Tan", "Black", "Blue", "Gray"],
    material: "Faux leather, stitched edge",
    price: null,
    fromPrice: 590,
    pairsWith: ["desk-mat-stitched", "pen-holder", "valet-tray"],
    imageCount: 3,
    rating: 4.7,
    reviewCount: 8910,
    inStock: true,
    shipsIn: "Ships in 24 hours",
  },
  {
    slug: "valet-tray",
    name: "Valet Tray",
    category: "Home",
    shortDescription:
      "A minimalist tray for watches, glasses, keys and the small things that order a day.",
    description:
      "A minimalist vegan leather tray for watches, glasses, keys and daily carry. Sits beautifully on desks, nightstands and dressers.",
    sizes: [
      { label: "Small", dimensions: "20 x 24 x 2 cm", thickness: "2.4 mm" },
      { label: "Large", dimensions: "30 x 20.5 x 2 cm", thickness: "2.4 mm" },
    ],
    colours: ["Tan", "Black", "Blue", "Gray", "Brown", "Teal"],
    material: "Faux leather, MDF core",
    price: null,
    fromPrice: 990,
    pairsWith: ["coaster-set", "tissue-holder", "pen-holder"],
    imageCount: 3,
    rating: 4.8,
    reviewCount: 5670,
    inStock: true,
    shipsIn: "Ships in 24 hours",
  },
  {
    slug: "pen-holder",
    name: "Pen Holder",
    category: "Desk",
    shortDescription:
      "Soft-touch vegan leather over a 6 mm MDF core. Pens, pencils, brushes — held without rattle.",
    description:
      "A soft-touch vegan leather pen holder over a 6 mm MDF core. Holds pens, pencils, markers, scissors, makeup brushes and small accessories quietly and squarely.",
    sizes: [
      { label: "Standard", dimensions: "10.8 x 8.4 x 8.4 cm" },
    ],
    colours: ["Black", "Blue", "Tan", "Gray", "Brown", "Teal"],
    material: "Faux leather, MDF core",
    price: null,
    fromPrice: 690,
    pairsWith: ["desk-mat-stitched", "valet-tray", "mouse-pad"],
    imageCount: 3,
    rating: 4.7,
    reviewCount: 4320,
    inStock: true,
    shipsIn: "Ships in 24 hours",
  },
  {
    slug: "coaster-set",
    name: "Coaster Set",
    category: "Home",
    shortDescription:
      "Four coasters in a matching faux leather holder. Heat marks and ring stains, ended.",
    description:
      "A set of four coasters with a matching faux leather holder. Guards against heat marks, stains and moisture. MDF core, soft-touch vegan leather and fine stitching throughout.",
    sizes: [
      { label: "Set", dimensions: "12 x 12 x 4.4 cm" },
      { label: "Coaster", dimensions: "10.2 x 10.2 x 0.5 cm", thickness: "5 mm" },
    ],
    colours: ["Black", "Blue", "Tan", "Gray", "Brown", "Teal"],
    material: "Faux leather, MDF core, stitched",
    price: null,
    fromPrice: 790,
    pairsWith: ["valet-tray", "tissue-holder", "dining-table-placemats"],
    imageCount: 3,
    rating: 4.8,
    reviewCount: 3120,
    inStock: true,
    shipsIn: "Ships in 24 hours",
  },
  {
    slug: "tissue-holder",
    name: "Tissue Holder",
    category: "Home",
    shortDescription:
      "An MDF and faux leather tissue box with a top dispensing slit and a concealed base for refills.",
    description:
      "A sturdy MDF and faux leather tissue box with a top dispensing slit and a concealed base for refills. Suits desks, side tables, cars and hospitality settings.",
    sizes: [{ label: "Standard", dimensions: "25.3 x 7.2 x 15 cm" }],
    colours: ["Black", "Blue", "Tan", "Gray", "Brown", "Teal"],
    material: "Faux leather, MDF",
    price: null,
    fromPrice: 1190,
    pairsWith: ["valet-tray", "coaster-set", "mobile-stand"],
    imageCount: 3,
    rating: 4.6,
    reviewCount: 2480,
    inStock: true,
    shipsIn: "Ships in 24 hours",
  },
  {
    slug: "mobile-stand",
    name: "Mobile Stand",
    category: "Desk",
    shortDescription:
      "A steel-supported holder wrapped in non-slip faux leather. Cable slot built in.",
    description:
      "A steel-supported mobile holder wrapped in non-slip faux leather. Built-in cable slot, angled for comfortable viewing. Fits phones and tablets up to 7 inches.",
    colours: ["Black", "Blue", "Tan", "Gray", "Brown", "Teal"],
    material: "Steel core, faux leather wrap, 4.0 mm",
    price: null,
    fromPrice: 890,
    pairsWith: ["desk-mat-stitched", "pen-holder", "tissue-holder"],
    imageCount: 3,
    rating: 4.7,
    reviewCount: 6740,
    inStock: true,
    shipsIn: "Ships in 24 hours",
  },
  {
    slug: "dining-table-placemats",
    name: "Dining Table Placemats",
    category: "Home",
    shortDescription:
      "Premium placemats with decorative stitched borders. Reversible, heat- and water-resistant.",
    description:
      "Premium vegan leather placemats with decorative stitched borders. Heat resistant to roughly 150°F, double-thick, reversible, waterproof and scratch and stain resistant.",
    sizes: [
      { label: "Set of 4", dimensions: "45 x 30 cm", thickness: "2.4 mm" },
      { label: "Set of 6", dimensions: "45 x 30 cm", thickness: "2.4 mm" },
    ],
    colours: ["Tan", "Black", "Blue", "Gray"],
    material: "Faux leather, stitched border",
    price: null,
    fromPrice: 2390,
    pairsWith: ["coaster-set", "valet-tray", "tissue-holder"],
    imageCount: 3,
    rating: 4.8,
    reviewCount: 4180,
    inStock: true,
    shipsIn: "Ships in 48 hours",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}
