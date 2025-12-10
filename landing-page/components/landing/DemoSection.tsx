import { SectionReveal } from "./SectionReveal";
import { motion } from "framer-motion";

export default function DemoSection({ nameProduct }: { nameProduct: string }) {
  return (
    <section id="demo" className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Une interface pensée pour aller droit au but.
            </h2>
            <p className="text-sm text-slate-300">
              Tout ce dont tu as besoin pour facturer proprement. Rien de plus.
            </p>
          </div>
          <button className="inline-flex h-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-4 text-xs font-medium text-slate-100 hover:border-slate-400">
            Lancer la démo interactive
          </button>
        </div>

        <SectionReveal>
            <motion.div
                className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80"
                animate={{
                boxShadow: [
                    "0 0 0 0 rgba(45,212,191,0.0)",
                    "0 0 40px 0 rgba(45,212,191,0.35)",
                    "0 0 0 0 rgba(45,212,191,0.0)",
                ],
                }}
                transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                }}
            >
                <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2">
                    <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                        <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                        <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                    </div>
                    <p className="text-[11px] text-slate-400">
                    tableau-de-bord.{nameProduct.toLowerCase()}.app
                    </p>
                </div>
                <div className="h-72 w-full bg-linear-to-br from-slate-900 via-slate-900 to-slate-950 px-6 py-5 text-xs text-slate-200">
                    <p className="mb-3 text-[11px] font-medium text-slate-400">
                    Aperçu fictif de l&apos;interface
                    </p>
                    <div className="grid gap-4 md:grid-cols-[2fr,1.2fr]">
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-semibold text-slate-50">
                                    Chiffre d&apos;affaires du mois
                                </p>
                                <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold text-emerald-400">
                                    +18 % vs mois dernier
                                </span>
                            </div>
                            <div className="flex items-end gap-2 text-3xl font-semibold">
                                <span>7 840</span>
                                <span className="pb-1 text-xs font-medium text-slate-400">
                                    € TTC
                                </span>
                            </div>
                            <div className="mt-4 grid grid-cols-3 gap-3 text-[11px]">
                                <div className="rounded-xl border border-slate-800 bg-slate-900 px-3 py-2">
                                    <p className="text-[10px] text-slate-400">
                                    Factures payées
                                    </p>
                                    <p className="text-sm font-semibold text-emerald-400">
                                    12
                                    </p>
                                </div>
                            <div className="rounded-xl border border-slate-800 bg-slate-900 px-3 py-2">
                                <p className="text-[10px] text-slate-400">
                                En attente
                                </p>
                                <p className="text-sm font-semibold text-amber-400">
                                5
                                </p>
                            </div>
                            <div className="rounded-xl border border-slate-800 bg-slate-900 px-3 py-2">
                                <p className="text-[10px] text-slate-400">
                                En retard
                                </p>
                                <p className="text-sm font-semibold text-rose-400">
                                2
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="space-y-2 rounded-xl border border-slate-800 bg-slate-900 p-3">
                            <p className="text-[11px] font-medium text-slate-300">
                            Dernières factures
                            </p>
                            <div className="space-y-1.5">
                            {["Studio Horizon", "Atelier Nova", "Agence Pixel"].map(
                                (client, index) => (
                                <div
                                    key={client}
                                    className="flex items-center justify-between rounded-lg border border-slate-800/70 bg-slate-900/80 px-3 py-2"
                                >
                                    <div>
                                        <p className="text-xs font-medium text-slate-100">
                                            {client}
                                        </p>
                                        <p className="text-[10px] text-slate-500">
                                            FAC-2025-0{index + 1}
                                        </p>
                                    </div>
                                    <div className="text-right text-[11px]">
                                        <p className="font-medium text-slate-100">
                                            {index === 0
                                            ? "1 440,00 €"
                                            : index === 1
                                            ? "890,00 €"
                                            : "620,00 €"}
                                        </p>
                                        <p className="text-[10px] text-emerald-400">
                                            {index === 2 ? "Émise" : "Payée"}
                                        </p>
                                    </div>
                                </div>
                                ),
                            )}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </SectionReveal>
        <p className="mt-3 text-[11px] text-slate-400">
          L&apos;objectif : montrer en un regard que l&apos;outil est simple,
          sérieux, et centré sur ton activité.
        </p>
      </div>
    </section>
  );
}
