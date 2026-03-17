"use client";

import * as Landing from "@/components/landing";

const NameProduct = "Clarity";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Navigation */}
      <Landing.HeaderSection nameProduct={NameProduct} />
      {/* E — Expose the problem + L — Lock the promise */}
      <Landing.HeroSection nameProduct={NameProduct} />
      {/* E — Evidence the result */}
      <Landing.SocialProofSection />
      {/* V — Verbalize the mechanism */}
      <Landing.HowItWorksSection />
      {/* A — Align the audience */}
      <Landing.BenefitsSection />
      {/* Détail de l'offre */}
      <Landing.FeaturesSection />
      {/* Avant / Après */}
      <Landing.DemoSection />
      {/* Témoignages complémentaires */}
      <Landing.TestimonialsSection />
      {/* T — Trigger the next step */}
      <Landing.PricingSection />
      {/* E — Eliminate the friction */}
      <Landing.FAQSection />
      <Landing.FooterSection nameProduct={NameProduct} />
    </main>
  );
}
