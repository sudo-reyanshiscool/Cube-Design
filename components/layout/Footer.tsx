import Link from "next/link";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { brand } from "@/data/brand";
import { Newsletter } from "@/components/editorial/Newsletter";

const sitemap = [
  {
    title: "Shop",
    links: [
      { href: "/shop?category=Desk", label: "Desk" },
      { href: "/shop?category=Home", label: "Home" },
      { href: "/shop?category=Sets", label: "Sets" },
      { href: "/shop", label: "All products" },
    ],
  },
  {
    title: "Studio",
    links: [
      { href: "/the-material", label: "The Material" },
      { href: "/journal", label: "Journal" },
      { href: "/gifting", label: "Gifting & Wholesale" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Care",
    links: [
      { href: "/contact", label: "Shipping & Returns" },
      { href: "/contact", label: "Care guide" },
      { href: "/contact", label: "FAQ" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-bone mt-24">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-20">
        <div className="lg:col-span-5 space-y-6">
          <Logo variant="light" />
          <p className="text-bone/70 max-w-sm font-display text-2xl leading-snug">
            {brand.story.short}
          </p>
          <Newsletter />
        </div>

        <div className="lg:col-span-4 grid grid-cols-3 gap-8">
          {sitemap.map((col) => (
            <div key={col.title}>
              <p className="label-light mb-5">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-bone/80 hover:text-bone">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="lg:col-span-3 space-y-6">
          <p className="label-light">Atelier</p>
          <address className="not-italic text-sm text-bone/80 leading-relaxed">
            {brand.address.line1}<br />
            {brand.address.line2}<br />
            {brand.address.city} {brand.address.postcode}<br />
            {brand.address.country}
          </address>
          <div className="text-sm text-bone/80 space-y-1">
            {brand.phones.map((p) => (
              <p key={p}>
                <a href={`tel:${p.replace(/\s+/g, "")}`} className="hover:text-bone">{p}</a>
              </p>
            ))}
            <p>
              <a href={`mailto:${brand.email}`} className="hover:text-bone">{brand.email}</a>
            </p>
          </div>
          <div className="flex gap-4 text-[0.7rem] tracking-[0.2em] uppercase text-bone/70">
            <a href={brand.social.instagram} target="_blank" rel="noreferrer" className="hover:text-bone">Instagram</a>
            <a href={brand.social.amazon} target="_blank" rel="noreferrer" className="hover:text-bone">Amazon</a>
            <a href={brand.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-bone">LinkedIn</a>
          </div>
        </div>
      </Container>
      <div className="border-t border-bone/10">
        <Container className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 gap-3">
          <p className="text-[0.7rem] tracking-[0.18em] uppercase text-bone/60">
            © {new Date().getFullYear()} V-Cube Designs. Handcrafted in India.
          </p>
          <div className="flex gap-5 text-[0.7rem] tracking-[0.18em] uppercase text-bone/60">
            <Link href="/contact">Privacy</Link>
            <Link href="/contact">Terms</Link>
            <Link href="/contact">Cookies</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
