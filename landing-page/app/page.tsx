import * as Landing from "@/components/landing";

const NameProduct = "Fac&Co";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <Landing.HeaderSection nameProduct={NameProduct} />
      <Landing.HeroSection nameProduct={NameProduct} />
      <Landing.SocialProofSection />
      <Landing.BenefitsSection nameProduct={NameProduct} />
      <Landing.HowItWorksSection />
      <Landing.DemoSection nameProduct={NameProduct} />
      <Landing.FeaturesSection />
      <Landing.PricingSection />
      <Landing.FAQSection />
      <Landing.FooterSection nameProduct={NameProduct} />
    </main>
  );
}
