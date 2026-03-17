import { Separator } from "@/components/ui/separator";

export default function FooterSection({ nameProduct }: { nameProduct: string }) {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          {/* Identité */}
          <div className="space-y-1">
            <p className="text-sm font-semibold text-[var(--foreground)]">{nameProduct}</p>
            <p className="text-[11px] text-[var(--foreground-muted)]">
              Copywriting & Stratégie B2B — Method ELEVATE
            </p>
            <p className="text-[11px] text-[var(--foreground-muted)]/60">Antoine Coutreel</p>
          </div>

          {/* Liens */}
          <div className="flex flex-wrap items-center gap-4 text-[11px] text-[var(--foreground-muted)]">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--foreground)] transition-colors"
            >
              LinkedIn
            </a>
            <a href="mailto:contact@clarity.fr" className="hover:text-[var(--foreground)] transition-colors">
              contact@clarity.fr
            </a>
            <a href="#" className="hover:text-[var(--foreground)] transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-[var(--foreground)] transition-colors">
              CGU
            </a>
          </div>
        </div>

        <Separator className="my-4 bg-[var(--border)]/60" />

        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-[var(--foreground-muted)]/60">
            © {new Date().getFullYear()} {nameProduct}. Tous droits réservés.
          </p>
          <p className="text-[11px] text-[var(--foreground-muted)]/40">
            Template Next.js · Tailwind CSS · Method ELEVATE
          </p>
        </div>
      </div>
    </footer>
  );
}
