export default function Hero() {
  return (
    <section id="hero" className="relative min-h-svh flex flex-col justify-center px-page pt-32 pb-16 overflow-hidden">
      {/* Grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(245,245,244,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(245,245,244,0.03) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at 20% 50%,black 30%,transparent 80%)",
        }}
      />

      <div className="relative z-10 max-w-4xl">
        <p
          className="font-body text-xs font-medium tracking-[0.15em] uppercase text-fg/60 mb-7"
          style={{ animation: "hero-up 0.55s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}
        >
          Mohamed Anis Belamri · CS @ ESTIN BEJAIA
        </p>

        <h1
          className="font-head font-bold uppercase text-hero mb-8"
          style={{ animation: "hero-up 0.6s cubic-bezier(0.16,1,0.3,1) 0.2s both" }}
        >
          BUILDING WHILE{" "}
          <span className="text-accent">LEARNING.</span>
        </h1>

        <div
          className="flex gap-3 flex-wrap"
          style={{ animation: "hero-up 0.5s cubic-bezier(0.16,1,0.3,1) 0.48s both" }}
        >
          <a href="#work" className="inline-flex items-center justify-center h-12 px-8 bg-accent text-black font-body font-semibold hover:bg-accent-hover transition-colors">
            See my work
          </a>
          <a href="#contact" className="inline-flex items-center justify-center h-12 px-8 font-body font-semibold border border-fg/[0.12] text-fg hover:border-fg/30 hover:bg-fg/[0.03] transition-colors">
            Get in touch
          </a>
        </div>

        <div
          aria-hidden="true"
          className="flex items-center gap-3 mt-8 font-body text-xs font-semibold tracking-[0.12em] uppercase text-fg/30"
          style={{ animation: "hero-up 0.5s cubic-bezier(0.16,1,0.3,1) 0.65s both" }}
        >
          <span>AVAILABLE</span>
          <span className="text-accent/60">·</span>
          <span>FREELANCE</span>
          <span className="text-accent/60">·</span>
          <span>INTERNSHIP</span>
        </div>
      </div>
    </section>
  );
}