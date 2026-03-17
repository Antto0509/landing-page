"use client";

import { Section } from "./Section";
import { SectionReveal } from "./SectionReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Est-ce que ça marche vraiment pour mon secteur ?",
    answer:
      "La Method ELEVATE s'adapte à tout service B2B. Elle commence toujours par extraire le problème réel de vos prospects dans leurs mots exacts — pas dans le jargon de votre secteur. Conseil, SaaS, agence, coaching, finance : le mécanisme est identique. Ce qui change, c'est le contenu. Ce qui ne change pas, c'est la logique de conviction.",
  },
  {
    question: "En quoi c'est différent d'un copywriter classique ?",
    answer:
      "Un copywriter classique écrit à partir de ce que vous lui donnez. La Method ELEVATE commence par extraire ce que vos prospects pensent vraiment — par des interviews, des verbatims, des données internes. Chaque étape a un critère de validation objectif. Le headline est testé avant d'être livré. Ce n'est pas du copywriting intuitif, c'est un framework de conviction structuré.",
  },
  {
    question: "Je n'ai pas de témoignages structurés — est-ce un problème ?",
    answer:
      "Non. La preuve sociale existe presque toujours sous forme dispersée : emails de clients satisfaits, retours informels lors de rendez-vous, données internes sur les résultats obtenus. L'extraction et la reconstitution de cette preuve font partie intégrante de la méthode. Ce qui n'est pas formalisé n'est pas inexistant — il est juste à aller chercher.",
  },
  {
    question: "Combien de temps avant de voir des résultats ?",
    answer:
      "Les premiers retours clients arrivent généralement dans les 2 à 4 semaines suivant la mise en ligne de la nouvelle page. La vitesse dépend de votre trafic entrant : la page est optimisée dès le premier jour, mais elle a besoin de visiteurs pour produire des leads. Si votre trafic est faible, c'est un levier complémentaire à activer en parallèle.",
  },
  {
    question: "Et si ça ne fonctionne pas pour moi ?",
    answer:
      "Le diagnostic est gratuit et sans engagement. Vous repartez avec un document précis sur ce qui bloque votre conversion, que vous décidiez de poursuivre ou non. Si vous choisissez la transformation complète et que le résultat ne vous satisfait pas, une révision est incluse dans les 7 jours suivant la livraison. Vous n'achetez pas de l'abstrait — vous achetez un livrable concret.",
  },
];

export default function FAQSection() {
  return (
    <Section
      id="faq"
      name="FAQ"
      title="Les vraies questions avant de décider."
      subtitle="Ce sont les objections que vos prospects ont aussi avant de passer à l'action. Autant y répondre ici."
    >
      <div className="mx-auto mt-2 max-w-2xl">
        <Accordion multiple={false} className="space-y-2">
          {faqs.map((faq, index) => (
            <SectionReveal key={faq.question} delay={0.05 + index * 0.06}>
              <AccordionItem
                value={index}
                className="rounded-xl border border-[var(--border)] bg-[var(--background-card)] px-4 data-open:border-ruby-500/30"
              >
                <AccordionTrigger className="py-4 text-left text-sm font-medium text-[var(--foreground)] hover:no-underline hover:text-[var(--ruby-accent)] transition-colors aria-expanded:text-[var(--ruby-accent)]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-xs leading-relaxed text-[var(--foreground-muted)]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </SectionReveal>
          ))}
        </Accordion>

        {/* CTA de clôture */}
        <SectionReveal delay={0.38}>
          <div className="mt-6 rounded-xl border border-ruby-500/25 bg-[var(--accent-subtle)] p-5 text-center">
            <p className="mb-1 text-sm font-medium text-[var(--foreground)]">
              Encore une question ? Le diagnostic est gratuit.
            </p>
            <p className="mb-4 text-xs text-[var(--foreground-muted)]">
              On répond à votre situation spécifique dans la restitution. Pas une réponse générique.
            </p>
            <a
              href="mailto:contact@clarity.fr"
              className="inline-flex h-7 items-center justify-center rounded-full bg-[var(--accent-cta)] text-white px-4 text-xs font-medium hover:bg-[var(--accent-cta-hover)] transition-colors"
            >
              Demander mon diagnostic →
            </a>
          </div>
        </SectionReveal>
      </div>
    </Section>
  );
}
