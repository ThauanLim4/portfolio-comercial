import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <section id="projetos" className="py-[95px]">
      <Container>
        <div className="flex justify-between gap-[30px] items-end mb-[35px] max-[900px]:flex-col max-[900px]:items-start">
          <div>
            <Eyebrow>Portfólio</Eyebrow>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-[-0.04em]">
              Projetos que já desenvolvi
            </h2>
          </div>
          <p className="max-w-[340px] text-muted text-[0.9rem]">
            Do visual à experiência, cada projeto é pensado para funcionar de
            verdade.
          </p>
        </div>

        <div className="grid grid-cols-[1.3fr_0.9fr] gap-5 max-[900px]:grid-cols-1">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={index === 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
