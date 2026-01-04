import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const root = document.documentElement.style;

    if (prefersDark) {
      root.setProperty("--header-bg", "rgba(2,6,23,0.75)");
      root.setProperty("--header-text", "#e5e7eb");
      root.setProperty("--header-muted", "#94a3b8");
      root.setProperty("--bg", "#020617");
      root.setProperty("--surface", "#020617");
      root.setProperty("--card-bg", "#020617");
      root.setProperty("--card-border", "#1e293b");
      root.setProperty("--text", "#e5e7eb");
      root.setProperty("--text-secondary", "#cbd5f5");
      root.setProperty("--muted", "#94a3b8");
      root.setProperty("--hero-title", "#e5e7eb");
      root.setProperty("--hero-text", "#cbd5f5");
    } else {
      root.setProperty("--header-bg", "rgba(255,255,255,0.75)");
      root.setProperty("--header-text", "#0f172a");
      root.setProperty("--header-muted", "#475569");
      root.setProperty("--bg", "#f8fafc");
      root.setProperty("--surface", "#ffffff");
      root.setProperty("--card-bg", "#ffffff");
      root.setProperty("--card-border", "#e5e7eb");
      root.setProperty("--text", "#0f172a");
      root.setProperty("--text-secondary", "#334155");
      root.setProperty("--muted", "#64748b");
      root.setProperty("--hero-title", "#0f172a");
      root.setProperty("--hero-text", "#334155");
    }
  }, []);

  return (
    <div
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
        background: "var(--bg)",
        minHeight: "100vh",
        color: "var(--text)"
      }}
    >
      {/* Header */}
      <header
  style={{
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: scrolled ? "var(--header-bg)" : "var(--surface)",
    backdropFilter: scrolled ? "blur(10px)" : "none",
    borderBottom: "1px solid var(--card-border)",
    transition: "all 0.2s ease"
  }}
>
  <div style={{ maxWidth: 1120, margin: "auto", padding: "24px 20px" }}>
    <h2 style={{ margin: 0, fontWeight: 700, color: "var(--header-text)" }}>
      Manuv Tech Brief
    </h2>
    <p style={{ margin: "6px 0 0", color: "var(--header-muted)" }}>
      Clear, technical news for engineers
    </p>
  </div>
</header>


      {/* HERO (ONLY ONE) */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background: "var(--surface)"
        }}
      >
        {/* Blur background */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(60% 60% at 30% 20%, rgba(59,130,246,0.25), transparent 60%), radial-gradient(50% 50% at 70% 30%, rgba(14,165,233,0.25), transparent 60%)",
            filter: "blur(48px)",
            opacity: 0.9
          }}
        />

        {/* Hero content */}
        <div
          style={{
            position: "relative",
            maxWidth: 1120,
            margin: "auto",
            padding: "72px 20px 40px"
          }}
        >
          <h1
            style={{
              fontSize: "2.6rem",
              lineHeight: 1.2,
              marginBottom: "16px",
              fontWeight: 700,
              color: "var(--hero-title)"
            }}
          >
            Tech, Security & Engineering — Explained
          </h1>

          <p
            style={{
              maxWidth: 720,
              fontSize: "1.15rem",
              color: "var(--hero-text)"
            }}
          >
            Daily summaries and impact analysis of important technology
            developments — written for developers, architects, and security
            professionals.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section style={{ background: "var(--surface)" }}>
        <div style={{ maxWidth: 1120, margin: "auto", padding: "20px 20px 40px" }}>
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

      {/* Latest */}
      <section style={{ background: "var(--surface)" }}>
        <div style={{ maxWidth: 1120, margin: "auto", padding: "48px 20px" }}>
          <h3 style={{ marginBottom: "28px", fontWeight: 600 }}>
            Latest Updates
          </h3>

          <NewsCard
            href="/blog/linux-kernel-vulnerability"
            title="Critical Linux kernel vulnerability explained"
            meta="Cybersecurity • 2 hours ago"
            desc="A newly disclosed Linux kernel flaw enables privilege escalation. Here’s what teams should patch immediately."
          />

          <NewsCard
            href="/blog/aws-iam-behavior-change"
            title="AWS IAM behavior change may break existing policies"
            meta="Cloud & DevOps • Today"
            desc="AWS quietly adjusted IAM evaluation rules impacting cross-account access."
          />

          <NewsCard
            href="/blog/ai-api-rate-limits"
            title="New AI API rate limits and backend impact"
            meta="AI & APIs • Today"
            desc="AI providers are tightening rate limits. Learn how to redesign retries safely."
          />
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid var(--card-border)",
          background: "var(--surface)"
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "auto",
            padding: "24px 20px",
            color: "var(--muted)",
            fontSize: "0.9rem"
          }}
        >
          © {new Date().getFullYear()} Manuv Tech Brief • AI-assisted,
          engineer-reviewed
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
          background: "var(--card-bg)",
          border: "1px solid var(--card-border)",
          padding: "26px",
          borderRadius: "14px",
          marginBottom: "26px",
          boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
          transition: "all 0.18s ease",
          cursor: "pointer"
        }}
      >
        <h4 style={{ marginBottom: "8px", fontWeight: 600 }}>{title}</h4>
        <p style={{ fontSize: "0.85rem", color: "var(--muted)" }}>{meta}</p>
        <p style={{ color: "var(--text-secondary)" }}>{desc}</p>
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
        fontWeight: 500
      }}
    >
      {label}
    </Link>
  );
}
