"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "./SectionReveal";
import { Section } from "./Section";

const steps = [
  {
    step: "01",
    title: "Crée ton espace",
    description:
      "Inscription en quelques secondes. Tu renseignes ton activité, tes infos légales, et c’est bon.",
  },
  {
    step: "02",
    title: "Ajoute tes clients",
    description:
      "Renseigne tes clients une fois, réutilise leurs infos à chaque facture. Plus de copier-coller bancal.",
  },
  {
    step: "03",
    title: "Envoie ta première facture",
    description:
      "Choisis le client, le montant, la TVA. L’outil se charge du reste : mise en forme, calculs, suivi.",
  },
];

export default function HowItWorksSection() {
  return (
    <Section
      id="how-it-works"
      name="Comment ça marche ?"
      title="Trois étapes simples pour facturer en toute sérénité."
      subtitle="Pas de tunnel compliqué. Trois étapes, et tu peux facturer."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <SectionReveal key={step.step} delay={0.1 + index * 0.08}>
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
            >
              <span className="text-xs font-semibold text-emerald-400">
                Étape {step.step}
              </span>
              <h3 className="text-sm font-semibold text-slate-50">
                {step.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                {step.description}
              </p>
            </motion.div>
          </SectionReveal>
        ))}
      </div>
    </Section>
  );
}
