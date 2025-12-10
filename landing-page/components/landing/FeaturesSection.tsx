const features = [
  {
    title: "Factures propres en PDF",
    description:
      "Génération automatique de factures conformes, numérotation, mentions légales, duplications.",
  },
  {
    title: "Gestion des clients",
    description:
      "Fiches clients complètes, historique des factures, meilleure visibilité sur ton portefeuille.",
  },
  {
    title: "Suivi des paiements",
    description:
      "Statuts payée/en attente/en retard, dates d’échéance, prochainement : relances automatiques.",
  },
  {
    title: "Multi-activités",
    description:
      "Gère plusieurs structures ou activités depuis un seul compte.",
  },
  {
    title: "Pensé pour la France",
    description:
      "TVA, mentions pour micro-entreprise, export comptable : adapté au contexte français.",
  },
  {
    title: "Sécurité & hébergement UE",
    description:
      "Données hébergées en Europe, sauvegardes régulières, bonnes pratiques de sécurité.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Les fonctionnalités dont tu as vraiment besoin. Le reste viendra en
            temps voulu.
          </h2>
          <p className="text-sm text-slate-300">
            L&apos;objectif n&apos;est pas d&apos;avoir 100 boutons, mais de
            couvrir 100 % de ton quotidien de freelance sans te perdre.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
            >
              <h3 className="text-sm font-semibold text-slate-50">
                {feature.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
