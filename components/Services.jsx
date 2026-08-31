import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="servicos" className="py-[95px] bg-[#0a0d12]">
      <Container>
        <div className="mb-10">
          <Eyebrow>O que eu faço</Eyebrow>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-[-0.04em]">
            Você precisa de uma página. <span className="text-[#9e8eff]">Eu resolvo.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 border-t border-line max-[620px]:grid-cols-1">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex gap-[18px] py-[30px] border-b border-line odd:pr-[35px] odd:border-r odd:border-line even:pl-[35px] max-[620px]:odd:pr-0 max-[620px]:odd:border-r-0 max-[620px]:even:pl-0"
            >
              <span className="text-[0.7rem] text-[#8270ff] font-extrabold">
                {service.number}
              </span>
              <div>
                <h3 className="text-base">{service.title}</h3>
                <p className="text-muted text-[0.78rem] mt-1 max-w-[430px]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
