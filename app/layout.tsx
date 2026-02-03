import type { Metadata } from "next";
import { Fraunces, Commissioner } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["300", "500", "700"],
});

const commissioner = Commissioner({
  subsets: ["latin"],
  variable: "--font-commissioner",
  display: "swap",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Just Good News — Noticias positivas para empezar bien el día",
  description: "Una plataforma de noticias enfocada en contenido positivo y constructivo. Reducí el doomscrolling y descubrí avances científicos, culturales y tecnológicos.",
  keywords: ["noticias positivas", "bienestar digital", "anti-doomscrolling", "good news"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fraunces.variable} ${commissioner.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
