import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — AYNX",
  description: "Privacy policy for the AYNX portfolio website.",
};

export default function PolicyPage() {
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
          Privacy Policy
        </h1>
        <p className="font-body text-xs text-fg/30 mb-12">
          Last updated: March 2026
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="font-body text-sm font-semibold text-fg mb-3">
              1. Information Collection
            </h2>
            <p className="font-body text-sm text-fg/60 leading-[1.7]">
              This website collects minimal information. When you use the
              contact form, I collect your name, email address, and message
              content solely to respond to your inquiry.
            </p>
          </section>

          <section>
            <h2 className="font-body text-sm font-semibold text-fg mb-3">
              2. Use of Information
            </h2>
            <p className="font-body text-sm text-fg/60 leading-[1.7]">
              Information submitted through the contact form is used only to
              respond to your message. I do not sell, trade, or share your
              personal information with third parties.
            </p>
          </section>

          <section>
            <h2 className="font-body text-sm font-semibold text-fg mb-3">
              3. Data Storage
            </h2>
            <p className="font-body text-sm text-fg/60 leading-[1.7]">
              Contact form submissions are processed through Resend, a
              third-party email service. Please review their privacy policy for
              information about how they handle data.
            </p>
          </section>

          <section>
            <h2 className="font-body text-sm font-semibold text-fg mb-3">
              4. Cookies
            </h2>
            <p className="font-body text-sm text-fg/60 leading-[1.7]">
              This website does not use cookies for tracking. Any cookies may be
              set by third-party services (such as analytics or form providers)
              and are subject to their respective privacy policies.
            </p>
          </section>

          <section>
            <h2 className="font-body text-sm font-semibold text-fg mb-3">
              5. External Links
            </h2>
            <p className="font-body text-sm text-fg/60 leading-[1.7]">
              This site contains links to external websites (GitHub, LinkedIn,
              etc.). I am not responsible for the privacy practices of these
              external sites.
            </p>
          </section>

          <section>
            <h2 className="font-body text-sm font-semibold text-fg mb-3">
              6. Contact
            </h2>
            <p className="font-body text-sm text-fg/60 leading-[1.7]">
              For privacy-related questions, please contact me at{" "}
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
