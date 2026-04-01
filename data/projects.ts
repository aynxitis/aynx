import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    status: "live",
    label: "Live Product",
    year: 2026,
    name: "FINDit",
    logoSrc: "/FindIt.svg",
    logoAlt: "FINDit",
    description: [
      "Problem: ESTIN students had no way to report or claim lost items — the only option was spamming the entire campus by email.",
      "Built: A campus lost-and-found web app with Google OAuth gated to @estin.dz accounts, real-time Firebase database, deployed on Vercel. Live. Used by real students.",
    ],
    stack: ["HTML/CSS", "Vanilla JS", "Firebase", "OAuth", "Vercel"],
    link: "https://findit-estin.vercel.app",
    linkLabel: "View live site →",
    repoLabel: "Private repo",
  },
  {
    id: 2,
    status: "current",
    label: "Current Project",
    year: 2026,
    name: "aynxitis",
    logoSrc: "/logo.svg",
    logoAlt: "aynxitis",
    description: [
      "Designed and built from scratch with Next.js 16 and React 19. Server-rendered, fully typed with TypeScript, custom contact form with Resend email integration, and a responsive design system.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/aynxitis/AYNX",
    linkLabel: "View source →",
    disabled: true,
    disabledLabel: "You're here",
  },
  {
    id: 3,
    status: "client",
    label: "Client Project",
    year: 2026,
    name: "STRATUM",
    logoSrc: "/STRATUM-dark.svg",
    logoAlt: "STRATUM",
    badge: "In Progress",
    description: [
      "B2B industrial services website. Built the brand from scratch — logo system, dark/light theme, scroll animations, full UI/UX.",
    ],
    stack: ["Next.js", "React", "Supabase", "Brand Design"],
    repoLabel: "Private repo",
    disabled: true,
    disabledLabel: "Launching soon",
  },
  {
    id: 4,
    isEmpty: true,
  },
];
