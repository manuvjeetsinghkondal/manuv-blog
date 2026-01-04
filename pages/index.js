export default function Home() {
  return (
    <main style={{ maxWidth: 900, margin: "auto", padding: "40px", fontFamily: "system-ui" }}>
      <h1>Latest Tech, Security & Engineering News</h1>

      <p>
        Curated summaries and analysis for developers, architects,
        and security engineers. Updated regularly. No noise.
      </p>

      <h2>Today’s Highlights</h2>
      <ul>
        <li>Critical Linux kernel vulnerability — impact & mitigation</li>
        <li>Cloud IAM behavior change that may break existing policies</li>
        <li>New AI API rate limits explained for backend teams</li>
      </ul>

      <h2>Categories</h2>
      <ul>
        <li>Cybersecurity</li>
        <li>Cloud & DevOps</li>
        <li>Software Engineering</li>
        <li>AI & APIs</li>
      </ul>
    </main>
  );
}
