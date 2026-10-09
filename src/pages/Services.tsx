import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import { CardLink, CtaBand, PageHero, Reveal, SectionHead, usePage } from "../components/ui";
import { serviceCategories, services } from "../data/content";

export default function Services() {
  usePage("Services", "Browse Vellora Health's demonstration specialties — cardiology, neurology, orthopaedics, women's health, paediatrics, diagnostics, prevention, and more.");
  const [cat, setCat] = useState<string>("All");
  const [q, setQ] = useState("");
  const list = useMemo(
    () =>
      services.filter(
        (s) =>
          (cat === "All" || s.category === cat) &&
          (q.trim() === "" || `${s.name} ${s.tagline} ${s.category}`.toLowerCase().includes(q.toLowerCase()))
      ),
    [cat, q]
  );

  return (
    <>
      <PageHero
        eyebrow="Services directory"
        title="Every specialty, one standard of care."
        lead="Ten demonstration clinics spanning heart, brain, movement, family health, and prevention. Choose a service to see what to expect, who it suits, and what happens next."
        crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />

      <section className="section" aria-labelledby="directory">
        <div className="container">
          <SectionHead eyebrow="Browse" title="Find the right clinic." />
          <div className="filter-bar" role="group" aria-label="Filter services">
            {serviceCategories.map((c) => (
              <button key={c} className={`chip${cat === c ? " on" : ""}`} onClick={() => setCat(c)} aria-pressed={cat === c}>
                {c}
              </button>
            ))}
            <div className="search-box">
              <Search aria-hidden="true" />
              <input
                type="search"
                placeholder="Search services…"
                aria-label="Search services"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
            </div>
          </div>

          {list.length === 0 ? (
            <div className="empty-state" role="status">
              <p><strong>No services match your search.</strong></p>
              <p>Try a different term, or browse the full directory.</p>
              <button className="chip on" onClick={() => { setCat("All"); setQ(""); }}>Clear filters</button>
            </div>
          ) : (
            <div className="grid-3" id="directory">
              {list.map((s, i) => (
                <Reveal key={s.slug} delay={(i % 3) as 0 | 1 | 2}>
                  <article className="card">
                    <img className="cover" src={s.image} alt="" loading="lazy" />
                    <div className="card-body">
                      <div className="tag-row"><span className="tag">{s.category}</span></div>
                      <h3><Link to={`/services/${s.slug}`} style={{ textDecoration: "none" }}>{s.name}</Link></h3>
                      <p>{s.tagline}</p>
                      <CardLink to={`/services/${s.slug}`}>Explore {s.name}</CardLink>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}

          <Reveal delay={1}>
            <div className="two-col" style={{ marginTop: "2.6rem" }}>
              <div className="info-panel">
                <h3>Not sure where to start?</h3>
                <p>Describe your concern in your own words on the appointment form. Our demonstration team will guide you to the most suitable clinic — and tell you honestly if a different kind of care fits better.</p>
                <Link className="btn btn-primary btn-sm" to="/appointments" style={{ marginTop: "0.8rem" }}>Request Guidance <ArrowRight aria-hidden="true" style={{ width: "1em", height: "1em" }} /></Link>
              </div>
              <div className="info-panel">
                <h3>Need urgent advice?</h3>
                <p>For pressing concerns, read our urgent-care guidance first. In a real emergency, always call your local emergency number rather than booking online.</p>
                <Link className="btn btn-outline btn-sm" to="/services/urgent-care" style={{ marginTop: "0.8rem" }}>Urgent-Care Guidance</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section tight" aria-label="Request an appointment" style={{ paddingTop: 0 }}>
        <CtaBand />
      </section>
    </>
  );
}
