"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { SectionReveal } from "./SectionReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Microscope, FileText, Clock, Users, Target, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Microscope,
    title: "Diagnostic complet",
    description:
      "Analyse de votre message, de votre page et de vos freins à la conversion.",
  },
  {
    icon: FileText,
    title: "Copywriting ELEVATE",
    description:
      "Chaque bloc de votre page construit selon la séquence des 7 étapes.",
  },
  {
    icon: Clock,
    title: "Headline testé",
    description:
      "Validation par le test des 5 secondes avant livraison.",
  },
  {
    icon: Users,
    title: "Preuve sociale extraite",
    description:
      "On reconstruit vos témoignages depuis vos emails et retours clients.",
  },
  {
    icon: Target,
    title: "CTA à friction zéro",
    description:
      "L'action suivante est impossible à refuser pour votre prospect.",
  },
  {
    icon: ShieldCheck,
    title: "Objections neutralisées",
    description:
      "Les 3 résistances les plus fréquentes de vos prospects, adressées avant qu'elles soient formulées.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 280, damping: 22 },
  },
};

export default function FeaturesSection() {
  return (
    <Section
      id="offre"
      name="L'offre"
      title="Ce que vous recevez."
      subtitle="Un livrable structuré, pas une liste de recommandations vagues."
    >
      <motion.div
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {features.map((feature) => (
          <motion.div key={feature.title} variants={itemVariants}>
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
            >
              <Card className="h-full border-[var(--border)] bg-[var(--background-card)] shadow-none transition-shadow hover:shadow-md">
                <CardContent className="flex flex-col gap-3 p-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent-subtle)]">
                    <feature.icon size={17} className="text-[var(--ruby-accent)]" />
                  </div>
                  <h3 className="text-sm font-semibold text-[var(--foreground)] font-[var(--font-heading)]">
                    {feature.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-[var(--foreground-muted)]">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
