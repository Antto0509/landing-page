export default function FooterSection({ nameProduct }: { nameProduct: string }) {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-[11px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {nameProduct}. Tous droits réservés.</p>
        <div className="flex flex-wrap items-center gap-4">
          <a href="#" className="hover:text-slate-200">
            Mentions légales
          </a>
          <a href="#" className="hover:text-slate-200">
            CGU
          </a>
          <a href="#" className="hover:text-slate-200">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
