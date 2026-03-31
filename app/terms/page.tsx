import Link from "next/link";

export const metadata = {
  title: "Terms of Use — AYNX",
  description: "Terms of use for the AYNX portfolio website.",
};

export default function TermsPage() {
  return (
    <main id="main" className="min-h-svh px-page pt-32 pb-20">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="font-body text-sm text-fg/60 hover:text-accent transition-colors"
        >
          ← Back to Home
        </Link>

        <h1 className="font-head font-bold uppercase tracking-[-0.02em] text-[clamp(1.5rem,3.5vw,2.25rem)] leading-none mt-10 mb-3">
          Terms of Use
        </h1>
        <p className="font-body text-xs text-fg/30 mb-12">
          Last updated: March 2026
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="font-body text-sm font-semibold text-fg mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="font-body text-sm text-fg/60 leading-[1.7]">
              By accessing and using this website (aynx.vercel.app), you accept
              and agree to be bound by these Terms of Use.
            </p>
          </section>

          <section>
            <h2 className="font-body text-sm font-semibold text-fg mb-3">
              2. Use of Content
            </h2>
            <p className="font-body text-sm text-fg/60 leading-[1.7]">
              All content on this website, including text, graphics, logos, and
              images, is the property of Mohamed Anis Belamri unless otherwise
              stated. You may not reproduce, distribute, or use any content
              without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="font-body text-sm font-semibold text-fg mb-3">
              3. Contact Information
            </h2>
            <p className="font-body text-sm text-fg/60 leading-[1.7]">
              If you submit information through the contact form, you agree that
              the information provided is accurate and that you consent to being
              contacted in response to your inquiry.
            </p>
          </section>

          <section>
            <h2 className="font-body text-sm font-semibold text-fg mb-3">
              4. External Links
            </h2>
            <p className="font-body text-sm text-fg/60 leading-[1.7]">
              This website may contain links to external sites. I am not
              responsible for the content or privacy practices of those sites.
            </p>
          </section>

          <section>
            <h2 className="font-body text-sm font-semibold text-fg mb-3">
              5. Disclaimer
            </h2>
            <p className="font-body text-sm text-fg/60 leading-[1.7]">
              This website is provided &quot;as is&quot; without warranties of
              any kind. I do not guarantee the accuracy or completeness of any
              information on this site.
            </p>
          </section>

          <section>
            <h2 className="font-body text-sm font-semibold text-fg mb-3">
              6. Contact
            </h2>
            <p className="font-body text-sm text-fg/60 leading-[1.7]">
              For questions about these terms, please contact me at{" "}
              <a
                href="mailto:am_belamri@estin.dz"
                className="underline hover:text-accent transition-colors"
              >
                am_belamri@estin.dz
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
