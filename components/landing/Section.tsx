import React from "react";
import { SectionReveal } from "./SectionReveal";

interface SectionProps {
    id: string;
    name: string;
    title: string;
    subtitle: string;
    children: React.ReactNode;
    className?: string;
}

export function Section({ id, name, title, subtitle, children, className }: SectionProps) {
  return (
    <section id={id} className={`border-b border-[var(--border)] bg-[var(--background)] ${className ?? ""}`}>
        <div className="mx-auto max-w-6xl px-4 py-16">
            <SectionReveal>
                <div className="mb-10 space-y-3 text-center">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--ruby-accent)]">
                        {name}
                    </p>
                    <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl font-[var(--font-heading)]">
                        {title}
                    </h2>
                    <p className="text-sm text-[var(--foreground-muted)]">
                        {subtitle}
                    </p>
                </div>
            </SectionReveal>

            {children}
        </div>
    </section>
  );
}
