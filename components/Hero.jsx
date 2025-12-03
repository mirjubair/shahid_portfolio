"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="section" aria-label="Intro">
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 24, alignItems: "start" }}>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <div className="kicker">Freelance Graphic Designer — Remote</div>
          <h1 className="h1" style={{ marginTop: 12 }}>Mohammad Shahid Mir</h1>
          <p className="lead text-muted" style={{ marginTop: 12 }}>
            I design brand systems, social campaigns and web-ready graphics for startups.
            Bold, clean and production-ready — available for project work and long-term collaborations.
          </p>

          <div style={{ marginTop: 18, display: "flex", gap: 12 }}>
            <a className="btn-accent" href="/contact">Hire me</a>
            <a className="btn-outline" href="/projects">View work</a>
          </div>

          <div style={{ marginTop: 18, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <div className="card p-3" style={{ minWidth: 150 }}>
              <div style={{ fontWeight: 700 }}>2–3 years experience</div>
              <div className="small text-muted" style={{ marginTop: 6 }}>Branding, social creatives, web graphics</div>
            </div>

            <div className="card p-3" style={{ minWidth: 150 }}>
              <div style={{ fontWeight: 700 }}>Startup-friendly</div>
              <div className="small text-muted" style={{ marginTop: 6 }}>Flexible timings & budgets</div>
            </div>
          </div>
        </motion.div>

        <motion.aside initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
          <div className="card p-4" style={{ width: 320 }}>
            <div style={{ borderRadius: 10, overflow: "hidden", background: "linear-gradient(135deg,var(--accent-1),var(--accent-2))", padding: 14, color: "white" }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <div style={{ width:56, height:56, borderRadius: 12, background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>SM</div>
                <div>
                  <div style={{ fontWeight: 800 }}>Mohammad Shahid Mir</div>
                  <div className="small" style={{ opacity: 0.95 }}>Graphic Designer — Freelance</div>
                </div>
              </div>

              <div style={{ marginTop: 12, fontSize: 14, opacity: 0.95 }}>
                Startup-focused designer — brand systems, social-first content and web visuals.
              </div>

              <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
                <a className="btn-outline">Message</a>
                <a className="btn-accent" href="/contact">Hire</a>
              </div>
            </div>

            <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
              <div className="card p-3" style={{ flex: 1 }}>
                <div style={{ fontWeight: 700 }}>Tools</div>
                <div className="small text-muted" style={{ marginTop: 6 }}>Figma • Photoshop • Illustrator • After Effects</div>
              </div>

              <div className="card p-3" style={{ width: 100, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontWeight: 800 }}>Remote</div>
                  <div className="small text-muted" style={{ marginTop: 6 }}>Flexible</div>
                </div>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
