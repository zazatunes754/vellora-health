import { useState, type FormEvent } from "react";
import { AlertCircle, ArrowRight, CheckCircle2, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { PageHero, Reveal, SectionHead, usePage } from "../components/ui";

interface Errors { [k: string]: string }

export default function Contact() {
  usePage("Contact", "Contact Vellora Health — illustrative demonstration contact details, enquiry form, visiting information, and hours.");
  const [values, setValues] = useState({ name: "", email: "", topic: "General enquiry", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  const set = (k: string, v: string) => {
    setValues((p) => ({ ...p, [k]: v }));
    setErrors((p) => ({ ...p, [k]: "" }));
  };

  const submit = (ev: FormEvent) => {
    ev.preventDefault();
    const e: Errors = {};
    if (values.name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) e.email = "Please enter a valid email address.";
    if (values.message.trim().length < 10) e.message = "Please write a message of at least 10 characters.";
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setDone(true);
      window.scrollTo({ top: 0 });
    }
  };

  const err = (k: string) =>
    errors[k] ? (<span className="field-err" role="alert"><AlertCircle aria-hidden="true" />{errors[k]}</span>) : null;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to a human, not a queue."
        lead="Questions about services, pricing, accessibility, or visiting? Send an enquiry — all contact details below are clearly labelled demonstration placeholders."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="section" aria-labelledby="contact-grid">
        <div className="container two-col" id="contact-grid">
          <div>
            <Reveal>
              <SectionHead eyebrow="Demonstration contact details" title="Where to find us (illustratively)." />
            </Reveal>
            <Reveal delay={1}>
              <div className="info-panel" style={{ marginBottom: "1.2rem" }}>
                <h3><MapPin aria-hidden="true" />Visit</h3>
                <p style={{ margin: 0 }}>14 Linden Quarter, Demonstration District<br />Illustrative address — not a real hospital location. No map pin is shown deliberately, so fiction is never mistaken for fact.</p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="info-panel" style={{ marginBottom: "1.2rem" }}>
                <h3><Phone aria-hidden="true" />Call</h3>
                <p style={{ margin: 0 }}><a href="tel:+10005550134">+1 (000) 555-0134</a> — demonstration number, illustrative hours below.</p>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="info-panel" style={{ marginBottom: "1.2rem" }}>
                <h3><Mail aria-hidden="true" />Write</h3>
                <p style={{ margin: 0 }}><a href="mailto:hello@vellorahealth.example">hello@vellorahealth.example</a> — demonstration inbox for design purposes.</p>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="info-panel">
                <h3><Clock aria-hidden="true" />Hours (illustrative)</h3>
                <table className="hours-table">
                  <tbody>
                    <tr><th scope="row">Monday – Friday</th><td>9:00 – 18:00</td></tr>
                    <tr><th scope="row">Saturday</th><td>8:00 – 16:00</td></tr>
                    <tr><th scope="row">Sunday &amp; holidays</th><td>Urgent guidance only</td></tr>
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>

          <Reveal delay={1}>
            <div className="form-card">
              {done ? (
                <div className="confirm-panel" role="status" aria-live="polite">
                  <span className="confirm-icon"><CheckCircle2 aria-hidden="true" /></span>
                  <h2 style={{ fontSize: "1.5rem" }}>Message noted — thank you.</h2>
                  <p style={{ color: "var(--muted)" }}>In a real hospital, our team would reply about “{values.topic}” within one working day.</p>
                  <div className="demo-note" style={{ textAlign: "left", marginBottom: "1.4rem" }}>
                    <strong>Demonstration honesty:</strong> nothing was sent or stored. Your message stayed in this browser session.
                  </div>
                  <button className="btn btn-outline" onClick={() => { setDone(false); setValues({ name: "", email: "", topic: "General enquiry", message: "" }); }}>Write Another Message</button>
                </div>
              ) : (
                <form onSubmit={submit} noValidate aria-label="Contact enquiry form">
                  <h2 style={{ fontSize: "1.5rem" }}>Send an enquiry</h2>
                  <div className="form-grid" style={{ gridTemplateColumns: "1fr" }}>
                    <div className="field">
                      <label htmlFor="ct-name">Your name <span className="req" aria-hidden="true" style={{ color: "var(--danger)" }}>*</span></label>
                      <input id="ct-name" autoComplete="name" value={values.name} onChange={(e) => set("name", e.target.value)} aria-invalid={!!errors.name} />
                      {err("name")}
                    </div>
                    <div className="field">
                      <label htmlFor="ct-email">Email <span className="req" aria-hidden="true" style={{ color: "var(--danger)" }}>*</span></label>
                      <input id="ct-email" type="email" autoComplete="email" value={values.email} onChange={(e) => set("email", e.target.value)} aria-invalid={!!errors.email} />
                      {err("email")}
                    </div>
                    <div className="field">
                      <label htmlFor="ct-topic">Topic</label>
                      <select id="ct-topic" value={values.topic} onChange={(e) => set("topic", e.target.value)}>
                        {["General enquiry", "Services & specialties", "Pricing estimate", "Accessibility needs", "Feedback on this demo"].map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div className="field">
                      <label htmlFor="ct-msg">Message <span className="req" aria-hidden="true" style={{ color: "var(--danger)" }}>*</span></label>
                      <textarea id="ct-msg" value={values.message} onChange={(e) => set("message", e.target.value)} aria-invalid={!!errors.message} maxLength={1000} />
                      {err("message")}
                    </div>
                  </div>
                  <button className="btn btn-primary" type="submit" style={{ marginTop: "1.2rem", width: "100%" }}>
                    <Send aria-hidden="true" /> Send Message
                  </button>
                  <div className="form-note">Demo form: shows an on-screen confirmation only. Please use fictional test data.</div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section tight" aria-label="Prefer to book directly" style={{ background: "var(--sand)", borderBlock: "1px solid var(--line)" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1.5rem", flexWrap: "wrap" }}>
          <Reveal>
            <h2 style={{ margin: 0, fontSize: "clamp(1.5rem, 2.6vw, 2rem)" }}>Know which clinic you need?</h2>
            <p className="lead" style={{ margin: "0.4rem 0 0" }}>Skip the enquiry and request an appointment directly.</p>
          </Reveal>
          <Reveal delay={1}>
            <a className="btn btn-primary" href="/appointments" style={{ textDecoration: "none" }}>Request an Appointment <ArrowRight aria-hidden="true" /></a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
