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
    <section id="pricing" className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10 max-w-2xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Un prix clair. Pas de surprise.
          </h2>
          <p className="text-sm text-slate-300">
            Tu dois pouvoir calculer ton retour sur investissement facilement :
            quelques heures gagnées, quelques erreurs évitées, c&apos;est déjà
            rentabilisé.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col justify-between rounded-2xl border bg-slate-900/70 p-6 ${
                plan.highlight
                  ? "border-emerald-500/70 shadow-[0_0_40px_rgba(16,185,129,0.2)]"
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

              <button
                className={`mt-6 h-10 rounded-full text-xs font-medium ${
                  plan.highlight
                    ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400"
                    : "border border-slate-700 bg-slate-900 text-slate-100 hover:border-slate-500"
                }`}
              >
                {plan.highlight
                  ? "Passer sur l’offre Pro"
                  : "Commencer gratuitement"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
