import { useEffect, useRef, useState, type FocusEvent, type KeyboardEvent as ReactKeyboardEvent, type ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { Logo } from "./ui";
import { serviceLinks } from "../data/content";

const primaryLinks = [
  { to: "/about", label: "About" },
  { to: "/specialists", label: "Specialists" },
  { to: "/pricing-insurance", label: "Pricing" },
  { to: "/insights", label: "Insights" },
];

const moreLinks = [
  { to: "/patient-resources", label: "Patient Resources" },
  { to: "/faq", label: "FAQ" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

type MenuId = "services" | "more";

/* How long the menu lingers after the pointer leaves its region.
   Short enough to feel instant, long enough to cross the trigger/panel gap. */
const CLOSE_DELAY_MS = 140;

/* ---------- Desktop dropdown (hover to open, click to toggle) ---------- */
function NavDropdown({ id, label, menuLabel, openMenu, setOpenMenu, align = "center", active = false, children }: {
  id: MenuId;
  label: string;
  menuLabel: string;
  openMenu: MenuId | null;
  setOpenMenu: (m: MenuId | null | ((cur: MenuId | null) => MenuId | null)) => void;
  align?: "center" | "right";
  active?: boolean;
  children: ReactNode;
}) {
  const open = openMenu === id;
  const closeTimer = useRef<number | null>(null);
  const menuId = `nav-menu-${id}`;

  const cancelClose = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => {
      // Only close if this menu is still the open one (guards menu-to-menu switches).
      setOpenMenu((cur) => (cur === id ? null : cur));
    }, CLOSE_DELAY_MS);
  };

  useEffect(() => cancelClose, []);

  const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
    // Keyboard users: keep open while focus is anywhere inside; close when it leaves.
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
      cancelClose();
      setOpenMenu((cur) => (cur === id ? null : cur));
    }
  };

  const handleKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      cancelClose();
      setOpenMenu(null);
      e.currentTarget.querySelector("button")?.focus();
    }
  };

  return (
    <div
      className={`nav-drop${open ? " open" : ""}`}
      onMouseEnter={() => { cancelClose(); setOpenMenu(id); }}
      onMouseLeave={scheduleClose}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      <button
        className="nav-drop-btn"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={() => { cancelClose(); setOpenMenu(open ? null : id); }}
        style={active ? { fontWeight: 700, color: "var(--forest-deep)" } : undefined}
      >
        {label} <ChevronDown aria-hidden="true" />
      </button>
      <div
        className={`nav-drop-menu${align === "right" ? " align-right" : ""}`}
        role="menu"
        id={menuId}
        aria-label={menuLabel}
      >
        {children}
      </div>
    </div>
  );
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState<MenuId | null>(null);
  const [drawer, setDrawer] = useState(false);
  const [svcExpanded, setSvcExpanded] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setOpenMenu(null);
    setDrawer(false);
    setSvcExpanded(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!drawer) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setDrawer(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [drawer]);

  // Click outside the desktop nav closes any open dropdown.
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const servicesActive = location.pathname.startsWith("/services");

  return (
    <>
      <div className="utility-strip">
        <div className="container">
          <span><span className="demo-dot" aria-hidden="true" />Demonstration website — illustrative content, not a real hospital</span>
          <span style={{ display: "flex", gap: "1.2rem" }}>
            <a className="hide-mobile" href="mailto:hello@vellorahealth.example"><Mail aria-hidden="true" /> hello@vellorahealth.example</a>
            <a href="tel:+10005550134"><Phone aria-hidden="true" /> +1 (000) 555-0134</a>
          </span>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" to="/" aria-label="Vellora Health — home">
            <Logo />
            <span className="brand-name">VELLORA<small>HEALTH</small></span>
          </Link>

          <nav className="main-nav" aria-label="Primary" ref={navRef}>
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
            <NavDropdown id="services" label="Services" menuLabel="Services" openMenu={openMenu} setOpenMenu={setOpenMenu} active={servicesActive}>
              <Link to="/services" role="menuitem" className="menu-all">All services</Link>
              {serviceLinks.map((s) => (
                <NavLink key={s.to} to={s.to} role="menuitem" className={({ isActive }) => (isActive ? "active" : "")}>{s.label}</NavLink>
              ))}
            </NavDropdown>
            {primaryLinks.slice(1).map((l) => (
              <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? "active" : "")}>{l.label}</NavLink>
            ))}
            <NavDropdown id="more" label="More" menuLabel="More pages" openMenu={openMenu} setOpenMenu={setOpenMenu} align="right">
              {moreLinks.map((l) => (
                <NavLink key={l.to} to={l.to} role="menuitem" className={({ isActive }) => (isActive ? "active" : "")}>{l.label}</NavLink>
              ))}
            </NavDropdown>
          </nav>

          <div className="header-cta">
            <Link className="btn btn-primary btn-sm" to="/appointments" style={{ padding: "0.85rem 1.4rem", fontSize: "0.9rem" }}>
              Request an Appointment
            </Link>
          </div>

          <button className="menu-toggle" aria-expanded={drawer} aria-controls="mobile-drawer" aria-label={drawer ? "Close menu" : "Open menu"} onClick={() => setDrawer(true)}>
            <Menu aria-hidden="true" />
          </button>
        </div>
      </header>

      <div className={`mobile-drawer${drawer ? " open" : ""}`} id="mobile-drawer" aria-hidden={!drawer}>
        <div className="drawer-scrim" onClick={() => setDrawer(false)} />
        <div className="drawer-panel" role="dialog" aria-modal="true" aria-label="Site menu">
          <div className="drawer-top">
            <Link className="brand" to="/" aria-label="Vellora Health — home" onClick={() => setDrawer(false)}>
              <Logo size={36} />
              <span className="brand-name" style={{ fontSize: "1.2rem" }}>VELLORA<small>HEALTH</small></span>
            </Link>
            <button className="drawer-close" aria-label="Close menu" onClick={() => setDrawer(false)}>
              <X aria-hidden="true" />
            </button>
          </div>
          <NavLink className="drawer-link" to="/" end>Home</NavLink>
          <NavLink className="drawer-link" to="/about">About Vellora</NavLink>
          <NavLink className="drawer-link" to="/services">All Services</NavLink>
          <button
            className="drawer-toggle"
            aria-expanded={svcExpanded}
            aria-controls="drawer-services"
            onClick={() => setSvcExpanded((v) => !v)}
          >
            <span>Browse specialties</span><ChevronDown aria-hidden="true" />
          </button>
          <div className={`drawer-sub${svcExpanded ? "" : " collapsed"}`} id="drawer-services">
            {serviceLinks.map((s) => (
              <NavLink key={s.to} to={s.to} className={({ isActive }) => (isActive ? "active" : "")}>{s.label}</NavLink>
            ))}
          </div>
          <NavLink className="drawer-link" to="/specialists">Specialists</NavLink>
          <NavLink className="drawer-link" to="/pricing-insurance">Pricing &amp; Insurance</NavLink>
          <NavLink className="drawer-link" to="/patient-resources">Patient Resources</NavLink>
          <NavLink className="drawer-link" to="/insights">Insights</NavLink>
          <NavLink className="drawer-link" to="/faq">FAQ</NavLink>
          <NavLink className="drawer-link" to="/careers">Careers</NavLink>
          <NavLink className="drawer-link" to="/contact">Contact</NavLink>
          <div className="drawer-cta">
            <Link className="btn btn-primary" to="/appointments">Request an Appointment</Link>
            <a className="btn btn-outline" href="tel:+10005550134">Call (000) 555-0134</a>
          </div>
        </div>
      </div>
    </>
  );
}
