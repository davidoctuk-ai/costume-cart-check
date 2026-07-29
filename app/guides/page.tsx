import Link from "next/link";
import { PageShell } from "../components";
import { guides } from "../content";

export const metadata = {
  title: "Buying guides | Costume Cart Check",
  description: "Practical costume, cosplay, wig, prop, makeup and collectibles buying guides.",
};

export default function GuidesPage() {
  return (
    <PageShell>
      <section className="page-hero compact">
        <p className="eyebrow">The complete library</p>
        <h1>Checklists for the whole look.</h1>
        <p className="lede">Ten focused guides designed to make fit, timing, safety, returns and total cost easier to assess.</p>
      </section>
      <section className="section">
        <div className="card-grid">
          {guides.map((guide, index) => (
            <article className="guide-card" key={guide.slug}>
              <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
              <p className="eyebrow">{guide.eyebrow} · {guide.readTime}</p>
              <h2><Link href={`/${guide.slug}`}>{guide.title}</Link></h2>
              <p>{guide.description}</p>
              <Link className="text-link" href={`/${guide.slug}`}>Read guide →</Link>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
