import type { Metadata, Viewport } from "next";
import { inter, syncopate } from "@/lib/fonts";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "AYNX - Mohamed Anis BELAMRI",
  description: "CS student at ESTIN BEJAIA. Building real products. Available for freelance and internships.",
  keywords: ["Mohamed Anis Belamri", "ESTIN", "web developer", "portfolio", "freelance", "internship"],
  authors: [{ name: "Mohamed Anis Belamri" }],
  openGraph: {
    title: "AYNX - Mohamed Anis BELAMRI",
    description: "CS student at ESTIN BEJAIA. Building real products.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syncopate.variable}`}>
      <body className="bg-bg text-fg font-body antialiased overflow-x-hidden">
        <a
          href="#main"
          className="absolute -top-full left-1/2 -translate-x-1/2 bg-accent text-black px-6 py-3 text-sm font-semibold z-[9999] focus:top-4 transition-[top] duration-200"
        >
          Skip to main content
        </a>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}