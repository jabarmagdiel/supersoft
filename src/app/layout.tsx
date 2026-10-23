import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SuperSoft — Software Company | Soluciones Digitales a Medida",
  description:
    "Desarrollamos tecnología a medida para resolver desafíos empresariales, optimizar procesos y acelerar la transformación digital de los negocios.",
  keywords: [
    "SuperSoft",
    "software company",
    "desarrollo de software a medida",
    "sistemas empresariales",
    "aplicaciones web",
    "aplicaciones móviles",
    "transformación digital",
    "Bolivia",
  ],
  authors: [{ name: "SuperSoft" }],
  openGraph: {
    title: "SuperSoft — Software Company | Soluciones Digitales a Medida",
    description:
      "Transformamos ideas en soluciones digitales. Ingeniería de software premium para empresas con visión de futuro.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 selection:bg-[#20CBE5] selection:text-[#07053B]">
        {children}
      </body>
    </html>
  );
}
