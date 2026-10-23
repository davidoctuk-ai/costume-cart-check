import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "../components";
import { guides, pages } from "../content";

export function generateStaticParams() {
  return [...guides.map(({ slug }) => ({ slug })), ...Object.keys(pages).map((slug) => ({ slug }))];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides.find((item) => item.slug === slug);
  const page = pages[slug as keyof typeof pages];
  const item = guide ?? page;
  if (!item) return {};
  return { title: `${item.title} | Costume Cart Check`, description: item.description };
}

export default async function DetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides.find((item) => item.slug === slug);
  const page = pages[slug as keyof typeof pages];
  const item = guide ?? page;
  if (!item) notFound();

  return (
    <PageShell>
      <article className="article">
        <header className="article-header">
          <p className="eyebrow">{item.eyebrow}{guide ? ` · ${guide.readTime}` : ""}</p>
          <h1>{item.title}</h1>
          <p className="lede">{item.description}</p>
        </header>
        {guide && (
          <aside className="checklist">
            <p className="eyebrow">Quick check</p>
            <h2>Before you add to cart</h2>
            <ul>{guide.checklist.map((check) => <li key={check}>{check}</li>)}</ul>
          </aside>
        )}
        <div className="article-body">
          {item.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
          {guide?.affiliate && (
            <section className="affiliate-offer" aria-label="Sponsored retailer link">
              <p className="eyebrow">Optional retailer link</p>
              <h2>Ready to compare live options?</h2>
              <p>{guide.affiliate.disclosure}</p>
              <a className="button primary" href={guide.affiliate.href} target="_blank" rel="sponsored nofollow noopener noreferrer">{guide.affiliate.label}</a>
            </section>
          )}
        </div>
        <div className="article-end">
          <p>Product details and policies can change. Verify the current listing and terms before purchasing.</p>
          <Link className="button secondary" href="/guides">Back to all guides</Link>
        </div>
      </article>
    </PageShell>
  );
}
