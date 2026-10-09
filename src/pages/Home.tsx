import { Link } from "react-router-dom";
import { ArrowRight, Award, CalendarCheck, Compass, HeartPulse, Microscope, ShieldCheck, Stethoscope, Users } from "lucide-react";
import { Accordion, CardLink, CtaBand, Reveal, SectionHead, usePage } from "../components/ui";
import { articles, faqs, services, specialists } from "../data/content";

const trustItems = [
  { icon: Stethoscope, title: "Unhurried consultations", text: "Appointments with room to listen, question, and understand." },
  { icon: Microscope, title: "Considered diagnostics", text: "The right test for the right reason — explained clearly." },
  { icon: Users, title: "Coordinated specialists", text: "One plan across disciplines, with your consent throughout." },
  { icon: ShieldCheck, title: "Honest guidance", text: "Options with trade-offs stated plainly. No pressure, ever." },
];

const principles = [
  { n: "01", title: "Listen before we measure", text: "Your story comes before our instruments. Most diagnoses begin in conversation, so we protect time for it." },
  { n: "02", title: "Explain in everyday language", text: "Findings, options, and next steps in words you can repeat to your family — with written summaries to take home." },
  { n: "03", title: "Treat only what needs treating", text: "Conservative care first, intervention only when it genuinely serves you. Second opinions are always welcome." },
  { n: "04", title: "Stay with you afterwards", text: "Results reviewed with you directly, referring clinicians kept informed, and follow-up that actually follows up." },
];

const journeySteps = [
  { n: "01", title: "Reach out", text: "Send an appointment enquiry online or by phone. Tell us your concern in your own words." },
  { n: "02", title: "Meet & understand", text: "An unhurried first consultation — history, examination, and questions answered." },
  { n: "03", title: "Investigate wisely", text: "Only the tests that will change your care, with results explained to you directly." },
  { n: "04", title: "Plan & follow through", text: "A written plan, coordinated referrals, and follow-up that keeps you supported." },
];

export default function Home() {
  usePage("Healthcare, elevated by humanity", "Vellora Health — a premium multispecialty healthcare experience. Explore services, meet specialists, and request an appointment. Demonstration website.");
  const featured = services.slice(0, 5);
  const teamPreview = specialists.slice(0, 4);
  const homeFaqs = faqs.slice(0, 5).map((f) => ({ q: f.q, a: f.a }));

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Care, considered differently</span>
            <h1 id="hero-heading">A healthier life begins with <em>feeling understood.</em></h1>
            <p className="lead">Discover a more thoughtful approach to healthcare, where clinical expertise, modern facilities, and personal attention come together around you.</p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/services">Explore Our Services <ArrowRight aria-hidden="true" /></Link>
              <Link className="btn btn-outline" to="/appointments">Request an Appointment</Link>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack" aria-hidden="true">
                <img src="/images/doc-f1.jpg" alt="" />
                <img src="/images/doc-m1.jpg" alt="" />
                <img src="/images/doc-f2.jpg" alt="" />
                <img src="/images/doc-m2.jpg" alt="" />
              </div>
              <p><strong>Care shaped around the patient</strong>Illustrative specialists across ten demonstration services</p>
            </div>
          </div>
          <div className="hero-media">
            <div className="hero-img-main">
              <img src="/images/hero.jpg" alt="A Vellora clinician reviewing results on a tablet in a bright consultation room" loading="eager" />
            </div>
            <div className="hero-img-small" aria-hidden="true">
              <img src="/images/consult.jpg" alt="" loading="lazy" />
            </div>
            <div className="hero-badge">
              <strong>10</strong>
              <span>demonstration specialties, one coordinated team</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TRUST STRIP ---------- */}
      <div className="trust-strip">
        <div className="container trust-grid">
          {trustItems.map((t, i) => (
            <Reveal key={t.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <div className="trust-item">
                <span className="trust-icon"><t.icon aria-hidden="true" /></span>
                <div><strong>{t.title}</strong><p>{t.text}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ---------- APPROACH ---------- */}
      <section className="section" aria-labelledby="approach-heading">
        <div className="container split">
          <Reveal className="split-media">
            <img className="main" src="/images/consult-tablet.jpg" alt="A doctor showing a patient their results on a tablet" loading="lazy" />
            <span className="overlap" aria-hidden="true"><img src="/images/stethoscope.jpg" alt="" loading="lazy" /></span>
          </Reveal>
          <div>
            <Reveal>
              <span className="eyebrow">The Vellora approach</span>
              <h2 id="approach-heading">Medicine with the human part put back in.</h2>
              <p className="lead">Hospitals can feel like systems built for diseases. Vellora is designed around people — how you arrive, how you are spoken to, and how you leave.</p>
            </Reveal>
            <ol className="numbered-list">
              {principles.map((p) => (
                <Reveal key={p.n} delay={1}>
                  <li><span className="num" aria-hidden="true">{p.n}</span><span><strong>{p.title}</strong><p>{p.text}</p></span></li>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={2}>
              <div style={{ marginTop: "1.8rem" }}>
                <Link className="btn btn-outline" to="/about">Our Philosophy <ArrowRight aria-hidden="true" /></Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- SPECIALTIES ---------- */}
      <section className="section tight" aria-labelledby="specialties-heading" style={{ background: "var(--sand)", borderBlock: "1px solid var(--line)" }}>
        <div className="container">
          <SectionHead
            eyebrow="Specialties & services"
            title="Care for every chapter of life."
            lead="Ten demonstration services, each with its own clinic, clinicians, and philosophy. Start with the ones below — or browse the full directory."
          />
          <div className="svc-rows">
            {featured.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) as 0 | 1 | 2}>
                <Link className="svc-row" to={`/services/${s.slug}`}>
                  <img src={s.image} alt="" loading="lazy" />
                  <span>
                    <span className="svc-index">{String(i + 1).padStart(2, "0")} — {s.category}</span>
                    <h3>{s.name}</h3>
                    <p>{s.tagline}</p>
                  </span>
                  <span className="go" aria-hidden="true"><ArrowRight /></span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={1}>
            <div style={{ marginTop: "1.8rem", display: "flex", gap: "0.9rem", flexWrap: "wrap" }}>
              <Link className="btn btn-primary" to="/services">View All Services <ArrowRight aria-hidden="true" /></Link>
              <Link className="btn btn-outline" to="/pricing-insurance">Pricing &amp; Insurance</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- JOURNEY ---------- */}
      <section className="section" aria-labelledby="journey-heading">
        <div className="container">
          <Reveal>
            <div className="journey">
              <span className="eyebrow" style={{ color: "var(--champagne)" }}>Your patient journey</span>
              <h2 id="journey-heading">Four steps. Zero guesswork.</h2>
              <p className="lead">From first enquiry to follow-up, you always know what happens next — and who to ask.</p>
              <div className="journey-steps">
                {journeySteps.map((s) => (
                  <div className="j-step" key={s.n}>
                    <span className="n" aria-hidden="true">{s.n}</span>
                    <strong>{s.title}</strong>
                    <p>{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- TEAM PREVIEW ---------- */}
      <section className="section tight" aria-labelledby="team-heading">
        <div className="container">
          <SectionHead
            eyebrow="Meet your clinicians"
            title="Specialists who introduce themselves first."
            lead="Illustrative demonstration profiles — realistic in shape, fictional in fact. Every profile explains how that clinician works, not just what they treat."
          />
          <div className="grid-4">
            {teamPreview.map((s, i) => (
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
          <Reveal delay={1}>
            <div style={{ marginTop: "1.8rem" }}>
              <Link className="btn btn-outline" to="/specialists">Meet All Specialists <ArrowRight aria-hidden="true" /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- FACILITY ---------- */}
      <section className="section facility" aria-labelledby="facility-heading">
        <div className="container facility-grid">
          <div>
            <Reveal>
              <span className="eyebrow" style={{ color: "var(--champagne)" }}>The environment</span>
              <h2 id="facility-heading">A building designed to lower your heart rate.</h2>
              <p className="lead">Natural light, quiet rooms, clear wayfinding, and spaces for families — because surroundings are part of treatment.</p>
            </Reveal>
            <Reveal delay={1}>
              <ul className="check-list">
                {[
                  "Light-filled consultation rooms with space for family members",
                  "Step-free access and accessible facilities throughout",
                  "Quiet recovery areas separated from busy clinical corridors",
                  "On-site diagnostics so most tests happen under one roof",
                ].map((t) => (
                  <li key={t}><CalendarCheck aria-hidden="true" />{t}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={2}>
              <div style={{ marginTop: "1.8rem", display: "flex", gap: "0.9rem", flexWrap: "wrap" }}>
                <Link className="btn btn-light" to="/about">About Vellora <ArrowRight aria-hidden="true" /></Link>
                <Link className="btn btn-ghost-light" to="/patient-resources">Planning Your Visit</Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={1}>
            <img src="/images/building.jpg" alt="Calm, modern hospital architecture with natural light" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* ---------- TICKER ---------- */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[0, 1].map((k) => (
            <span key={k}>
              Thoughtful medicine <i>◆</i> Modern facilities <i>◆</i> Personal attention <i>◆</i> Honest guidance <i>◆</i> Coordinated care <i>◆</i>&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ---------- INSIGHTS ---------- */}
      <section className="section" aria-labelledby="insights-heading">
        <div className="container">
          <SectionHead
            eyebrow="Insights & education"
            title="Learn at your own pace."
            lead="Original, cautious health education written for patients — always with the reminder that articles never replace personal medical advice."
          />
          <div className="grid-3">
            {articles.slice(0, 3).map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) as 0 | 1 | 2}>
                <article className="card">
                  <img className="cover" src={a.image} alt="" loading="lazy" />
                  <div className="card-body">
                    <div className="tag-row"><span className="tag">{a.category}</span><span className="tag brass">{a.readTime}</span></div>
                    <h3>{a.title}</h3>
                    <p>{a.excerpt}</p>
                    <CardLink to={`/insights/${a.slug}`}>Read article</CardLink>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="section tight" aria-labelledby="faq-heading" style={{ background: "var(--sand)", borderBlock: "1px solid var(--line)" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <SectionHead center eyebrow="Questions, answered" title="Everything patients ask us first." />
          <Reveal><Accordion items={homeFaqs} firstOpen /></Reveal>
          <Reveal delay={1}>
            <div style={{ textAlign: "center", marginTop: "1.8rem" }}>
              <Link className="btn btn-outline" to="/faq">View All FAQs <ArrowRight aria-hidden="true" /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="section" aria-label="Request an appointment">
        <CtaBand />
      </section>

      {/* ---------- CREDENTIALS STRIP ---------- */}
      <section className="section tight" aria-label="Why patients consider Vellora" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid-3">
            {[
              { icon: HeartPulse, title: "Whole-person care", text: "Symptoms, history, lifestyle, and worries considered together — not in isolation." },
              { icon: Award, title: "Measured quality", text: "Care standards reviewed openly, conservative treatment preferred, honesty required." },
              { icon: Compass, title: "Guided navigation", text: "From referral to results to follow-up, someone always owns your next step." },
            ].map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) as 0 | 1 | 2}>
                <div className="info-panel">
                  <h3><c.icon aria-hidden="true" />{c.title}</h3>
                  <p style={{ margin: 0 }}>{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
