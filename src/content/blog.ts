/**
 * CMS-ready: replace this module with fetches from Contentful, Sanity, MDX, etc.
 * Shape is stable for drop-in swapping.
 */
export type BlogPostSummary = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readMinutes: number;
  tags: string[];
};

export const blogPosts: BlogPostSummary[] = [
  {
    slug: "dsps-forecast-accuracy",
    title: "How DSPS improves forecast accuracy in volatile markets",
    excerpt:
      "Blending agentic workflows with classical planning models to reduce bias and latency in enterprise demand signals.",
    date: "2026-03-12",
    readMinutes: 6,
    tags: ["DSPS", "Planning", "AI"],
  },
  {
    slug: "sap-oracle-integration-patterns",
    title: "Integration patterns for SAP, Oracle, and Dynamics automation",
    excerpt:
      "Event-driven bridges, governed APIs, and audit-friendly logging for mission-critical ERP touchpoints.",
    date: "2026-02-28",
    readMinutes: 8,
    tags: ["Enterprise", "Integrations"],
  },
  {
    slug: "ai-agents-operations",
    title: "Deploying AI agents in operations without losing control",
    excerpt:
      "Guardrails, human-in-the-loop checkpoints, and measurable SLAs for sales, support, and ops copilots.",
    date: "2026-01-15",
    readMinutes: 5,
    tags: ["AI Agents", "Governance"],
  },
];

