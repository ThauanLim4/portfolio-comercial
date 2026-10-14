"use client";

import { useCallback, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";

export default function ProjectGrid({ projects }) {
  const [selected, setSelected] = useState(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <>
      <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-5">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={() => setSelected(project)}
          />
        ))}
      </div>

      <ProjectModal project={selected} onClose={close} />
    </>
  );
}
