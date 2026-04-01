import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";

export default function About() {
  return (
    <section id="about" className="px-page py-section">
      <SectionLabel num="03" title="ABOUT" />

      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 md:gap-20 items-start">
        <FadeUp className="space-y-3.5">
          <h3 className="font-head font-bold text-[clamp(0.9375rem,1.8vw,1.125rem)] uppercase tracking-[-0.01em] leading-snug mb-6">
            BUILDING PRODUCTS THAT SOLVE REAL PROBLEMS.
          </h3>
          <p className="font-body text-base text-fg/60 leading-[1.7]">
            I&apos;m currently a first-year student at <strong className="text-fg font-medium">ESTIN</strong>,
            diving into the fundamentals of Computer Science. While the curriculum provides the theory,
            I spend my time bridging the gap between concepts and code by shipping real-world projects.
          </p>
          <p className="font-body text-base text-fg/60 leading-[1.7]">
            I&apos;m obsessed with the process of turning an idea into a functional, shipped product.
          </p>
          <p className="font-body text-base text-fg/60 leading-[1.7]">
            I&apos;m open to{" "}
            <strong className="text-fg font-medium">remote internships and freelance opportunities</strong>{" "}
            where I can contribute to a team, learn from mentors, and take ownership of meaningful tasks.
          </p>

          <div className="flex gap-6 flex-wrap pt-3">
            {[
              { label: "GitHub →", href: "https://github.com/aynxitis" },
              { label: "LinkedIn →", href: "https://linkedin.com/in/anis-belamri" },
              { label: "Email →", href: "mailto:am_belamri@estin.dz" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={href.startsWith("http") ? `${label.replace(" →", "")} (opens in new tab)` : undefined}
                className="font-body text-sm font-semibold text-fg/60 hover:text-accent transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </FadeUp>

        <FadeUp>
          {[
            {
              value: "18",
              label: "Years old",
              extra: null,
            },
            {
              value: "1CP",
              label: "@ ESTIN BEJAIA",
              extra: null,
            },
            {
              value: "SHIPPED",
              label: "More coming soon...",
              extra: (
                <div className="flex gap-4 items-center my-3">
                  <a href="https://findit-estin.vercel.app" target="_blank" rel="noopener noreferrer">
                    <Image src="/FindIt.svg" alt="FINDit" width={60} height={16} className="h-4 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                  </a>
                  <Image src="/logo.svg" alt="AYNX" width={60} height={16} className="h-4 w-auto opacity-60" />
                </div>
              ),
            },
          ].map(({ value, label, extra }) => (
            <div key={value} className="py-6 border-t border-fg/[0.12] last:border-b last:border-fg/[0.12]">
              <div className="font-head font-bold uppercase tracking-[-0.02em] leading-none text-[clamp(1.5rem,3.5vw,2rem)] mb-1.5">
                {value}
              </div>
              {extra}
              <div className="font-body text-xs font-medium uppercase tracking-[0.02em] text-fg/60">
                {label}
              </div>
            </div>
          ))}
        </FadeUp>
      </div>
    </section>
  );
}