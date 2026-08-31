"use client";

import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-20 bg-[rgba(7,9,13,0.78)] backdrop-blur-[16px] border-b transition-colors duration-200 ${
        scrolled ? "border-white/[0.13]" : "border-line"
      }`}
    >
      <Container className="h-[72px] flex items-center justify-between">
        <a className="font-extrabold text-[1.05rem] inline-flex items-center" href="#">
          <span
            className="inline-block w-2 h-2 rounded-full bg-accent-2 mr-2 shadow-[0_0_16px_rgba(35,213,171,0.8)]"
            aria-hidden="true"
          />
          Thauan<span className="text-accent">.dev</span>
        </a>

        <nav className="flex gap-[30px] text-muted text-[0.9rem] max-[620px]:hidden">
          <a href="#projetos" className="hover:text-ink">
            Projetos
          </a>
          <a href="#servicos" className="hover:text-ink">
            Serviços
          </a>
        </nav>

        <Button href="#contato" variant="small">
          Falar comigo <span aria-hidden="true">↗</span>
        </Button>
      </Container>
    </header>
  );
}
