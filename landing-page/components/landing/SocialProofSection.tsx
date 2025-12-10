"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "./SectionReveal";

export default function SocialProofSection() {
  return (
    <section
      id="social-proof"
      className="border-b border-slate-800 bg-slate-950"
    >
      <SectionReveal>
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 text-center sm:flex-row sm:justify-between">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
            Pensé pour les indépendants & petites structures
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-400">
            {["Freelances", "Consultants", "Petites agences"].map((label) => (
              <motion.span
                key={label}
                whileHover={{ y: -2, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="rounded-full border border-slate-700 px-3 py-1"
              >
                {label}
              </motion.span>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
