import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[110px] pb-[90px] border-b border-line max-[620px]:pt-[75px] max-[620px]:pb-[60px]">
      <span
        className="absolute blur-[90px] rounded-full pointer-events-none w-[350px] h-[350px] bg-[rgba(124,92,255,0.18)] -top-[150px] -left-[100px]"
        aria-hidden="true"
      />
      <span
        className="absolute blur-[90px] rounded-full pointer-events-none w-[300px] h-[300px] bg-[rgba(35,213,171,0.12)] -right-[100px] -bottom-[120px]"
        aria-hidden="true"
      />

      <Container className="grid grid-cols-[1.05fr_0.95fr] gap-[70px] items-center max-[900px]:grid-cols-1 max-[900px]:gap-[50px]">
        <div>
          <Eyebrow pulse>Sites para pequenos negócios</Eyebrow>

          <h1 className="text-[clamp(2.7rem,5.2vw,5rem)] leading-[0.98] tracking-[-0.055em] max-w-[760px]">
            Seu negócio merece uma{" "}
            <span className="bg-[linear-gradient(100deg,#fff_8%,#9e8eff_62%,#4ee9c2)] bg-clip-text text-transparent">
              presença digital profissional.
            </span>
          </h1>

          <p className="max-w-[600px] text-[1.04rem] text-muted mt-[25px] mb-[30px]">
            Sites rápidos, responsivos e pensados para transformar visitantes em
            contatos no WhatsApp.
          </p>

          <div className="flex gap-3 flex-wrap">
            <Button href="#contato">
              Quero um site <span aria-hidden="true">↗</span>
            </Button>
            <Button href="#projetos" variant="ghost">
              Ver projetos
            </Button>
          </div>

          <div className="flex gap-7 mt-[34px] max-[620px]:gap-3.5 max-[620px]:flex-wrap">
            <div className="flex items-center gap-2 text-muted text-[0.78rem]">
              <strong className="text-ink text-[0.85rem]">100%</strong>
              <span>responsivo</span>
            </div>
            <div className="flex items-center gap-2 text-muted text-[0.78rem]">
              <strong className="text-ink text-[0.85rem]">⚡</strong>
              <span>carregamento rápido</span>
            </div>
            <div className="flex items-center gap-2 text-muted text-[0.78rem]">
              <strong className="text-ink text-[0.85rem]">◉</strong>
              <span>foco em conversão</span>
            </div>
          </div>
        </div>

        <div className="relative max-[900px]:max-w-[650px]">
          <div className="bg-[#10151d] border border-line rounded-2xl p-2.5 shadow-[0_30px_80px_rgba(0,0,0,0.45)] rotate-1">
            <div className="h-[31px] flex items-center gap-3 px-2">
              <div className="flex gap-1.5" aria-hidden="true">
                <i className="w-1.5 h-1.5 rounded-full bg-[#444]" />
                <i className="w-1.5 h-1.5 rounded-full bg-[#444]" />
                <i className="w-1.5 h-1.5 rounded-full bg-[#444]" />
              </div>
              <div className="flex-1 text-center text-[#687285] text-[0.65rem] bg-[#0b0f15] rounded-md py-1.5">
                seunegocio.com.br
              </div>
            </div>
            <div className="bg-[#f4f5f7] min-h-[340px] rounded-xl overflow-hidden text-[#16191f]">
              <div className="h-[52px] flex justify-between items-center px-[18px] border-b border-[#e2e4e9]">
                <span className="text-[0.58rem] font-extrabold">SEU NEGÓCIO</span>
                <span className="text-[0.5rem] text-[#737984]">
                  Início&nbsp;&nbsp; Serviços&nbsp;&nbsp; Contato
                </span>
              </div>
              <div className="grid grid-cols-[1.2fr_0.8fr] gap-4 items-center px-[35px] py-[55px]">
                <div>
                  <small className="text-[0.42rem] font-extrabold tracking-[0.13em] text-[#7a8290]">
                    SUA EMPRESA, DO JEITO CERTO.
                  </small>
                  <h3 className="text-2xl leading-[1.02] tracking-[-0.04em] my-3">
                    Mais profissional.
                    <br />
                    <span className="text-[#7358ff]">Mais confiança.</span>
                  </h3>
                  <button
                    type="button"
                    className="border-0 bg-[#151922] text-white rounded-md px-3 py-2.5 text-[0.5rem] font-bold"
                  >
                    Falar no WhatsApp
                  </button>
                </div>
                <div
                  className="w-[130px] h-[130px] ml-auto rounded-[35%_65%_53%_47%/49%_40%_60%_51%] bg-[linear-gradient(145deg,#7c5cff,#21d4ab)] grid place-items-center text-white text-2xl"
                  aria-hidden="true"
                >
                  +
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white text-[#0b0d12] px-3 py-2.5 rounded-xl font-bold text-[0.7rem] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
            🚀 Feito para celular
          </div>
        </div>
      </Container>
    </section>
  );
}
