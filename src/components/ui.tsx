import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Plus } from "lucide-react";

/* ---------- Document title / meta ---------- */
export function usePage(title: string, description: string) {
  useEffect(() => {
    document.title = `${title} — Vellora Health`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [title, description]);
}

/* ---------- Scroll reveal ---------- */
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: 0 | 1 | 2 | 3; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("is-visible"), io.unobserve(e.target))),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal${delay ? ` reveal-d${delay}` : ""}${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
}

/* ---------- Brand logo ---------- */
export function Logo({ size = 42 }: { size?: number }) {
  return (
    <svg className="brand-mark" width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="Vellora Health logo">
      <rect width="64" height="64" rx="14" fill="#1c3a2e" />
      <path d="M18 17 L32 47 L46 17" fill="none" stroke="#faf6ef" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="32" cy="47" r="3.4" fill="#c9a86a" />
      <path d="M40 12 C44 16 46 21 46 26" fill="none" stroke="#c9a86a" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

/* ---------- Section heading ---------- */
export function SectionHead({ eyebrow, title, lead, center = false }: { eyebrow: string; title: string; lead?: string; center?: boolean }) {
  return (
    <Reveal className={`sec-head${center ? " center" : ""}`}>
      <span className={`eyebrow${center ? " center" : ""}`}>{eyebrow}</span>
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </Reveal>
  );
}

/* ---------- Page hero ---------- */
export function PageHero({ eyebrow, title, lead, crumbs, image, imageAlt }: {
  eyebrow: string; title: string; lead?: string;
  crumbs?: { label: string; to?: string }[];
  image?: string; imageAlt?: string;
}) {
  return (
    <div className={`page-hero${image ? " split-hero" : ""}`}>
      <div className="container">
        <div>
          {crumbs && crumbs.length > 0 && (
            <nav className="crumbs" aria-label="Breadcrumb">
              {crumbs.map((c, i) => (
                <span key={c.label} style={{ display: "inline-flex", alignItems: "center", gap: "0.55rem" }}>
                  {i > 0 && <ChevronRight aria-hidden="true" />}
                  {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
                </span>
              ))}
            </nav>
          )}
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          {lead && <p className="lead">{lead}</p>}
        </div>
        {image && <img src={image} alt={imageAlt ?? title} loading="eager" />}
      </div>
    </div>
  );
}

/* ---------- Accordion ---------- */
export function Accordion({ items, firstOpen = false }: { items: { q: string; a: string }[]; firstOpen?: boolean }) {
  const [open, setOpen] = useState<number | null>(firstOpen ? 0 : null);
  return (
    <div className="accordion" role="presentation">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div className={`acc-item${isOpen ? " open" : ""}`} key={item.q}>
            <h3 style={{ margin: 0, fontFamily: "var(--sans)", fontSize: "1rem" }}>
              <button
                className="acc-btn"
                aria-expanded={isOpen}
                aria-controls={`acc-panel-${i}`}
                id={`acc-btn-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>{item.q}</span>
                <span className="acc-icon" aria-hidden="true"><Plus /></span>
              </button>
            </h3>
            <div
              className="acc-panel"
              id={`acc-panel-${i}`}
              role="region"
              aria-labelledby={`acc-btn-${i}`}
              hidden={!isOpen}
              style={isOpen ? undefined : { display: "none" }}
            >
              <div className="acc-panel-inner"><p>{item.a}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- CTA band ---------- */
export function CtaBand({ title = "Begin with a conversation, not a queue.", text = "Request an appointment enquiry and our demonstration care team will guide you to the right specialty — with honest advice and no obligation.", image = "/images/consult-tablet.jpg" }: { title?: string; text?: string; image?: string }) {
  return (
    <div className="container">
      <Reveal>
        <div className="cta-band">
          <div>
            <span className="eyebrow" style={{ color: "var(--champagne)" }}>Request an appointment</span>
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="cta-actions">
              <Link className="btn btn-light" to="/appointments">Request an Appointment <ArrowRight aria-hidden="true" /></Link>
              <Link className="btn btn-ghost-light" to="/contact">Contact Us</Link>
            </div>
          </div>
          <img src={image} alt="A clinician discussing care with a patient" loading="lazy" />
        </div>
      </Reveal>
    </div>
  );
}

/* ---------- Card link ---------- */
export function CardLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link className="card-link" to={to}>
      {children} <ArrowRight aria-hidden="true" />
    </Link>
  );
}
