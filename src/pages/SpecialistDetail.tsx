import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarCheck, Globe, Stethoscope } from "lucide-react";
import { CtaBand, PageHero, Reveal, usePage } from "../components/ui";
import { getService, getSpecialist, specialists } from "../data/content";
import NotFound from "./NotFound";

export default function SpecialistDetail() {
  const { slug } = useParams();
  const spec = getSpecialist(slug ?? "");
  if (!spec) return <NotFound />;
  return <ProfileView slug={spec.slug} />;
}

function ProfileView({ slug }: { slug: string }) {
  const spec = getSpecialist(slug)!;
  usePage(spec.name, `${spec.name}, ${spec.role} at Vellora Health — illustrative demonstration profile.`);
  const service = getService(spec.specialty);
  const colleagues = specialists.filter((s) => s.slug !== spec.slug && s.specialty === spec.specialty)
    .concat(specialists.filter((s) => s.slug !== spec.slug && s.specialty !== spec.specialty))
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={spec.specialtyLabel}
        title={spec.name}
        lead={spec.role}
        crumbs={[{ label: "Home", to: "/" }, { label: "Specialists", to: "/specialists" }, { label: spec.name }]}
      />

      <section className="section" aria-labelledby="profile">
        <div className="container">
          <div className="demo-note" style={{ marginBottom: "1.8rem" }}>
            <strong>Illustrative profile:</strong> {spec.name} is a fictional demonstration persona. Details below are illustrative, not verified credentials, and do not represent a real practising clinician.
          </div>
          <div className="profile-head">
            <Reveal>
              <img src={spec.image} alt={`Portrait of ${spec.name}`} />
            </Reveal>
            <div>
              <Reveal>
                <span className="eyebrow">Professional introduction</span>
                <h2 id="profile" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.1rem)" }}>A clinician known for unhurried, plain-spoken care.</h2>
                {spec.bio.map((p) => (
                  <p key={p.slice(0, 24)} style={{ color: "var(--muted)" }}>{p}</p>
                ))}
              </Reveal>
              <Reveal delay={1}>
                <div className="tag-row" style={{ margin: "1.2rem 0" }}>
                  {spec.focus.map((f) => (
                    <span className="tag" key={f}>{f}</span>
                  ))}
                </div>
                <dl className="kv">
                  <dt>Clinic days</dt><dd><CalendarCheck aria-hidden="true" style={{ width: 15, height: 15, verticalAlign: -2 }} /> {spec.clinicDays} (illustrative)</dd>
                  <dt>Languages</dt><dd><Globe aria-hidden="true" style={{ width: 15, height: 15, verticalAlign: -2 }} /> {spec.languages.join(", ")}</dd>
                  <dt>Clinic</dt><dd><Stethoscope aria-hidden="true" style={{ width: 15, height: 15, verticalAlign: -2 }} /> {service ? <Link to={`/services/${service.slug}`}>{service.name}</Link> : spec.specialtyLabel}</dd>
                </dl>
                <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
                  <Link className="btn btn-primary" to="/appointments">Request {spec.name.split(" ")[1] ?? "this clinician"} <ArrowRight aria-hidden="true" /></Link>
                  <Link className="btn btn-outline" to="/specialists"><ArrowLeft aria-hidden="true" style={{ width: "1em", height: "1em" }} /> All Specialists</Link>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={1}>
            <div style={{ marginTop: "3rem" }}>
              <h2 style={{ fontSize: "1.6rem" }}>You may also meet</h2>
              <div className="grid-3">
                {colleagues.map((c) => (
                  <Link key={c.slug} className="svc-row" to={`/specialists/${c.slug}`} style={{ gridTemplateColumns: "84px 1fr" }}>
                    <img src={c.image} alt="" loading="lazy" style={{ width: 84, height: 84 }} />
                    <span>
                      <span className="spec-role" style={{ fontSize: "0.72rem" }}>{c.specialtyLabel}</span>
                      <h3 style={{ fontSize: "1.1rem" }}>{c.name}</h3>
                      <p>{c.role}</p>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section tight" aria-label="Request an appointment" style={{ paddingTop: 0 }}>
        <CtaBand title={`Wish to meet ${spec.name.split(" ")[0]} ${spec.name.split(" ")[1] ?? ""}? Send an enquiry.`} />
      </section>
    </>
  );
}
