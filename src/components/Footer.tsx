import { Link } from "react-router-dom";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./ui";
import { serviceLinks } from "../data/content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link className="brand" to="/" aria-label="Vellora Health — home" style={{ marginBottom: "1.1rem" }}>
            <Logo />
            <span className="brand-name">VELLORA<small>HEALTH</small></span>
          </Link>
          <p>Healthcare, elevated by humanity. Thoughtful medical care, modern facilities, and personal attention at every step.</p>
          <p style={{ fontSize: "0.8rem", color: "#9d967e", marginTop: "1rem" }}>
            Fictional demonstration website. All clinicians, content, and contact details are illustrative.
          </p>
        </div>

        <nav className="footer-col" aria-label="Services">
          <h4>Services</h4>
          <ul>
            {serviceLinks.slice(0, 6).map((s) => (
              <li key={s.to}><Link to={s.to}>{s.label}</Link></li>
            ))}
            <li><Link to="/services">View all services</Link></li>
          </ul>
        </nav>

        <nav className="footer-col" aria-label="Explore">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/about">About Vellora</Link></li>
            <li><Link to="/specialists">Specialists</Link></li>
            <li><Link to="/patient-resources">Patient Resources</Link></li>
            <li><Link to="/pricing-insurance">Pricing &amp; Insurance</Link></li>
            <li><Link to="/insights">Insights</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </nav>

        <div className="footer-col">
          <h4>Visit (demo details)</h4>
          <ul className="footer-contact">
            <li><MapPin aria-hidden="true" /><span>14 Linden Quarter, demonstration address — not a real location</span></li>
            <li><Phone aria-hidden="true" /><a href="tel:+10005550134">+1 (000) 555-0134</a></li>
            <li><Mail aria-hidden="true" /><a href="mailto:hello@vellorahealth.example">hello@vellorahealth.example</a></li>
            <li><Clock aria-hidden="true" /><span>Mon–Fri 9:00–18:00 · Sat 8:00–16:00</span></li>
          </ul>
          <Link className="btn btn-brass btn-sm" to="/appointments" style={{ marginTop: "1.2rem" }}>Request an Appointment</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <span>© 2026 Vellora Health (demonstration). Not a real hospital — nothing here is medical advice.</span>
          <span style={{ display: "flex", gap: "1.2rem" }}>
            <Link to="/patient-resources">Accessibility</Link>
            <Link to="/faq">Privacy</Link>
            <Link to="/contact">Contact</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
