import ProjectCard from "../../components/ProjectCard";

export default function ProjectsPage() {
  const projects = [
  {
    title: "Powersky",
    href: "https://www.facebook.com/ultrastore0",
    description: "Branding & social creatives with bold typography and social-first assets."
  },
  {
    title: "LasjanFC",
    href: "https://www.facebook.com/share/p/1AJi4LZNYn/",
    description: "Football channel templates and identity systems for better engagement."
  },
  {
    title: "Dubai Nile Links",
    href: "https://www.facebook.com/share/p/17aYR8YMyD/",
    description: "Corporate web graphics and product visuals tailored for IT services."
  },
  {
    title: "Ultrastore",
    href: "https://www.facebook.com/share/19D7erituM/", // ← replace with the real link when you give it
    description: "Branding & visual identity for a modern clothing store — product display templates, social creatives and clean promo visuals."
  }
];


  return (
    <section className="section">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  );
}
