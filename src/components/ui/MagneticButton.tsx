"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  icon,
  iconPosition = "right",
  ariaLabel,
  type = "button",
  disabled = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches || !ref.current || disabled) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    // Movimiento magnético suave y contenido (máximo 8px)
    const x = (clientX - centerX) * 0.18;
    const y = (clientY - centerY) * 0.18;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  // Estilos según tamaño
  const sizeStyles = {
    sm: "px-4 py-2 text-xs font-semibold rounded-lg gap-2",
    md: "px-6 py-3.5 text-sm font-semibold rounded-xl gap-2.5",
    lg: "px-8 py-4 text-base font-semibold rounded-xl gap-3",
  }[size];

  // Estilos según variante
  const variantStyles = {
    primary:
      "bg-[#20CBE5] text-[#080820] hover:bg-[#34d8ef] shadow-[0_0_24px_-4px_rgba(32,203,229,0.45)] hover:shadow-[0_0_32px_0px_rgba(32,203,229,0.6)] border border-[#20CBE5]/50 active:scale-[0.98]",
    secondary:
      "bg-[#0B0754] text-white hover:bg-[#130d70] border border-[#20CBE5]/30 hover:border-[#20CBE5]/60 shadow-[0_4px_20px_-4px_rgba(11,7,84,0.6)] active:scale-[0.98]",
    outline:
      "bg-transparent text-white border border-white/20 hover:border-[#20CBE5] hover:text-[#20CBE5] hover:bg-[#20CBE5]/10 active:scale-[0.98]",
    ghost:
      "bg-transparent text-slate-300 hover:text-white hover:bg-white/5 active:scale-[0.98]",
  }[variant];

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 240, damping: 18, mass: 0.1 }}
      className="inline-block"
    >
      <div
        className={`relative group inline-flex items-center justify-center font-sans tracking-wide transition-all duration-300 select-none ${sizeStyles} ${variantStyles} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${className}`}
      >
        {icon && iconPosition === "left" && (
          <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
            {icon}
          </span>
        )}
        <span>{children}</span>
        {icon && iconPosition === "right" && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#20CBE5] rounded-xl"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#20CBE5] rounded-xl"
    >
      {content}
    </button>
  );
};
