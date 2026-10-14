export const ASSISTANT_NUMBER = "5583998093699";

export const WHATSAPP_DIRECT = `https://wa.me/${ASSISTANT_NUMBER}?text=${encodeURIComponent(
  "Olá, Thauan! Vim pelo site e quero falar diretamente com você."
)}`;

export const SERVICES = [
  { id: "site", emoji: "🌐", label: "Criar um site" },
  { id: "loja", emoji: "🛒", label: "Loja / catálogo online" },
  { id: "design", emoji: "🎨", label: "Design / identidade visual" },
  { id: "manutencao", emoji: "🔧", label: "Manutenção de site" },
  { id: "outro", emoji: "❓", label: "Outro" },
];

export const BUSINESS_TYPES = {
  site: [
    { id: "lanchonete", emoji: "🍔", label: "Lanchonete / Restaurante" },
    { id: "barbearia", emoji: "💈", label: "Barbearia / Salão" },
    { id: "eletronicos", emoji: "💻", label: "Loja de eletrônicos" },
    { id: "assistencia", emoji: "🛠️", label: "Assistência técnica" },
    { id: "comercio", emoji: "🏪", label: "Loja / comércio" },
    { id: "autonomo", emoji: "👤", label: "Profissional autônomo" },
    { id: "outro", emoji: "📦", label: "Outro" },
  ],
  loja: [
    { id: "roupas", emoji: "👕", label: "Roupas / Moda" },
    { id: "alimentos", emoji: "🍫", label: "Alimentos / Doces" },
    { id: "artesanato", emoji: "🎁", label: "Artesanato / Presentes" },
    { id: "eletronicos", emoji: "💻", label: "Eletrônicos" },
    { id: "comercio", emoji: "🏪", label: "Loja / comércio" },
    { id: "outro", emoji: "📦", label: "Outro" },
  ],
  design: [
    { id: "logo", emoji: "🎨", label: "Logo / marca" },
    { id: "identidade", emoji: "🖌️", label: "Identidade visual completa" },
    { id: "social", emoji: "📱", label: "Artes para redes sociais" },
    { id: "outro", emoji: "🎨", label: "Outro" },
  ],
  manutencao: [
    { id: "atualizacao", emoji: "🔄", label: "Atualizar conteúdo / textos" },
    { id: "visual", emoji: "🖥️", label: "Mudar o visual / layout" },
    { id: "bug", emoji: "🐞", label: "Corrigir problema no site" },
    { id: "outro", emoji: "🔧", label: "Outro" },
  ],
  outro: [
    { id: "consultoria", emoji: "💡", label: "Consultoria" },
    { id: "outro", emoji: "❓", label: "Outro assunto" },
  ],
};

export const FEATURES = [
  { id: "pagina", emoji: "📄", label: "Página da empresa" },
  { id: "catalogo", emoji: "📦", label: "Catálogo de produtos" },
  { id: "whatsapp", emoji: "💬", label: "Botão para WhatsApp" },
  { id: "localizacao", emoji: "📍", label: "Localização / Google Maps" },
  { id: "carrinho", emoji: "🛒", label: "Carrinho e pedidos" },
  { id: "nao-sei", emoji: "✨", label: "Ainda não sei" },
];

export const MATERIALS = [
  { id: "pronto", emoji: "✅", label: "Já tenho logo, fotos e textos" },
  { id: "parcial", emoji: "🟡", label: "Tenho algumas coisas" },
  { id: "nenhum", emoji: "❌", label: "Ainda não tenho nada" },
];

export const CURRENT_SITE = [
  { id: "sim", emoji: "✅", label: "Sim" },
  { id: "nao", emoji: "❌", label: "Não" },
  { id: "reformular", emoji: "🔄", label: "Tenho, mas quero reformular" },
];

export const DEADLINE = [
  { id: "imediato", emoji: "⚡", label: "O quanto antes" },
  { id: "semana", emoji: "📅", label: "Nesta semana" },
  { id: "mes", emoji: "🗓️", label: "Neste mês" },
  { id: "pesquisando", emoji: "🤔", label: "Ainda estou pesquisando" },
];

export const BUDGET = [
  { id: "300-500", label: "R$ 300 – R$ 500" },
  { id: "500-1000", label: "R$ 500 – R$ 1.000" },
  { id: "1000+", label: "R$ 1.000+" },
  { id: "nao-sei", label: "Ainda não sei" },
];

export function findLabel(options, id) {
  return options.find((o) => o.id === id)?.label ?? id;
}

export const SERVICE_OPTIONS = Object.fromEntries(
  SERVICES.map((service) => [service.id, service])
);
