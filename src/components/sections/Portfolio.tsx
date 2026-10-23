"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PORTFOLIO_PROJECTS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowUpRight } from "lucide-react";

export const Portfolio: React.FC = () => {
  return (
    <section id="proyectos" className="relative py-24 sm:py-32 bg-[#07053B] border-t border-white/[0.06] overflow-hidden">
      {/* Resplandor superior de marca */}
      <div
        className="pointer-events-none absolute top-10 right-10 w-[500px] h-[500px] bg-[#0B0754]/60 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 left-10 w-96 h-96 bg-[#20CBE5]/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 sm:mb-20">
          <SectionHeading
            eyebrow="PROYECTOS & CASOS REALES"
            title="Sistemas y soluciones que"
            highlightedText="generan resultados."
            subtitle="Conoce cómo ayudamos a empresas comerciales y de servicios a digitalizar sus ventas, controlar inventarios y ahorrar horas de trabajo con software robusto y a medida."
          />

          <div className="text-xs font-mono text-[#20CBE5] bg-[#0E0A52] border border-[#20CBE5]/30 px-4 py-2 rounded-full self-start md:self-end shadow-[0_2px_12px_-2px_rgba(32,203,229,0.2)]">
            CASOS DE ÉXITO EN PRODUCCIÓN
          </div>
        </div>

        {/* Grilla balanceada de proyectos con fotografía real de interfaces y diseño editorial limpio */}
        <div className="space-y-12 sm:space-y-16">
          {PORTFOLIO_PROJECTS.map((project, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="p-6 sm:p-10 rounded-3xl bg-[#0E0A52] border border-[#20CBE5]/30 hover:border-[#20CBE5]/60 transition-all duration-500 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.5)] group overflow-hidden"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Columna Izquierda: Información Editorial */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-between ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div>
                      {/* Categoría y Sector */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-[#07053B] text-[#20CBE5] border border-[#20CBE5]/30">
                          {project.category}
                        </span>
                        <span className="text-xs font-mono text-slate-300">
                          {project.clientType}
                        </span>
                      </div>

                      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white group-hover:text-[#20CBE5] transition-colors leading-snug">
                        {project.title}
                      </h3>

                      {/* Problema y Solución directos y concisos */}
                      <div className="mt-6 space-y-3.5">
                        <div className="p-4 rounded-xl bg-[#07053B]/80 border border-white/5">
                          <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300 font-semibold block mb-1">
                            El Problema del Cliente:
                          </span>
                          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                            {project.problem}
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-[#07053B] border border-[#20CBE5]/30">
                          <span className="text-[11px] font-mono uppercase tracking-wider text-[#20CBE5] font-semibold block mb-1">
                            Solución Desarrollada por SuperSoft:
                          </span>
                          <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                            {project.solution}
                          </p>
                        </div>
                      </div>

                      {/* Métricas clave */}
                      <div className="mt-6 grid grid-cols-3 gap-3">
                        {project.metrics.map((m, mIdx) => (
                          <div
                            key={mIdx}
                            className="p-3 rounded-xl bg-[#07053B] border border-white/10 text-center"
                          >
                            <span className="font-heading font-bold text-base sm:text-xl text-[#20CBE5] block">
                              {m.value}
                            </span>
                            <span className="text-[10px] sm:text-xs text-slate-300 font-mono mt-0.5 block">
                              {m.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tecnologías y CTA */}
                    <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono px-2.5 py-1 rounded bg-[#07053B] text-slate-200 border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <a
                        href="#contacto"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#20CBE5] hover:text-white transition-colors group-hover:translate-x-1 duration-300"
                      >
                        <span>Solicitar proyecto similar</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Columna Derecha: Fotografía real de la solución de software en marco moderno */}
                  <div
                    className={`lg:col-span-6 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="relative rounded-2xl bg-[#07053B] border border-white/15 overflow-hidden shadow-2xl group-hover:border-[#20CBE5]/50 transition-all">
                      {/* Barra superior de ventana de aplicación */}
                      <div className="flex items-center justify-between px-4 py-3 bg-[#05032A] border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                          <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                          <span className="ml-2 text-xs font-mono text-slate-300">
                            supersoft.app · {project.category}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-[#20CBE5] bg-[#20CBE5]/10 px-2 py-0.5 rounded border border-[#20CBE5]/30">
                          LARAVEL & WEB
                        </span>
                      </div>

                      {/* Imagen real del producto digital */}
                      <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#07053B] via-transparent to-transparent opacity-40" />
                      </div>

                      {/* Cinta de impacto en pie de foto */}
                      <div className="p-4 bg-[#07053B]/95 border-t border-white/10 flex items-center justify-between text-xs font-sans">
                        <span className="text-slate-200 font-medium">
                          {project.impact}
                        </span>
                        <span className="text-[11px] font-mono text-[#20CBE5] font-semibold shrink-0 ml-3">
                          ✓ Entregado y Activo
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
