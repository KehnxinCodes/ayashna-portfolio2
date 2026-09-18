// ============================================================
// PORTFOLIO PROJECTS
// ------------------------------------------------------------
// To add a new project, copy an object below and fill it in.
// The grid automatically handles layout — just add to the array.
//
// Fields:
//   title       - project title shown on hover
//   category    - must match one of PORTFOLIO_CATEGORIES below
//   client      - client or brand name
//   description - short one-line description
//   thumbnail   - image path (import from /src/assets or use a URL)
//   video       - video path/embed URL, or null if none yet
//   year        - year of the project
//   size        - "large" | "tall" | "wide" | "square" (controls grid shape)
//   featured    - set true on exactly one project to show it in the
//                 "Featured Edit" section
// ============================================================

export const PORTFOLIO_CATEGORIES = [
  "All",
  "Personal Brand",
  "Healthcare",
  "Wellness",
  "UGC",
  "E-commerce",
  "Promotional",
];

export const projects = [
  {
    id: "founder-story-wellness",
    title: "Founder Story — Wellness Co.",
    category: "Personal Brand",
    client: "Wellness Studio Co.",
    description:
      "Story-driven short-form content designed to capture attention quickly while keeping the creator's personality at the center.",
    thumbnail: null,
    video: null,
    year: 2026,
    size: "large",
    featured: true,
  },
  {
    id: "product-launch-reel",
    title: "Product Launch Reel",
    category: "UGC",
    client: "Glow Skincare",
    description: "Fast-paced UGC edit built to drive conversions on launch day.",
    thumbnail: null,
    video: null,
    year: 2026,
    size: "tall",
  },
  {
    id: "clinic-explainer-series",
    title: "Clinic Explainer Series",
    category: "Healthcare",
    client: "Bright Smile Dental",
    description: "Clear, trust-building explainer videos for patient education.",
    thumbnail: null,
    video: null,
    year: 2025,
    size: "tall",
  },
  {
    id: "seasonal-campaign-edit",
    title: "Seasonal Campaign Edit",
    category: "Promotional",
    client: "Modern Home Co.",
    description: "Full-width campaign film for a seasonal product launch.",
    thumbnail: null,
    video: null,
    year: 2025,
    size: "wide",
  },
  {
    id: "product-feature-cut",
    title: "Product Feature Cut",
    category: "E-commerce",
    client: "Nomad Goods",
    description: "Product-focused edit highlighting key features and benefits.",
    thumbnail: null,
    video: null,
    year: 2025,
    size: "square",
  },
  {
    id: "studio-brand-film",
    title: "Studio Brand Film",
    category: "Wellness",
    client: "Flow Yoga Studio",
    description: "Brand film capturing the studio's atmosphere and community.",
    thumbnail: null,
    video: null,
    year: 2025,
    size: "square",
  },
];

export const getFeaturedProject = () =>
  projects.find((p) => p.featured) || projects[0];
