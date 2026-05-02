import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartSheet } from "@/components/commerce/CartSheet";
import { Analytics } from "@/components/Analytics";
import { Cursor } from "@/components/motion/Cursor";
import { PageTransition } from "@/components/motion/PageTransition";
import { brand } from "@/data/brand";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vcubedesigns.com"),
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s — ${brand.name}`,
  },
  description:
    "Handcrafted vegan leather workspace and home accessories from V-CUBE Designs, Shahpur Jat, New Delhi. Trusted by 100,000+ customers across 28 states.",
  openGraph: {
    title: `${brand.name} — ${brand.tagline}`,
    description:
      "Handcrafted vegan leather workspace and home accessories from V-CUBE Designs, Shahpur Jat, New Delhi.",
    url: "https://www.vcubedesigns.com",
    siteName: brand.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — ${brand.tagline}`,
  },
  alternates: {
    canonical: "https://www.vcubedesigns.com",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.name,
    url: "https://www.vcubedesigns.com",
    logo: "https://www.vcubedesigns.com/brand/logo.svg",
    sameAs: [brand.social.instagram, brand.social.amazon, brand.social.linkedin],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${brand.address.line1}, ${brand.address.line2}`,
      addressLocality: brand.address.city,
      postalCode: brand.address.postcode,
      addressCountry: "IN",
    },
    contactPoint: brand.phones.map((p) => ({
      "@type": "ContactPoint",
      telephone: p,
      contactType: "customer support",
      areaServed: "IN",
    })),
    email: brand.email,
  };

  return (
    <html lang="en-IN" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen flex flex-col bg-bone text-ink">
        <Cursor />
        <Header />
        <main id="main" className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <CartSheet />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
