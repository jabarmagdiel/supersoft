"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Layers, Server, Target, Globe2, ShieldCheck, CheckCircle2, MessageSquare, Terminal } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const About: React.FC = () => {
  const architecturalLayers = [
    {
      title: "Capa de Experiencia & Web",
      tech: "Next.js · React · Tailwind CSS · Responsive UI",
      icon: <Layers className="w-4 h-4 text-[#20CBE5]" />,
      desc: "Páginas web y paneles administrativos rápidos, intuitivos y diseñados para celulares y computadoras.",
    },
    {
      title: "Capa Backend en Laravel",
      tech: "Laravel 11 · PHP 8.3 · Eloquent ORM · REST APIs",
      icon: <Terminal className="w-4 h-4 text-[#20CBE5]" />,
      desc: "Lógica de negocio robusta, segura y rápida. Validación estricta de datos y permisos de usuario.",
    },
    {
      title: "Bases de Datos & Finanzas",
      tech: "MySQL · Redis · Transacciones ACID · Backups",
      icon: <Server className="w-4 h-4 text-[#20CBE5]" />,
      desc: "Seguridad y consistencia absoluta para inventarios, cuentas por cobrar, facturación y caja chica.",
    },
    {
      title: "Automatización & Conectores",
      tech: "WhatsApp API · Webhooks · Cron Jobs · Colas",
      icon: <MessageSquare className="w-4 h-4 text-[#20CBE5]" />,
      desc: "Notificaciones directas al celular, alertas de cobro y generación automática de reportes ejecutivos.",
    },
  ];

  return (
    <section id="nosotros" className="section-dark relative py-24 sm:py-32 bg-[#07053B] text-white border-t border-white/[0.08] overflow-hidden">
      {/* Luz ambiental suave */}
      <div className="pointer-events-none absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#0B0754]/80 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-10 right-0 w-[450px] h-72 bg-[#20CBE5]/10 blur-[160px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* PARTE 1: MANIFIESTO Y FOTOGRAFÍA DE EQUIPO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Columna Izquierda: Texto Manifiesto */}
          <div className="lg:col-span-6 flex flex-col">
            <SectionHeading
              eyebrow="SOBRE SUPERSOFT"
              title="No hacemos promesas al aire."
              highlightedText="Desarrollamos tecnología que tu empresa realmente usa."
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 space-y-6 text-slate-200 font-sans text-base sm:text-lg leading-relaxed"
            >
              <p>
                Somos un equipo apasionado por el desarrollo de software práctico y de alto rendimiento. Nos especializamos en construir <strong className="text-white">páginas web modernas</strong>, <strong className="text-white">sistemas ERP y CRM a medida</strong> y <strong className="text-[#20CBE5]">soluciones robustas en Laravel</strong>.
              </p>
              <p>
                Sabemos que cada negocio es diferente: por eso no te vendemos sistemas rígidos que no se adaptan a tu día a día. Escuchamos cómo trabajas, qué problemas tienes en inventarios o ventas, y construimos la herramienta exacta que te devolverá el control y el tiempo.
              </p>
            </motion.div>

            {/* Microvalores */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#0B0754] border border-white/10 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#20CBE5] shrink-0 mt-0.5" />
                <div>
                  <h4 style={{ color: "#FFFFFF" }} className="text-sm font-bold font-heading">Hecho a tu Medida</h4>
                  <p className="text-xs text-slate-300 mt-1">Adaptado a tus flujos reales de venta y stock.</p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-[#0B0754] border border-white/10 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#20CBE5] shrink-0 mt-0.5" />
                <div>
                  <h4 style={{ color: "#FFFFFF" }} className="text-sm font-bold font-heading">Especialistas Laravel</h4>
                  <p className="text-xs text-slate-300 mt-1">Código limpio, seguro, ágil y mantenible.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Fotografía real de ingeniería y colaboración */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl group">
              <div className="relative h-[380px] sm:h-[420px] w-full">
                <Image
                  src="/assets/images/about-collaboration.jpg"
                  alt="Equipo de desarrollo de software en SuperSoft"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07053B] via-[#07053B]/30 to-transparent" />
              </div>

              {/* Tag flotante sobre la foto */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0B0754]/95 backdrop-blur-md border border-white/10 flex items-center justify-between shadow-xl">
                <div>
                  <span className="text-xs font-mono text-[#20CBE5] uppercase tracking-wider block font-semibold">
                    Compromiso de Calidad
                  </span>
                  <span style={{ color: "#FFFFFF" }} className="text-sm font-semibold font-heading">
                    Comunicación Directa · Desarrollo Ágil en Laravel · Entregas Continuas
                  </span>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0 ml-3" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* PARTE 2: MISIÓN Y VISIÓN */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0754] border border-white/10 text-[#20CBE5] text-xs font-mono uppercase tracking-[0.2em] mb-3">
              PROPÓSITO Y DIRECCIÓN
            </span>
            <h3 style={{ color: "#FFFFFF" }} className="font-heading text-2xl sm:text-3xl font-bold">
              Nuestra Brújula Estratégica
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Tarjeta Misión */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#0B0754] border border-white/10 hover:border-[#20CBE5]/50 transition-all duration-300 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.5)] flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#20CBE5]/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-[#07053B] text-[#20CBE5] border border-white/10">
                      <Target className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#20CBE5] font-semibold">
                      MISIÓN
                    </span>
                  </div>
                  <span className="font-mono text-3xl font-light text-slate-500">01</span>
                </div>

                <blockquote style={{ color: "#FFFFFF" }} className="mt-6 font-heading text-lg sm:text-xl font-bold leading-relaxed">
                  “Desarrollar soluciones de software innovadoras, seguras y adaptadas a las necesidades de nuestros clientes, mediante tecnología de calidad que optimice sus procesos, mejore su productividad e impulse su transformación digital.”
                </blockquote>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-300">
                <span>ENFOQUE</span>
                <span className="text-[#20CBE5]">Soluciones Prácticas y Rentables</span>
              </div>
            </motion.div>

            {/* Tarjeta Visión */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#0B0754] border border-white/10 hover:border-[#20CBE5]/50 transition-all duration-300 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.5)] flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#20CBE5]/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-[#07053B] text-[#20CBE5] border border-white/10">
                      <Globe2 className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#20CBE5] font-semibold">
                      VISIÓN
                    </span>
                  </div>
                  <span className="font-mono text-3xl font-light text-slate-500">02</span>
                </div>

                <blockquote style={{ color: "#FFFFFF" }} className="mt-6 font-heading text-lg sm:text-xl font-bold leading-relaxed">
                  “Consolidarnos como una empresa referente en el desarrollo de software y soluciones tecnológicas en Bolivia, con proyección internacional, reconocida por la calidad de nuestros productos, nuestra capacidad de innovación y el valor que generamos para nuestros clientes.”
                </blockquote>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-300">
                <span>ALCANCE</span>
                <span className="text-[#20CBE5]">Bolivia & Proyección Internacional</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* PARTE 3: ARQUITECTURA TÉCNICA EN CAPAS */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0B0754] border border-white/10 shadow-[0_16px_45px_-10px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-[#20CBE5] uppercase tracking-wider block font-semibold">
                NUESTRO ENTORNO DE DESARROLLO
              </span>
              <h3 style={{ color: "#FFFFFF" }} className="font-heading text-2xl sm:text-3xl font-bold mt-1">
                La Base Tecnológica con la que Construimos
              </h3>
            </div>
            <span className="text-xs font-mono text-[#20CBE5] bg-[#07053B] border border-white/10 px-4 py-2 rounded-full self-start">
              LARAVEL 11 · MYSQL · REACT
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {architecturalLayers.map((layer, index) => (
              <div
                key={layer.title}
                className="p-5 rounded-2xl bg-[#07053B] border border-white/10 hover:border-[#20CBE5]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-[#0B0754] border border-white/10">
                      {layer.icon}
                    </div>
                    <span className="text-[11px] font-mono text-[#20CBE5] bg-[#20CBE5]/10 px-2 py-0.5 rounded font-bold">
                      0{index + 1}
                    </span>
                  </div>
                  <h4 style={{ color: "#FFFFFF" }} className="text-sm font-bold font-heading">
                    {layer.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-200 leading-relaxed font-sans">
                    {layer.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-mono text-slate-300">
                  {layer.tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
