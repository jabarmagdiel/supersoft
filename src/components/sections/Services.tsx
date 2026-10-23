"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES_DATA, ServiceItem } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowUpRight, Check, Code, Layers, Sparkles, Terminal } from "lucide-react";

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES_DATA[0].id);

  const activeService: ServiceItem =
    SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[0];

  return (
    <section id="servicios" className="relative py-24 sm:py-32 bg-white border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecera de la sección */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#07053B] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              CAPACIDADES & SOLUCIONES
            </div>
            <h2 style={{ color: "#07053B" }} className="font-heading text-3xl sm:text-5xl font-bold tracking-tight">
              Tecnología práctica para{" "}
              <span className="text-[#0284C7]">hacer crecer tu negocio.</span>
            </h2>
            <p style={{ color: "#475569" }} className="mt-4 text-base sm:text-lg max-w-2xl font-sans">
              Páginas web comerciales, sistemas ERP y CRM a medida, y automatizaciones. Desarrollamos herramientas que tu equipo realmente disfrutará utilizar.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-[#07053B] font-semibold px-4 py-2 rounded-full bg-slate-100 border border-slate-200 shadow-sm">
            <Terminal className="w-3.5 h-3.5 text-[#20CBE5]" />
            <span>ESPECIALISTAS EN LARAVEL & REACT</span>
          </div>
        </div>

        {/* Composición editorial: Lista interactiva a la izquierda + Panel de telemetría contextual a la derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Columna Izquierda: Filas editoriales de servicios con números grandes */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-slate-100">
            {SERVICES_DATA.map((service) => {
              const isActive = activeServiceId === service.id;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`group relative py-7 sm:py-8 px-4 sm:px-6 cursor-pointer transition-all duration-300 rounded-2xl ${
                    isActive
                      ? "bg-slate-50 border border-[#20CBE5]/50 shadow-[0_8px_30px_-6px_rgba(32,203,229,0.15)]"
                      : "hover:bg-slate-50/60"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-5 sm:gap-8">
                      {/* Número grande */}
                      <span
                        className={`font-mono text-2xl sm:text-3xl font-light tracking-tighter transition-colors duration-300 ${
                          isActive
                            ? "text-[#0284C7] font-bold"
                            : "text-slate-400 group-hover:text-slate-600"
                        }`}
                      >
                        {service.number}
                      </span>

                      <div className="flex flex-col">
                        <h3
                          style={{ color: isActive ? "#07053B" : "#1E293B" }}
                          className="font-heading text-xl sm:text-2xl font-bold transition-colors duration-300 group-hover:text-[#07053B]"
                        >
                          {service.title}
                        </h3>

                        <p style={{ color: "#475569" }} className="mt-2 text-sm font-sans leading-relaxed max-w-xl">
                          {service.description}
                        </p>

                        {/* Vista rápida en móvil cuando está activo */}
                        <div className="mt-4 flex flex-wrap gap-2 lg:hidden">
                          {service.techStack.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="text-[11px] font-mono px-2.5 py-1 rounded bg-white text-[#07053B] border border-slate-200 shadow-2xs font-semibold"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`p-2.5 rounded-xl border transition-all duration-300 shrink-0 ${
                        isActive
                          ? "bg-[#07053B] text-[#20CBE5] border-[#07053B] shadow-md"
                          : "bg-white text-slate-400 border-slate-200 group-hover:text-[#07053B] group-hover:border-slate-300"
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Columna Derecha: Panel de visualización técnica en Azul Marino Elegante (Contraste Perfecto) */}
          <div className="lg:col-span-5 hidden lg:block sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="p-7 rounded-3xl bg-[#07053B] border border-white/10 shadow-[0_20px_50px_-10px_rgba(7,5,59,0.35)] relative overflow-hidden"
              >
                {/* Header del servicio activo */}
                <div className="flex items-center justify-between pb-5 border-b border-white/10 relative z-10">
                  <span className="font-mono text-3xl font-bold text-[#20CBE5]">
                    {activeService.number}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#20CBE5] px-3 py-1 rounded-full bg-[#0B0754] border border-[#20CBE5]/30">
                    Solución Verificada
                  </span>
                </div>

                <div className="mt-5 relative z-10">
                  <h4 style={{ color: "#FFFFFF" }} className="font-heading text-2xl font-bold">
                    {activeService.title}
                  </h4>
                  <p className="mt-2 text-sm text-slate-300 font-sans leading-relaxed">
                    {activeService.description}
                  </p>

                  {/* Imagen fotográfica real del servicio */}
                  <div className="relative h-44 w-full rounded-2xl overflow-hidden border border-white/10 mt-4 shadow-lg">
                    <Image
                      src={activeService.image}
                      alt={activeService.title}
                      fill
                      className="object-cover"
                      sizes="450px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07053B] via-transparent to-transparent opacity-65" />
                    <span className="absolute bottom-2.5 left-3 text-[10px] font-mono uppercase tracking-wider text-[#20CBE5] bg-[#07053B]/90 px-2.5 py-0.5 rounded backdrop-blur-sm border border-[#20CBE5]/30">
                      Entorno de Producción
                    </span>
                  </div>
                </div>

                {/* Resaltado de valor */}
                <div className="mt-5 p-3.5 rounded-xl bg-[#0B0754] border border-white/10 relative z-10">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#20CBE5] mb-1 font-heading">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>BENEFICIO PARA TU NEGOCIO</span>
                  </div>
                  <p className="text-xs text-slate-200 font-sans leading-relaxed">
                    {activeService.highlight}
                  </p>
                </div>

                {/* Entregables clave */}
                <div className="mt-5 relative z-10">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-2.5 flex items-center gap-2 font-semibold">
                    <Layers className="w-3.5 h-3.5 text-[#20CBE5]" />
                    <span>Qué incluye este servicio:</span>
                  </h5>
                  <ul className="space-y-2">
                    {activeService.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-[#20CBE5] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stack tecnológico */}
                <div className="mt-5 pt-4 border-t border-white/10 relative z-10">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-2.5 flex items-center gap-2 font-semibold">
                    <Code className="w-3.5 h-3.5 text-[#20CBE5]" />
                    <span>Tecnologías utilizadas</span>
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {activeService.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded-lg bg-[#0B0754] border border-white/10 text-slate-200 hover:border-[#20CBE5]/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA contextual */}
                <div className="mt-6 pt-5 border-t border-white/10 relative z-10">
                  <a
                    href="#contacto"
                    onClick={() => {
                      if (onSelectService) onSelectService(activeService.title);
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#20CBE5] hover:bg-[#43d9ee] text-[#07053B] font-sans font-bold text-sm transition-all shadow-[0_0_20px_-4px_rgba(32,203,229,0.5)] cursor-pointer"
                  >
                    <span>Cotizar {activeService.title}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
