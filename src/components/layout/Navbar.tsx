"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";

const NAV_ITEMS = [
  { label: "Inicio", href: "#hero" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Por qué SuperSoft", href: "#pilares" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Barra Flotante de Cristal Arquitectónico */}
          <div
            className={`flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl sm:rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-[0_12px_40px_-10px_rgba(7,5,59,0.12)]"
                : "bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-[0_8px_30px_-8px_rgba(7,5,59,0.06)]"
            }`}
          >
            {/* Logo Oficial de SuperSoft en versión para fondos claros */}
            <Link
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#hero");
              }}
              className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#20CBE5] rounded-lg shrink-0"
              aria-label="SuperSoft Software Company - Inicio"
            >
              <BrandLogo variant="horizontal-dark" theme="dark" size="md" />
            </Link>

            {/* Navegación Central con Diseño Exclusivo */}
            <nav className="hidden lg:flex items-center gap-1 px-2 py-1 rounded-full bg-slate-100/80 border border-slate-200/60">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`relative px-4 py-1.5 text-xs font-semibold transition-all duration-200 rounded-full flex items-center gap-1.5 ${
                      isActive
                        ? "text-[#07053B] font-bold"
                        : "text-slate-600 hover:text-[#07053B]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-white rounded-full shadow-[0_2px_10px_rgba(7,5,59,0.08)] border border-slate-200/70"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#20CBE5] relative z-10 shrink-0" />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Acciones del lado derecho: Chip de Disponibilidad + Botón de Cotización */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100/90 border border-slate-200/70 text-[11px] font-mono text-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Disponibles Q2</span>
              </div>

              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  if (onOpenContact) onOpenContact();
                  else handleNavClick("#contacto");
                }}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-full bg-[#07053B] hover:bg-[#0B0754] text-white text-xs font-heading font-bold shadow-[0_4px_16px_-2px_rgba(7,5,59,0.3)] hover:shadow-[0_6px_22px_-2px_rgba(32,203,229,0.4)] transition-all border border-[#20CBE5]/40 hover:border-[#20CBE5] group"
              >
                <span>Cotizar proyecto</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#20CBE5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Botón de Menú Móvil */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-[#07053B] hover:text-[#20CBE5] focus:outline-none transition-colors"
                aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menú Desplegable Móvil */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl lg:hidden flex flex-col pt-24 px-6 pb-8"
          >
            <div className="flex flex-col h-full justify-between max-w-sm mx-auto w-full">
              <nav className="flex flex-col gap-2 py-4">
                {NAV_ITEMS.map((item, idx) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.25 }}
                    >
                      <button
                        type="button"
                        onClick={() => handleNavClick(item.href)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-base font-heading font-semibold transition-all flex items-center justify-between ${
                          isActive
                            ? "bg-slate-100 text-[#07053B] font-bold border border-slate-200"
                            : "text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && <div className="w-2 h-2 rounded-full bg-[#20CBE5]" />}
                      </button>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="flex flex-col gap-3 pt-6 border-t border-slate-200">
                <a
                  href="#contacto"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenContact) onOpenContact();
                    else handleNavClick("#contacto");
                  }}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#07053B] text-white text-center font-heading font-bold text-sm shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Cotizar mi proyecto</span>
                  <ArrowUpRight className="w-4 h-4 text-[#20CBE5]" />
                </a>

                <p className="text-xs text-center text-slate-500 font-sans">
                  SuperSoft Software Company · Especialistas en Laravel & Web
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
