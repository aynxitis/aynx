import FadeUp from "./FadeUp";

interface SectionLabelProps {
  num: string;
  title: React.ReactNode;
}

export default function SectionLabel({ num, title }: SectionLabelProps) {
  return (
    <FadeUp className="flex items-center gap-4 mb-[clamp(2.5rem,5vw,4rem)]">
      <span className="font-body text-xs font-semibold tracking-[0.1em] text-accent">
        {num}
      </span>
      <h2 className="font-head font-bold uppercase tracking-[-0.02em] leading-none text-section">
        {title}
      </h2>
    </FadeUp>
  );
}