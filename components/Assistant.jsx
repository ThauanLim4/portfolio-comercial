"use client";

import { useEffect, useRef, useState } from "react";
import {
  ASSISTANT_NUMBER,
  WHATSAPP_DIRECT,
  SERVICES,
  BUSINESS_TYPES,
  FEATURES,
  MATERIALS,
  CURRENT_SITE,
  DEADLINE,
  BUDGET,
  SERVICE_OPTIONS,
  findLabel,
} from "@/lib/assistant";

const SERVICE_LABEL = (id) => `${SERVICE_OPTIONS[id]?.emoji ?? ""} ${SERVICE_OPTIONS[id]?.label ?? id}`;

function ChatButton({ options, multi = false, selected, onSelect }) {
  return (
    <div className="flex flex-col gap-2">
      {options.map((opt) => {
        const active = selected.includes(opt.id);
        const styles = active
          ? "border-accent bg-accent/15 text-ink"
          : "border-[#2a3140] text-[#bec7d6] hover:border-accent hover:text-ink";
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onSelect(opt.id)}
            className={`text-left text-[0.82rem] rounded-lg border px-3 py-2.5 transition duration-150 ${styles}`}
          >
            <span className="flex items-center gap-2">
              {opt.emoji && <span aria-hidden="true">{opt.emoji}</span>}
              <span>{opt.label}</span>
            </span>
          </button>
        );
      })}
      {multi && selected.length > 0 && (
        <button
          type="button"
          onClick={() => onSelect("__confirm__")}
          className="mt-1 text-[0.82rem] font-bold rounded-lg bg-accent text-white px-3 py-2.5 hover:brightness-110 transition"
        >
          Confirmar seleção ✓
        </button>
      )}
    </div>
  );
}

function Msg({ text }) {
  return (
    <div className="bg-[#151b26] border border-[#222b3b] rounded-xl rounded-tl-sm px-3.5 py-2.5 text-[0.85rem] leading-relaxed text-[#d7deeb] whitespace-pre-line">
      {text}
    </div>
  );
}

export default function Assistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [step, setStep] = useState("menu");
  const [busy, setBusy] = useState(false);
  const [answers, setAnswers] = useState({});
  const bodyRef = useRef(null);

  const addBot = (text) =>
    setMessages((m) => [...m, { role: "bot", text }]);

  const autoScroll = () =>
    requestAnimationFrame(() => {
      if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    });

  useEffect(() => {
    if (!open) return;
    if (messages.length === 0) {
      setBusy(true);
      setTimeout(() => {
        addBot("Olá! 👋\nSou o assistente da Thauan.dev.\n\nComo posso ajudar?");
        setBusy(false);
        setStep("menu");
      }, 450);
    }
    autoScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, messages.length]);

  useEffect(() => {
    autoScroll();
  }, [messages]);

  const goDirect = () => {
    addBot("Perfeito! 👍\nVou te encaminhar para o WhatsApp para falar diretamente comigo.");
    setStep("direct");
  };

  const goBackToMenu = () => {
    addBot("Sem problema, vamos voltar! 🙌\n\nComo posso ajudar?");
    setStep("menu");
  };

  const startGuided = () => {
    addBot("Ótimo! Vou fazer algumas perguntas rápidas para entender o que você precisa. 😊\n\nQual serviço você procura?");
    setStep("service");
  };

  const selectService = (id) => {
    setAnswers((a) => ({ ...a, service: id }));
    setBusy(true);
    setTimeout(() => {
      addBot(
        `${SERVICE_LABEL(id)}\n\nQual é o tipo do seu negócio?`
      );
      setBusy(false);
      setStep("business");
    }, 350);
  };

  const selectBusiness = (id) => {
    setAnswers((a) => ({ ...a, business: id }));
    setBusy(true);
    setTimeout(() => {
      addBot(
        "O que você gostaria que seu site tivesse?\n\n(Pode escolher mais de uma opção)"
      );
      setBusy(false);
      setStep("features");
    }, 350);
  };

  const selectFeatures = (ids) => {
    setAnswers((a) => ({ ...a, features: ids }));
    setBusy(true);
    setTimeout(() => {
      addBot("Você já possui algum material?\n\n(ex.: logo, fotos, textos)");
      setBusy(false);
      setStep("materials");
    }, 350);
  };

  const selectMaterials = (id) => {
    setAnswers((a) => ({ ...a, materials: id }));
    setBusy(true);
    setTimeout(() => {
      addBot("Sua empresa já possui um site?");
      setBusy(false);
      setStep("current");
    }, 350);
  };

  const selectCurrent = (id) => {
    setAnswers((a) => ({ ...a, currentSite: id }));
    if (id === "sim") {
      setBusy(true);
      setTimeout(() => {
        addBot("Qual é o endereço do seu site?\n\n(me digite o link, ex.: www.site.com.br)");
        setBusy(false);
        setStep("site-url");
      }, 350);
    } else {
      setBusy(true);
      setTimeout(() => {
        addBot("Quando você gostaria de colocar seu site/projeto no ar?");
        setBusy(false);
        setStep("deadline");
      }, 350);
    }
  };

  const selectSiteUrl = (url) => {
    setAnswers((a) => ({ ...a, siteUrl: url }));
    setBusy(true);
    setTimeout(() => {
      addBot("Perfeito, anotado! 📝\n\nQuando você gostaria de colocar o site no ar?");
      setBusy(false);
      setStep("deadline");
    }, 350);
  };

  const selectDeadline = (id) => {
    setAnswers((a) => ({ ...a, deadline: id }));
    setBusy(true);
    setTimeout(() => {
      addBot(
        "Para eu indicar a melhor solução:\n\nQual faixa de investimento você considera?"
      );
      setBusy(false);
      setStep("budget");
    }, 350);
  };

  const selectBudget = (id) => {
    const finalAnswers = { ...answers, budget: id };
    setAnswers(finalAnswers);
    setBusy(true);
    setTimeout(() => {
      addBot("Perfeito! 🎯\n\nEntendi que você procura:");
      setBusy(false);
      setStep("summary");
    }, 350);
  };

  const buildSummary = (a) => {
    const lines = [];
    lines.push(SERVICE_LABEL(a.service));
    if (a.business) lines.push(findLabel(BUSINESS_TYPES[a.service] ?? [], a.business));
    if (a.features?.length) {
      const feats = a.features.map((f) => findLabel(FEATURES, f));
      lines.push(`Recursos: ${feats.join(" + ")}`);
    }
    if (a.materials) lines.push(`Materiais: ${findLabel(MATERIALS, a.materials)}`);
    if (a.currentSite === "sim" && a.siteUrl) lines.push(`Site atual: ${a.siteUrl}`);
    else if (a.currentSite === "reformular") lines.push("Site atual: quero reformular");
    else if (a.currentSite === "nao") lines.push("Site atual: não possui");
    if (a.deadline) lines.push(`Prazo: ${findLabel(DEADLINE, a.deadline)}`);
    if (a.budget) lines.push(`Orçamento: ${findLabel(BUDGET, a.budget)}`);
    return lines;
  };

  const buildWhatsApp = (a) => {
    const serviceId = a.service;
    const msgLines = [
      "Olá, Thauan!",
      "",
      "Vim pelo site e gostaria de solicitar um orçamento.",
      "",
      `📌 Serviço: ${SERVICE_OPTIONS[serviceId]?.label ?? serviceId}`,
    ];
    if (a.business)
      msgLines.push(`📌 Negócio: ${findLabel(BUSINESS_TYPES[serviceId] ?? [], a.business)}`);
    if (a.features?.length)
      msgLines.push(`📌 Recursos: ${a.features.map((f) => findLabel(FEATURES, f)).join(" + ")}`);
    if (a.materials)
      msgLines.push(`📌 Materiais: ${findLabel(MATERIALS, a.materials)}`);
    if (a.currentSite === "sim" && a.siteUrl)
      msgLines.push(`📌 Site atual: ${a.siteUrl}`);
    else if (a.currentSite === "reformular")
      msgLines.push("📌 Site atual: quero reformular");
    if (a.deadline)
      msgLines.push(`📌 Prazo: ${findLabel(DEADLINE, a.deadline)}`);
    if (a.budget)
      msgLines.push(`📌 Orçamento: ${findLabel(BUDGET, a.budget)}`);
    return `https://wa.me/${ASSISTANT_NUMBER}?text=${encodeURIComponent(msgLines.join("\n"))}`;
  };

  const selectedFeatures = answers.features ?? [];

  const goBack = () => {
    const prev = {
      service: "menu",
      business: "service",
      features: "business",
      materials: "features",
      current: "materials",
      "site-url": "current",
      deadline: answers.currentSite === "sim" ? "site-url" : "current",
      budget: "deadline",
      summary: "budget",
    }[step];

    if (!prev) return;

    const cleared = { ...answers };
    const clearFrom = {
      menu: ["service", "business", "features", "materials", "currentSite", "siteUrl", "deadline", "budget"],
      service: ["business", "features", "materials", "currentSite", "siteUrl", "deadline", "budget"],
      business: ["features", "materials", "currentSite", "siteUrl", "deadline", "budget"],
      features: ["materials", "currentSite", "siteUrl", "deadline", "budget"],
      materials: ["currentSite", "siteUrl", "deadline", "budget"],
      current: ["siteUrl", "deadline", "budget"],
      "site-url": ["siteUrl", "deadline", "budget"],
      deadline: ["deadline", "budget"],
      budget: ["budget"],
    }[prev];
    (clearFrom ?? []).forEach((k) => delete cleared[k]);

    if (prev === "menu") delete cleared.service;
    setAnswers(cleared);
    setStep(prev);
    addBot("Entendido, voltando uma etapa! 👈");
  };

  const BackButton = () => (
    <button
      type="button"
      onClick={goBack}
      className="text-center text-[0.78rem] text-muted hover:text-ink transition"
    >
      ← Voltar à resposta anterior
    </button>
  );

  const renderInput = () => {
    if (busy) return null;
    switch (step) {
      case "menu":
        return (
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={goDirect}
              className="text-left text-[0.82rem] rounded-lg border border-[#2a3140] px-3 py-2.5 text-[#bec7d6] hover:border-accent hover:text-ink transition"
            >
              <span className="flex items-center gap-2">
                <span aria-hidden="true">💬</span>
                <span>1 • Falar diretamente comigo</span>
              </span>
            </button>
            <button
              type="button"
              onClick={startGuided}
              className="text-left text-[0.82rem] rounded-lg border border-[#2a3140] px-3 py-2.5 text-[#bec7d6] hover:border-accent hover:text-ink transition"
            >
              <span className="flex items-center gap-2">
                <span aria-hidden="true">✨</span>
                <span>2 • Atendimento personalizado</span>
              </span>
            </button>
          </div>
        );
      case "direct":
        return (
          <div className="flex flex-col gap-2">
            <a
              href={WHATSAPP_DIRECT}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.85rem] font-bold rounded-lg bg-accent text-white px-3.5 py-2.5 hover:brightness-110 transition"
            >
              💬 Ir para o WhatsApp
            </a>
            <button
              type="button"
              onClick={goBackToMenu}
              className="text-center text-[0.78rem] text-muted hover:text-ink transition"
            >
              ← Voltar ao menu
            </button>
          </div>
        );
      case "service":
        return <ChatButton options={SERVICES} selected={[]} onSelect={selectService} />;
      case "business":
        return (
          <ChatButton
            options={BUSINESS_TYPES[answers.service] ?? BUSINESS_TYPES.outro}
            selected={[]}
            onSelect={selectBusiness}
          />
        );
      case "features":
        return (
          <ChatButton
            options={FEATURES}
            multi
            selected={selectedFeatures}
            onSelect={(id) => {
              if (id === "__confirm__") {
                selectFeatures(selectedFeatures);
                return;
              }
              const next = selectedFeatures.includes(id)
                ? selectedFeatures.filter((f) => f !== id)
                : [...selectedFeatures, id];
              setAnswers((a) => ({ ...a, features: next }));
            }}
          />
        );
      case "materials":
        return (
          <ChatButton options={MATERIALS} selected={[]} onSelect={selectMaterials} />
        );
      case "current":
        return (
          <ChatButton options={CURRENT_SITE} selected={[]} onSelect={selectCurrent} />
        );
      case "site-url":
        return (
          <input
            type="text"
            placeholder="www.seusite.com.br"
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.target.value.trim()) {
                selectSiteUrl(e.target.value.trim());
              }
            }}
            className="w-full text-[0.85rem] rounded-lg border border-[#2a3140] bg-transparent text-ink px-3.5 py-2.5 outline-none focus:border-accent"
          />
        );
      case "deadline":
        return <ChatButton options={DEADLINE} selected={[]} onSelect={selectDeadline} />;
      case "budget":
        return <ChatButton options={BUDGET} selected={[]} onSelect={selectBudget} />;
      case "summary": {
        const summary = buildSummary(answers);
        return (
          <div className="flex flex-col gap-2">
            <div className="bg-[#151b26] border border-[#222b3b] rounded-xl px-3.5 py-3 text-[0.82rem] text-[#d7deeb]">
              <ul className="space-y-1">
                {summary.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
            <a
              href={buildWhatsApp(answers)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-[0.85rem] font-bold rounded-lg bg-accent text-white px-3.5 py-2.5 hover:brightness-110 transition"
            >
              💬 Solicitar orçamento
            </a>
            <button
              type="button"
              onClick={() => {
                setAnswers({});
                setStep("menu");
                addBot("Sem problema! Vamos começar de novo.\n\nComo posso ajudar?");
              }}
              className="text-center text-[0.78rem] text-muted hover:text-ink transition"
            >
              ← Alterar respostas
            </button>
          </div>
        );
      }
      default:
        return null;
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Fechar chat" : "Precisa de ajuda?"}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-accent text-[#0a0c10] grid place-items-center text-2xl shadow-[0_12px_32px_rgba(124,92,255,0.45)] hover:scale-105 transition"
      >
        {open ? "✕" : "💬"}
      </button>

      {open && (
        <div className="fixed bottom-20 right-5 z-50 w-[min(360px,calc(100vw-40px))] bg-[#0b0f16] border border-[#222b3b] rounded-2xl overflow-hidden flex flex-col shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#222b3b] bg-[#0e131b]">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-accent/20">
              <span className="text-lg">👋</span>
              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-accent-2 border-2 border-[#0b0f16]" />
            </span>
            <div>
              <span className="block text-[0.87rem] font-bold text-ink">Assistente Thauan.dev</span>
              <span className="block text-[0.7rem] text-muted">Responde na hora · Online</span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar"
              className="ml-auto w-7 h-7 grid place-items-center rounded-md text-muted hover:text-ink hover:bg-[#1a2130] transition"
            >
              ✕
            </button>
          </div>

          <div ref={bodyRef} className="flex-1 max-h-[420px] overflow-y-auto px-3.5 py-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className="max-w-[85%]">
                <Msg text={m.text} />
              </div>
            ))}
            {busy && (
              <div className="max-w-[60%]">
                <div className="bg-[#151b26] border border-[#222b3b] rounded-xl rounded-tl-sm px-3.5 py-3 flex gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce [animation-delay:0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce [animation-delay:0.3s]" />
                </div>
              </div>
            )}
          </div>

          <div className="px-3.5 py-3 border-t border-[#222b3b] bg-[#0e131b]">
            {renderInput()}
          </div>
        </div>
      )}
    </>
  );
}
