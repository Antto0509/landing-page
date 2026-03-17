"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export default function HeaderSection({ nameProduct }: { nameProduct: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 backdrop-blur-md ${
        scrolled
          ? "bg-[var(--background)]/85 border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-tight text-[var(--foreground)] font-[var(--font-heading)]">
            {nameProduct}
          </span>
          <span className="hidden rounded-full bg-[var(--accent-subtle)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--ruby-accent)] sm:inline-flex">
            Beta
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-6 text-sm sm:flex">
          {[
            { href: "#resultats", label: "Résultats" },
            { href: "#comment", label: "Comment ça marche" },
            { href: "#pour-qui", label: "Pour qui" },
            { href: "#pricing", label: "Tarifs" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side: CTA + ThemeToggle */}
        <div className="flex items-center gap-2">
          <a
            href="#pricing"
            className="hidden rounded-full bg-[var(--accent-cta)] text-white shadow-sm hover:bg-[var(--accent-cta-hover)] hover:shadow-[0_0_16px_var(--accent-glow)] transition-all duration-200 sm:inline-flex h-7 items-center justify-center px-3 text-xs font-medium"
          >
            Diagnostic gratuit →
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
