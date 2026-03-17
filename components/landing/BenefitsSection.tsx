"use client";

import { Section } from "./Section";
import { SectionReveal } from "./SectionReveal";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";

const forYou = [
  "Vous fondez ou dirigez une PME de services B2B ou un SaaS B2B",
  "Votre offre est bonne mais vos prospects ne la comprennent pas en quelques secondes",
  "Votre page génère du trafic mais peu ou zéro leads qualifiés",
  "Vous postez sur LinkedIn sans convertir vos abonnés en demandes entrantes",
];

const notForYou = [
  "Vous cherchez un site vitrine généraliste sans objectif de conversion",
  "Vous vendez en B2C grand public",
  "Vous n'avez pas encore de clients ni de retours terrain sur votre offre",
];

export default function BenefitsSection() {
  return (
    <Section
      id="pour-qui"
      name="Pour qui"
      title="C'est pour vous si…"
      subtitle="La Method ELEVATE fonctionne sur une condition : vous avez une offre réelle, avec de vrais clients, et un problème de message."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {/* Pour vous */}
        <SectionReveal delay={0.05}>
          <Card className="h-full border-[var(--border)] bg-[var(--background-card)] shadow-none">
            <CardContent className="p-5">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-[var(--ruby-accent)]">
                ✓ C&apos;est pour vous
              </p>
              <ul className="space-y-3">
                {forYou.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={15}
                      className="mt-0.5 shrink-0 text-[var(--ruby-accent)]"
                    />
                    <span className="text-sm text-[var(--foreground)]">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </SectionReveal>

        {/* Pas pour vous */}
        <SectionReveal delay={0.12}>
          <Card className="h-full border-[var(--border)] bg-[var(--background)] shadow-none">
            <CardContent className="p-5">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-[var(--foreground-muted)]">
                ✗ Ce n&apos;est pas pour vous
              </p>
              <ul className="space-y-3">
                {notForYou.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <XCircle
                      size={15}
                      className="mt-0.5 shrink-0 text-[var(--foreground-muted)]"
                    />
                    <span className="text-sm text-[var(--foreground-muted)]">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </SectionReveal>
      </div>
    </Section>
  );
}
