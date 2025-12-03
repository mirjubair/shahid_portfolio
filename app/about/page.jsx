export default function About() {
  return (
    <section className="section">
      <h1 className="text-3xl font-bold">About — Mohammad Shahid Mir</h1>
      <p className="mt-4 text-lg text-muted max-w-2xl">
        Mohammad Shahid Mir is a creative graphic designer with 2–3 years of focused experience in branding,
        social media creatives and web graphics. He enjoys working with startups — crafting modern, clean visuals
        that communicate clearly and scale across platforms.
      </p>

      <h3 className="mt-6 text-xl font-semibold">Highlights</h3>
      <ul className="mt-3 list-disc pl-5 text-sm text-muted">
        <li>Strong portfolio in branding, social and web assets</li>
        <li>Fast turnarounds, independent & reliable delivery</li>
        <li>Comfortable working remotely with flexible timings</li>
      </ul>

      <a className="btn-accent mt-6 inline-block" href="/resume.pdf" style={{ marginTop: "1rem" }}>Download resume</a>
    </section>
  );
}
