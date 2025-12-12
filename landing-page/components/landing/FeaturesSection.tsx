"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "./SectionReveal";
import { Section } from "./Section";

const features = [
  {
    title: "Factures propres en PDF",
    description:
      "Génération automatique de factures conformes, numérotation, mentions légales, duplications.",
  },
  {
    title: "Gestion des clients",
    description:
      "Fiches clients complètes, historique des factures, meilleure visibilité sur ton portefeuille.",
  },
  {
    title: "Suivi des paiements",
    description:
      "Statuts payée/en attente/en retard, dates d’échéance, prochainement : relances automatiques.",
  },
  {
    title: "Multi-activités",
    description:
      "Gère plusieurs structures ou activités depuis un seul compte.",
  },
  {
    title: "Pensé pour la France",
    description:
      "TVA, mentions pour micro-entreprise, export comptable : adapté au contexte français.",
  },
  {
    title: "Sécurité & hébergement UE",
    description:
      "Données hébergées en Europe, sauvegardes régulières, bonnes pratiques de sécurité.",
  },
];

export default function FeaturesSection() {
  return (
    <Section 
      id="features" 
      name="Fonctionnalités"
      title="Les fonctionnalités dont tu as vraiment besoin. Le reste viendra en temps voulu."
      subtitle="L'objectif n'est pas d'avoir 100 boutons, mais de couvrir 100 % de ton quotidien de freelance sans te perdre."
    >
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <SectionReveal key={feature.title} delay={0.1 + index * 0.05}>
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
            >
              <h3 className="text-sm font-semibold text-slate-50">
                {feature.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                {feature.description}
              </p>
            </motion.div>
          </SectionReveal>
        ))}
      </div>
    </Section>
  );
}
