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
  mrp?: number | null;
  badges?: string[];
  includes?: string[];
  pairsWith?: string[];
  featured?: boolean;
  bestSeller?: boolean;
  imageCount: number;
  imageUrl?: string;
  imageUrls?: string[];
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
    fromPrice: 629,
    mrp: 1999,
    bestSeller: true,
    pairsWith: ["mouse-pad", "pen-holder", "coaster-set"],
    imageCount: 4,
    imageUrl: "https://www.vcubedesigns.com/cdn/shop/files/DM_TAN_L_SEP_25_1d38a077-f97b-4570-a925-5a962fc4bf2b.jpg?v=1771484871&width=1500",
    imageUrls: [
      "https://www.vcubedesigns.com/cdn/shop/files/DM_TAN_L_SEP_25_1d38a077-f97b-4570-a925-5a962fc4bf2b.jpg?v=1771484871&width=1500",
      "https://www.vcubedesigns.com/cdn/shop/files/DM_BLACK_L_SEP_25_759b28c5-3889-4a69-bf46-47eef5644ecb.jpg?v=1771483725&width=1500",
      "https://www.vcubedesigns.com/cdn/shop/files/DM_BLUE_L_SEP_25_068406ae-52ee-4d1a-a696-1cb4d307afcc.jpg?v=1771484145&width=1500",
      "https://www.vcubedesigns.com/cdn/shop/files/DM_GRAY_L_SEP_25_cdaed6c2-0db9-438b-b9c6-9c4d330066b6.jpg?v=1771484552&width=1500",
    ],
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
    fromPrice: 499,
    mrp: 1399,
    pairsWith: ["mouse-pad", "valet-tray", "mobile-stand"],
    imageCount: 3,
    imageUrl: "https://www.vcubedesigns.com/cdn/shop/files/WhatsApp_Image_2024-11-21_at_4.49.56_PM_1.jpg?v=1747907977&width=1500",
    imageUrls: [
      "https://www.vcubedesigns.com/cdn/shop/files/WhatsApp_Image_2024-11-21_at_4.49.56_PM_1.jpg?v=1747907977&width=1500",
      "https://www.vcubedesigns.com/cdn/shop/files/71JtXYQhuEL_20_1.jpg?v=1747907453&width=1500",
    ],
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
    fromPrice: 4999,
    mrp: 12494,
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
    imageUrl: "https://www.vcubedesigns.com/cdn/shop/files/IMG_5598_Tan__jpg.jpg?v=1771074352&width=1500",
    imageUrls: [
      "https://www.vcubedesigns.com/cdn/shop/files/IMG_5598_Tan__jpg.jpg?v=1771074352&width=1500",
      "https://www.vcubedesigns.com/cdn/shop/files/IMG_5598_Black__jpg.jpg?v=1769597073&width=1500",
      "https://www.vcubedesigns.com/cdn/shop/files/IMG_5598_Blue__jpg.jpg?v=1769596975&width=1500",
      "https://www.vcubedesigns.com/cdn/shop/files/IMG_5598_Gray__jpg.jpg?v=1770977190&width=1500",
    ],
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
    fromPrice: 299,
    mrp: 799,
    pairsWith: ["desk-mat-stitched", "pen-holder", "valet-tray"],
    imageCount: 3,
    imageUrl: "https://www.vcubedesigns.com/cdn/shop/files/IMG-20240625-WA0016_-_Tan.jpg?v=1747911886&width=1500",
    imageUrls: [
      "https://www.vcubedesigns.com/cdn/shop/files/IMG-20240625-WA0016_-_Tan.jpg?v=1747911886&width=1500",
      "https://www.vcubedesigns.com/cdn/shop/files/IMG-20240625-WA0016_-_Black.jpg?v=1747910729&width=1500",
      "https://www.vcubedesigns.com/cdn/shop/files/IMG-20240625-WA0016_-_Blue.jpg?v=1747909886&width=1500",
    ],
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
    fromPrice: 799,
    mrp: 1999,
    pairsWith: ["coaster-set", "tissue-holder", "pen-holder"],
    imageCount: 3,
    imageUrl: "https://www.vcubedesigns.com/cdn/shop/files/VTT1.jpg?v=1766223254&width=1500",
    imageUrls: [
      "https://www.vcubedesigns.com/cdn/shop/files/VTT1.jpg?v=1766223254&width=1500",
      "https://www.vcubedesigns.com/cdn/shop/files/VTT2.jpg?v=1766223254&width=1500",
      "https://www.vcubedesigns.com/cdn/shop/files/VTBK1.jpg?v=1766222724&width=1500",
      "https://www.vcubedesigns.com/cdn/shop/files/VTNB1.jpg?v=1766223083&width=1500",
    ],
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
    fromPrice: 699,
    mrp: 1499,
    pairsWith: ["desk-mat-stitched", "valet-tray", "mouse-pad"],
    imageCount: 3,
    imageUrl: "https://www.vcubedesigns.com/cdn/shop/files/PenHolderTan1.jpg?v=1763207149&width=1500",
    imageUrls: [
      "https://www.vcubedesigns.com/cdn/shop/files/PenHolderTan1.jpg?v=1763207149&width=1500",
      "https://www.vcubedesigns.com/cdn/shop/files/PenHolderBlack1.jpg?v=1763206863&width=1500",
      "https://www.vcubedesigns.com/cdn/shop/files/PenHolderBlue1.jpg?v=1763208732&width=1500",
    ],
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
    fromPrice: 899,
    mrp: 1999,
    pairsWith: ["valet-tray", "tissue-holder", "dining-table-placemats"],
    imageCount: 3,
    imageUrl: "https://www.vcubedesigns.com/cdn/shop/files/Tan1.jpg?v=1763207149&width=1500",
    imageUrls: [
      "https://www.vcubedesigns.com/cdn/shop/files/Tan1.jpg?v=1763207149&width=1500",
      "https://www.vcubedesigns.com/cdn/shop/files/Black1.jpg?v=1760694002&width=1500",
      "https://www.vcubedesigns.com/cdn/shop/files/Brown1.jpg?v=1760694426&width=1500",
    ],
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
    fromPrice: 1499,
    mrp: 2999,
    pairsWith: ["valet-tray", "coaster-set", "mobile-stand"],
    imageCount: 3,
    imageUrl: "https://www.vcubedesigns.com/cdn/shop/files/TissueHolderBlack1.jpg?v=1763206863&width=1500",
    imageUrls: [
      "https://www.vcubedesigns.com/cdn/shop/files/TissueHolderBlack1.jpg?v=1763206863&width=1500",
      "https://www.vcubedesigns.com/cdn/shop/files/TissueHolderBrown1.jpg?v=1760437913&width=1500",
      "https://www.vcubedesigns.com/cdn/shop/files/TissueHolderGrey1.jpg?v=1763208807&width=1500",
    ],
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
    fromPrice: 599,
    mrp: 1499,
    pairsWith: ["desk-mat-stitched", "pen-holder", "tissue-holder"],
    imageCount: 3,
    imageUrl: "https://www.vcubedesigns.com/cdn/shop/files/MobileHolderTan1.jpg?v=1763207149&width=1500",
    imageUrls: [
      "https://www.vcubedesigns.com/cdn/shop/files/MobileHolderTan1.jpg?v=1763207149&width=1500",
      "https://www.vcubedesigns.com/cdn/shop/files/MobileHolderBlack1.jpg?v=1763206863&width=1500",
      "https://www.vcubedesigns.com/cdn/shop/files/MobileHolderNavyBlue1.jpg?v=1763208732&width=1500",
    ],
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
    fromPrice: 1499,
    mrp: 1999,
    pairsWith: ["coaster-set", "valet-tray", "tissue-holder"],
    imageCount: 3,
    imageUrl: "https://www.vcubedesigns.com/cdn/shop/files/Tan1_ad9090ed-3774-4012-813a-e5731adff78c.jpg?v=1761978022&width=1500",
    imageUrls: [
      "https://www.vcubedesigns.com/cdn/shop/files/Tan1_ad9090ed-3774-4012-813a-e5731adff78c.jpg?v=1761978022&width=1500",
      "https://www.vcubedesigns.com/cdn/shop/files/Black_1_77c7502a-b575-41c0-95da-04a9c8cb5a95.jpg?v=1761978550&width=1500",
      "https://www.vcubedesigns.com/cdn/shop/files/Grey_1_b9804de4-acaa-4f58-8fe4-5de7262688ab.jpg?v=1761978187&width=1500",
      "https://www.vcubedesigns.com/cdn/shop/files/Blue_1_3012a3f0-5676-4115-ba3c-a15d9553402f.jpg?v=1761978429&width=1500",
    ],
    rating: 4.8,
    reviewCount: 4180,
    inStock: true,
    shipsIn: "Ships in 48 hours",
  },
];

products.push({
  slug: "cutlery-holder",
  name: "Cutlery Holder",
  category: "Home",
  shortDescription:
    "A faux leather caddy that keeps spoons, forks and knives quietly composed at the table.",
  description:
    "A vegan leather cutlery holder over an MDF core, stitched and finished by hand. Keeps spoons, forks and knives composed at the dining table or buffet — pairs naturally with our placemats and coaster sets.",
  colours: ["Black", "Brown", "Blue", "Gray", "Tan"],
  material: "Faux leather, MDF core, stitched",
  price: null,
  fromPrice: 699,
  mrp: 1499,
  pairsWith: ["dining-table-placemats", "coaster-set", "tissue-holder"],
  imageCount: 3,
  imageUrl: "https://www.vcubedesigns.com/cdn/shop/files/Tan1_11252532-a705-4ae7-8a59-3c85e6bf84c4.jpg?v=1765965243&width=1500",
  imageUrls: [
    "https://www.vcubedesigns.com/cdn/shop/files/Tan1_11252532-a705-4ae7-8a59-3c85e6bf84c4.jpg?v=1765965243&width=1500",
    "https://www.vcubedesigns.com/cdn/shop/files/Black1_cdb0802d-0ab0-48b4-8365-9337275d8049.jpg?v=1765965853&width=1500",
    "https://www.vcubedesigns.com/cdn/shop/files/Brown1_343501f0-5a9b-4567-aee2-a6d66479a152.jpg?v=1765966059&width=1500",
  ],
  rating: 4.7,
  reviewCount: 1820,
  inStock: true,
  shipsIn: "Ships in 24 hours",
});

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}
