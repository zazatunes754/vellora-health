import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarCheck, CheckCircle2, ChevronRight } from "lucide-react";
import { CtaBand, PageHero, Reveal, usePage } from "../components/ui";
import { getService, getSpecialist, services, specialists } from "../data/content";
import NotFound from "./NotFound";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug ?? "");
  if (!service) return <NotFound />;
  return <ServiceDetailView slug={service.slug} />;
}

function ServiceDetailView({ slug }: { slug: string }) {
  const service = getService(slug)!;
  usePage(service.name, `${service.name} at Vellora Health — ${service.tagline} Demonstration content.`);
  const related = services.filter((s) => s.slug !== service.slug && s.category === service.category).concat(
    services.filter((s) => s.slug !== service.slug && s.category !== service.category)
  ).slice(0, 3);
  const linked = specialists.filter((sp) => sp.specialty === service.slug);
  const fallbackSpec = linked.length > 0 ? linked : [specialists[Math.abs(hash(service.slug)) % specialists.length]];
  void getSpecialist;

  return (
    <>
      <PageHero
        eyebrow={service.category}
        title={service.name}
        lead={service.tagline}
        crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: service.name }]}
        image={service.image}
        imageAlt={`${service.name} clinic at Vellora Health`}
      />

      <section className="section" aria-labelledby="service-overview">
        <div className="container detail-grid">
          <div className="detail-main">
            <Reveal>
              <span className="eyebrow">Overview</span>
              <h2 id="service-overview">Care designed around you.</h2>
              <p style={{ color: "var(--muted)", fontSize: "1.05rem" }}>{service.intro}</p>
            </Reveal>

            <Reveal delay={1}>
              <h2>Who this clinic suits</h2>
              <ul className="ticks">
                {service.whoFor.map((w) => (
                  <li key={w}><CheckCircle2 aria-hidden="true" />{w}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={1}>
              <h2>What to expect</h2>
              <ol className="numbered-list">
                {service.expect.map((e, i) => (
                  <li key={e.title}>
                    <span className="num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                    <span><strong>{e.title}</strong><p>{e.text}</p></span>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={1}>
              <h2>Common reasons people visit</h2>
              <div className="tag-row" style={{ marginTop: "0.6rem" }}>
                {service.reasons.map((r) => (
                  <span className="tag" key={r} style={{ fontSize: "0.8rem", padding: "0.5rem 0.95rem" }}>{r}</span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="disclaimer">
                <strong>A note on this page:</strong> {service.closing} General information only — never a substitute for personal medical advice.
              </div>
            </Reveal>

            <Reveal delay={1}>
              <h2>Clinicians in this clinic</h2>
              <div className="grid-2">
                {fallbackSpec.slice(0, 2).map((sp) => (
                  <Link key={sp.slug} className="svc-row" to={`/specialists/${sp.slug}`} style={{ gridTemplateColumns: "84px 1fr" }}>
                    <img src={sp.image} alt="" loading="lazy" style={{ width: 84, height: 84 }} />
                    <span>
                      <span className="spec-role" style={{ fontSize: "0.72rem" }}>{sp.role}</span>
                      <h3 style={{ fontSize: "1.1rem" }}>{sp.name}</h3>
                    </span>
                  </Link>
                ))}
              </div>
            </Reveal>

            <Reveal delay={1}>
              <h2>Related services</h2>
              <div className="grid-3">
                {related.map((r) => (
                  <Link key={r.slug} className="card" to={`/services/${r.slug}`} style={{ textDecoration: "none" }}>
                    <img className="cover" src={r.image} alt="" loading="lazy" style={{ height: 140 }} />
                    <div className="card-body">
                      <span className="spec-role" style={{ fontSize: "0.72rem" }}>{r.category}</span>
                      <h3 style={{ fontSize: "1.15rem" }}>{r.name}</h3>
                    </div>
                  </Link>
                ))}
              </div>
              <div style={{ marginTop: "1.6rem" }}>
                <Link className="btn btn-outline btn-sm" to="/services"><ArrowLeft aria-hidden="true" style={{ width: "1em", height: "1em" }} /> All Services</Link>
              </div>
            </Reveal>
          </div>

          <aside className="side-card" aria-label={`Next steps for ${service.name}`}>
            <span className="eyebrow">Next steps</span>
            <h3>Visit this clinic</h3>
            <p>Request an appointment enquiry mentioning {service.name}. Our demonstration team will confirm a suitable time with you.</p>
            <Link className="btn btn-primary" to="/appointments">Request an Appointment <ArrowRight aria-hidden="true" /></Link>
            <Link className="btn btn-outline" to="/contact">Ask a Question</Link>
            <ul className="side-links" aria-label="More services">
              {services.filter((s) => s.slug !== service.slug).slice(0, 5).map((s) => (
                <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.name}<ChevronRight aria-hidden="true" /></Link></li>
              ))}
            </ul>
            <p style={{ marginTop: "1rem", fontSize: "0.8rem", display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
              <CalendarCheck aria-hidden="true" style={{ width: 16, height: 16, flex: "none", marginTop: 2 }} />
              Illustrative hours: Mon–Fri 9:00–18:00, Sat 8:00–16:00.
            </p>
          </aside>
        </div>
      </section>

      <section className="section tight" aria-label="Request an appointment" style={{ paddingTop: 0 }}>
        <CtaBand title={`Questions about ${service.name.toLowerCase()}? Start with a conversation.`} />
      </section>
    </>
  );
}

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}
