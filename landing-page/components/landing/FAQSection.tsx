"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";
import { SectionReveal } from "./SectionReveal";
import { useState } from "react";

const faqs = [
  {
    question: "Est-ce adapté aux micro-entrepreneurs ?",
    answer:
      "Oui. L’outil est pensé d’abord pour les indépendants français : mentions légales, TVA, logique de facturation simple et claire.",
  },
  {
    question: "Est-ce que je peux arrêter quand je veux ?",
    answer:
      "Oui. L’abonnement est sans engagement. Si tu arrêtes, tu gardes l’accès à tes factures déjà émises.",
  },
  {
    question: "Mon comptable peut-il accéder à mes données ?",
    answer:
      "Tu peux lui envoyer des exports propres ou lui donner un accès dédié lorsqu’il sera disponible.",
  },
  {
    question: "Où sont stockées mes données ?",
    answer:
      "Les données sont hébergées en Europe, sur une infrastructure moderne, avec sauvegardes régulières.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section
      id="faq"
      name="FAQ"
      title="Questions fréquentes"
      subtitle="Si tu hésites encore, c’est normal. Voilà les réponses."
    >
      <div className="mx-auto mt-8 max-w-2xl space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <SectionReveal key={faq.question} delay={0.05 + index * 0.06}>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between text-left text-sm font-medium text-slate-50"
                >
                  <span>{faq.question}</span>
                  <span className="ml-4 text-lg text-slate-500">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-xs leading-relaxed text-slate-300">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </SectionReveal>
          );
        })}
      </div>
    </Section>
  );
}
