import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata = {
  title: "404 Not Found — AYNX",
};

export default function NotFound() {
  return (
    <main
      id="main"
      className="min-h-svh flex flex-col items-center justify-center px-page"
    >
      {/* Hide nav links & hamburger so only the logo remains, matching legal pages */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            nav > ul, nav > button { display: none !important; }
            nav { justify-content: flex-start !important; }
          `,
        }}
      />

      <SectionLabel
        num="404"
        title={<>NOT FOUND</>}
      />

      <div className="text-center max-w-[400px]">
        <p className="font-body text-sm text-fg/60 mb-8">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="font-body text-sm text-fg/60 hover:text-accent transition-colors"
        >
          ← Return Home
        </Link>
      </div>
    </main>
  );
}
