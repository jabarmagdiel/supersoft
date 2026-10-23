"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Globe2, Target } from "lucide-react";

export const MissionVision: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#080820] overflow-hidden border-t border-white/[0.06]">
      {/* Halo ambiental central */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0B0754]/40 blur-[160px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="PROPÓSITO Y DIRECCIÓN"
          title="Nuestra brújula estratégica:"
          highlightedText="Misión y Visión."
          subtitle="Guiados por la excelencia técnica, la integridad en el desarrollo y el compromiso con el éxito tangible de cada cliente."
          align="left"
          className="mb-16 sm:mb-20"
        />

        {/* Composición editorial asimétrica de gran formato suizo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Bloque Misión */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative p-8 sm:p-12 rounded-3xl bg-[#0d0d2b] border border-white/10 hover:border-[#20CBE5]/40 transition-all duration-300 shadow-2xl flex flex-col justify-between group overflow-hidden"
          >
            {/* Elemento gráfico abstracto de fondo (Isotipo 'S' dinámico estilizado) */}
            <div className="pointer-events-none absolute -bottom-16 -right-16 w-64 h-64 opacity-5 group-hover:opacity-10 transition-opacity">
              <svg viewBox="0 0 100 100" fill="currentColor" className="text-[#20CBE5] w-full h-full">
                <path d="M70 25 C 70 15, 60 10, 50 10 L 30 10 C 15 10, 10 20, 10 35 C 10 50, 25 55, 45 60 L 60 65 C 75 70, 85 80, 85 90 C 85 100, 75 105, 60 105 L 20 105" />
              </svg>
            </div>

            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#0B0754] border border-[#20CBE5]/30">
                    <Target className="w-6 h-6 text-[#20CBE5]" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#20CBE5] font-semibold">
                    MISIÓN
                  </span>
                </div>
                <span className="font-mono text-4xl font-light text-slate-700 group-hover:text-slate-500 transition-colors">
                  01
                </span>
              </div>

              <blockquote className="mt-8 font-heading text-xl sm:text-2xl font-bold text-white leading-relaxed">
                “Desarrollar soluciones de software innovadoras, seguras y adaptadas a las necesidades de
                nuestros clientes, mediante tecnología de calidad que optimice sus procesos, mejore su
                productividad e impulse su transformación digital.”
              </blockquote>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>ENFOQUE OPERATIVO</span>
              <span className="text-[#20CBE5]">Impacto Directo y Medible</span>
            </div>
          </motion.div>

          {/* Bloque Visión */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6 relative p-8 sm:p-12 rounded-3xl bg-[#0B0754]/40 border border-[#20CBE5]/30 hover:border-[#20CBE5]/60 transition-all duration-300 shadow-[0_8px_32px_-10px_rgba(32,203,229,0.2)] flex flex-col justify-between group overflow-hidden"
          >
            {/* Elemento gráfico de fondo */}
            <div className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 opacity-5 group-hover:opacity-10 transition-opacity">
              <Globe2 className="w-full h-full text-white" />
            </div>

            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#080820] border border-[#20CBE5]/30">
                    <Globe2 className="w-6 h-6 text-[#20CBE5]" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#20CBE5] font-semibold">
                    VISIÓN
                  </span>
                </div>
                <span className="font-mono text-4xl font-light text-slate-700 group-hover:text-[#20CBE5]/60 transition-colors">
                  02
                </span>
              </div>

              <blockquote className="mt-8 font-heading text-xl sm:text-2xl font-bold text-white leading-relaxed">
                “Consolidarnos como una empresa referente en el desarrollo de software y soluciones
                tecnológicas en Bolivia, con proyección internacional, reconocida por la calidad de nuestros
                productos, nuestra capacidad de innovación y el valor que generamos para nuestros clientes.”
              </blockquote>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>ALCANCE GEOGRÁFICO</span>
              <span className="text-white">Bolivia & Proyección Global</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
