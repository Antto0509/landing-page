"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { SectionReveal } from "./SectionReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Search, Pencil, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnostic",
    period: "Jour 1–2",
    description:
      "Analyse de votre offre et de votre message actuel. On identifie précisément pourquoi vos visiteurs ne passent pas à l'action.",
  },
  {
    number: "02",
    icon: Pencil,
    title: "Reformulation",
    period: "Jour 3",
    description:
      "On applique la Method ELEVATE pour produire votre nouveau message. Chaque phrase est testée contre les 7 critères de validation.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Livraison",
    period: "Jour 4–5",
    description:
      "Votre nouvelle landing page est prête. Texte, structure, CTA. Vous publiez, vous mesurez.",
  },
];

export default function HowItWorksSection() {
  return (
    <Section
      id="comment"
      name="Comment ça marche"
      title="Trois étapes. Cinq jours. Un résultat mesurable."
      subtitle="Sans réunion de cadrage de 2h. Sans questionnaire de 40 questions. On démarre par votre message."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {steps.map((step, index) => (
          <SectionReveal key={step.title} delay={0.05 + index * 0.09}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
            >
              <Card className="h-full border-[var(--border)] bg-[var(--background-card)] shadow-none">
                <CardContent className="flex flex-col gap-4 p-5">
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-subtle)]">
                      <step.icon size={18} className="text-[var(--ruby-accent)]" />
                    </div>
                    <span className="text-3xl font-bold text-[var(--border)]">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--ruby-accent)] mb-1">
                      {step.period}
                    </p>
                    <h3 className="text-base font-semibold text-[var(--foreground)] font-[var(--font-heading)]">
                      {step.title}
                    </h3>
                    <Separator className="my-2 bg-[var(--border)]" />
                    <p className="text-xs leading-relaxed text-[var(--foreground-muted)]">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </SectionReveal>
        ))}
      </div>
    </Section>
  );
}
