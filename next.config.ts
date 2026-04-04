import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No output: "export" — Vercel runs Next.js natively
  // This enables API routes, which fixes your contact form
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;