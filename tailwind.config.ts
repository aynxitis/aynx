import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        fg: "#f5f5f4",
        accent: {
          DEFAULT: "#ff5500",
          hover: "#ff6a1a",
        },
      },
      fontFamily: {
        head: ["var(--font-syncopate)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero": ["clamp(3rem,9vw,7rem)", { lineHeight: "0.93", letterSpacing: "-0.03em" }],
        "section": ["clamp(1.5rem,3.5vw,2.25rem)", { lineHeight: "1" }],
        "project-name": ["clamp(1.125rem,2vw,1.375rem)", { lineHeight: "1.2" }],
      },
      spacing: {
        page: "clamp(1.5rem,5vw,6rem)",
        section: "clamp(4rem,8vw,6rem)",
      },
      transitionTimingFunction: {
        "ease-out-expo": "cubic-bezier(0.16,1,0.3,1)",
      },
      keyframes: {
        "hero-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "hero-up": "hero-up 0.6s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};

export default config;