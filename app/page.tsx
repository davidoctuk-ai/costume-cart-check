import Link from "next/link";
import Image from "next/image";
import { PageShell } from "./components";
import { guides } from "./content";

const siteBasePath = "/costume-cart-check";

export default function Home() {
  return (
    <PageShell>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Independent buying guides · US focused</p>
          <h1>Buy the look.<br /><em>Check the details.</em></h1>
          <p className="lede">Practical checks for costumes, cosplay accessories, wigs, props, makeup and collectibles—before an event deadline makes the decision for you.</p>
          <div className="actions">
            <Link className="button primary" href="/guides">Browse the guides</Link>
            <Link className="button secondary" href="/how-we-compare">See our method</Link>
          </div>
        </div>
        <div className="hero-art" aria-label="Theatrical costume planning still life">
          <Image
            src={`${siteBasePath}/og.png`}
            alt="Costume planning still life with mask, wig, measuring tape, gloves and checklist"
            width={1536}
            height={1024}
            priority
          />
        </div>
      </section>

      <section className="trust-strip" aria-label="Editorial principles">
        <span>Fit before hype</span><span>Total cost, not headline price</span><span>Safety and venue rules matter</span>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">The useful first read</p>
          <h2>Start with the checks that prevent expensive mistakes.</h2>
          <p>Clear, original guidance—not fake reviews, invented discounts or pressure tactics.</p>
        </div>
        <div className="card-grid">
          {guides.slice(0, 6).map((guide, index) => (
            <article className="guide-card" key={guide.slug}>
              <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
              <p className="eyebrow">{guide.eyebrow}</p>
              <h3><Link href={`/${guide.slug}`}>{guide.title}</Link></h3>
              <p>{guide.description}</p>
              <Link className="text-link" href={`/${guide.slug}`}>Read guide <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
        <Link className="button secondary center-button" href="/guides">See all 10 guides</Link>
      </section>

      <section className="method-panel">
        <div>
          <p className="eyebrow">A calmer checkout</p>
          <h2>Five questions before “buy now”</h2>
        </div>
        <ol className="method-list">
          <li><span>01</span> What exactly is included?</li>
          <li><span>02</span> Which measurements control the fit?</li>
          <li><span>03</span> Will it arrive with time to test?</li>
          <li><span>04</span> Are the materials and use appropriate?</li>
          <li><span>05</span> What is the full cost and return position?</li>
        </ol>
      </section>

      <section className="launch-note">
        <p className="eyebrow">Transparent from day one</p>
        <h2>Approved relationship. Links deliberately not rushed.</h2>
        <p>Our Abracadabra NYC relationship through CJ is approved. Advertiser-specific links will only be activated after promotional-property registration and final compliance checks, and not before 5 August 2026.</p>
        <Link className="text-link" href="/affiliate-disclosure">Read the full disclosure →</Link>
      </section>
    </PageShell>
  );
}
