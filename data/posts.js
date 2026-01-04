export const posts = [
  {
    slug: "linux-kernel-vulnerability",
    title: "Critical Linux kernel vulnerability explained",
    category: "Cybersecurity",
    date: "2026-01-05",
    excerpt:
      "A newly disclosed Linux kernel flaw enables privilege escalation. Here’s how it works and what teams should patch immediately.",
    content: `
## What happened
A vulnerability in the Linux kernel allows local privilege escalation under specific conditions.

## Impact
- Affects unpatched kernels
- Risk increases on shared systems

## What to do
- Patch immediately
- Audit local privilege usage
`
  },
  {
    slug: "aws-iam-behavior-change",
    title: "AWS IAM behavior change may break existing policies",
    category: "Cloud & DevOps",
    date: "2026-01-05",
    excerpt:
      "AWS quietly adjusted IAM evaluation rules, impacting legacy permission boundaries.",
    content: `
## Summary
IAM policy evaluation logic has changed.

## Risk
Legacy policies may behave differently.

## Recommendation
Re-test critical IAM paths.
`
  },
  
  {
  slug: "ai-api-rate-limits",
  title: "New AI API rate limits and backend impact",
  category: "AI & APIs",
  date: "2026-01-05",
  excerpt:
    "AI providers are tightening rate limits. Learn how to redesign retries safely.",
  content: `
## What changed
AI API providers have introduced stricter rate limits.

## Why it matters
Backend systems relying on aggressive retries may fail.

## What to do
- Add exponential backoff
- Implement queues
- Monitor quota usage
`
}

];


