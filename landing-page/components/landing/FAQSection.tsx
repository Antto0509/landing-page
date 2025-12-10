const faqs = [
  {
    question: "Est-ce adapté aux micro-entrepreneurs ?",
    answer:
      "Oui. {nameProduct} est pensé d’abord pour les indépendants français : mentions légales, TVA, logique de facturation simple et claire.",
  },
  {
    question: "Est-ce que je peux arrêter quand je veux ?",
    answer:
      "Oui. L’abonnement est sans engagement. Si tu arrêtes, tu gardes l’accès à tes factures déjà émises.",
  },
  {
    question: "Mon comptable peut-il accéder à mes données ?",
    answer:
      "Tu peux lui envoyer des exports propres ou lui donner un accès dédié lorsqu’il sera disponible.",
  },
  {
    question: "Où sont stockées mes données ?",
    answer:
      "Les données sont hébergées en Europe, sur une infrastructure moderne, avec sauvegardes régulières.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <div className="mb-8 space-y-3 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Questions fréquentes
          </h2>
          <p className="text-sm text-slate-300">
            Si tu as encore un doute, tu n&apos;es probablement pas le seul.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-slate-50">
                <span>{faq.question}</span>
                <span className="ml-4 text-lg leading-none text-slate-500 group-open:hidden">
                  +
                </span>
                <span className="ml-4 hidden text-lg leading-none text-slate-500 group-open:block">
                  −
                </span>
              </summary>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
