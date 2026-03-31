import { Inter, Syncopate } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-syncopate",
  display: "swap",
});