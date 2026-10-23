"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";
import { CheckCircle2, Compass, FileCode2, GitBranch, Rocket, ShieldCheck } from "lucide-react";

export const Process: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 80%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const stepIcons = [
    <Compass key="1" className="w-5 h-5 text-[#20CBE5]" />,
    <FileCode2 key="2" className="w-5 h-5 text-[#20CBE5]" />,
    <GitBranch key="3" className="w-5 h-5 text-[#20CBE5]" />,
    <ShieldCheck key="4" className="w-5 h-5 text-[#20CBE5]" />,
    <Rocket key="5" className="w-5 h-5 text-[#20CBE5]" />,
  ];

  return (
    <section
      id="proceso"
      ref={containerRef}
      className="relative py-24 sm:py-32 bg-white overflow-hidden border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#07053B] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            CÓMO TRABAJAMOS
          </div>
          <h2 style={{ color: "#07053B" }} className="font-heading text-3xl sm:text-5xl font-bold tracking-tight">
            Un proceso transparente y ágil{" "}
            <span className="text-[#0284C7]">de principio a fin.</span>
          </h2>
          <p style={{ color: "#475569" }} className="mt-4 text-base sm:text-lg font-sans">
            Sin sorpresas ni retrasos innecesarios. Sabes exactamente en qué etapa se encuentra tu proyecto y qué estamos construyendo en cada momento.
          </p>
        </div>

        {/* Timeline contenedor con línea conectora central animada */}
        <div className="relative max-w-4xl mx-auto">
          {/* Línea base estática */}
          <div
            className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-slate-200"
            aria-hidden="true"
          />

          {/* Línea animada con scroll reveal */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-6 md:left-1/2 top-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#07053B] via-[#20CBE5] to-[#0284C7]"
            aria-hidden="true"
          />

          <div className="space-y-12 sm:space-y-16">
            {PROCESS_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={step.step}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  } gap-8 md:gap-0`}
                >
                  {/* Nodo central animado */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 z-20 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="w-12 h-12 rounded-2xl bg-[#07053B] border-2 border-[#20CBE5] shadow-[0_4px_16px_rgba(7,5,59,0.25)] flex items-center justify-center"
                    >
                      {stepIcons[idx]}
                    </motion.div>
                  </div>

                  {/* Tarjeta de contenido */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className={`pl-16 md:pl-0 w-full md:w-1/2 ${
                      isEven ? "md:pl-12" : "md:pr-12 md:text-right"
                    }`}
                  >
                    <div
                      className={`p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#20CBE5] transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(7,5,59,0.06)] group ${
                        isEven ? "" : "md:items-end"
                      }`}
                    >
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          isEven ? "justify-start" : "md:justify-end"
                        }`}
                      >
                        <span className="font-mono text-xs font-bold text-white px-2.5 py-1 rounded bg-[#07053B]">
                          PASO {step.step}
                        </span>
                        <span className="text-xs font-mono text-slate-500 font-semibold">
                          {step.focus}
                        </span>
                      </div>

                      <h3 style={{ color: "#07053B" }} className="font-heading text-xl sm:text-2xl font-bold group-hover:text-[#0284C7] transition-colors">
                        {step.title}
                      </h3>

                      <p style={{ color: "#475569" }} className="mt-2 text-sm font-sans leading-relaxed">
                        {step.description}
                      </p>

                      <div
                        className={`mt-4 pt-4 border-t border-slate-200 flex flex-col gap-2 ${
                          isEven ? "items-start text-left" : "md:items-end md:text-right"
                        }`}
                      >
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#07053B] font-bold">
                          Entregables de esta etapa:
                        </span>
                        <div
                          className={`flex flex-wrap gap-2 ${
                            isEven ? "justify-start" : "md:justify-end"
                          }`}
                        >
                          {step.activities.map((act, actIdx) => (
                            <span
                              key={actIdx}
                              className="inline-flex items-center gap-1.5 text-xs text-slate-700 bg-white px-2.5 py-1 rounded-lg border border-slate-200 font-medium"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7]" />
                              {act}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
