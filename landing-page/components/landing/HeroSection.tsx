export default function HeroSection({ nameProduct }: { nameProduct: string }) {
  return (
    <section id="hero" className="relative overflow-hidden border-b border-slate-800 bg-linear-to-b from-slate-950 via-slate-950 to-slate-900">
      <div className="pointer-events-none absolute inset-0 opacity-40 blur-3xl" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-16 sm:py-20 lg:flex-row lg:py-24">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Conçu par un freelance, pour les freelances
          </div>

          <div className="space-y-4">
            <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Gérez vos factures en{" "}
              <span className="bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                30 secondes
              </span>
              , sans prise de tête.
            </h1>
            <p className="text-balance text-sm text-slate-300 sm:text-base">
              {nameProduct} centralise vos clients, factures et paiements dans un
              seul outil simple, clair et taillé pour les indépendants
              français.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <button className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-500 px-6 text-sm font-medium text-slate-950 shadow-md shadow-emerald-500/30 transition hover:bg-emerald-400">
              Créer mon compte gratuit
            </button>
            <button className="inline-flex h-11 items-center justify-center rounded-full border border-slate-600 bg-slate-900/60 px-6 text-sm font-medium text-slate-100 transition hover:border-slate-400">
              Voir la démo
            </button>
          </div>

          <p className="text-xs text-slate-400">
            Pas de carte bancaire • Annulable en 1 clic • Hébergé en Europe
          </p>
        </div>

        <div className="mt-6 flex-1 lg:mt-0">
          <div className="mx-auto w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-2xl shadow-emerald-500/10">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-300">
                  Nouvelle facture
                </p>
                <p className="text-[11px] text-slate-400">
                  3 champs, 30 secondes, c&apos;est parti.
                </p>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold text-emerald-400">
                Aperçu en direct
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="space-y-1">
                <label className="block text-[11px] text-slate-400">
                  Client
                </label>
                <div className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-900 px-3 py-2">
                  <span className="text-slate-100">Studio Horizon</span>
                  <span className="text-[10px] text-slate-500">#CLI-004</span>
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-[11px] text-slate-400">
                  Intitulé
                </label>
                <input
                  className="h-8 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 text-xs text-slate-100 outline-none placeholder:text-slate-500"
                  placeholder="Création de site vitrine"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block text-[11px] text-slate-400">
                    Montant HT
                  </label>
                  <input
                    className="h-8 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 text-xs text-slate-100 outline-none placeholder:text-slate-500"
                    placeholder="1 200,00 €"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-[11px] text-slate-400">
                    TVA
                  </label>
                  <div className="flex h-8 items-center justify-between rounded-lg border border-slate-700 bg-slate-900 px-3 text-xs">
                    <span className="text-slate-100">20 %</span>
                    <span className="text-[10px] text-slate-500">
                      240,00 €
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between rounded-xl border border-slate-700 bg-slate-900 px-3 py-2.5">
                <div>
                  <p className="text-[11px] text-slate-400">Total TTC</p>
                  <p className="text-sm font-semibold text-slate-50">
                    1 440,00 €
                  </p>
                </div>
                <button className="h-8 rounded-full bg-emerald-500 px-4 text-[11px] font-semibold text-slate-950 hover:bg-emerald-400">
                  Générer la facture
                </button>
              </div>
            </div>
          </div>
          <p className="mt-3 text-center text-[11px] text-slate-400">
            Interface fictive à titre d&apos;exemple. L&apos;objectif :{" "}
            <span className="font-medium text-slate-200">
              aller à l&apos;essentiel.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
