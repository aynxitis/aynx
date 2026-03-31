import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";
import { education, stack, languages, learning } from "@/data/cv";

export default function CV() {
  return (
    <section id="cv" className="px-page py-section">
      <SectionLabel num="02" title="SKILLS & BACKGROUND" />

      <div className="grid grid-cols-1 md:grid-cols-2 border border-fg/[0.12]">
        {/* Education */}
        <FadeUp className="p-[clamp(1.75rem,3vw,2.5rem)] border-b border-fg/[0.12] md:border-r">
          <h3 className="font-body text-xs font-semibold tracking-[0.1em] uppercase text-accent mb-6">
            Education
          </h3>
          <div className="flex flex-col gap-5">
            {education.map((item, i) => (
              <div key={i} className={i < education.length - 1 ? "pb-5 border-b border-fg/[0.12]" : ""}>
                <div className="flex justify-between items-baseline gap-4 mb-1 flex-wrap">
                  <span className="font-body text-sm font-semibold text-fg">{item.name}</span>
                  <span className="font-body text-xs text-fg/30 whitespace-nowrap">{item.date}</span>
                </div>
                <p className="font-body text-sm text-fg/60 leading-relaxed">{item.subtitle}</p>
                {item.grade && (
                  <p className="font-body text-xs text-fg/30 mt-1">{item.grade}</p>
                )}
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Stack */}
        <FadeUp className="p-[clamp(1.75rem,3vw,2.5rem)] border-b border-fg/[0.12]">
          <h3 className="font-body text-xs font-semibold tracking-[0.1em] uppercase text-accent mb-6">
            Stack
          </h3>
          <div className="flex flex-col gap-5">
            {stack.map((group) => (
              <div key={group.category} className="pb-5 border-b border-fg/[0.12] last:border-b-0 last:pb-0">
                <span className="font-body text-xs font-semibold tracking-[0.08em] uppercase text-fg/30 block mb-2">
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-body text-xs font-medium text-fg bg-fg/[0.06] border border-fg/[0.12] px-2.5 py-1 hover:bg-fg/10 hover:border-fg/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Languages */}
        <FadeUp className="p-[clamp(1.75rem,3vw,2.5rem)] md:border-r border-b md:border-b-0 border-fg/[0.12]">
          <h3 className="font-body text-xs font-semibold tracking-[0.1em] uppercase text-accent mb-6">
            Languages
          </h3>
          <div className="flex flex-col">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="flex justify-between items-center py-4 border-b border-fg/[0.12] last:border-b-0 last:pb-0 first:pt-0"
              >
                <span className="font-body text-sm font-semibold text-fg">{lang.name}</span>
                <span className="font-body text-xs font-semibold tracking-[0.06em] uppercase text-fg/30">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Currently Learning */}
        <FadeUp className="p-[clamp(1.75rem,3vw,2.5rem)]">
          <h3 className="font-body text-xs font-semibold tracking-[0.1em] uppercase text-accent mb-6">
            Currently Learning
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {learning.map((item) => (
              <span
                key={item}
                className="font-body text-xs font-medium text-fg bg-fg/[0.06] border border-fg/[0.12] px-2.5 py-1 hover:bg-fg/10 hover:border-fg/30 transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}