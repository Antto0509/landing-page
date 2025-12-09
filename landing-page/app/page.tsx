// app/page.tsx
import Link from "next/link";

// =========================
// CONFIG GLOBALE DU TEMPLATE
// =========================

// ⬇️ Tu peux tout adapter ici pour un autre produit
const PRODUCT_NAME = "NovaBoard";
const TAGLINE = "Le cockpit clair pour piloter ton activité.";
const HERO_SUBTITLE =
  "Un tableau de bord tout-en-un pour suivre ton chiffre d’affaires, ton pipeline et tes opérations sans te perdre dans des fichiers Excel.";

const PRIMARY_CTA_LABEL = "Essayer gratuitement";
const SECONDARY_CTA_LABEL = "Voir une démo";

const NAV_LINKS = [
  { href: "#features", label: "Fonctionnalités" },
  { href: "#how-it-works", label: "Comment ça marche" },
  { href: "#pricing", label: "Tarifs" },
  { href: "#faq", label: "FAQ" },
];

const FEATURES = [
  {
    title: "Vue 360° sur ton activité",
    description:
      "Chiffre d’affaires, récurrence, retards de paiement, pipeline commercial… tout est regroupé dans un seul écran.",
    bullets: [
      "Indicateurs clés mis à jour en temps réel",
      "Filtres par équipe, produit ou période",
      "Export rapide en CSV ou PDF",
    ],
  },
  {
    title: "Connecté à tes outils existants",
    description:
      "NovaBoard se branche sur tes outils pour éviter les doubles saisies et les copier-coller interminables.",
    bullets: [
      "Intégration CRM (HubSpot, Pipedrive…)",
      "Synchronisation compta et facturation",
      "API ouverte pour besoins spécifiques",
    ],
  },
  {
    title: "Pensé pour les équipes, pas que pour la direction",
    description:
      "Chaque équipe a sa vue dédiée : commerce, opérations, finance. Chacun voit ce qui le concerne vraiment.",
    bullets: [
      "Dashboards par rôle",
      "Droits d’accès par profil",
      "Historique des changements",
    ],
  },
];

const STEPS = [
  {
    label: "1",
    title: "Connecte tes outils",
    description:
      "On récupère automatiquement les données de tes outils existants : CRM, facturation, compta.",
  },
  {
    label: "2",
    title: "Choisis tes indicateurs",
    description:
      "On sélectionne ensemble les KPI qui comptent vraiment pour ton business, pas ceux d’un template générique.",
  },
  {
    label: "3",
    title: "Pilote au quotidien",
    description:
      "Tu accèdes à un tableau de bord clair, que ton équipe comprend et utilise vraiment.",
  },
];

const PRICING_PLANS = [
  {
    name: "Essentiel",
    price: "39 €",
    period: "/mois",
    description: "Parfait pour les indépendants et petites équipes.",
    features: [
      "Jusqu’à 3 utilisateurs",
      "2 connexions d’outils",
      "Tableau de bord standard",
      "Support par email",
    ],
    highlight: false,
  },
  {
    name: "Équipe",
    price: "89 €",
    period: "/mois",
    description: "Pour les équipes qui veulent vraiment piloter leur activité.",
    features: [
      "Jusqu’à 10 utilisateurs",
      "Toutes les intégrations",
      "Dashboards personnalisables",
      "Support prioritaire",
    ],
    highlight: true,
  },
  {
    name: "Sur mesure",
    price: "Sur devis",
    period: "",
    description: "Pour les structures avec besoins spécifiques ou multi-sites.",
    features: [
      "Utilisateurs illimités",
      "Connecteurs personnalisés",
      "Accompagnement dédié",
      "SLA et engagements",
    ],
    highlight: false,
  },
];

const FAQ_ITEMS = [
  {
    question: "Combien de temps faut-il pour être opérationnel ?",
    answer:
      "Dans la plupart des cas, NovaBoard est prêt en quelques jours : connexion des outils, configuration des KPI, puis formation rapide de ton équipe.",
  },
  {
    question: "Dois-je changer tous mes outils actuels ?",
    answer:
      "Non. L’idée est justement de garder tes outils actuels et de les unifier dans un cockpit clair, sans tout refaire.",
  },
  {
    question: "Y a-t-il un engagement ?",
    answer:
      "L’offre standard est sans engagement, résiliable à tout moment. Les offres sur-mesure peuvent inclure un engagement selon le périmètre.",
  },
  {
    question: "Proposez-vous un accompagnement pour définir les bons KPI ?",
    answer:
      "Oui. On peut t’aider à clarifier ce que tu dois suivre en priorité en fonction de ton activité et de ton stade de développement.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Fond gradient discret */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,#1e293b,#020617_60%)]" />

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 pt-4 sm:px-6 lg:px-8 lg:pt-6">
        <Header />
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}

// ============
// COMPONENTS
// ============

function Header() {
  return (
    <header className="sticky top-3 z-20 mb-10 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 backdrop-blur sm:px-6">
      <Link href="#" className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500 text-xs font-bold text-slate-950">
          {/* ⬇️ Logo texte minimal, à remplacer si besoin */}
          {PRODUCT_NAME[0]}
        </div>
        <span className="text-sm font-semibold text-slate-50">
          {PRODUCT_NAME}
        </span>
      </Link>

      <nav className="hidden items-center gap-6 text-xs font-medium text-slate-300 sm:flex">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-sky-300"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#pricing"
          className="rounded-full bg-sky-500 px-3 py-1.5 text-xs font-semibold text-slate-950 shadow-sm shadow-sky-500/40 hover:bg-sky-400"
        >
          {PRIMARY_CTA_LABEL}
        </Link>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="mt-4 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="space-y-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Nouveau : pilote enfin ton activité sans tableurs ingérables
        </span>

        <div className="space-y-3">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
            {TAGLINE}{" "}
            <span className="text-sky-400">
              Sans usine à gaz, sans bla-bla.
            </span>
          </h1>
          <p className="max-w-xl text-sm text-slate-300 sm:text-base">
            {HERO_SUBTITLE}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="#pricing"
            className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm shadow-sky-500/40 transition hover:translate-y-0.5 hover:bg-sky-400"
          >
            {PRIMARY_CTA_LABEL}
          </Link>
          <Link
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-slate-900/60 px-4 py-2 text-sm font-semibold text-slate-100 hover:border-sky-400 hover:text-sky-200"
          >
            {SECONDARY_CTA_LABEL}
          </Link>
          <p className="text-xs text-slate-400">
            Pas de carte bancaire requise.{" "}
            <span className="text-slate-300">
              Test sans engagement pendant 14 jours.
            </span>
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Pensé pour PME, agences et équipes sales.
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Se branche sur tes outils existants.
          </div>
        </div>
      </div>

      {/* Carte “mockup” bidon, style dashboard */}
      <aside className="relative">
        <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.85)]">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-200">
                Vue générale – Performance
              </p>
              <p className="text-[11px] text-slate-400">
                Synthèse des 30 derniers jours
              </p>
            </div>
            <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[11px] font-medium text-emerald-300">
              +18% vs mois dernier
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <StatCard label="Chiffre d’affaires" value="82 450 €" hint="+23%" />
            <StatCard label="Revenu récurrent" value="37 900 €" hint="+12%" />
            <StatCard label="Taux de conversion" value="28,4%" hint="+4 pts" />
          </div>

          <div className="mt-5 space-y-2 rounded-2xl border border-white/10 bg-slate-950/60 p-3">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-slate-200">
                Pipeline commercial
              </p>
              <p className="text-[11px] text-slate-400">19 opportunités</p>
            </div>

            <div className="space-y-2">
              <PipelineRow label="Prospects chauds" value="8" width="80%" />
              <PipelineRow label="En négociation" value="6" width="60%" />
              <PipelineRow label="En attente de signature" value="5" width="45%" />
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
}

type StatCardProps = {
  label: string;
  value: string;
  hint: string;
};

function StatCard({ label, value, hint }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-3">
      <p className="text-[11px] text-slate-400">{label}</p>
      <p className="mt-1 text-sm font-semibold text-slate-50">{value}</p>
      <p className="mt-1 text-[11px] text-emerald-300">{hint} ce mois-ci</p>
    </div>
  );
}

type PipelineRowProps = {
  label: string;
  value: string;
  width: string;
};

function PipelineRow({ label, value, width }: PipelineRowProps) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-[11px] text-slate-300">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="h-1.5 rounded-full bg-slate-800">
        <div
          className="h-1.5 rounded-full bg-sky-400"
          style={{ width }}
        />
      </div>
    </div>
  );
}

function SocialProof() {
  return (
    <section className="mt-16 border-t border-white/5 pt-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
            CONFIANCE & IMPACT
          </p>
          <p className="mt-2 text-sm text-slate-300">
            Pensé pour les équipes qui veulent des chiffres fiables, pas juste
            des graphiques jolis.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-xs text-slate-400">
          <div>
            <p className="text-sm font-semibold text-slate-100">+12 h</p>
            <p className="text-[11px]">gagnées par mois / personne*</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-100">-35 %</p>
            <p className="text-[11px]">de temps passé dans Excel*</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-100">+18 %</p>
            <p className="text-[11px]">d’opportunités suivies correctement*</p>
          </div>
        </div>
      </div>
      <p className="mt-3 text-[11px] text-slate-500">
        *Chiffres indicatifs basés sur les premiers utilisateurs pilotes.
      </p>
    </section>
  );
}

function Features() {
  return (
    <section
      id="features"
      className="mt-20 scroll-mt-24 border-t border-white/5 pt-12"
    >
      <SectionTitle
        eyebrow="Fonctionnalités"
        title="Tout ce qu’il faut pour piloter, sans le superflu"
        description="NovaBoard est pensé pour être utilisé tous les jours par les équipes, pas juste une fois par mois en comité de direction."
      />

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {FEATURES.map((feature) => (
          <article
            key={feature.title}
            className="flex flex-col rounded-2xl border border-white/10 bg-slate-900/40 p-5 shadow-sm shadow-black/40"
          >
            <h3 className="text-sm font-semibold text-slate-50">
              {feature.title}
            </h3>
            <p className="mt-2 text-xs text-slate-300">
              {feature.description}
            </p>
            <ul className="mt-3 space-y-1 text-xs text-slate-300">
              {feature.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="mt-20 scroll-mt-24 border-t border-white/5 pt-12"
    >
      <SectionTitle
        eyebrow="Comment ça marche"
        title="En quelques jours, tu as un cockpit qui tient la route"
        description="On évite les projets qui traînent six mois. L’objectif : te mettre quelque chose d’utile entre les mains très vite, puis itérer."
      />

      <ol className="mt-8 grid gap-6 md:grid-cols-3">
        {STEPS.map((step) => (
          <li
            key={step.label}
            className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"
          >
            <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-sky-400/60 bg-slate-900 text-xs font-medium text-sky-300">
              {step.label}
            </div>
            <h3 className="text-sm font-semibold text-slate-50">
              {step.title}
            </h3>
            <p className="mt-2 text-xs text-slate-300">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Pricing() {
  return (
    <section
      id="pricing"
      className="mt-20 scroll-mt-24 border-t border-white/5 pt-12"
    >
      <SectionTitle
        eyebrow="Tarifs"
        title="Simple à comprendre, sans frais cachés"
        description="Tu peux démarrer petit, tester avec une équipe, puis élargir quand tu vois que ça te fait vraiment gagner du temps."
      />

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {PRICING_PLANS.map((plan) => (
          <article
            key={plan.name}
            className={`flex flex-col rounded-2xl border bg-slate-900/40 p-5 shadow-sm shadow-black/40 ${
              plan.highlight
                ? "border-sky-500/70 shadow-sky-500/30"
                : "border-white/10"
            }`}
          >
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-sm font-semibold text-slate-50">
                {plan.name}
              </h3>
              {plan.highlight && (
                <span className="rounded-full bg-sky-500/15 px-2 py-0.5 text-[11px] font-medium text-sky-200">
                  Le plus choisi
                </span>
              )}
            </div>
            <p className="mt-2 text-xs text-slate-300">{plan.description}</p>

            <div className="mt-4 flex items-baseline gap-1">
              <p className="text-2xl font-semibold text-slate-50">
                {plan.price}
              </p>
              <p className="text-xs text-slate-400">{plan.period}</p>
            </div>

            <ul className="mt-4 flex-1 space-y-1.5 text-xs text-slate-300">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <Link
              href="#contact"
              className={`mt-5 inline-flex items-center justify-center rounded-xl px-3 py-2 text-xs font-semibold transition ${
                plan.highlight
                  ? "bg-sky-500 text-slate-950 shadow-sm shadow-sky-500/40 hover:bg-sky-400"
                  : "border border-white/15 bg-slate-900/70 text-slate-100 hover:border-sky-400 hover:text-sky-200"
              }`}
            >
              Commencer avec ce plan
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section
      id="faq"
      className="mt-20 scroll-mt-24 border-t border-white/5 pt-12"
    >
      <SectionTitle
        eyebrow="FAQ"
        title="Questions fréquentes"
        description="Si tu te demandes autre chose, on peut en parler en direct. Le but est que ce soit clair dès le départ."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {FAQ_ITEMS.map((item) => (
          <article
            key={item.question}
            className="rounded-2xl border border-white/10 bg-slate-900/40 p-4"
          >
            <h3 className="text-sm font-semibold text-slate-50">
              {item.question}
            </h3>
            <p className="mt-2 text-xs text-slate-300">{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="mt-20 border-t border-white/5 pt-10">
      <div className="rounded-3xl border border-sky-500/40 bg-sky-500/10 p-6 text-center sm:p-8">
        <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
          Marre de piloter ton activité à l’aveugle ?
        </h2>
        <p className="mt-2 text-sm text-slate-100">
          Donne une vraie place à tes chiffres dans ton quotidien. Sans usine à
          gaz, sans consultant qui te parle en jargon.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link
            href="#pricing"
            className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-50 shadow-sm shadow-black/40 hover:bg-slate-900"
          >
            Démarrer l’essai gratuit
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200/30 bg-sky-500/10 px-4 py-2 text-sm font-semibold text-slate-50 hover:border-slate-50"
          >
            Discuter de tes besoins
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 pt-5 text-xs text-slate-500">
      <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p>© {new Date().getFullYear()} {PRODUCT_NAME}. Tous droits réservés.</p>
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[11px] text-slate-500">
            Template Next.js & Tailwind – à adapter pour ton propre produit
          </span>
        </div>
      </div>
    </footer>
  );
}

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
};

function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">
        {eyebrow}
      </p>
      <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
        {title}
      </h2>
      <p className="max-w-2xl text-sm text-slate-300">{description}</p>
    </div>
  );
}
