import { Link } from "react-router-dom";
import { Accessibility, ArrowRight, Backpack, ClipboardCheck, FileText, HeartHandshake } from "lucide-react";
import { Accordion, CtaBand, PageHero, Reveal, SectionHead, usePage } from "../components/ui";
import { faqs } from "../data/content";

const prep = [
  { icon: FileText, title: "What information to bring", text: "Photo ID, your full medication list with doses, prior test results and imaging, referral letters, and a short note describing your symptoms and questions." },
  { icon: Backpack, title: "How to prepare", text: "Arrive a little early, wear comfortable clothing for examinations, and confirm fasting or medication instructions when your appointment is arranged." },
  { icon: Accessibility, title: "Accessibility & support", text: "Step-free access, accessible consultation rooms, seating for companions, and chaperones or interpreters on request. Tell us your needs in advance." },
  { icon: HeartHandshake, title: "During your visit", text: "Your clinician will explain each step before it happens. You may ask questions at any point, bring a companion, and request a written summary." },
];

const education = [
  { title: "Understanding your test results", text: "Reference ranges describe populations, not individuals. A borderline result is a prompt for context — trends, symptoms, and repeat timing — not alarm.", to: "/insights/understanding-blood-pressure" },
  { title: "Making the most of a short appointment", text: "Write three questions in advance, state your main worry early, and repeat the plan back. Bring your medication list, always.", to: "/insights/annual-health-review" },
  { title: "When symptoms need urgent attention", text: "Chest pain, breathing difficulty, stroke signs, and severe sudden pain are emergencies. Learn the red flags before you need them.", to: "/services/urgent-care" },
];

export default function PatientResources() {
  usePage("Patient Resources", "Prepare for your visit to Vellora Health — appointment guidance, what to bring, accessibility information, and health education. Demonstration content.");
  const prepFaqs = faqs.filter((f) => f.cat === "Preparing for your visit" || f.cat === "Practical & admin").map((f) => ({ q: f.q, a: f.a }));

  return (
    <>
      <PageHero
        eyebrow="Patient resources"
        title="Arrive prepared, leave reassured."
        lead="Practical guidance for consultations at Vellora — what to bring, what to expect, and how we support visitors with additional needs. Responsible, general information only."
        crumbs={[{ label: "Home", to: "/" }, { label: "Patient Resources" }]}
      />

      <section className="section" aria-labelledby="prepare">
        <div className="container">
          <SectionHead eyebrow="Preparing for a consultation" title="Four things worth knowing." />
          <div className="grid-4">
            {prep.map((p, i) => (
              <Reveal key={p.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div className="info-panel" style={{ height: "100%" }}>
                  <h3><p.icon aria-hidden="true" />{p.title}</h3>
                  <p style={{ margin: 0 }}>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section tight" aria-labelledby="checklist" style={{ background: "var(--sand)", borderBlock: "1px solid var(--line)" }}>
        <div className="container two-col">
          <Reveal>
            <span className="eyebrow">Appointment-day checklist</span>
            <h2 id="checklist">The night-before, five-minute version.</h2>
            <ul className="check-list" style={{ color: "var(--muted)" }}>
              {[
                "Medication list checked and packed — including doses",
                "Prior reports, scans, and referral letters in one folder",
                "Three written questions, with your main worry first",
                "Comfortable clothing; fasting instructions confirmed if relevant",
                "Companion, interpreter, or accessibility needs already requested",
              ].map((t) => (
                <li key={t} style={{ color: "var(--muted)" }}><ClipboardCheck aria-hidden="true" style={{ color: "var(--brass-deep)" }} />{t}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={1}>
            <span className="eyebrow">Accessibility</span>
            <h2 style={{ fontSize: "1.7rem" }}>Care that adapts to you.</h2>
            <p style={{ color: "var(--muted)" }}>Our demonstration facility includes step-free entrances, lift access to all clinical floors, accessible consultation and rest rooms, adjustable examination couches, and hearing-loop support on request. Assistance dogs are welcome.</p>
            <p style={{ color: "var(--muted)" }}>If you have reduced mobility, sensory needs, anxiety about clinical settings, or require an interpreter, mention it on the appointment form — preparations work best when made in advance.</p>
            <Link className="btn btn-outline btn-sm" to="/contact" style={{ marginTop: "0.6rem" }}>Discuss Access Needs <ArrowRight aria-hidden="true" style={{ width: "1em", height: "1em" }} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="education">
        <div className="container">
          <SectionHead eyebrow="Health education" title="Short reads worth your time." lead="Cautious, original explainers. Every article carries a reminder: education supports — but never replaces — personal medical advice." />
          <div className="grid-3">
            {education.map((e, i) => (
              <Reveal key={e.title} delay={(i % 3) as 0 | 1 | 2}>
                <div className="info-panel" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <h3>{e.title}</h3>
                  <p style={{ flex: 1 }}>{e.text}</p>
                  <Link className="card-link" to={e.to}>Read more <ArrowRight aria-hidden="true" /></Link>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={1}>
            <div className="disclaimer" style={{ marginTop: "1.8rem" }}>
              <strong>Medical-information disclaimer:</strong> resources on this site are general educational content for demonstration purposes. They are not medical advice, diagnosis, or treatment. Always seek the guidance of a qualified clinician with questions about a medical condition.
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section tight" aria-labelledby="resource-faq" style={{ background: "var(--paper)", borderBlock: "1px solid var(--line-soft)" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <SectionHead center eyebrow="Common questions" title="Visiting Vellora, answered." />
          <Reveal><Accordion items={prepFaqs} firstOpen /></Reveal>
        </div>
      </section>

      <section className="section" aria-label="Request an appointment">
        <CtaBand />
      </section>
    </>
  );
}
