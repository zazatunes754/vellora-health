import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CardLink, CtaBand, PageHero, Reveal, usePage } from "../components/ui";
import { articles, getArticle } from "../data/content";
import NotFound from "./NotFound";

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = getArticle(slug ?? "");
  if (!article) return <NotFound />;
  return <ArticleView slug={article.slug} />;
}

function ArticleView({ slug }: { slug: string }) {
  const article = getArticle(slug)!;
  usePage(article.title, `${article.excerpt} Demonstration educational content — not medical advice.`);
  const related = articles.filter((a) => a.slug !== article.slug && a.category === article.category)
    .concat(articles.filter((a) => a.slug !== article.slug && a.category !== article.category))
    .slice(0, 2);

  return (
    <>
      <PageHero
        eyebrow={`${article.category} · ${article.readTime}`}
        title={article.title}
        lead={`${article.date} · Vellora editorial team (illustrative)`}
        crumbs={[{ label: "Home", to: "/" }, { label: "Insights", to: "/insights" }, { label: article.category }]}
      />

      <section className="section" aria-labelledby="article">
        <div className="container detail-grid">
          <article className="detail-main article-body">
            <Reveal>
              <p className="lead" id="article">{article.intro}</p>
              <img className="article-hero-img" src={article.image} alt="" />
            </Reveal>
            <Reveal delay={1}>
              <nav className="toc" aria-label="Table of contents">
                <strong>In this article</strong>
                <ol>
                  {article.sections.map((s, i) => (
                    <li key={s.heading}><a href={`#sec-${i}`}>{s.heading}</a></li>
                  ))}
                </ol>
              </nav>
            </Reveal>
            {article.sections.map((s, i) => (
              <Reveal key={s.heading}>
                <h2 id={`sec-${i}`}>{s.heading}</h2>
                {s.body.map((p) => (
                  <p key={p.slice(0, 32)}>{p}</p>
                ))}
              </Reveal>
            ))}
            <Reveal delay={1}>
              <div className="disclaimer">
                <strong>Medical-information disclaimer:</strong> this article is general educational content written for demonstration purposes. It is not medical advice and does not replace consultation with a qualified clinician. If you have symptoms or concerns, please seek personal medical guidance.
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", marginTop: "1.4rem" }}>
                <Link className="btn btn-outline btn-sm" to="/insights"><ArrowLeft aria-hidden="true" style={{ width: "1em", height: "1em" }} /> All Articles</Link>
                <Link className="btn btn-primary btn-sm" to="/appointments">Discuss With a Clinician <ArrowRight aria-hidden="true" style={{ width: "1em", height: "1em" }} /></Link>
              </div>
            </Reveal>
          </article>

          <aside className="side-card" aria-label="Related articles">
            <span className="eyebrow">Keep reading</span>
            <h3>Related articles</h3>
            {related.map((r) => (
              <Link key={r.slug} to={`/insights/${r.slug}`} style={{ textDecoration: "none", display: "block", marginBottom: "1.1rem" }}>
                <img src={r.image} alt="" loading="lazy" style={{ borderRadius: 10, height: 120, width: "100%", objectFit: "cover", marginBottom: "0.5rem" }} />
                <span className="tag">{r.category}</span>
                <span style={{ display: "block", fontFamily: "var(--serif)", fontSize: "1.05rem", color: "var(--forest-deep)", marginTop: "0.3rem" }}>{r.title}</span>
              </Link>
            ))}
            <CardLink to="/insights">All insights</CardLink>
          </aside>
        </div>
      </section>

      <section className="section tight" aria-label="Request an appointment" style={{ paddingTop: 0 }}>
        <CtaBand />
      </section>
    </>
  );
}
