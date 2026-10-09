import { useMemo, useState } from "react";
import { CardLink, PageHero, Reveal, SectionHead, usePage } from "../components/ui";
import { Search } from "lucide-react";
import { articleCategories, articles } from "../data/content";

export default function Insights() {
  usePage("Insights", "Vellora Health insights — original, cautious health education on heart, brain, movement, prevention, and family health. Demonstration content.");
  const [cat, setCat] = useState<string>("All");
  const [q, setQ] = useState("");
  const list = useMemo(
    () =>
      articles.filter(
        (a) =>
          (cat === "All" || a.category === cat) &&
          (q.trim() === "" || `${a.title} ${a.excerpt}`.toLowerCase().includes(q.toLowerCase()))
      ),
    [cat, q]
  );
  const [featured, ...rest] = list;

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Health education, gently written."
        lead="Original articles on heart, mind, movement, prevention, and family health. All dates and authorship details are illustrative — and every article reminds you it is no substitute for personal advice."
        crumbs={[{ label: "Home", to: "/" }, { label: "Insights" }]}
      />

      <section className="section" aria-labelledby="articles">
        <div className="container">
          <SectionHead eyebrow="Library" title="Read at your own pace." />
          <div className="filter-bar" role="group" aria-label="Filter articles">
            {articleCategories.map((c) => (
              <button key={c} className={`chip${cat === c ? " on" : ""}`} onClick={() => setCat(c)} aria-pressed={cat === c}>
                {c}
              </button>
            ))}
            <div className="search-box">
              <Search aria-hidden="true" />
              <input type="search" placeholder="Search articles…" aria-label="Search articles" value={q} onChange={(e) => setQ(e.target.value)} />
            </div>
          </div>

          {list.length === 0 ? (
            <div className="empty-state" role="status">
              <p><strong>No articles match your search.</strong></p>
              <p>Try a different term or category.</p>
              <button className="chip on" onClick={() => { setCat("All"); setQ(""); }}>Clear filters</button>
            </div>
          ) : (
            <>
              {featured && (
                <Reveal>
                  <article className="card feature-card" id="articles">
                    <img className="cover" src={featured.image} alt="" loading="lazy" style={{ height: "100%", minHeight: 280 }} />
                    <div className="card-body" style={{ padding: "2rem" }}>
                      <div className="tag-row"><span className="tag brass">Featured</span><span className="tag">{featured.category}</span></div>
                      <h3 style={{ fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)" }}>{featured.title}</h3>
                      <p>{featured.excerpt}</p>
                      <p style={{ fontSize: "0.82rem" }}>{featured.date} · {featured.readTime}</p>
                      <CardLink to={`/insights/${featured.slug}`}>Read article</CardLink>
                    </div>
                  </article>
                </Reveal>
              )}
              <div className="grid-3">
                {rest.map((a, i) => (
                  <Reveal key={a.slug} delay={(i % 3) as 0 | 1 | 2}>
                    <article className="card">
                      <img className="cover" src={a.image} alt="" loading="lazy" />
                      <div className="card-body">
                        <div className="tag-row"><span className="tag">{a.category}</span><span className="tag brass">{a.readTime}</span></div>
                        <h3 style={{ fontSize: "1.2rem" }}>{a.title}</h3>
                        <p>{a.excerpt}</p>
                        <p style={{ fontSize: "0.8rem" }}>{a.date}</p>
                        <CardLink to={`/insights/${a.slug}`}>Read article</CardLink>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </>
          )}

          <Reveal delay={1}>
            <div className="disclaimer" style={{ marginTop: "2rem" }}>
              <strong>Medical-information disclaimer:</strong> articles are general educational content for demonstration purposes — not medical advice, diagnosis, or treatment, and they cite no real research. Discuss personal health questions with a qualified clinician.
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
