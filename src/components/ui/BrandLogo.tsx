"use client";

import React, { useState } from "react";
import Image from "next/image";

interface BrandLogoProps {
  variant?: "horizontal" | "horizontal-dark" | "full" | "isotipo" | "badge" | "monochrome";
  theme?: "light" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  imageSrc?: string;
  priority?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = "horizontal",
  theme = "light",
  size = "md",
  className = "",
  imageSrc,
  priority = true,
}) => {
  const [hasError, setHasError] = useState(false);

  // Dimensiones proporcionales basadas en los archivos oficiales de marca
  const sizeMap = {
    sm: {
      horizontal: { h: 32, w: 138 },
      isotipo: { h: 30, w: 31 },
      full: { h: 56, w: 80 },
    },
    md: {
      horizontal: { h: 40, w: 173 },
      isotipo: { h: 38, w: 40 },
      full: { h: 74, w: 106 },
    },
    lg: {
      horizontal: { h: 52, w: 225 },
      isotipo: { h: 50, w: 52 },
      full: { h: 96, w: 138 },
    },
    xl: {
      horizontal: { h: 68, w: 295 },
      isotipo: { h: 64, w: 67 },
      full: { h: 124, w: 178 },
    },
  }[size];

  // Determinar la fuente de imagen según la variante solicitada
  const getAssetSrc = () => {
    if (imageSrc) return imageSrc;
    if (variant === "horizontal-dark" || theme === "dark") {
      return "/assets/brand/supersoft-logo-horizontal-dark.png";
    }
    switch (variant) {
      case "isotipo":
        return "/assets/brand/supersoft-isotipo.png";
      case "full":
        return "/assets/brand/supersoft-logo-full.png";
      case "monochrome":
        return "/assets/brand/supersoft-logo-white-full.png";
      case "badge":
        return "/assets/brand/logo-color.jpg";
      case "horizontal":
      default:
        return "/assets/brand/supersoft-logo-horizontal.png";
    }
  };

  const assetSrc = getAssetSrc();

  // Si no hay error, renderizamos la imagen oficial de marca
  if (!hasError) {
    if (variant === "badge") {
      return (
        <div
          className={`inline-flex items-center p-2 rounded-2xl bg-[#0a0652] border border-[#20CBE5]/40 shadow-[0_8px_24px_-6px_rgba(32,203,229,0.3)] overflow-hidden ${className}`}
        >
          <Image
            src="/assets/brand/logo-color.jpg"
            alt="SuperSoft — Software Company"
            width={sizeMap.horizontal.w}
            height={sizeMap.horizontal.h}
            className="object-contain rounded-xl"
            onError={() => setHasError(true)}
            priority={priority}
          />
        </div>
      );
    }

    if (variant === "isotipo") {
      return (
        <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
          <Image
            src="/assets/brand/supersoft-isotipo.png"
            alt="SuperSoft Isotipo"
            width={sizeMap.isotipo.w}
            height={sizeMap.isotipo.h}
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            onError={() => setHasError(true)}
            priority={priority}
          />
        </div>
      );
    }

    if (variant === "full" || variant === "monochrome") {
      return (
        <div className={`relative inline-flex items-center justify-center ${className}`}>
          <Image
            src={variant === "monochrome" ? "/assets/brand/supersoft-logo-white-full.png" : "/assets/brand/supersoft-logo-full.png"}
            alt="SuperSoft — Software Company"
            width={sizeMap.full.w}
            height={sizeMap.full.h}
            className="object-contain"
            onError={() => setHasError(true)}
            priority={priority}
          />
        </div>
      );
    }

    // Horizontal por defecto (Navbar y Footer)
    return (
      <div className={`relative inline-flex items-center shrink-0 ${className}`}>
        <Image
          src={assetSrc}
          alt="SuperSoft — Software Company"
          width={sizeMap.horizontal.w}
          height={sizeMap.horizontal.h}
          className="object-contain transition-opacity duration-300 group-hover:opacity-95"
          onError={() => setHasError(true)}
          priority={priority}
        />
      </div>
    );
  }

  // Fallback vectorial de respaldo solo si el archivo de imagen no estuviera disponible
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <span className="font-heading font-bold text-white text-xl tracking-tight">
        Super<span className="text-[#20CBE5]">Soft</span>
      </span>
      <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
        Software Company
      </span>
    </div>
  );
};
