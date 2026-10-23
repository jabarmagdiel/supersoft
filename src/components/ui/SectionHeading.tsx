"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlightedText?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  theme?: "dark" | "light";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  highlightedText,
  subtitle,
  align = "left",
  className = "",
  theme = "dark",
}) => {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align];

  const isLight = theme === "light";

  return (
    <div className={`flex flex-col max-w-3xl ${alignClasses} ${className}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.2em] mb-4 shadow-sm ${
            isLight
              ? "bg-slate-100 border border-slate-200 text-[#07053B]"
              : "bg-[#0B0754]/80 border border-[#20CBE5]/25 text-[#20CBE5]"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#20CBE5] animate-pulse" />
          {eyebrow}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ color: isLight ? "#07053B" : "#FFFFFF" }}
        className={`font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] ${
          isLight ? "text-[#07053B]" : "text-white"
        }`}
      >
        <span style={{ color: isLight ? "#07053B" : "#FFFFFF" }}>{title}</span>{" "}
        {highlightedText && (
          <span
            className={
              isLight
                ? "text-[#0284C7]"
                : "text-transparent bg-clip-text bg-gradient-to-r from-[#20CBE5] via-[#67e8f9] to-[#ffffff]"
            }
          >
            {highlightedText}
          </span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className={`mt-4 text-base sm:text-lg leading-relaxed font-sans max-w-2xl ${
            isLight ? "text-slate-600" : "text-slate-300"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
