import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <Container className="py-32 text-center max-w-xl">
      <p className="label mb-4">404</p>
      <h1 className="font-display text-display-lg leading-[1.05] text-balance">
        That page seems to have wandered off the desk.
      </h1>
      <p className="mt-5 text-ink/75">
        Try the shop, or write to us if you were looking for something specific.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/shop" className="btn-primary">Visit the shop</Link>
        <Link href="/contact" className="btn-outline">Contact</Link>
      </div>
    </Container>
  );
}
