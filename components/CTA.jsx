import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import { WHATSAPP_URL } from "@/lib/content";

export default function CTA() {
  return (
    <section id="contato" className="py-[70px]">
      <Container>
        <div className="border border-line rounded-[22px] p-[50px] flex justify-between items-center gap-10 bg-[radial-gradient(circle_at_0_50%,rgba(124,92,255,0.16),transparent_45%),#0e1219] max-[900px]:flex-col max-[900px]:items-start max-[620px]:p-8">
          <div>
            <Eyebrow>Vamos conversar?</Eyebrow>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] leading-[1.02] tracking-[-0.04em] max-w-[690px]">
              Seu próximo cliente pode estar procurando você agora.
            </h2>
            <p className="text-muted mt-3.5">
              Mostre seu negócio de um jeito profissional e facilite o contato.
            </p>
          </div>
          <Button
            href={WHATSAPP_URL}
            variant="light"
            target="_blank"
            rel="noopener"
            className="whitespace-nowrap"
          >
            Chamar no WhatsApp <span aria-hidden="true">↗</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
