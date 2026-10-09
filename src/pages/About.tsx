import { Link } from "react-router-dom";
import { ArrowRight, BookHeart, HandHeart, Landmark, Leaf } from "lucide-react";
import { CtaBand, PageHero, Reveal, SectionHead, usePage } from "../components/ui";

const values = [
  { icon: HandHeart, title: "Humanity first", text: "Clinical excellence means little if patients feel processed. Warmth is a standard here, not a bonus." },
  { icon: BookHeart, title: "Clarity always", text: "Every finding explained, every option laid out, every plan written down. Understanding is part of treatment." },
  { icon: Leaf, title: "Restraint with reason", text: "We investigate and intervene when it serves you — and say so plainly when watchful waiting serves you better." },
  { icon: Landmark, title: "Stewardship", text: "Your time, your trust, and your information are held carefully. We act as custodians of all three." },
];

const standards = [
  { n: "01", title: "Time is clinical", text: "Longer appointments are a quality decision. Rushed consultations miss things; unhurried ones catch them." },
  { n: "02", title: " Consent is continuous", text: "Not a signature on arrival, but an ongoing conversation — before examinations, tests, and treatments alike." },
  { n: "03", title: "Second opinions welcome", text: "We encourage them, provide them, and never penalise them. Confidence survives scrutiny." },
  { n: "04", title: "No surprises in billing", text: "Written estimates before planned investigations. If the plan changes, the estimate changes first." },
  { n: "05", title: "Information with permission", text: "Your referring clinician is kept informed with your consent. Your data is never sold, shared, or stored carelessly." },
  { n: "06", title: "Comfort is clinical", text: "Light, quiet, privacy, and dignity are specified like any other standard — and reviewed like one." },
];

export default function About() {
  usePage("About Vellora", "The philosophy, values, and care standards behind Vellora Health — a premium, patient-first demonstration hospital.");
  return (
    <>
      <PageHero
        eyebrow="About Vellora"
        title="A hospital imagined around the patient."
        lead="Vellora Health is a fictional demonstration brand exploring a simple idea: what if a hospital were designed with the attentiveness of a great hotel and the rigour of a great clinic?"
        crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      <section className="section" aria-labelledby="philosophy">
        <div className="container split">
          <div>
            <Reveal>
              <span className="eyebrow">Brand philosophy</span>
              <h2 id="philosophy">Healthcare, elevated by humanity.</h2>
              <p className="lead">Our promise is deliberately human. Advanced clinical capability matters — but patients remember whether they felt listened to, whether things were explained, and whether someone owned what happened next.</p>
              <p style={{ color: "var(--muted)" }}>That is why Vellora pairs modern diagnostics and coordinated specialties with longer appointments, written summaries, and surroundings designed to calm rather than intimidate. Thoughtful medical care, advanced clinical capabilities, and a more human experience at every step.</p>
            </Reveal>
            <Reveal delay={1}>
              <div className="demo-note" style={{ marginTop: "1.4rem" }}>
                <strong>Demonstration note:</strong> Vellora Health is not a real hospital. This page describes a fictional brand philosophy. No founding year, accreditations, or facility statistics are claimed.
              </div>
            </Reveal>
          </div>
          <Reveal delay={1} className="split-media">
            <img className="main" src="/images/surgery-team2.jpg" alt="A Vellora clinical team collaborating" loading="lazy" />
            <span className="overlap" aria-hidden="true"><img src="/images/consult.jpg" alt="" loading="lazy" /></span>
          </Reveal>
        </div>
      </section>

      <section className="section tight" aria-labelledby="values" style={{ background: "var(--sand)", borderBlock: "1px solid var(--line)" }}>
        <div className="container">
          <SectionHead center eyebrow="Mission & values" title="What we hold ourselves to." lead="Four values shape every clinic, letter, and conversation at Vellora." />
          <div className="grid-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div className="info-panel" style={{ height: "100%" }}>
                  <h3><v.icon aria-hidden="true" />{v.title}</h3>
                  <p style={{ margin: 0 }}>{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="editorial">
        <div className="container split">
          <Reveal className="split-media">
            <img className="main" src="/images/surgery-light.jpg" alt="Modern clinical environment with advanced lighting" loading="lazy" />
          </Reveal>
          <div>
            <Reveal>
              <span className="eyebrow">Patient-first, practically</span>
              <h2 id="editorial">Small decisions, felt daily.</h2>
              <p className="lead">Being patient-first is not a slogan — it is a hundred operational choices.</p>
            </Reveal>
            <Reveal delay={1}>
              <ul className="check-list" style={{ color: "var(--muted)" }}>
                {[
                  "Appointments that start on time, and honesty when they cannot",
                  "Results delivered by a clinician, not left to a portal notification",
                  "Rooms with chairs for family, not just stools for staff",
                  "Wayfinding a first-time visitor can follow without asking",
                  "Estimates before investigations, summaries after every visit",
                ].map((t) => (
                  <li key={t} style={{ color: "var(--muted)" }}><Leaf aria-hidden="true" style={{ color: "var(--brass-deep)" }} />{t}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section tight" aria-labelledby="standards" style={{ background: "var(--paper)", borderBlock: "1px solid var(--line-soft)" }}>
        <div className="container">
          <SectionHead eyebrow="Care standards" title="Six standards, reviewed like clinical outcomes." />
          <div className="grid-3">
            {standards.map((s, i) => (
              <Reveal key={s.n} delay={(i % 3) as 0 | 1 | 2}>
                <div className="info-panel" style={{ height: "100%" }}>
                  <span className="svc-index">{s.n}</span>
                  <h3 style={{ marginTop: "0.4rem" }}>{s.title}</h3>
                  <p style={{ margin: 0 }}>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="facility-phil">
        <div className="container split">
          <div>
            <Reveal>
              <span className="eyebrow">Facility philosophy</span>
              <h2 id="facility-phil">Calm is a clinical asset.</h2>
              <p className="lead">Stress raises heart rates, clouds memory, and makes every conversation harder. Our spaces are specified to reduce it.</p>
              <p style={{ color: "var(--muted)" }}>Daylight in waiting areas. Acoustic control in corridors. Consultation rooms arranged so the clinician faces you, not a screen. Recovery spaces kept genuinely quiet. Nothing decorative that makes navigation harder.</p>
            </Reveal>
            <Reveal delay={1}>
              <div style={{ marginTop: "1.6rem" }}>
                <Link className="btn btn-primary" to="/services">Explore Services <ArrowRight aria-hidden="true" /></Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={1} className="split-media">
            <img className="main" src="/images/building.jpg" alt="Calm modern healthcare architecture" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="section tight" aria-label="Request an appointment" style={{ paddingTop: 0 }}>
        <CtaBand />
      </section>
    </>
  );
}
