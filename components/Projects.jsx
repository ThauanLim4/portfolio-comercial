import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import ProjectGrid from "@/components/ProjectGrid";
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

        <ProjectGrid projects={projects} />
      </Container>
    </section>
  );
}
