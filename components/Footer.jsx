export default function Footer() {
  return (
    <footer className="section" style={{ textAlign: "center", color: "var(--muted)", marginTop: 24 }}>
      <div>© {new Date().getFullYear()} Mohammad Shahid Mir — Freelance Graphic Designer</div>
      <div style={{ marginTop: 8 }}>
        <a href="/about" style={{ marginRight: 12 }}>About</a>
        <a href="/projects" style={{ marginRight: 12 }}>Projects</a>
        <a href="/contact">Contact</a>
      </div>
    </footer>
  );
}
