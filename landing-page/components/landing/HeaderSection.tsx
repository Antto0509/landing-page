"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function HeaderSection({ nameProduct }: { nameProduct: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors backdrop-blur-md ${
        scrolled ? "bg-slate-950/80 border-b border-slate-800/70" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-tight text-slate-50">
            {nameProduct}
          </span>
        </Link>

        {/* Navigation (optionnelle, simple, efficace) */}
        <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
          <a href="#features" className="hover:text-slate-100 transition-colors">
            Fonctionnalités
          </a>
          <a href="#pricing" className="hover:text-slate-100 transition-colors">
            Tarifs
          </a>
          <a href="#faq" className="hover:text-slate-100 transition-colors">
            FAQ
          </a>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden h-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-4 text-xs font-medium text-slate-100 hover:border-slate-500 sm:flex"
          >
            Connexion
          </Link>

          <Link
            href="/register"
            className="inline-flex h-9 items-center justify-center rounded-full bg-emerald-500 px-4 text-xs font-medium text-slate-950 shadow-md shadow-emerald-500/20 transition hover:bg-emerald-400"
          >
            Créer un compte
          </Link>
        </div>
      </div>
    </header>
  );
}
