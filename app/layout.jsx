import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Thauan Dev — Sites que ajudam negócios a vender",
  description:
    "Sites e landing pages profissionais para pequenos negócios. Rápidos, responsivos e focados em conversão.",
  openGraph: {
    title: "Thauan Dev — Sites que ajudam negócios a vender",
    description:
      "Sites e landing pages profissionais para pequenos negócios.",
    type: "website",
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
      <body>{children}</body>
    </html>
  );
}
