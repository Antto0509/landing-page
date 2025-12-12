"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "./SectionReveal";
import { Section } from "./Section";

const plans = [
  {
    name: "Starter",
    price: "0 €",
    period: "pour démarrer",
    highlight: false,
    description:
      "Parfait pour tester l’outil et envoyer tes premières factures.",
    features: [
      "Jusqu’à X clients",
      "X factures / mois",
      "Export PDF",
      "Support par email",
    ],
  },
  {
    name: "Pro",
    price: "X €/mois",
    period: "HT, sans engagement",
    highlight: true,
    description:
      "Pour les freelances qui veulent un outil fiable au quotidien.",
    features: [
      "Clients illimités",
      "Factures illimitées",
      "Suivi des paiements",
      "Accès comptable",
    ],
  },
];

export default function PricingSection() {
  return (
    <Section 
      id="pricing" 
      name="Tarifs"
      title="Un prix clair. Pas de surprise."
      subtitle="Tu dois pouvoir calculer ton retour sur investissement facilement : quelques heures gagnées, quelques erreurs évitées, c&apos;est déjà rentabilisé."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {plans.map((plan, index) => (
          <SectionReveal key={plan.name} delay={0.05 + index * 0.08}>
            <motion.div
              whileHover={{ y: -6, scale: plan.highlight ? 1.03 : 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className={`flex flex-col justify-between rounded-2xl border bg-slate-900/70 p-6 ${
                plan.highlight
                  ? "border-emerald-500/70 shadow-[0_0_40px_rgba(16,185,129,0.25)]"
                  : "border-slate-800"
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-50">
                      {plan.name}
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      {plan.description}
                    </p>
                  </div>
                  {plan.highlight && (
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold text-emerald-400">
                      Recommandé
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-semibold text-slate-50">
                    {plan.price}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {plan.period}
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`mt-6 h-10 rounded-full text-xs font-medium ${
                  plan.highlight
                    ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400"
                    : "border border-slate-700 bg-slate-900 text-slate-100 hover:border-slate-500"
                }`}
              >
                {plan.highlight
                  ? "Passer sur l’offre Pro"
                  : "Commencer gratuitement"}
              </motion.button>
            </motion.div>
          </SectionReveal>
        ))}
      </div>
    </Section>
  );
}
