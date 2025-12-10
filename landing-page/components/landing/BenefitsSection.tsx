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
    <section id="benefits" className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Tu ne vends pas des factures. Tu vends du temps, de la clarté et du
            sérieux.
          </h2>
          <p className="text-sm text-slate-300">
            {nameProduct} n&apos;est pas un énième outil compliqué. C&apos;est
            l&apos;assistant discret qui s&apos;assure que la base est
            toujours propre.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
            >
              <h3 className="text-sm font-semibold text-slate-50">
                {benefit.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
