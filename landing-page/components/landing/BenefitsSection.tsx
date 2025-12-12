import { Section } from "./Section";
import { SectionReveal } from "./SectionReveal";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Du temps en plus pour ton vrai boulot",
    description:
      "Crée tes factures en quelques clics, retrouve tes modèles, duplique en un instant. Moins de temps dans l’admin, plus dans le cœur de ton métier.",
  },
  {
    title: "Moins d’erreurs, moins de stress",
    description:
      "TVA, totaux, statuts, relances : la logique métier est gérée pour toi. Tu réduis les oublis, les incohérences et les mails gênants avec les clients.",
  },
  {
    title: "Une vision claire de ton activité",
    description:
      "Chiffre d’affaires, factures payées/en retard, meilleurs clients : tout est sous les yeux, en temps réel. Tu prends de vraies décisions, pas des estimations.",
  },
];

export default function BenefitsSection({ nameProduct }: { nameProduct: string }) {
  return (
    <Section 
      id="benefits" 
      name="Avantages"
      title="Tu ne vends pas des factures. Tu vends du temps, de la clarté et du sérieux."
      subtitle={`${nameProduct} n'est pas un énième outil compliqué. C'est l'assistant discret qui s'assure que la base est toujours propre.`}
    >
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {benefits.map((benefit, index) => (
          <SectionReveal key={benefit.title} delay={0.1 + index * 0.08}>
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-[0_0_0_0_rgba(0,0,0,0)]"
            >
              <h3 className="text-sm font-semibold text-slate-50">
                {benefit.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                {benefit.description}
              </p>
            </motion.div>
          </SectionReveal>
        ))}
      </div>
    </Section>
  );
}
