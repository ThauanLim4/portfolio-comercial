import Image from "next/image";

function TechMock() {
  return (
    <div
      className="bg-[#eff2f5] rounded-xl h-full overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.25)]"
      aria-hidden="true"
    >
      <div className="h-[25px] bg-[#dce0e6]" />
      <div className="grid grid-cols-[70px_1fr] h-[calc(100%-25px)]">
        <div className="bg-[#181d28]" />
        <div className="p-[26px]">
          <span className="block w-[90px] h-[9px] rounded-[10px] bg-[#7358ff]" />
          <div className="w-[55%] h-4 bg-[#20242d] my-[15px] mb-[11px] rounded" />
          <div className="w-[82%] h-[35px] bg-[linear-gradient(#d7dbe1_8px,transparent_8px)] opacity-70" />
          <div className="flex gap-2 mt-[22px]">
            <i className="w-[30%] h-[70px] rounded-lg bg-[#dfe4ea]" />
            <i className="w-[30%] h-[70px] rounded-lg bg-[#dfe4ea]" />
            <i className="w-[30%] h-[70px] rounded-lg bg-[#dfe4ea]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FoodMock() {
  return (
    <div
      className="bg-[#eff2f5] rounded-xl h-full overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.25)]"
      aria-hidden="true"
    >
      <div className="h-[30px] bg-[#fbfbfb] border-b border-[#e7e8ea]" />
      <div className="h-[90px] bg-[linear-gradient(120deg,#191d25,#7c5cff)] m-[18px] rounded-xl" />
      <div className="grid grid-cols-2 gap-3 px-[18px]">
        <i className="h-[70px] rounded-lg bg-[#dfe3e7]" />
        <i className="h-[70px] rounded-lg bg-[#dfe3e7]" />
        <i className="h-[70px] rounded-lg bg-[#dfe3e7]" />
        <i className="h-[70px] rounded-lg bg-[#dfe3e7]" />
      </div>
    </div>
  );
}

export default function ProjectCard({ project, featured = false }) {
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
