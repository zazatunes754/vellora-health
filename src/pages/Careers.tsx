import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, HeartHandshake, Send } from "lucide-react";
import { CtaBand, PageHero, Reveal, SectionHead, usePage } from "../components/ui";

const values = [
  { title: "Time respected", text: "Schedules that protect clinical focus — and evenings that stay yours." },
  { title: "Voices heard", text: "Structured forums where nurses, therapists, and physicians shape how care is delivered." },
  { title: "Growth funded", text: "Illustrative support for continuing education, mentoring, and conference participation." },
  { title: "Care modelled inward", text: "The humanity we promise patients begins with how colleagues treat each other." },
];

const sampleRoles = [
  { title: "Senior Staff Nurse, Medical Ward", detail: "Illustrative example · Full-time · Demonstration listing" },
  { title: "Physiotherapist, Musculoskeletal Service", detail: "Illustrative example · Full-time · Demonstration listing" },
  { title: "Patient Coordinator, Welcome Team", detail: "Illustrative example · Part-time · Demonstration listing" },
];

export default function Careers() {
  usePage("Careers", "Careers at Vellora Health — fictional brand values and a demonstration careers enquiry. No real vacancies are advertised.");
  const [values2, setValues2] = useState({ name: "", email: "", interest: sampleRoles[0].title, message: "" });
  const [errs, setErrs] = useState<{ [k: string]: string }>({});
  const [done, setDone] = useState(false);

  const set = (k: string, v: string) => {
    setValues2((p) => ({ ...p, [k]: v }));
    setErrs((p) => ({ ...p, [k]: "" }));
  };

  const submit = (ev: FormEvent) => {
    ev.preventDefault();
    const e: { [k: string]: string } = {};
    if (values2.name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values2.email.trim())) e.email = "Please enter a valid email address.";
    if (values2.message.trim().length < 10) e.message = "Please tell us a little about yourself (10+ characters).";
    setErrs(e);
    if (Object.keys(e).length === 0) setDone(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Do your best work where it matters most."
        lead="Vellora is fictional, and no real vacancies are advertised — but the values below describe the kind of workplace this brand aspires to be."
        crumbs={[{ label: "Home", to: "/" }, { label: "Careers" }]}
      />

      <section className="section" aria-labelledby="why">
        <div className="container split">
          <div>
            <Reveal>
              <span className="eyebrow">Why Vellora (in principle)</span>
              <h2 id="why">A workplace with the same humanity we promise patients.</h2>
              <p className="lead">Great care is delivered by people who feel supported, heard, and able to grow.</p>
            </Reveal>
            <ol className="numbered-list">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={1}>
                  <li><span className="num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span><span><strong>{v.title}</strong><p>{v.text}</p></span></li>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal delay={1} className="split-media">
            <img className="main" src="/images/surgery-team.jpg" alt="A collaborative clinical team at work" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="section tight" aria-labelledby="roles" style={{ background: "var(--sand)", borderBlock: "1px solid var(--line)" }}>
        <div className="container">
          <SectionHead eyebrow="Illustrative roles" title="Example positions." lead="Sample listings shown to demonstrate design only. They are not real vacancies and applications are not processed." />
          <div className="accordion">
            {sampleRoles.map((r) => (
              <div className="acc-item" key={r.title}>
                <div className="career-role">
                  <span><strong>{r.title}</strong><span>{r.detail}</span></span>
                  <span className="tag brass">Illustrative</span>
                </div>
              </div>
            ))}
          </div>

          <div className="two-col" style={{ marginTop: "2.2rem", alignItems: "start" }}>
            <Reveal>
              <div className="info-panel" style={{ height: "100%" }}>
                <h3><HeartHandshake aria-hidden="true" />How recruitment would work</h3>
                <p>In a real hospital: published role profiles with genuine requirements, structured interviews, credential verification, and references. Speculative enquiries welcomed from clinicians, nurses, therapists, and support professionals.</p>
                <p style={{ marginBottom: 0 }}>On this demo site, the form opposite simply demonstrates an expression-of-interest enquiry — it sends nothing anywhere.</p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="form-card">
                {done ? (
                  <div className="confirm-panel" role="status" aria-live="polite">
                    <span className="confirm-icon"><CheckCircle2 aria-hidden="true" /></span>
                    <h3>Expression of interest noted.</h3>
                    <p style={{ color: "var(--muted)" }}>A real recruitment team would reply about “{values2.interest}”.</p>
                    <div className="demo-note" style={{ textAlign: "left", marginBottom: "1.2rem" }}>
                      <strong>Demonstration honesty:</strong> nothing was sent, stored, or shortlisted. Please use fictional test data only.
                    </div>
                    <button className="btn btn-outline btn-sm" onClick={() => { setDone(false); setValues2({ name: "", email: "", interest: sampleRoles[0].title, message: "" }); }}>Send Another</button>
                  </div>
                ) : (
                  <form onSubmit={submit} noValidate aria-label="Careers expression of interest">
                    <h3>Express interest (demo)</h3>
                    <div className="form-grid" style={{ gridTemplateColumns: "1fr" }}>
                      <div className="field">
                        <label htmlFor="cr-name">Your name *</label>
                        <input id="cr-name" value={values2.name} onChange={(e) => set("name", e.target.value)} aria-invalid={!!errs.name} />
                        {errs.name && <span className="field-err" role="alert"><AlertCircle aria-hidden="true" />{errs.name}</span>}
                      </div>
                      <div className="field">
                        <label htmlFor="cr-email">Email *</label>
                        <input id="cr-email" type="email" value={values2.email} onChange={(e) => set("email", e.target.value)} aria-invalid={!!errs.email} />
                        {errs.email && <span className="field-err" role="alert"><AlertCircle aria-hidden="true" />{errs.email}</span>}
                      </div>
                      <div className="field">
                        <label htmlFor="cr-interest">Area of interest</label>
                        <select id="cr-interest" value={values2.interest} onChange={(e) => set("interest", e.target.value)}>
                          {sampleRoles.map((r) => (<option key={r.title} value={r.title}>{r.title}</option>))}
                          <option value="Other">Something else</option>
                        </select>
                      </div>
                      <div className="field">
                        <label htmlFor="cr-msg">Brief introduction *</label>
                        <textarea id="cr-msg" value={values2.message} onChange={(e) => set("message", e.target.value)} aria-invalid={!!errs.message} maxLength={800} style={{ minHeight: 100 }} />
                        {errs.message && <span className="field-err" role="alert"><AlertCircle aria-hidden="true" />{errs.message}</span>}
                      </div>
                    </div>
                    <button className="btn btn-primary" type="submit" style={{ marginTop: "1.1rem", width: "100%" }}><Send aria-hidden="true" /> Send Expression of Interest</button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Request an appointment">
        <CtaBand title="Here as a patient, not an applicant?" text="Our care team will guide you to the right clinic — start with an appointment enquiry." />
      </section>
    </>
  );
}
