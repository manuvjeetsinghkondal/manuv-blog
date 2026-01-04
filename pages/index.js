export default function Home() {
  return (
    <div
      style={{
        fontFamily: "system-ui",
        background: "#f9fafb",
        minHeight: "100vh",
        color: "#111827" // base text color (important)
      }}
    >
      {/* Header */}
      <header style={{ padding: "20px 0", borderBottom: "1px solid #e5e7eb", background: "#ffffff" }}>
        <div style={{ maxWidth: 1100, margin: "auto", padding: "0 20px" }}>
          <h2 style={{ margin: 0, color: "#111827" }}>Manuv Tech Brief</h2>
          <p style={{ margin: "4px 0", color: "#374151" }}>
            Daily tech, security & engineering updates
          </p>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: "#ffffff", padding: "48px 0" }}>
        <div style={{ maxWidth: 1100, margin: "auto", padding: "0 20px" }}>
          <h1 style={{ fontSize: "2.3rem", marginBottom: "12px", color: "#111827" }}>
            Latest Tech, Security & Engineering News
          </h1>
          <p style={{ color: "#374151", maxWidth: 720, fontSize: "1.05rem" }}>
            Curated summaries and impact analysis for developers, architects,
            and security engineers. No clickbait. No marketing noise.
          </p>
        </div>
      </section>

      {/* Latest News */}
      <section style={{ padding: "40px 0" }}>
        <div style={{ maxWidth: 1100, margin: "auto", padding: "0 20px" }}>
          <h3 style={{ marginBottom: "20px", color: "#111827" }}>Latest Updates</h3>

          <article style={cardStyle}>
            <h4>Critical Linux kernel vulnerability explained</h4>
            <p style={metaStyle}>Cybersecurity • 2 hours ago</p>
            <p>
              A newly disclosed Linux kernel flaw impacts privilege escalation.
              Here’s what engineering teams should know and patch immediately.
            </p>
          </article>

          <article style={cardStyle}>
            <h4>AWS IAM behavior change may break existing policies</h4>
            <p style={metaStyle}>Cloud & DevOps • Today</p>
            <p>
              AWS quietly updated IAM evaluation logic. This change can affect
              legacy permission boundaries and cross-account access.
            </p>
          </article>

          <article style={cardStyle}>
            <h4>New AI API rate limits: impact on backend systems</h4>
            <p style={metaStyle}>AI & APIs • Today</p>
            <p>
              Major AI providers are enforcing stricter rate limits. Here’s how
              to redesign retries, queues, and fallbacks safely.
            </p>
          </article>
        </div>
      </section>

      {/* Categories */}
      <section style={{ background: "#ffffff", padding: "32px 0" }}>
        <div style={{ maxWidth: 1100, margin: "auto", padding: "0 20px" }}>
          <h3 style={{ marginBottom: "12px" }}>Categories</h3>
          <ul style={{ display: "flex", gap: "24px", listStyle: "none", padding: 0, color: "#2563eb" }}>
            <li>Cybersecurity</li>
            <li>Cloud & DevOps</li>
            <li>Software Engineering</li>
            <li>AI & APIs</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "20px 0", borderTop: "1px solid #e5e7eb", background: "#ffffff" }}>
        <div style={{ maxWidth: 1100, margin: "auto", padding: "0 20px", color: "#6b7280" }}>
          <p>
            © {new Date().getFullYear()} Manuv Tech Brief • AI-assisted, engineer-reviewed
          </p>
        </div>
      </footer>
    </div>
  );
}

const cardStyle = {
  background: "#ffffff",
  padding: "22px",
  marginBottom: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.06)"
};

const metaStyle = {
  fontSize: "0.85rem",
  color: "#6b7280",
  marginBottom: "6px"
};
