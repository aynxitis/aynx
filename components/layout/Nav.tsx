"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const LINKS = [
  { label: "My Work", href: "#work" },
  { label: "CV", href: "#cv" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const pathname = usePathname();
  const logoOnly = pathname.startsWith("/policy") || pathname.startsWith("/terms");

  useEffect(() => {
    if (logoOnly) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [logoOnly]);

  useEffect(() => {
    if (logoOnly) return;
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(`#${e.target.id}`);
        });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll("section[id]").forEach((s) =>
      observerRef.current?.observe(s)
    );
    return () => observerRef.current?.disconnect();
  }, [logoOnly]);

  useEffect(() => {
    if (logoOnly || !menuOpen) return;
    const onResize = () => {
      if (window.innerWidth > 640) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, [logoOnly, menuOpen]);

  useEffect(() => {
    if (logoOnly) return;
    if (menuOpen) {
      const y = window.scrollY;
      document.body.dataset.scrollY = String(y);
      document.body.style.cssText = `position:fixed;top:-${y}px;width:100%`;
    } else {
      const y = Number(document.body.dataset.scrollY ?? 0);
      document.body.style.cssText = "";
      delete document.body.dataset.scrollY;
      window.scrollTo(0, y);
    }
    return () => { document.body.style.cssText = ""; };
  }, [menuOpen, logoOnly]);

  if (logoOnly) {
    return (
      <nav className="fixed top-0 inset-x-0 z-[1000] flex items-center px-page py-5 bg-bg/85 backdrop-blur-xl border-b border-transparent">
        <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Image src="/logo.svg" alt="AYNX" width={80} height={14} priority />
        </a>
      </nav>
    );
  }

  return (
    <nav className={`fixed top-0 inset-x-0 z-[1000] flex items-center justify-between px-page py-5 bg-bg/85 backdrop-blur-xl border-b transition-colors duration-300 ${scrolled ? "bg-bg/97 border-fg/[0.12]" : "border-transparent"}`}>
      {/* Logo */}
      <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
        <Image src="/logo.svg" alt="AYNX" width={80} height={14} priority />
      </a>

      {/* Desktop links */}
      <ul className="hidden sm:flex items-center gap-8 list-none">
        {LINKS.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className={`relative font-body text-sm font-medium tracking-[0.04em] transition-colors hover:text-accent ${
                activeSection === href ? "text-fg nav-link-active" : "text-fg/60"
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <button
        className={`hamburger ${menuOpen ? "open" : ""} sm:hidden flex flex-col justify-center gap-1 w-5 h-5 bg-transparent border-0 cursor-pointer z-[1001] p-0`}
        onClick={() => setMenuOpen((p) => !p)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
      </button>

      {/* Mobile menu */}
      <ul
        className={`sm:hidden absolute top-full inset-x-0 list-none bg-bg/[0.98] backdrop-blur-xl border-b border-fg/[0.12] px-page transition-all duration-300 ease-out-expo ${
          menuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2.5 invisible"
        }`}
      >
        {LINKS.map(({ label, href }) => (
          <li key={href} className="border-b border-fg/[0.12] last:border-b-0">
            <a
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`block py-2.5 font-body text-sm transition-colors hover:text-accent ${
                activeSection === href ? "text-accent" : "text-fg/60"
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}