"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  Globe,
  LayoutDashboard,
  MessageSquare,
  Sparkles,
  Zap,
} from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

interface HeroProps {
  onOpenContact?: () => void;
}

type ShowcaseTab = "erp" | "web" | "crm" | "auto";

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<ShowcaseTab>("erp");

  const tabContent = {
    erp: {
      badge: "SISTEMAS ERP & GESTIÓN A MEDIDA",
      title: "Control total de tu negocio: Inventario, POS, Facturación y Caja",
      desc: "Desarrollado en Laravel con MySQL. Centraliza almacenes, controla el stock en tiempo real y genera reportes de ganancias con un clic.",
      image: "/assets/images/project-erp.jpg",
      kpis: [
        { label: "Control de Stock", value: "100% en tiempo real" },
        { label: "Módulo POS", value: "Caja y Facturación" },
        { label: "Soporte", value: "Multi-sucursal" },
      ],
      features: [
        "Punto de venta rápido con lector de códigos",
        "Alertas automáticas de stock mínimo",
        "Cierre de caja diario sin descuadres",
        "Reportes descargables en Excel y PDF",
      ],
    },
    web: {
      badge: "PÁGINAS WEB & LANDING PAGES",
      title: "Sitios web rápidos y modernos que convierten visitantes en clientes",
      desc: "Diseños limpios, adaptados a celulares y optimizados para Google (SEO). Incluye botón directo a WhatsApp y formularios de cotización.",
      image: "/assets/images/service-web.jpg",
      kpis: [
        { label: "PageSpeed Google", value: "98/100" },
        { label: "Diseño Móvil", value: "100% Responsive" },
        { label: "Conversión", value: "+240% leads" },
      ],
      features: [
        "Velocidad de carga en menos de 1 segundo",
        "Estructura SEO para salir en primeros lugares de Google",
        "Integración directa con WhatsApp de ventas",
        "Panel autoadministrable fácil de actualizar",
      ],
    },
    crm: {
      badge: "CRM DE VENTAS & COTIZACIONES",
      title: "Monitorea tus prospectos y cierra más ventas sin perder contactos",
      desc: "Embudo comercial tipo Kanban con generador instantáneo de cotizaciones en PDF y seguimiento automático.",
      image: "/assets/images/project-fintech.jpg",
      kpis: [
        { label: "Tasa de Cierre", value: "+45%" },
        { label: "Cotizador PDF", value: "Instantáneo" },
        { label: "Trazabilidad", value: "100% de clientes" },
      ],
      features: [
        "Pipeline visual de etapas de venta (Prospecto → Ganado)",
        "Generador de cotizaciones con logo en 2 minutos",
        "Historial unificado de llamadas y mensajes",
        "Recordatorios de seguimiento a clientes",
      ],
    },
    auto: {
      badge: "AUTOMATIZACIÓN & WHATSAPP",
      title: "Elimina tareas repetitivas y conecta tus sistemas con WhatsApp",
      desc: "Envío automático de confirmaciones de compra, facturas en PDF y recordatorios de cobranza directo al celular de tus clientes.",
      image: "/assets/images/service-cloud.jpg",
      kpis: [
        { label: "Tiempo de Respuesta", value: "Instantáneo" },
        { label: "Ahorro Manual", value: "25h / semana" },
        { label: "Canal", value: "WhatsApp Oficial" },
      ],
      features: [
        "Notificaciones de estado de pedidos vía WhatsApp",
        "Alertas automáticas de cobranza y vencimientos",
        "Sincronización con hojas de cálculo y bases de datos",
        "Reportes ejecutivos enviados diariamente",
      ],
    },
  };

  const currentTab = tabContent[activeTab];

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-between pt-32 sm:pt-40 pb-16 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#F1F5F9]"
    >
      {/* Resplandor suave cenital en cian suave y azul marino sobre blanco */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-[#20CBE5]/15 via-[#0B0754]/5 to-transparent blur-[140px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto relative z-10">
        {/* Barra superior de estudio */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200/80">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono text-[#07053B] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#20CBE5] animate-pulse" />
            <span className="font-semibold uppercase tracking-wider text-[11px]">
              DESARROLLO DE SOFTWARE & PÁGINAS WEB
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-600">
            <span className="flex items-center gap-1.5 text-[#07053B] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#20CBE5]" />
              Especialistas en Laravel & React
            </span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="hidden sm:inline text-slate-500">Soluciones para Empresas</span>
          </div>
        </div>

        {/* Titular en Azul Marino Profundo sobre Blanco */}
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ color: "#07053B" }}
            className="font-heading text-4xl sm:text-6xl lg:text-[4.6rem] font-bold tracking-tight leading-[1.05]"
          >
            <span style={{ color: "#07053B" }} className="text-[#07053B]">
              Páginas web, sistemas ERP y software{" "}
            </span>
            <span className="text-[#0284C7] block sm:inline">
              hechos a la medida de tu empresa.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="mt-6 sm:mt-7 text-base sm:text-xl text-slate-600 font-sans max-w-3xl leading-relaxed"
          >
            En <strong className="text-[#07053B] font-semibold">SuperSoft</strong> creamos soluciones prácticas que resuelven los problemas reales de tu operación: landing pages de alta conversión, sistemas ERP y CRM robustos en <strong className="text-[#0284C7] font-semibold">Laravel</strong>, y automatizaciones para que dejes atrás el desorden de hojas de cálculo.
          </motion.p>

          {/* Botones de acción principales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                if (onOpenContact) onOpenContact();
                else {
                  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#07053B] hover:bg-[#0B0754] text-white font-heading font-bold text-sm shadow-[0_8px_25px_-5px_rgba(7,5,59,0.3)] hover:shadow-[0_12px_30px_-5px_rgba(32,203,229,0.4)] transition-all border border-[#20CBE5]/40 hover:border-[#20CBE5] group cursor-pointer"
            >
              <span>Cotizar mi proyecto</span>
              <ArrowRight className="w-4 h-4 text-[#20CBE5] group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#servicios"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#07053B] font-heading font-semibold text-sm border border-slate-300 shadow-sm hover:border-[#20CBE5] transition-all"
            >
              Ver servicios y soluciones
            </a>

            {/* Stack Pills */}
            <div className="w-full sm:w-auto mt-2 sm:mt-0 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-600">
              <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[#07053B] font-semibold shadow-2xs">Laravel 11</span>
              <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[#07053B] font-semibold shadow-2xs">MySQL</span>
              <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[#07053B] font-semibold shadow-2xs">React</span>
              <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[#07053B] font-semibold shadow-2xs">WhatsApp API</span>
            </div>
          </motion.div>
        </div>

        {/* Showcase de Software Profesional (Tarjeta Oscura en Contraste con el Fondo Claro) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 sm:mt-16 rounded-3xl bg-[#07053B] border border-white/10 p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(7,5,59,0.35)] relative overflow-hidden"
        >
          {/* Barra de pestañas interactivas */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#0B0754] border border-[#20CBE5]/40 text-[#20CBE5]">
                <LayoutDashboard className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-200 block font-semibold">
                  Soluciones que desarrollamos
                </span>
                <span className="text-xs text-[#20CBE5]">
                  Haz clic en cada categoría para ver ejemplos reales:
                </span>
              </div>
            </div>

            {/* Pestañas de Soluciones */}
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setActiveTab("erp")}
                className={`px-3.5 py-2 rounded-xl text-xs font-sans font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === "erp"
                    ? "bg-[#20CBE5] text-[#07053B] shadow-[0_0_16px_rgba(32,203,229,0.4)] font-bold"
                    : "bg-[#0B0754] text-slate-300 hover:text-white hover:bg-[#120D63] border border-white/10"
                }`}
              >
                <Database className="w-3.5 h-3.5" />
                Sistemas ERP
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("web")}
                className={`px-3.5 py-2 rounded-xl text-xs font-sans font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === "web"
                    ? "bg-[#20CBE5] text-[#07053B] shadow-[0_0_16px_rgba(32,203,229,0.4)] font-bold"
                    : "bg-[#0B0754] text-slate-300 hover:text-white hover:bg-[#120D63] border border-white/10"
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                Páginas Web & Landing
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("crm")}
                className={`px-3.5 py-2 rounded-xl text-xs font-sans font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === "crm"
                    ? "bg-[#20CBE5] text-[#07053B] shadow-[0_0_16px_rgba(32,203,229,0.4)] font-bold"
                    : "bg-[#0B0754] text-slate-300 hover:text-white hover:bg-[#120D63] border border-white/10"
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                Sistemas CRM
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("auto")}
                className={`px-3.5 py-2 rounded-xl text-xs font-sans font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === "auto"
                    ? "bg-[#20CBE5] text-[#07053B] shadow-[0_0_16px_rgba(32,203,229,0.4)] font-bold"
                    : "bg-[#0B0754] text-slate-300 hover:text-white hover:bg-[#120D63] border border-white/10"
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp & Automatización
              </button>
            </div>
          </div>

          {/* Vista previa del software seleccionado */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-6"
            >
              {/* Información y características de la solución */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#0B0754] border border-[#20CBE5]/30 text-[11px] font-mono text-[#20CBE5] uppercase tracking-wider mb-2.5">
                    {currentTab.badge}
                  </div>
                  <h3 style={{ color: "#FFFFFF" }} className="font-heading text-xl sm:text-2xl font-bold mb-2 leading-tight">
                    {currentTab.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {currentTab.desc}
                  </p>

                  {/* Lista de características concretas */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                    {currentTab.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#20CBE5] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Métricas clave */}
                <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-white/10">
                  {currentTab.kpis.map((kpi) => (
                    <div key={kpi.label} className="p-2.5 rounded-xl bg-[#0B0754] border border-white/5">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block mb-0.5">{kpi.label}</span>
                      <span className="text-xs sm:text-sm font-bold text-[#20CBE5]">{kpi.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mockup real en marco de navegador macOS */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl bg-[#05032A] border border-white/15 overflow-hidden shadow-2xl">
                  {/* Barra superior de ventana macOS */}
                  <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#03021D] border-b border-white/10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="px-3 py-0.5 rounded-md bg-[#07053B] text-[10px] font-mono text-slate-300 border border-white/5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#20CBE5]" />
                      supersoft.app/{activeTab}
                    </div>
                    <div className="text-[10px] font-mono text-[#20CBE5] font-semibold">
                      LARAVEL 11
                    </div>
                  </div>

                  {/* Imagen real del sistema */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                    <Image
                      src={currentTab.image}
                      alt={currentTab.title}
                      fill
                      className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07053B] via-transparent to-transparent opacity-60" />

                    {/* Badge flotante en la captura */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-xl bg-[#07053B]/90 backdrop-blur-md border border-[#20CBE5]/30">
                      <div className="flex items-center gap-2">
                        <Image
                          src="/assets/brand/supersoft-isotipo.png"
                          alt="SuperSoft"
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                        <span className="text-xs font-sans font-semibold text-white">Desarrollado por SuperSoft</span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#20CBE5] bg-[#20CBE5]/10 px-2 py-0.5 rounded">
                        100% PERSONALIZABLE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <div className="max-w-7xl mx-auto px-4 w-full flex items-center justify-center pt-8 z-10">
        <a
          href="#servicios"
          className="group flex flex-col items-center gap-1.5 text-slate-500 hover:text-[#07053B] transition-colors"
          aria-label="Ir a servicios"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-semibold">Conoce nuestras soluciones</span>
          <div className="w-4 h-7 rounded-full border border-slate-300 group-hover:border-[#07053B] flex items-start justify-center p-1 transition-colors">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-1 h-1 rounded-full bg-[#07053B]"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
