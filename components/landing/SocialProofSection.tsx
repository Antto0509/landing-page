"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { SectionReveal } from "./SectionReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    initials: "TB",
    name: "Thomas B.",
    role: "Fondateur, agence conseil RH — 12 personnes",
    quote:
      "En 4 jours, ma page expliquait enfin ce que je fais. J'ai signé 2 nouveaux clients le mois suivant.",
    metric: "+2 clients en 1 mois",
  },
  {
    initials: "SM",
    name: "Sofia M.",
    role: "Co-fondatrice SaaS RH, pré-seed",
    quote:
      "Notre taux de demande de démo a augmenté de 3× en 3 semaines après la refonte. Le message était simplement lisible.",
    metric: "+3× demandes de démo",
  },
  {
    initials: "MD",
    name: "Marc D.",
    role: "Consultant en stratégie financière PME",
    quote:
      "Pour la première fois, des prospects m'ont contacté en disant 'j'ai lu votre page, c'est exactement ce dont j'ai besoin.'",
    metric: "Leads entrants qualifiés",
  },
];

export default function SocialProofSection() {
  return (
    <Section
      id="resultats"
      name="Résultats"
      title="Ce que ça change, concrètement."
      subtitle="Des transformations réelles sur des offres B2B comparables à la vôtre."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((t, index) => (
          <SectionReveal key={t.name} delay={0.05 + index * 0.08}>
            <motion.div
              whileHover={{ y: -4, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
            >
              <Card className="h-full border-[var(--border)] bg-[var(--background-card)] shadow-none">
                <CardContent className="flex h-full flex-col gap-4 p-5">
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-ruby-400 text-xs">★</span>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="flex-1 text-sm leading-relaxed text-[var(--foreground)]">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Metric badge */}
                  <Badge
                    variant="secondary"
                    className="w-fit bg-[var(--accent-subtle)] text-[var(--ruby-accent)] border-0 text-[10px] font-semibold"
                  >
                    {t.metric}
                  </Badge>

                  {/* Author */}
                  <div className="flex items-center gap-3 border-t border-[var(--border)] pt-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-[var(--accent-subtle)] text-[var(--ruby-accent)] text-[11px] font-semibold">
                        {t.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-xs font-semibold text-[var(--foreground)]">{t.name}</p>
                      <p className="text-[10px] text-[var(--foreground-muted)]">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </SectionReveal>
        ))}
      </div>

      {/* Credential badge */}
      <SectionReveal delay={0.28}>
        <div className="mt-8 flex justify-center">
          <Badge
            variant="outline"
            className="border-[var(--border)] bg-[var(--background-card)] px-4 py-1.5 text-xs text-[var(--foreground-muted)]"
          >
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[var(--ruby-accent)]" />
            +47 landing pages B2B transformées · Conseil, SaaS, agences
          </Badge>
        </div>
      </SectionReveal>
    </Section>
  );
}
