"use client";

import { useEffect } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={onClose}
      className="fixed inset-0 z-[60] grid place-items-center p-4 bg-black/70 backdrop-blur-sm"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[min(640px,100%)] max-h-[90vh] overflow-y-auto bg-panel border border-line rounded-2xl"
      >
        <div className="relative h-[300px] max-[620px]:h-[200px] rounded-t-2xl overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="640px"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="absolute top-3 right-3 w-9 h-9 grid place-items-center rounded-full bg-black/60 text-white hover:bg-black/80 transition"
          >
            ✕
          </button>
        </div>

        <div className="p-6 max-[620px]:p-5">
          <span className="block text-[#7f8898] uppercase tracking-[0.11em] text-[0.63rem] font-bold mb-2">
            {project.type}
          </span>
          <h3 className="text-2xl tracking-[-0.02em]">{project.title}</h3>
          <p className="text-muted mt-3 leading-relaxed">{project.description}</p>

          <Button
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6"
          >
            Ver projeto <span aria-hidden="true">↗</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
