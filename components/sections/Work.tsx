import SectionLabel from "@/components/ui/SectionLabel";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Work() {
  return (
    <section id="work" className="px-page py-section">
      <SectionLabel num="01" title={<>MY <span className="text-accent">WORK</span></>} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-fg/[0.12] border border-fg/[0.12]">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={i * 80} />
        ))}
      </div>
    </section>
  );
}