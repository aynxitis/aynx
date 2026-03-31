import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-page py-8 border-t border-fg/[0.12]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
        <span className="font-body text-sm text-fg/30">
          © {new Date().getFullYear()} Anis Belamri
        </span>
        <nav className="flex flex-wrap justify-center gap-6">
          {[
            { label: "GitHub", href: "https://github.com/aynxitis" },
            { label: "LinkedIn", href: "https://linkedin.com/in/anis-belamri" },
            { label: "Instagram", href: "https://instagram.com/aynxitis" },
            { label: "Email", href: "mailto:am_belamri@estin.dz" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={href.startsWith("http") ? `${label} (opens in new tab)` : undefined}
              className="font-body text-sm text-fg/60 hover:text-accent transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex gap-4">
          <Link href="/terms" className="font-body text-sm text-fg/30 hover:text-accent transition-colors">Terms</Link>
          <Link href="/policy" className="font-body text-sm text-fg/30 hover:text-accent transition-colors">Policy</Link>
        </div>
      </div>
    </footer>
  );
}