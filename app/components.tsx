import Link from "next/link";
import type { ReactNode } from "react";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Costume Cart Check home">
        <span className="brand-mark" aria-hidden="true">C</span>
        <span>Costume Cart Check</span>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/guides">Guides</Link>
        <Link href="/how-we-compare">Method</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <strong>Costume Cart Check</strong>
        <p>Independent, US-focused buying guides. Buy the look. Check the details.</p>
      </div>
      <nav aria-label="Footer navigation">
        <Link href="/affiliate-disclosure">Affiliate disclosure</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/faq">FAQ</Link>
      </nav>
      <p className="fine-print">Pre-launch edition · No advertiser-specific affiliate links are live.</p>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
