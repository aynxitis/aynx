import Image from "next/image";
import FadeUp from "./FadeUp";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export default function ProjectCard({ project, delay }: ProjectCardProps) {
  if (project.isEmpty) {
    return (
      <FadeUp delay={delay} className="project-card bg-bg min-h-[260px] flex items-center justify-center transition-colors hover:bg-fg/[0.02]">
        <div className="border border-dashed border-fg/[0.08] w-[calc(100%-3rem)] h-[calc(100%-3rem)] flex flex-col items-center justify-center gap-1.5 text-center p-6">
          <span className="font-body text-xs font-semibold tracking-[0.1em] text-fg/30">04</span>
          <p className="text-sm text-fg/10 italic">More incoming...</p>
        </div>
      </FadeUp>
    );
  }

  const logoHeightClass =
    project.status === "client"
      ? "h-9"
      : project.status === "current"
        ? "h-5"
        : "h-6";

  return (
    <FadeUp delay={delay} className="project-card relative bg-bg p-[clamp(1.5rem,3vw,2rem)] flex flex-col min-h-[320px] transition-colors hover:bg-fg/[0.02]">
      {/* eyebrow */}
      <div className="flex justify-between items-center mb-4">
        <span className="font-body text-xs font-semibold tracking-[0.1em] uppercase text-accent">
          {project.label}
        </span>
        <span className="font-body text-xs text-fg/30">{project.year}</span>
      </div>

      {/* name */}
      <h3 className="font-head font-bold uppercase tracking-[-0.02em] leading-none text-project-name mb-3.5 flex items-center flex-wrap gap-2">
        {project.logoSrc ? (
          <Image
            src={project.logoSrc}
            alt={project.logoAlt ?? project.name}
            width={120}
            height={32}
            className={`${logoHeightClass} w-auto`}
          />
        ) : (
          project.name
        )}
        {project.badge && (
          <span className="font-body text-[0.5625rem] font-semibold tracking-[0.08em] uppercase text-fg/30 bg-fg/[0.06] px-2 py-1">
            {project.badge}
          </span>
        )}
      </h3>

      {/* description */}
      {project.description.map((line, i) => (
        <p key={i} className="font-body text-sm text-fg/60 leading-relaxed mb-2.5">
          {line.includes(":") ? (
            <>
              <strong className="text-fg font-medium">{line.split(":")[0]}:</strong>
              {line.split(":").slice(1).join(":")}
            </>
          ) : (
            line
          )}
        </p>
      ))}

      {/* stack */}
      <div className="flex flex-wrap gap-0 mt-auto pt-5 font-body text-xs font-medium tracking-[0.04em] uppercase text-fg/30">
        {project.stack.map((tech, i) => (
          <span key={tech}>
            {tech}
            {i < project.stack.length - 1 && (
              <span className="mx-1.5 opacity-50">·</span>
            )}
          </span>
        ))}
      </div>

      {/* link */}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3.5 font-body text-sm font-semibold text-fg/60 hover:text-accent transition-colors"
        >
          {project.linkLabel ?? "View Project →"}
        </a>
      )}
      {project.disabled && (
        <span className="mt-3.5 font-body text-sm text-fg/30 font-medium">
          {project.disabledLabel}
        </span>
      )}
    </FadeUp>
  );
}