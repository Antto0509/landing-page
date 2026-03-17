"use client";

import { Section } from "./Section";
import { SectionReveal } from "./SectionReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";

export default function DemoSection() {
  return (
    <Section
      id="demo"
      name="Avant / Après"
      title="Le même produit. Un message différent."
      subtitle="Ce n'est pas votre offre qui pose problème. C'est la façon dont elle est exprimée."
    >
      <SectionReveal>
        <Card className="mx-auto max-w-3xl border-[var(--border)] bg-[var(--background-card)] shadow-none">
          <CardContent className="p-6 sm:p-8">
            <div className="grid gap-6 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
              {/* Avant */}
              <div className="space-y-3 rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                <Badge
                  variant="outline"
                  className="border-[var(--border)] text-[var(--foreground-muted)] text-[10px]"
                >
                  Avant
                </Badge>
                <p className="text-base font-semibold text-[var(--foreground-muted)]">
                  &ldquo;La solution RH de nouvelle génération&rdquo;
                </p>
                <p className="text-xs text-[var(--foreground-muted)]/60">
                  Vague. Centré sur l&apos;entreprise. Aucune raison d&apos;agir.
                </p>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent-subtle)]">
                  <ArrowRight size={14} className="text-[var(--ruby-accent)]" />
                </div>
              </div>

              {/* Après */}
              <div className="space-y-3 rounded-xl border border-ruby-500/30 bg-ruby-500/5 p-4">
                <Badge
                  className="bg-[var(--accent-subtle)] text-[var(--ruby-accent)] border-0 text-[10px]"
                >
                  Après — Method ELEVATE
                </Badge>
                <p className="text-base font-semibold text-[var(--foreground)]">
                  &ldquo;Réduisez le temps de planification RH de 80&nbsp;% en moins de 2&nbsp;semaines.&rdquo;
                </p>
                <p className="text-xs text-[var(--foreground-muted)]">
                  Spécifique. Mesurable. Compris en 5 secondes.
                </p>
              </div>
            </div>

            <Separator className="my-6 bg-[var(--border)]" />

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--foreground-muted)]">
              {[
                "Problème exposé dès la première ligne",
                "Résultat mesurable et daté",
                "Aucun jargon inexpliqué",
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-[var(--ruby-accent)]" />
                  {item}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </SectionReveal>
    </Section>
  );
}
