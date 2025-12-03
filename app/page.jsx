import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import ParticlesLoader from "../components/ParticlesLoader";

export default function HomePage() {
const projects = [
  {
    title: "Powersky",
    href: "https://www.facebook.com/ultrastore0",
    description: "Branding & social creatives with bold typography and social-first assets.",
    thumbnail: "/powersky.jpg"
  },
  {
    title: "LasjanFC",
    href: "https://www.facebook.com/share/p/1AJi4LZNYn/",
    description: "Football channel templates and identity systems for better engagement.",
    thumbnail: "/lasjanfc.jpg"
  },
  {
    title: "Dubai Nile Links",
     href: "https://www.facebook.com/share/p/17aYR8YMyD/",
    
    description: "Corporate web graphics and product visuals tailored for IT services.",
    thumbnail: "/nilelinks.jpg"
  },

];


  return (
    <>
      {/* Client-only particle background */}
      <ParticlesLoader count={140} hue={210} speed={1.4} />

      <main className="content-root">
        <Hero />

        <section className="section">
          <div className="container">
            <h2 className="h2">Selected projects</h2>
            <p className="lead text-muted" style={{ marginTop: 8, marginBottom: 18 }}>
              A selection of brand & social projects, optimized for web and social systems.
            </p>

            <div className="grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 18 }}>
              {projects.map(p => <ProjectCard key={p.title} {...p} />)}
            </div>
          </div>
        </section>

        {/* --- SKILLS SECTION (visible) --- */}
        <section className="section" aria-labelledby="skills-heading">
          <div className="container">
            <h2 id="skills-heading" className="h2">Skills</h2>
            <p className="small text-muted" style={{ marginTop: 8 }}>
              Core tools and creative areas — interactive radial charts below.
            </p>

            <div style={{ marginTop: 16 }}>
              <Skills />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="h2">Services I offer</h2>
            <p className="small text-muted" style={{ marginTop: 8 }}>Practical services focused for startups and small teams, designed to scale.</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16, marginTop: 16 }}>
              <div className="card p-4">
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <div className="icon-frame" style={{ background: "linear-gradient(180deg,var(--accent-1),var(--accent-2))" }}>B</div>
                  <div>
                    <div style={{ fontWeight: 700 }}>Brand Identity</div>
                    <div className="small text-muted" style={{ marginTop: 6 }}>Logo systems, color, typography & brand guidelines.</div>
                  </div>
                </div>
              </div>

              <div className="card p-4">
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <div className="icon-frame" style={{ background: "linear-gradient(180deg,#7C7DFA,#4CC9F0)" }}>S</div>
                  <div>
                    <div style={{ fontWeight: 700 }}>Social Creatives</div>
                    <div className="small text-muted" style={{ marginTop: 6 }}>Templates, campaign visuals and micro animations.</div>
                  </div>
                </div>
              </div>

              <div className="card p-4">
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <div className="icon-frame" style={{ background: "linear-gradient(180deg,#7BE495,#34D399)" }}>W</div>
                  <div>
                    <div style={{ fontWeight: 700 }}>Web Graphics</div>
                    <div className="small text-muted" style={{ marginTop: 6 }}>Hero banners, product visuals and landing creatives.</div>
                  </div>
                </div>
              </div>

              <div className="card p-4">
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <div className="icon-frame" style={{ background: "linear-gradient(180deg,#FF7A7A,#FFB86B)" }}>M</div>
                  <div>
                    <div style={{ fontWeight: 700 }}>Motion & 3D Mockups</div>
                    <div className="small text-muted" style={{ marginTop: 6 }}>Short animations, GIFs & isometric mockups.</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 18 }}>
              <a className="btn-accent" href="/contact">Hire me</a>
              <a className="btn-outline" href="/about" style={{ marginLeft: 12 }}>Learn more</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="h2">Testimonials</h2>
            <div style={{ marginTop: 12, display: "grid", gap: 12 }}>
              <div className="card p-4">
                <div style={{ fontWeight: 700 }}>“Quick, creative and extremely reliable.”</div>
                <div className="small text-muted" style={{ marginTop: 8 }}>— Startup cofounder, Powersky</div>
              </div>

              <div className="card p-4">
                <div style={{ fontWeight: 700 }}>“Templates made our social posting 3x faster.”</div>
                <div className="small text-muted" style={{ marginTop: 8 }}>— LasjanFC channel admin</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="h2">How I work</h2>
            <div style={{ marginTop: 12, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <div className="card p-4" style={{ flex: "1 1 220px" }}>
                <div style={{ fontWeight: 700 }}>1. Understand</div>
                <div className="small text-muted" style={{ marginTop: 8 }}>Quick research & brief to align goals.</div>
              </div>
              <div className="card p-4" style={{ flex: "1 1 220px" }}>
                <div style={{ fontWeight: 700 }}>2. Create</div>
                <div className="small text-muted" style={{ marginTop: 8 }}>Concepts, mockups & quick iteration.</div>
              </div>
              <div className="card p-4" style={{ flex: "1 1 220px" }}>
                <div style={{ fontWeight: 700 }}>3. Deliver</div>
                <div className="small text-muted" style={{ marginTop: 8 }}>Production-ready files for web & social.</div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
