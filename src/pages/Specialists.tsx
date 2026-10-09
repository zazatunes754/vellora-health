import { useMemo, useState } from "react";
import { CardLink, PageHero, Reveal, SectionHead, usePage } from "../components/ui";
import { Search } from "lucide-react";
import { services, specialists } from "../data/content";

export default function Specialists() {
  usePage("Specialists", "Meet Vellora Health's illustrative specialists — fictional demonstration profiles across cardiology, neurology, orthopaedics, and more.");
  const [filter, setFilter] = useState("All");
  const [q, setQ] = useState("");
  const cats = ["All", ...services.map((s) => s.name)];
  const list = useMemo(
    () =>
      specialists.filter(
        (s) =>
          (filter === "All" || s.specialtyLabel === filter) &&
          (q.trim() === "" || `${s.name} ${s.role} ${s.specialtyLabel}`.toLowerCase().includes(q.toLowerCase()))
      ),
    [filter, q]
  );

  return (
    <>
      <PageHero
        eyebrow="Medical team"
        title="Specialists who listen first."
        lead="Eight illustrative demonstration profiles. Fictional names, realistic shapes — each profile shows how the clinician works, their areas of focus, and how to request them."
        crumbs={[{ label: "Home", to: "/" }, { label: "Specialists" }]}
      />

      <section className="section" aria-labelledby="team">
        <div className="container">
          <SectionHead eyebrow="Directory" title="Find your clinician." />
          <div className="demo-note" style={{ marginBottom: "1.6rem" }}>
            <strong>Illustrative profiles:</strong> the clinicians below are fictional demonstration personas. They do not practise at any real facility, and nothing here represents verified credentials.
          </div>
          <div className="filter-bar" role="group" aria-label="Filter specialists">
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {cats.map((c) => (
                <button key={c} className={`chip${filter === c ? " on" : ""}`} onClick={() => setFilter(c)} aria-pressed={filter === c}>
                  {c}
                </button>
              ))}
            </div>
            <div className="search-box">
              <Search aria-hidden="true" />
              <input type="search" placeholder="Search clinicians…" aria-label="Search clinicians" value={q} onChange={(e) => setQ(e.target.value)} />
            </div>
          </div>

          {list.length === 0 ? (
            <div className="empty-state" role="status">
              <p><strong>No clinicians match your search.</strong></p>
              <p>Try a different name or specialty.</p>
              <button className="chip on" onClick={() => { setFilter("All"); setQ(""); }}>Clear filters</button>
            </div>
          ) : (
            <div className="grid-4" id="team">
              {list.map((s, i) => (
                <Reveal key={s.slug} delay={(i % 4) as 0 | 1 | 2 | 3}>
                  <article className="card spec-card">
                    <img className="cover" src={s.image} alt={`Portrait of ${s.name}`} loading="lazy" />
                    <div className="card-body">
                      <span className="spec-role">{s.specialtyLabel}</span>
                      <h3>{s.name}</h3>
                      <p>{s.role}</p>
                      <CardLink to={`/specialists/${s.slug}`}>View profile</CardLink>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
