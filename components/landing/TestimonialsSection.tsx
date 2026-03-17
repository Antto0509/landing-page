"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "./SectionReveal";
import { Section } from "./Section";

// Témoignages complémentaires — focus sur la transformation et les mots exacts du client
const testimonials = [
  {
    name: "Camille R.",
    role: "Directrice associée",
    company: "Agence conseil en transformation digitale · 18 personnes",
    quote:
      "On avait un bon produit mais un message flou. Après le diagnostic, j'ai compris en 20 minutes pourquoi nos prospects ne comprenaient pas ce qu'on faisait. La refonte a pris 4 jours.",
    before: "0 lead entrant/mois",
    after: "3–5 demandes/mois",
  },
  {
    name: "Julien M.",
    role: "Co-fondateur SaaS B2B",
    company: "Outil de gestion de projet pour PME · Seed",
    quote:
      "Ce que j'appréciais le plus : on ne m'a pas demandé de remplir 40 questionnaires. On a posé le diagnostic et livré. Sans réunion interminable.",
    before: "Taux de conversion < 1 %",
    after: "Taux de conversion 3,8 %",
  },
  {
    name: "Nadia B.",
    role: "Consultante RH indépendante",
    company: "Cabinet spécialisé recrutement cadres · 5 personnes",
    quote:
      "Pour la première fois, un prospect m'a dit : 'j'ai lu votre page et c'est exactement ce que je cherche.' Avant, les gens arrivaient et repartaient sans comprendre.",
    before: "Message centré sur mon CV",
    after: "Message centré sur leur problème",
  },
];

export default function TestimonialsSection() {
  return (
    <Section
      id="testimonials"
      name="Transformations clients"
      title="Ce qui change, concrètement."
      subtitle="Des fondateurs qui avaient une offre solide et un message qui ne convertissait pas. Avant et après."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <SectionReveal key={testimonial.name} delay={0.05 + index * 0.08}>
            <motion.figure
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="flex h-full flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--background-card)] p-5"
            >
              <div className="mb-4 space-y-3">
                {/* Avant / Après chiffré */}
                <div className="flex gap-2 text-[10px]">
                  <span className="rounded-full border border-[var(--border)] bg-[var(--background)] px-2 py-0.5 text-[var(--foreground-muted)]">
                    Avant : {testimonial.before}
                  </span>
                  <span className="rounded-full border border-ruby-500/30 bg-ruby-500/5 px-2 py-0.5 text-ruby-400">
                    Après : {testimonial.after}
                  </span>
                </div>
                <blockquote className="text-xs leading-relaxed text-[var(--foreground)]">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>
              <figcaption className="mt-2 border-t border-[var(--border)] pt-3 text-xs">
                <p className="font-semibold text-[var(--foreground)]">{testimonial.name}</p>
                <p className="text-[11px] text-[var(--foreground-muted)]">{testimonial.role}</p>
                <p className="text-[11px] text-[var(--foreground-muted)]/60">{testimonial.company}</p>
              </figcaption>
            </motion.figure>
          </SectionReveal>
        ))}
      </div>
    </Section>
  );
}
