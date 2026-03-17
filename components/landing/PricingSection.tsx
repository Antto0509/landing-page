"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "./SectionReveal";
import { Section } from "./Section";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Diagnostic",
    price: "Gratuit",
    period: "sans engagement",
    highlight: false,
    description:
      "Pour identifier précisément ce qui bloque votre conversion — avant de décider.",
    features: [
      "Analyse de votre page et de votre message actuel",
      "Identification des 3 freins principaux à la conversion",
      "Restitution écrite personnalisée",
      "Réponse sous 48h ouvrées",
      "Sans engagement, sans carte bancaire",
    ],
    cta: "Obtenir mon diagnostic gratuit →",
    ctaNote: "Je reçois mon diagnostic sous 48h",
  },
  {
    name: "Transformation complète",
    price: "À partir de 2 500 €",
    period: "HT · paiement en 2 fois possible",
    highlight: true,
    description:
      "La Method ELEVATE appliquée à votre offre. Un livrable complet en 5 jours ouvrés.",
    features: [
      "Diagnostic approfondi (J1–J2)",
      "Copywriting complet via Method ELEVATE (J3)",
      "Livraison page complète : texte, structure, CTA (J4–J5)",
      "1 révision incluse sous 7 jours",
      "Support 30 jours post-livraison",
    ],
    cta: "Commencer par le diagnostic gratuit →",
    ctaNote: "Le diagnostic est toujours la première étape",
  },
];

export default function PricingSection() {
  return (
    <Section
      id="pricing"
      name="Tarifs"
      title="Commencez par le diagnostic. Gratuitement."
      subtitle="Vous ne savez pas encore si c'est pour vous ? Le diagnostic est fait pour ça. Sans engagement, sans carte bancaire. Vous repartez avec un diagnostic précis, que vous poursuiviez ou non."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {plans.map((plan, index) => (
          <SectionReveal key={plan.name} delay={0.05 + index * 0.08}>
            <motion.div
              whileHover={{ y: -6, scale: plan.highlight ? 1.02 : 1.01 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <Card
                className={`flex h-full flex-col border bg-[var(--background-card)] shadow-none ${
                  plan.highlight
                    ? "border-ruby-500/60 shadow-[0_0_40px_var(--accent-glow)]"
                    : "border-[var(--border)]"
                }`}
              >
                <CardHeader className="space-y-2 p-6 pb-0">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-semibold text-[var(--foreground)] font-[var(--font-heading)]">
                        {plan.name}
                      </h3>
                      <p className="text-[11px] text-[var(--foreground-muted)]">
                        {plan.description}
                      </p>
                    </div>
                    {plan.highlight && (
                      <Badge className="shrink-0 bg-[var(--accent-subtle)] text-[var(--ruby-accent)] border-0 text-[10px] font-semibold">
                        Recommandé
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1 pt-1">
                    <span className="text-2xl font-semibold text-[var(--foreground)]">
                      {plan.price}
                    </span>
                    <span className="text-[11px] text-[var(--foreground-muted)]">
                      {plan.period}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 p-6 pt-4">
                  <ul className="space-y-2 text-xs text-[var(--foreground-muted)]">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-[4px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ruby-accent)]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="flex flex-col gap-1.5 p-6 pt-0">
                  <a
                    href="mailto:contact@clarity.fr"
                    className={`inline-flex w-full h-8 items-center justify-center rounded-full text-xs font-medium ${
                      plan.highlight
                        ? "bg-[var(--accent-cta)] text-white hover:bg-[var(--accent-cta-hover)] hover:shadow-[0_0_20px_var(--accent-glow)]"
                        : "border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] hover:border-[var(--ruby-accent)] hover:text-[var(--ruby-accent)]"
                    } transition-all duration-200`}
                  >
                    {plan.cta}
                  </a>
                  <p className="text-center text-[10px] text-[var(--foreground-muted)]">
                    {plan.ctaNote}
                  </p>
                </CardFooter>
              </Card>
            </motion.div>
          </SectionReveal>
        ))}
      </div>

      <SectionReveal delay={0.2}>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-[11px] text-[var(--foreground-muted)]">
          {[
            "Livrable concret en 5 jours ouvrés",
            "Résultat mesurable — ou on retravaille",
            "Processus clair, zéro réunion inutile",
          ].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-[var(--ruby-accent)]" />
              {item}
            </span>
          ))}
        </div>
      </SectionReveal>
    </Section>
  );
}
