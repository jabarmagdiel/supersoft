"use client";

import React, { useState } from "react";
import { PILLARS_DATA } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Shield, Sparkles, TrendingUp, Users, CheckCircle } from "lucide-react";

export const WhyUs: React.FC = () => {
  const [activePillar, setActivePillar] = useState(0);

  const pillarsDetails = [
    {
      title: "Especialistas en Laravel & React",
      subtitle: "Tecnología probada y confiable",
      description: "Construimos con el framework backend más popular y respaldado del mundo: Laravel. Garantía de velocidad de respuesta, seguridad ante vulnerabilidades y fácil mantenimiento a largo plazo.",
      techMetric: "Arquitectura Laravel 11 + MySQL",
      features: [
        "Eloquent ORM y transacciones financieras seguras",
        "Interfaces fluidas con React, Livewire y Tailwind CSS",
        "APIs preparadas para conectar con WhatsApp o pasarelas de pago",
      ],
      icon: <Sparkles className="w-5 h-5 text-[#20CBE5]" />,
    },
    {
      title: "Soluciones a la Medida Real",
      subtitle: "Sin plantillas genéricas ni limitaciones",
      description: "No te obligamos a adaptarte a un sistema enlatado. Diseñamos la base de datos y cada pantalla según cómo operas tus ventas, inventarios y finanzas en la vida real.",
      techMetric: "100% Adaptado a tu Negocio",
      features: [
        "Mapeo de tus flujos de caja, almacenes y ventas",
        "Campos, reportes y comprobantes personalizados",
        "Permisos y roles según las funciones de tu personal",
      ],
      icon: <Shield className="w-5 h-5 text-[#20CBE5]" />,
    },
    {
      title: "Control Total y Sin Comisiones Ocultas",
      subtitle: "Tu sistema y tus datos te pertenecen",
      description: "A diferencia de las plataformas SaaS que cobran mensualidades exorbitantes por cada usuario, tu sistema a medida te da libertad operativa absoluta.",
      techMetric: "Usuarios y Sedes Sin Límites",
      features: [
        "Base de datos propia y segura en MySQL",
        "Sin cobros extra por registrar más productos o clientes",
        "Copias de seguridad periódicas y propiedad del código",
      ],
      icon: <TrendingUp className="w-5 h-5 text-[#20CBE5]" />,
    },
    {
      title: "Soporte Humano y Comunicación Directa",
      subtitle: "A un mensaje de WhatsApp de distancia",
      description: "Olvídate de lidiar con robots o tickets de soporte que demoran días. Tienes comunicación directa con los desarrolladores para resolver cualquier duda al instante.",
      techMetric: "Respuesta Rápida y Cercana",
      features: [
        "Canal directo de comunicación y soporte por WhatsApp",
        "Capacitación guiada a tu equipo de trabajo",
        "Acompañamiento continuo y evolución de tu sistema",
      ],
      icon: <Users className="w-5 h-5 text-[#20CBE5]" />,
    },
  ];

  return (
    <section id="pilares" className="relative py-24 sm:py-32 bg-[#F8FAFC] border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[#07053B] text-xs font-semibold uppercase tracking-[0.2em] mb-4 shadow-2xs">
              POR QUÉ SUPERSOFT
            </div>
            <h2 style={{ color: "#07053B" }} className="font-heading text-3xl sm:text-5xl font-bold tracking-tight">
              Tecnología clara.{" "}
              <span className="text-[#0284C7]">Resultados que se notan en tu caja.</span>
            </h2>
            <p style={{ color: "#475569" }} className="mt-4 text-base sm:text-lg max-w-2xl font-sans">
              Nos alejamos de la jerga técnica innecesaria para enfocarnos en lo que importa: sistemas que resuelven problemas, optimizan tu tiempo y aumentan tus ventas.
            </p>
          </div>
        </div>

        {/* Bento Grid Asimétrico */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Columna Izquierda: Selector de Pilares Interactivo */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {pillarsDetails.map((pillar, idx) => {
              const isActive = activePillar === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActivePillar(idx)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? "bg-white border-[#20CBE5] shadow-[0_10px_30px_-6px_rgba(32,203,229,0.2)] translate-x-1.5"
                      : "bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`p-2.5 rounded-xl border transition-colors ${
                          isActive
                            ? "bg-[#07053B] border-[#07053B] text-[#20CBE5]"
                            : "bg-slate-100 border-slate-200 text-slate-600"
                        }`}
                      >
                        {pillar.icon}
                      </div>
                      <div>
                        <h4
                          style={{ color: isActive ? "#07053B" : "#1E293B" }}
                          className="font-heading text-base sm:text-lg font-bold transition-colors"
                        >
                          {pillar.title}
                        </h4>
                        <span className="text-xs font-mono text-slate-500 block mt-0.5">
                          {pillar.subtitle}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`font-mono text-xs font-bold px-2.5 py-1 rounded-full ${
                        isActive
                          ? "bg-[#07053B] text-white"
                          : "text-slate-400"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Columna Derecha: Panel de Detalle en Gran Formato */}
          <div className="lg:col-span-7">
            <div className="h-full p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-[0_16px_45px_-10px_rgba(7,5,59,0.08)] flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#20CBE5] animate-pulse" />
                    <span className="text-xs font-mono text-[#07053B] uppercase tracking-wider font-semibold">
                      Compromiso SuperSoft #{activePillar + 1}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#07053B] bg-slate-100 px-3 py-1 rounded-full border border-slate-200 font-semibold">
                    {pillarsDetails[activePillar].techMetric}
                  </span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#07053B] mt-8 mb-4">
                  {pillarsDetails[activePillar].title}
                </h3>

                <p className="text-slate-600 font-sans text-base sm:text-lg leading-relaxed max-w-xl">
                  {pillarsDetails[activePillar].description}
                </p>

                {/* Especificaciones y entregables verificados */}
                <div className="mt-8 pt-8 border-t border-slate-100">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#07053B] block mb-4 font-bold">
                    Cómo lo aplicamos en tu proyecto:
                  </span>
                  <div className="space-y-3">
                    {pillarsDetails[activePillar].features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-[#0284C7] shrink-0" />
                        <span className="font-sans font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer del panel */}
              <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500 relative z-10">
                <span>ESTÁNDAR DE DESARROLLO</span>
                <span className="text-[#07053B] font-bold">
                  {PILLARS_DATA[activePillar].detail}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
