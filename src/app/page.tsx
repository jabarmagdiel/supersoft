"use client";

import React, { useState } from "react";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
// Nota: La sección de proyectos queda lista en el componente Portfolio para cuando se desee habilitar.
// import { Portfolio } from "@/components/sections/Portfolio";
import { CtaSection } from "@/components/sections/CtaSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenContact = () => {
    const el = document.getElementById("contacto");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    const el = document.getElementById("contacto");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <MotionProvider>
      <div className="relative min-h-screen flex flex-col bg-white text-slate-900 overflow-x-hidden selection:bg-[#20CBE5] selection:text-[#07053B]">
        {/* Barra de navegación flotante con cristal arquitectónico y logo */}
        <Navbar onOpenContact={handleOpenContact} />

        <main className="flex-1 w-full">
          {/* SECCIÓN 01 — HERO PRINCIPAL */}
          <Hero onOpenContact={handleOpenContact} />

          {/* SECCIÓN 02 — SERVICIOS Y SOLUCIONES REALES */}
          <Services onSelectService={handleSelectService} />

          {/* SECCIÓN 03 — SOBRE SUPERSOFT */}
          <About />

          {/* SECCIÓN 04 — POR QUÉ SUPERSOFT (PILARES DE VALOR) */}
          <WhyUs />

          {/* SECCIÓN 05 — METODOLOGÍA Y PROCESO DE TRABAJO */}
          <Process />

          {/* SECCIÓN 06 — LLAMADA A LA ACCIÓN (CTA) */}
          <CtaSection onOpenContact={handleOpenContact} />

          {/* SECCIÓN 07 — FORMULARIO DE CONTACTO Y WHATSAPP */}
          <ContactSection initialProjectType={selectedService} />
        </main>

        {/* FOOTER CORPORATIVO */}
        <Footer />
      </div>
    </MotionProvider>
  );
}
