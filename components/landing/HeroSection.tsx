"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "./SectionReveal";
import { Badge } from "@/components/ui/badge";

export default function HeroSection({ nameProduct }: { nameProduct: string }) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--background)]"
    >
      {/* Gradient mesh orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-ruby-500/10 blur-[130px]"
          style={{ animation: "float 9s ease-in-out infinite" }}
        />
        <div
          className="absolute top-1/2 left-1/4 h-[300px] w-[300px] rounded-full bg-ruby-700/6 blur-[100px]"
          style={{ animation: "float-slow 12s ease-in-out infinite 3s" }}
        />
        <div
          className="absolute -bottom-24 -left-16 h-[380px] w-[380px] rounded-full bg-ruby-600/8 blur-[110px]"
          style={{ animation: "float 11s ease-in-out infinite 1.5s" }}
        />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-16 sm:py-20 lg:flex-row lg:py-24">
        {/* Left column */}
        <SectionReveal className="flex-1 space-y-6 text-center lg:text-left">
          {/* E — Expose the core problem */}
          <Badge
            variant="outline"
            className="border-[var(--border)] bg-[var(--background-card)] text-[var(--foreground-muted)] px-3 py-1 text-xs"
          >
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[var(--ruby-accent)]" />
            Pour les fondateurs de PME &amp; SaaS B2B
          </Badge>

          <div className="space-y-4">
            <p className="text-sm font-medium tracking-wide uppercase text-[var(--ruby-accent)]">
              Votre offre est solide. Vos prospects partent quand même.
            </p>

            {/* L — Lock the promise */}
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl font-[var(--font-heading)]">
              Transformez votre landing page en{" "}
              <span className="bg-gradient-to-r from-ruby-400 to-ruby-600 bg-clip-text text-transparent">
                source de leads B2B
              </span>{" "}
              qualifiés, en 5 jours ouvrés.
            </h1>

            <p className="text-balance text-sm text-[var(--foreground-muted)] sm:text-base">
              La Method ELEVATE appliquée à votre offre : un diagnostic précis, un
              message qui se comprend en 10 secondes, une page qui travaille pour
              vous 24h/24.
            </p>
          </div>

          {/* T — Trigger */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{ animation: "pulse-glow 5s ease-in-out infinite" }}
              className="inline-flex h-9 items-center justify-center rounded-full bg-[var(--accent-cta)] text-white px-6 text-sm font-medium shadow-md hover:bg-[var(--accent-cta-hover)] hover:shadow-[0_0_24px_var(--accent-glow)] transition-all duration-200"
            >
              Obtenir mon diagnostic gratuit
            </motion.a>

            <motion.a
              href="#comment"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex h-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background-card)] text-[var(--foreground)] px-6 text-sm font-medium hover:border-[var(--ruby-accent)] hover:text-[var(--ruby-accent)] transition-colors duration-200"
            >
              Voir comment ça marche
            </motion.a>
          </div>

          {/* E — Eliminate friction micro-copy */}
          <p className="text-xs text-[var(--foreground-muted)]">
            Sans engagement • 100&nbsp;% gratuit • Réponse personnalisée sous 48h
          </p>
        </SectionReveal>

        {/* Right column — Avant/Après card */}
        <SectionReveal delay={0.12} className="mt-6 flex-1 lg:mt-0">
          <motion.div
            className="mx-auto w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--background-card)] p-5 shadow-2xl"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-wide text-[var(--foreground-muted)]">
              Transformation réelle d&apos;un headline
            </p>

            {/* Avant */}
            <div className="mb-3 rounded-xl border border-[var(--border)] bg-[var(--background)] p-3">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--foreground-muted)]">
                Avant
              </p>
              <p className="text-sm font-medium text-[var(--foreground-muted)]">
                &ldquo;La solution RH de nouvelle génération&rdquo;
              </p>
              <p className="mt-1 text-[10px] text-[var(--foreground-muted)]/60">
                Aucun visiteur ne comprend ce que c&apos;est pour lui.
              </p>
            </div>

            {/* Après */}
            <div className="rounded-xl border border-ruby-500/30 bg-ruby-500/5 p-3">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-ruby-400">
                Après — Method ELEVATE
              </p>
              <p className="text-sm font-medium text-[var(--foreground)]">
                &ldquo;Réduisez le temps de planification RH de 80&nbsp;% en moins de
                2&nbsp;semaines.&rdquo;
              </p>
              <p className="mt-1 text-[10px] text-[var(--foreground-muted)]">
                Spécifique. Mesurable. Compris en 5 secondes.
              </p>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-[10px] text-[var(--foreground-muted)]">
                {nameProduct} — Diagnostic inclus
              </p>
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex h-7 items-center justify-center rounded-full bg-[var(--accent-cta)] text-white px-3 text-[11px] font-medium hover:bg-[var(--accent-cta-hover)] transition-colors"
              >
                Je veux ça →
              </motion.a>
            </div>
          </motion.div>

          <p className="mt-3 text-center text-[11px] text-[var(--foreground-muted)]">
            Exemple réel de transformation.{" "}
            <span className="font-medium text-[var(--foreground)]">
              Résultat : +3× de demandes de démo en 3 semaines.
            </span>
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
