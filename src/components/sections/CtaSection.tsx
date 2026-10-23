"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

interface CtaSectionProps {
  onOpenContact?: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenContact }) => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#07053B] border-t border-white/[0.08] overflow-hidden text-white">
      {/* Resplandor radial de fondo */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] rounded-full bg-[#0B0754]/80 blur-[140px]"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-14 rounded-3xl bg-[#0B0754] border border-white/15 text-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden">
          {/* Luz sutil cian en la esquina de la tarjeta */}
          <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 bg-[#20CBE5]/15 rounded-full blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#07053B] border border-[#20CBE5]/30 text-[#20CBE5] text-xs font-semibold uppercase tracking-[0.2em] mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>INICIEMOS TU PROYECTO</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ color: "#FFFFFF" }}
            className="font-heading text-3xl sm:text-5xl font-bold tracking-tight leading-[1.15]"
          >
            <span style={{ color: "#FFFFFF" }}>¿Listo para digitalizar tu negocio con</span>{" "}
            <span className="text-[#20CBE5] block sm:inline">
              software hecho a tu medida?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ color: "#E2E8F0" }}
            className="mt-6 text-base sm:text-lg font-sans max-w-2xl mx-auto leading-relaxed"
          >
            Ya sea una landing page para multiplicar tus ventas o un sistema ERP en Laravel para controlar tu inventario y caja, en SuperSoft construimos la herramienta que necesitas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <MagneticButton
              variant="primary"
              size="lg"
              href="#contacto"
              onClick={onOpenContact}
              icon={<ArrowRight className="w-5 h-5" />}
              className="w-full sm:w-auto justify-center text-base font-bold"
            >
              Cotizar mi proyecto
            </MagneticButton>

            <a
              href="https://wa.me/59170000000?text=Hola%20SuperSoft,%20quisiera%20cotizar%20un%20proyecto%20de%20software."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-[#07053B] hover:bg-[#05032A] text-white border border-[#20CBE5]/40 hover:border-[#20CBE5] transition-all text-sm font-semibold font-sans shadow-md"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>Hablar por WhatsApp</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
