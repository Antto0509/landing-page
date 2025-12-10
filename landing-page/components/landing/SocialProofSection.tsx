export default function SocialProofSection() {
  return (
    <section id="social-proof" className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 text-center sm:flex-row sm:justify-between">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
          Pensé pour les indépendants & petites structures
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-400">
          <span className="rounded-full border border-slate-700 px-3 py-1">
            Freelances
          </span>
          <span className="rounded-full border border-slate-700 px-3 py-1">
            Consultants
          </span>
          <span className="rounded-full border border-slate-700 px-3 py-1">
            Petites agences
          </span>
        </div>
      </div>
    </section>
  );
}
