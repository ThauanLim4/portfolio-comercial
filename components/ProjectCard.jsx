import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <article className="border border-line bg-panel rounded-2xl overflow-hidden transition duration-300 hover:-translate-y-1.5 hover:border-white/20">
      <div className={`h-[330px] relative overflow-hidden p-[22px] max-[620px]:h-[240px]`}>
        <Image src={project.image} alt={project.title} fill className="object-cover w-full h-full" />
      </div>

      <div className="p-6 flex justify-between gap-5">
        <div>
          <span className="block text-[#7f8898] uppercase tracking-[0.11em] text-[0.63rem] font-bold mb-1.5">
            {project.type}
          </span>
          <h3 className="text-xl">{project.title}</h3>
          <p className="text-[0.8rem] text-muted mt-1">{project.description}</p>
        </div>
        <a
          className="w-10 h-10 border border-line rounded-full grid place-items-center flex-none hover:bg-white hover:text-[#080a0e]"
          href={project.href}
          aria-label={`Ver projeto: ${project.title}`}
        >
          ↗
        </a>
      </div>
    </article>
  );
}
