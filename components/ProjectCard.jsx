import Image from "next/image";

export default function ProjectCard({ project, onOpen }) {
  return (
    <article className="group relative border border-line bg-panel rounded-2xl overflow-hidden transition duration-300 hover:-translate-y-1.5 hover:border-white/20">
      <div className="h-[330px] relative overflow-hidden max-[620px]:h-[240px]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 900px) 100vw, 50vw"
        />
      </div>

      <div className="p-6">
        <span className="block text-[#7f8898] uppercase tracking-[0.11em] text-[0.63rem] font-bold mb-1.5">
          {project.type}
        </span>
        <h3 className="text-xl">{project.title}</h3>
        <p className="text-[0.8rem] text-muted mt-1">{project.description}</p>
      </div>

      <button
        type="button"
        onClick={onOpen}
        aria-label={`Ver detalhes de ${project.title}`}
        className="absolute inset-0 rounded-2xl cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      />
    </article>
  );
}
