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
      "Built: A campus lost-and-found web app with Google OAuth gated to @estin.dz accounts, real-time Supabase database, deployed on Vercel. Live. Used by real students.",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Vercel"],
    link: "https://findit-estin.vercel.app",
    linkLabel: "View live site →",
    repoLink: "https://github.com/aynxitis/findit-v2",
    repoLabel: "View repo →",
  },
  {
    id: 3,
    status: "live",
    label: "Client Project",
    year: 2026,
    name: "Arco",
    logoSrc: "/arco-wordmark.png",
    logoAlt: "Arco",
    description: [
      "Marketing site for a Calgary industrial maintenance company. Static Next.js on Cloudflare Workers with a serverless contact form — bot filtering, Resend email delivery. Live and receiving real client enquiries.",
    ],
    stack: ["Next.js", "TypeScript", "Cloudflare Workers", "Resend"],
    link: "https://arcoindustrial.ca",
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
      "Personal portfolio built from scratch with Next.js 16, React 19, TypeScript, and Resend for the contact form.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    disabled: true,
    disabledLabel: "You're here",
    repoLink: "https://github.com/aynxitis/aynx",
    repoLabel: "View repo →",
  },
  {
    id: 4,
    isEmpty: true,
  },
];
