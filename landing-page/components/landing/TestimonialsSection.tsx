"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "./SectionReveal";

const testimonials = [
  {
    name: "Léna Moreau",
    role: "Designer freelance",
    quote:
      "Avant, je repoussais toujours la facturation. Maintenant, je règle tout en quelques minutes après chaque mission. Je vois enfin clair dans mon chiffre d’affaires.",
    company: "Studio LM",
  },
  {
    name: "Thomas Bernard",
    role: "Développeur indépendant",
    quote:
      "J’ai testé plusieurs outils avant celui-ci. Là, tout est simple, pensé pour nous, sans fonctionnalités gadget. Je gagne du temps et j’évite les erreurs de TVA.",
    company: "Thomas Bernard · Dev",
  },
  {
    name: "Sarah Martin",
    role: "Consultante marketing",
    quote:
      "Ce que j’apprécie le plus, c’est la clarté : clients, factures, paiements… tout est structuré. Je sais exactement qui m’a payée et ce qui est en retard.",
    company: "SMK Consulting",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="border-b border-slate-800 bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 py-16">
        <SectionReveal>
          <div className="mb-10 space-y-3 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
              Avis clients
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Pensé pour les freelances, validé sur le terrain.
            </h2>
            <p className="text-sm text-slate-300">
              Quelques mots de celles et ceux qui ont décidé d’arrêter de
              bricoler leurs factures dans des fichiers perdus.
            </p>
          </div>
        </SectionReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <SectionReveal key={testimonial.name} delay={0.05 + index * 0.08}>
              <motion.figure
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
              >
                <div className="mb-4 space-y-3">
                  <div className="flex items-center gap-1 text-[11px] text-emerald-400">
                    {/* étoiles pseudo */}
                    <span>★★★★★</span>
                    <span className="text-slate-500">(outil adopté)</span>
                  </div>
                  <blockquote className="text-xs leading-relaxed text-slate-300">
                    “{testimonial.quote}”
                  </blockquote>
                </div>
                <figcaption className="mt-2 border-t border-slate-800 pt-3 text-xs">
                  <p className="font-semibold text-slate-50">
                    {testimonial.name}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    {testimonial.role}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {testimonial.company}
                  </p>
                </figcaption>
              </motion.figure>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
