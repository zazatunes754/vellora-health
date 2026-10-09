import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { AlertCircle, ArrowRight, CalendarCheck, CheckCircle2 } from "lucide-react";
import { PageHero, Reveal, usePage } from "../components/ui";
import { services } from "../data/content";

interface Errors { [k: string]: string }

const contactMethods = ["Email", "Phone call", "Text message"];

export default function Appointments() {
  usePage("Request an Appointment", "Send an appointment enquiry to Vellora Health. Accessible demo form with validation — enquiries are illustrative and transmit nothing.");
  const [values, setValues] = useState({ name: "", email: "", phone: "", specialty: "", date: "", method: "Email", notes: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  const set = (k: string, v: string) => {
    setValues((prev) => ({ ...prev, [k]: v }));
    setErrors((prev) => ({ ...prev, [k]: "" }));
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (values.name.trim().length < 2) e.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) e.email = "Please enter a valid email address.";
    if (values.phone.trim() && !/^[+()\-.\s\d]{6,20}$/.test(values.phone.trim())) e.phone = "Please enter a valid phone number, or leave this blank.";
    if (!values.specialty) e.specialty = "Please choose a specialty.";
    if (!values.date) e.date = "Please choose a preferred date.";
    else {
      const chosen = new Date(values.date + "T00:00:00");
      const today = new Date(); today.setHours(0, 0, 0, 0);
      if (chosen < today) e.date = "Please choose a date in the future.";
    }
    if (!values.method) e.method = "Please choose a contact method.";
    return e;
  };

  const submit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setDone(true);
      window.scrollTo({ top: 0 });
    } else {
      const first = document.querySelector('[aria-invalid="true"]') as HTMLElement | null;
      first?.focus();
    }
  };

  const fieldErr = (k: string) =>
    errors[k] ? (
      <span className="field-err" role="alert"><AlertCircle aria-hidden="true" />{errors[k]}</span>
    ) : null;

  return (
    <>
      <PageHero
        eyebrow="Appointments"
        title="Request an appointment."
        lead="Tell us what you need in your own words. Our demonstration team would confirm a suitable time with you directly — this form itself books nothing."
        crumbs={[{ label: "Home", to: "/" }, { label: "Appointments" }]}
      />

      <section className="section" aria-labelledby="form-heading">
        <div className="container" style={{ maxWidth: "880px" }}>
          <Reveal>
            <div className="form-card">
              {done ? (
                <div className="confirm-panel" role="status" aria-live="polite">
                  <span className="confirm-icon"><CheckCircle2 aria-hidden="true" /></span>
                  <h2 id="form-heading">Enquiry received — thank you, {values.name.split(" ")[0] || "friend"}.</h2>
                  <p style={{ color: "var(--muted)", maxWidth: "52ch", margin: "0 auto 1rem" }}>
                    In a real hospital, our team would now contact you by <strong>{values.method.toLowerCase()}</strong> to confirm
                    a <strong>{services.find((s) => s.slug === values.specialty)?.name}</strong> appointment
                    around <strong>{values.date}</strong>.
                  </p>
                  <div className="demo-note" style={{ textAlign: "left", marginBottom: "1.5rem" }}>
                    <strong>Demonstration honesty:</strong> this form transmitted nothing and booked nothing. Your entries stayed in this browser session and were never sent to any server or stored anywhere.
                  </div>
                  <div style={{ display: "flex", gap: "0.8rem", justifyContent: "center", flexWrap: "wrap" }}>
                    <button className="btn btn-outline" onClick={() => { setDone(false); setValues({ name: "", email: "", phone: "", specialty: "", date: "", method: "Email", notes: "" }); }}>Send Another Enquiry</button>
                    <Link className="btn btn-primary" to="/">Return Home <ArrowRight aria-hidden="true" /></Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={submit} noValidate aria-labelledby="form-heading">
                  <h2 id="form-heading" style={{ fontSize: "1.6rem" }}>Appointment enquiry</h2>
                  <p style={{ color: "var(--muted)", fontSize: "0.93rem" }}>Fields marked <span className="req" style={{ color: "var(--danger)" }}>*</span> are required. Please use fictional test data — never real medical details.</p>
                  <div className="form-grid">
                    <div className="field">
                      <label htmlFor="appt-name">Full name <span className="req" aria-hidden="true">*</span></label>
                      <input id="appt-name" name="name" autoComplete="name" value={values.name} onChange={(e) => set("name", e.target.value)} aria-invalid={!!errors.name} aria-describedby={errors.name ? "appt-name-err" : undefined} />
                      <span id="appt-name-err">{fieldErr("name")}</span>
                    </div>
                    <div className="field">
                      <label htmlFor="appt-email">Email <span className="req" aria-hidden="true">*</span></label>
                      <input id="appt-email" name="email" type="email" autoComplete="email" value={values.email} onChange={(e) => set("email", e.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? "appt-email-err" : undefined} />
                      <span id="appt-email-err">{fieldErr("email")}</span>
                    </div>
                    <div className="field">
                      <label htmlFor="appt-phone">Contact number (optional)</label>
                      <input id="appt-phone" name="phone" type="tel" autoComplete="tel" placeholder="+1 (000) 000-0000" value={values.phone} onChange={(e) => set("phone", e.target.value)} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "appt-phone-err" : undefined} />
                      <span id="appt-phone-err">{fieldErr("phone")}</span>
                    </div>
                    <div className="field">
                      <label htmlFor="appt-specialty">Preferred specialty <span className="req" aria-hidden="true">*</span></label>
                      <select id="appt-specialty" value={values.specialty} onChange={(e) => set("specialty", e.target.value)} aria-invalid={!!errors.specialty} aria-describedby={errors.specialty ? "appt-specialty-err" : undefined}>
                        <option value="">Select a specialty…</option>
                        {services.map((s) => (
                          <option key={s.slug} value={s.slug}>{s.name}</option>
                        ))}
                        <option value="unsure">Not sure — please guide me</option>
                      </select>
                      <span id="appt-specialty-err">{fieldErr("specialty")}</span>
                    </div>
                    <div className="field">
                      <label htmlFor="appt-date">Preferred date <span className="req" aria-hidden="true">*</span></label>
                      <input id="appt-date" name="date" type="date" value={values.date} onChange={(e) => set("date", e.target.value)} aria-invalid={!!errors.date} aria-describedby={errors.date ? "appt-date-err" : undefined} />
                      <span id="appt-date-err">{fieldErr("date")}</span>
                    </div>
                    <fieldset className="field" style={{ border: 0, padding: 0, margin: 0 }}>
                      <legend style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--forest-deep)", padding: 0, marginBottom: "0.4rem" }}>Preferred contact method <span className="req" aria-hidden="true">*</span></legend>
                      <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }} role="radiogroup" aria-label="Preferred contact method">
                        {contactMethods.map((m) => (
                          <label key={m} className={`chip${values.method === m ? " on" : ""}`} style={{ cursor: "pointer" }}>
                            <input type="radio" name="method" value={m} checked={values.method === m} onChange={() => set("method", m)} style={{ position: "absolute", opacity: 0, width: 1, height: 1 }} />
                            {m}
                          </label>
                        ))}
                      </div>
                      {fieldErr("method")}
                    </fieldset>
                    <div className="field full">
                      <label htmlFor="appt-notes">Brief description (optional)</label>
                      <textarea id="appt-notes" placeholder="A sentence or two about your concern — no sensitive medical history, please." value={values.notes} onChange={(e) => set("notes", e.target.value)} maxLength={600} />
                    </div>
                  </div>
                  <button className="btn btn-primary" type="submit" style={{ marginTop: "1.3rem", width: "100%" }}>
                    <CalendarCheck aria-hidden="true" /> Send Enquiry
                  </button>
                  <div className="form-note">
                    <strong>What happens next (in a real hospital):</strong> confirmation by your chosen contact method, preparation instructions, and a written estimate where relevant. <strong>On this demo site:</strong> an on-screen confirmation only — nothing is sent or stored.
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
