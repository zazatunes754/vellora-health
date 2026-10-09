import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import { Accordion, PageHero, Reveal, SectionHead, usePage } from "../components/ui";
import { faqCategories, faqs } from "../data/content";

export default function Faq() {
  usePage("Frequently Asked Questions", "Answers about appointments, services, preparation, administration, and privacy at Vellora Health. Demonstration content.");
  const [cat, setCat] = useState<string>("All");
  const [q, setQ] = useState("");
  const list = useMemo(
    () =>
      faqs.filter(
        (f) =>
          (cat === "All" || f.cat === cat) &&
          (q.trim() === "" || `${f.q} ${f.a}`.toLowerCase().includes(q.toLowerCase()))
      ),
    [cat, q]
  );

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Answers, before you even ask."
        lead="Appointments, services, preparation, administration, and privacy — original answers written for real patient concerns."
        crumbs={[{ label: "Home", to: "/" }, { label: "FAQ" }]}
      />

      <section className="section" aria-labelledby="faq-list">
        <div className="container" style={{ maxWidth: "880px" }}>
          <SectionHead center eyebrow="Browse questions" title="Find your answer." />
          <div className="filter-bar" role="group" aria-label="Filter questions" style={{ justifyContent: "center" }}>
            {faqCategories.map((c) => (
              <button key={c} className={`chip${cat === c ? " on" : ""}`} onClick={() => setCat(c)} aria-pressed={cat === c}>
                {c}
              </button>
            ))}
          </div>
          <div className="search-box" style={{ margin: "0 auto 1.8rem", maxWidth: "440px" }}>
            <Search aria-hidden="true" />
            <input type="search" placeholder="Search questions…" aria-label="Search questions" value={q} onChange={(e) => setQ(e.target.value)} />
          </div>

          <Reveal>
            <div id="faq-list">
              {list.length === 0 ? (
                <div className="empty-state" role="status">
                  <p><strong>No questions match your search.</strong></p>
                  <p>Try different words, or contact us directly.</p>
                  <button className="chip on" onClick={() => { setCat("All"); setQ(""); }}>Clear filters</button>
                </div>
              ) : (
                <Accordion items={list.map((f) => ({ q: f.q, a: f.a }))} firstOpen />
              )}
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="info-panel" style={{ marginTop: "2rem", textAlign: "center" }}>
              <h3 style={{ justifyContent: "center" }}>Still curious?</h3>
              <p>Send your question through the contact form, or browse patient resources for visit preparation.</p>
              <div style={{ display: "flex", gap: "0.8rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1rem" }}>
                <Link className="btn btn-primary btn-sm" to="/contact">Ask a Question</Link>
                <Link className="btn btn-outline btn-sm" to="/patient-resources">Patient Resources <ArrowRight aria-hidden="true" style={{ width: "1em", height: "1em" }} /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
