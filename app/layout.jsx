import { Inter } from "next/font/google";
import Assistant from "@/components/Assistant";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://thauan.dev"),
  title: {
    default: "Thauan Dev — Sites que ajudam negócios a vender",
    template: "%s — Thauan Dev",
  },
  description:
    "Sites e landing pages profissionais para pequenos negócios. Rápidos, responsivos e focados em conversão.",
  keywords: [
    "criação de sites",
    "landing page",
    "desenvolvimento web",
    "sites para pequenos negócios",
  ],
  openGraph: {
    title: "Thauan Dev — Sites que ajudam negócios a vender",
    description:
      "Sites e landing pages profissionais para pequenos negócios.",
    type: "website",
    locale: "pt_BR",
    siteName: "Thauan Dev",
  },
  twitter: {
    card: "summary",
    title: "Thauan Dev — Sites que ajudam negócios a vender",
    description:
      "Sites e landing pages profissionais para pequenos negócios.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#07090d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        {children}
        <Assistant />
      </body>
    </html>
  );
}
