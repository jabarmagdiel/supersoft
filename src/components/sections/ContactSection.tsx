"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles, Mail, ShieldCheck, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ContactSectionProps {
  initialService?: string;
  initialProjectType?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService,
  initialProjectType,
}) => {
  const initialType = initialProjectType || initialService || "Sistemas ERP (Laravel)";

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: initialType,
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [selectedPlatform, setSelectedPlatform] = useState<string>(initialType);
  const [selectedScale, setSelectedScale] = useState<string>("Fase 1 / Lanzamiento");

  const platforms = [
    { id: "Sistemas ERP (Laravel)", label: "Sistema ERP a Medida", desc: "Inventario, POS, compras, ventas y caja" },
    { id: "Páginas Web & Landing", label: "Página Web / Landing Page", desc: "Diseño moderno, alta conversión y SEO" },
    { id: "Sistemas CRM", label: "Sistema CRM & Ventas", desc: "Embudo comercial, cotizaciones en PDF" },
    { id: "Software a Medida", label: "Software en Laravel", desc: "Desarrollo web a la medida de tu operación" },
    { id: "Automatización", label: "Automatización & WhatsApp", desc: "Notificaciones directas y conexión de sistemas" },
  ];

  const scales = [
    { id: "Fase 1 / Lanzamiento", label: "Fase 1 / Rápida", time: "3 a 5 semanas" },
    { id: "Sistema Completo", label: "Sistema Integral", time: "6 a 10 semanas" },
    { id: "Multi-Sucursal", label: "Multi-Sucursal", time: "A medida" },
  ];

  const handleSelectPlatform = (platform: string) => {
    setSelectedPlatform(platform);
    setFormData((prev) => ({
      ...prev,
      projectType: platform,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setStatus("loading");

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setStatus("error");
      setErrorMessage("Por favor ingresa tu nombre completo.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setStatus("error");
      setErrorMessage("Por favor ingresa un correo electrónico válido.");
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setStatus("error");
      setErrorMessage("Por favor cuéntanos brevemente sobre tu proyecto (mínimo 10 caracteres).");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          projectType: `${selectedPlatform} (${selectedScale})`,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Ocurrió un error al enviar el formulario.");
      }

      setStatus("success");
      setSuccessMessage(data.message || "Solicitud enviada correctamente.");
    } catch (err: unknown) {
      setStatus("error");
      const message = err instanceof Error ? err.message : "Error inesperado al conectar con el servidor.";
      setErrorMessage(message);
    }
  };

  return (
    <section id="contacto" className="relative py-24 sm:py-32 bg-[#F8FAFC] overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Columna Izquierda: Información corporativa y configurador de alcance */}
          <div className="lg:col-span-5 flex flex-col">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[#07053B] text-xs font-semibold uppercase tracking-[0.2em] mb-4 shadow-2xs">
                COTIZACIONES & CONTACTO
              </div>
              <h2 style={{ color: "#07053B" }} className="font-heading text-3xl sm:text-5xl font-bold tracking-tight">
                Conversemos sobre tu{" "}
                <span className="text-[#0284C7]">próximo proyecto.</span>
              </h2>
              <p style={{ color: "#475569" }} className="mt-4 text-base sm:text-lg font-sans">
                Cuéntanos qué necesitas sistematizar o qué tipo de sitio web requieres. Analizamos tus necesidades y te entregamos una propuesta clara y sin compromiso.
              </p>
            </div>

            {/* Configurador rápido interactivo */}
            <div className="mt-8 p-6 rounded-3xl bg-white border border-slate-200 shadow-[0_10px_35px_-8px_rgba(7,5,59,0.06)]">
              <span className="text-xs font-mono text-[#07053B] uppercase tracking-wider block mb-4 flex items-center gap-2 font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#20CBE5]" />
                <span>¿Qué tipo de solución buscas?</span>
              </span>

              {/* Selector de plataforma */}
              <div className="space-y-2 mb-5">
                <label className="text-xs font-mono text-slate-500">Selecciona una categoría:</label>
                <div className="grid grid-cols-1 gap-2">
                  {platforms.map((p) => {
                    const isSelected = selectedPlatform === p.id;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => handleSelectPlatform(p.id)}
                        className={`p-3 rounded-xl text-left transition-all cursor-pointer border ${
                          isSelected
                            ? "bg-[#07053B] border-[#07053B] text-white shadow-md"
                            : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-white"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold font-heading">{p.label}</span>
                          {isSelected && <span className="text-[10px] font-mono text-[#20CBE5] font-bold">SELECCIONADO</span>}
                        </div>
                        <span className={`text-[11px] block mt-0.5 ${isSelected ? "text-slate-300" : "text-slate-500"}`}>
                          {p.desc}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Escala estimada */}
              <div>
                <label className="text-xs font-mono text-slate-500 block mb-2">Tiempo estimado de entrega:</label>
                <div className="grid grid-cols-3 gap-2">
                  {scales.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedScale(s.id)}
                      className={`p-2.5 rounded-xl text-center cursor-pointer border transition-all ${
                        selectedScale === s.id
                          ? "bg-[#07053B] border-[#07053B] text-[#20CBE5] font-bold"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      <span className="text-[11px] block font-heading">{s.label}</span>
                      <span className="text-[9px] font-mono text-slate-400 block mt-0.5">{s.time}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Datos de contacto directos con WhatsApp */}
            <div className="mt-6 space-y-3">
              {/* Botón WhatsApp */}
              <a
                href="https://wa.me/59170000000?text=Hola%20SuperSoft,%20quisiera%20cotizar%20un%20proyecto%20de%20software."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white hover:bg-emerald-50/50 border border-emerald-500/40 hover:border-emerald-500 transition-all group shadow-sm"
              >
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-emerald-600 uppercase tracking-wider block font-bold">
                    WHATSAPP DIRECTO
                  </span>
                  <span className="text-sm font-bold text-[#07053B] transition-colors font-sans">
                    Conversar por WhatsApp con un Asesor
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <div className="p-2.5 rounded-xl bg-slate-100 text-[#07053B] border border-slate-200">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                    CORREO ELECTRÓNICO
                  </span>
                  <a href="mailto:contacto@supersoft.com.bo" className="text-sm font-bold text-[#07053B] hover:text-[#0284C7] transition-colors font-mono">
                    contacto@supersoft.com.bo
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <div className="p-2.5 rounded-xl bg-slate-100 text-[#07053B] border border-slate-200">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                    CONFIDENCIALIDAD TOTAL
                  </span>
                  <span className="text-xs text-slate-600">
                    Tu información y modelo de negocio están 100% protegidos.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario interactivo validado */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-[0_16px_45px_-10px_rgba(7,5,59,0.08)] relative">
              <div className="pb-6 border-b border-slate-100 mb-8 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#07053B] font-heading">
                    Solicitud de Cotización
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-sans">
                    Te respondemos con una propuesta técnica y económica en menos de 24 horas.
                  </p>
                </div>
                <span className="text-xs font-mono text-[#07053B] bg-slate-100 px-3 py-1 rounded-full border border-slate-200 font-semibold">
                  SIN COMPROMISO
                </span>
              </div>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#07053B] font-heading">
                    ¡Mensaje recibido con éxito!
                  </h4>
                  <p className="text-slate-600 max-w-md text-sm leading-relaxed">
                    {successMessage}
                  </p>
                  <div className="pt-6">
                    <button
                      type="button"
                      onClick={() => {
                        setStatus("idle");
                        setFormData({
                          name: "",
                          company: "",
                          email: "",
                          phone: "",
                          projectType: selectedPlatform,
                          message: "",
                        });
                      }}
                      className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#07053B] text-xs font-mono transition-colors cursor-pointer font-bold"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-3"
                      role="alert"
                    >
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Nombre */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono uppercase tracking-wider text-slate-700 mb-2 font-bold"
                      >
                        Nombre completo <span className="text-[#0284C7]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. Juan Pérez"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#07053B] placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-[#20CBE5] focus:ring-1 focus:ring-[#20CBE5] transition-all"
                      />
                    </div>

                    {/* Empresa */}
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-xs font-mono uppercase tracking-wider text-slate-700 mb-2 font-bold"
                      >
                        Empresa / Negocio <span className="text-slate-400">(Opcional)</span>
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Ej. Distribuidora Santa Cruz"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#07053B] placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-[#20CBE5] focus:ring-1 focus:ring-[#20CBE5] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Correo electrónico */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono uppercase tracking-wider text-slate-700 mb-2 font-bold"
                      >
                        Correo electrónico <span className="text-[#0284C7]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="juan@empresa.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#07053B] placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-[#20CBE5] focus:ring-1 focus:ring-[#20CBE5] transition-all"
                      />
                    </div>

                    {/* Teléfono / WhatsApp */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-mono uppercase tracking-wider text-slate-700 mb-2 font-bold"
                      >
                        Teléfono / WhatsApp <span className="text-slate-400">(Opcional)</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Ej. +591 70000000"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#07053B] placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-[#20CBE5] focus:ring-1 focus:ring-[#20CBE5] transition-all"
                      />
                    </div>
                  </div>

                  {/* Resumen del alcance seleccionado */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-600 font-medium">SERVICIO SELECCIONADO:</span>
                    <span className="text-[#07053B] font-bold">
                      {selectedPlatform} · {selectedScale}
                    </span>
                  </div>

                  {/* Descripción de la necesidad */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-700 mb-2 font-bold"
                    >
                      Cuéntanos sobre tu necesidad o proyecto <span className="text-[#0284C7]">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ej. Necesitamos un sistema ERP en Laravel para controlar stock entre 2 sucursales y emitir notas de venta, o una landing page para captar clientes por WhatsApp..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#07053B] placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-[#20CBE5] focus:ring-1 focus:ring-[#20CBE5] transition-all resize-none"
                    />
                  </div>

                  {/* Botón de envío */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-4 px-6 rounded-xl bg-[#07053B] hover:bg-[#0B0754] text-white font-heading font-bold text-sm transition-all shadow-[0_8px_25px_-5px_rgba(7,5,59,0.3)] hover:shadow-[0_12px_30px_-5px_rgba(32,203,229,0.4)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed border border-[#20CBE5]/40"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Enviando requerimiento...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#20CBE5]" />
                          <span>Enviar solicitud de cotización</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-slate-500 mt-3 font-mono">
                      Respuesta en menos de 24 horas · Información 100% confidencial
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
