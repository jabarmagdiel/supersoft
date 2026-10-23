"use client";

import React from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { BRAND_DATA, SERVICES_DATA } from "@/lib/constants";
import { ArrowUp, Mail, MapPin, MessageCircle } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Inicio", href: "#hero" },
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Por qué SuperSoft", href: "#pilares" },
    { label: "Metodología", href: "#proceso" },
    { label: "Cotizar Proyecto", href: "#contacto" },
  ];

  const currentYear = 2026;

  return (
    <footer className="relative bg-[#060812] border-t border-white/10 pt-16 sm:pt-20 pb-12 overflow-hidden text-slate-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Columna Marca e Identidad */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="#hero" className="inline-block group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#20CBE5] rounded-lg">
              <BrandLogo variant="horizontal" size="lg" />
            </Link>

            <p className="mt-6 text-sm text-slate-400 leading-relaxed max-w-sm">
              Especialistas en el desarrollo de software a medida, páginas web de alta conversión y sistemas ERP y CRM en Laravel diseñados para potenciar el crecimiento de tu empresa.
            </p>

            <div className="mt-6 flex flex-col gap-3 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#20CBE5] shrink-0" />
                <span>{BRAND_DATA.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/59170000000?text=Hola%20SuperSoft,%20quisiera%20cotizar%20un%20proyecto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#20CBE5] transition-colors"
                >
                  WhatsApp: +591 70000000
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#20CBE5] shrink-0" />
                <a
                  href={`mailto:${BRAND_DATA.contactEmail}`}
                  className="hover:text-[#20CBE5] transition-colors"
                >
                  {BRAND_DATA.contactEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Columna Navegación Rápida */}
          <div className="lg:col-span-3">
            <h4 style={{ color: "#20CBE5" }} className="text-xs font-mono uppercase tracking-[0.2em] font-semibold mb-5">
              Navegación
            </h4>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#20CBE5] transition-colors inline-block text-slate-400 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna Servicios */}
          <div className="lg:col-span-4">
            <h4 style={{ color: "#20CBE5" }} className="text-xs font-mono uppercase tracking-[0.2em] font-semibold mb-5">
              Soluciones Principales
            </h4>
            <ul className="space-y-3 text-sm">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <a
                    href="#servicios"
                    className="hover:text-[#20CBE5] transition-colors inline-flex items-center gap-2 group text-slate-400 hover:text-white"
                  >
                    <span className="font-mono text-[11px] text-[#20CBE5]/80 group-hover:text-[#20CBE5]">
                      {service.number}
                    </span>
                    <span>{service.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Barra inferior de copyright y regreso al inicio */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {currentYear} SuperSoft — Software Company. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-6">
            <span>Especialistas en Laravel & Desarrollo Web</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/5 hover:bg-[#20CBE5]/20 hover:text-[#20CBE5] border border-white/10 transition-colors flex items-center justify-center cursor-pointer"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
