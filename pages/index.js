import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
        background: "#f8fafc",
        minHeight: "100vh",
        color: "#0f172a"
      }}
    >
      {/* Header */}
      <header
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #e5e7eb"
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "auto",
            padding: "24px 20px"
          }}
        >
          <h2 style={{ margin: 0, fontWeight: 700 }}>Manuv Tech Brief</h2>
          <p style={{ margin: "6px 0 0", color: "#475569" }}>
            Clear, technical news for engineers
          </p>
        </div>
      </header>

      {/* Hero with background blur */}
<section
  style={{
    position: "relative",
    overflow: "hidden",
    background: "#ffffff"
  }}
>
  {/* Blurred background layer */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(120deg, rgba(59,130,246,0.15), rgba(14,165,233,0.15), rgba(99,102,241,0.15))",
      filter: "blur(60px)",
      transform: "scale(1.2)"
    }}
  />

  {/* Content */}
  <div
    style={{
      position: "relative",
      maxWidth: 1120,
      margin: "auto",
      padding: "72px 20px",
      backdropFilter: "blur(6px)"
    }}
  >
    <h1
      style={{
        fontSize: "2.6rem",
        lineHeight: 1.2,
        marginBottom: "16px",
        fontWeight: 700
      }}
    >
      Tech, Security & Engineering — Explained
    </h1>

    <p
      style={{
        maxWidth: 720,
        fontSize: "1.15rem",
        color: "#475569"
      }}
    >
      Daily summaries and impact analysis of important technology
      developments — written for developers, architects, and security
      professionals.
    </p>
  </div>
</section>

      {/* Latest */}
      <section>
        <div
          style={{
            maxWidth: 1120,
            margin: "auto",
            padding: "48px 20px"
          }}
        >
          <h3 style={{ marginBottom: "28px", fontWeight: 600 }}>
            Latest Updates
          </h3>

          <NewsCard
            href="/blog/linux-kernel-vulnerability"
            title="Critical Linux kernel vulnerability explained"
            meta="Cybersecurity • 2 hours ago"
            desc="A newly disclosed Linux kernel flaw enables privilege escalation. Here’s how it works and what teams should patch immediately."
          />

          <NewsCard
            href="/blog/aws-iam-behavior-change"
            title="AWS IAM behavior change may break existing policies"
            meta="Cloud & DevOps • Today"
            desc="AWS quietly adjusted IAM evaluation rules. This impacts legacy permission boundaries and cross-account access."
          />

          <NewsCard
            href="/blog/ai-api-rate-limits"
            title="New AI API rate limits and backend impact"
            meta="AI & APIs • Today"
            desc="AI providers are tightening rate limits. Learn how to redesign retries, queues, and fallback logic safely."
          />
        </div>
      </section>

      {/* Categories */}
      <section style={{ background: "#ffffff" }}>
        <div
          style={{
            maxWidth: 1120,
            margin: "auto",
            padding: "40px 20px"
          }}
        >
          <h3 style={{ marginBottom: "16px", fontWeight: 600 }}>
            Browse by Category
          </h3>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <CategoryLink href="/category/cybersecurity" label="Cybersecurity" />
            <CategoryLink href="/category/cloud-devops" label="Cloud & DevOps" />
            <CategoryLink
              href="/category/software-engineering"
              label="Software Engineering"
            />
            <CategoryLink href="/category/ai-apis" label="AI & APIs" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid #e5e7eb",
          background: "#ffffff"
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "auto",
            padding: "24px 20px",
            color: "#64748b",
            fontSize: "0.9rem"
          }}
        >
          © {new Date().getFullYear()} Manuv Tech Brief • AI-assisted, engineer-reviewed
        </div>
      </footer>
    </div>
  );
}

/* ---------- Components ---------- */

function NewsCard({ href, title, meta, desc }) {
  return (
    <Link href={href} style={{ textDecoration: "none", color: "inherit" }}>
      <article
        style={{
          background: "#ffffff",
          padding: "28px",
          borderRadius: "14px",
          marginBottom: "24px",
          boxShadow: "0 8px 20px rgba(15,23,42,0.05)",
          transition: "transform 0.15s ease, box-shadow 0.15s ease",
          cursor: "pointer"
        }}
      >
        <h4 style={{ marginBottom: "8px", fontWeight: 600 }}>{title}</h4>
        <p style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "12px" }}>
          {meta}
        </p>
        <p style={{ color: "#334155" }}>{desc}</p>
      </article>
    </Link>
  );
}

function CategoryLink({ href, label }) {
  return (
    <Link
      href={href}
      style={{
        padding: "10px 16px",
        borderRadius: "999px",
        background: "#f1f5f9",
        color: "#0f172a",
        textDecoration: "none",
        fontSize: "0.95rem",
        fontWeight: 500
      }}
    >
      {label}
    </Link>
  );
}
