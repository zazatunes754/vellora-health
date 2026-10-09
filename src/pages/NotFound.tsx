import { Link } from "react-router-dom";
import { ArrowRight, Compass, Home } from "lucide-react";
import { usePage } from "../components/ui";

export default function NotFound() {
  usePage("Page Not Found", "The page you requested could not be found. Return to the Vellora Health homepage.");
  return (
    <div className="container">
      <div className="notfound">
        <span className="eyebrow center">Lost your way?</span>
        <div className="code" aria-hidden="true">4<span>0</span>4</div>
        <h1 style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)" }}>This room doesn't exist — yet.</h1>
        <p className="lead" style={{ margin: "0 auto 2rem" }}>
          The page you're looking for may have moved, or the address may be mistyped.
          Let's get you back to familiar corridors.
        </p>
        <div style={{ display: "flex", gap: "0.9rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link className="btn btn-primary" to="/"><Home aria-hidden="true" /> Return Home</Link>
          <Link className="btn btn-outline" to="/services"><Compass aria-hidden="true" /> Explore Services <ArrowRight aria-hidden="true" /></Link>
        </div>
      </div>
    </div>
  );
}
