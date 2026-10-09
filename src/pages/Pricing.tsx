import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, FileText, MessagesSquare, ReceiptText } from "lucide-react";
import { CtaBand, PageHero, Reveal, SectionHead, usePage } from "../components/ui";

const examples = [
  {
    name: "First consultation",
    amount: "€95 (illustrative)",
    desc: "An unhurried first visit with a specialist, including examination and a written plan.",
    points: ["45-minute appointment", "Review of prior reports you bring", "Written summary to take home"],
    featured: true,
  },
  {
    name: "Follow-up review",
    amount: "€60 (illustrative)",
    desc: "Reviewing results, adjusting treatment, and planning next steps with your clinician.",
    points: ["30-minute appointment", "Results explained directly", "Updated written plan"],
    featured: false,
  },
  {
    name: "Diagnostics bundle",
    amount: "from €140 (illustrative)",
    desc: "Common laboratory panels and basic imaging, priced transparently before you agree.",
    points: ["Written estimate first", "No low-value add-ons", "Results review included"],
    featured: false,
  },
  {
    name: "Prevention review",
    amount: "€120 (illustrative)",
    desc: "Annual-style structured review: risk assessment, screening plan, and lifestyle guidance.",
    points: ["Personal risk profile", "Screening roadmap", "One-year prevention plan"],
    featured: false,
  },
  {
    name: "Physiotherapy session",
    amount: "€55 (illustrative)",
    desc: "Assessment-led rehabilitation with a progressive, measurable exercise programme.",
    points: ["Movement assessment", "Personal exercise plan", "Progress re-measurement"],
    featured: false,
  },
  {
    name: "Second opinion",
    amount: "€95 (illustrative)",
    desc: "Independent review of a diagnosis or recommendation, with prior imaging and reports.",
    points: ["Records reviewed in advance", "Plain-language verdict", "Questions welcomed"],
    featured: false,
  },
];

const steps = [
  { icon: MessagesSquare, title: "Ask before you agree", text: "Every planned investigation or procedure comes with a written estimate first. If the plan changes, the estimate changes first." },
  { icon: ReceiptText, title: "Itemised, always", text: "Bills list each element of care separately — consultations, tests, procedures — so you can see exactly what each part cost." },
  { icon: FileText, title: "Insurance documentation", text: "We provide itemised documentation suitable for submitting to your insurer. Coverage itself depends entirely on your policy — we make no coverage guarantees." },
];

export default function Pricing() {
  usePage("Pricing & Insurance", "Transparent, illustrative pricing examples for Vellora Health services. Costs depend on specialty, clinician, and individual circumstances.");

  return (
    <>
      <PageHero
        eyebrow="Pricing & insurance"
        title="Honest numbers, before you commit."
        lead="Treatment costs depend on the service, the clinician, and your individual circumstances. Below are clearly labelled illustrative examples — and a promise about how real estimates work."
        crumbs={[{ label: "Home", to: "/" }, { label: "Pricing & Insurance" }]}
      />

      <section className="section" aria-labelledby="examples">
        <div className="container">
          <SectionHead eyebrow="Illustrative examples" title="What care like this might look like." lead="These figures are invented examples to demonstrate page design. They are not real prices, and no insurance partnerships or coverage guarantees are claimed." />
          <div className="price-grid">
            {examples.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) as 0 | 1 | 2}>
                <div className={`price-card${p.featured ? " featured" : ""}`}>
                  <h3>{p.name}</h3>
                  <span className="amount">{p.amount}</span>
                  <p style={{ margin: 0, fontSize: "0.9rem" }}>{p.desc}</p>
                  <ul>
                    {p.points.map((pt) => (
                      <li key={pt}><CheckCircle2 aria-hidden="true" />{pt}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={1}>
            <div className="disclaimer" style={{ marginTop: "1.6rem" }}>
              <strong>Please note:</strong> all amounts above are illustrative placeholders for design demonstration. Real treatment costs vary with clinical need, and would always be confirmed in a written, personalised estimate before care proceeds.
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section tight" aria-labelledby="how-pricing" style={{ background: "var(--sand)", borderBlock: "1px solid var(--line)" }}>
        <div className="container">
          <SectionHead eyebrow="How pricing works" title="Three promises about money." />
          <div className="grid-3">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) as 0 | 1 | 2}>
                <div className="info-panel" style={{ height: "100%" }}>
                  <h3><s.icon aria-hidden="true" />{s.title}</h3>
                  <p style={{ margin: 0 }}>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={1}>
            <div className="two-col" style={{ marginTop: "2rem" }}>
              <div className="info-panel">
                <h3>Insurance, plainly stated</h3>
                <p>Vellora makes no claim of partnerships with any insurer and guarantees no coverage. What we do: provide complete, itemised documentation promptly so you can claim under your own policy, and answer insurers' factual questions with your consent.</p>
              </div>
              <div className="info-panel">
                <h3>Questions about a specific cost?</h3>
                <p>Describe the service you are considering and we will explain what typically shapes its cost — and arrange a personalised written estimate with the relevant clinic.</p>
                <Link className="btn btn-primary btn-sm" to="/contact" style={{ marginTop: "0.8rem" }}>Enquire About Pricing <ArrowRight aria-hidden="true" style={{ width: "1em", height: "1em" }} /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-label="Request an appointment">
        <CtaBand />
      </section>
    </>
  );
}
