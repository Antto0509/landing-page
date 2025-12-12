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
    <section id={id} className={`border-b border-slate-800 bg-slate-950 ${className}`}>
        <div className="mx-auto max-w-6xl px-4 py-16">
            <SectionReveal>
                <div className="mb-10 space-y-3 text-center">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
                        {name}
                    </p>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                        {title}
                    </h2>
                    <p className="text-sm text-slate-300">
                        {subtitle}
                    </p>
                </div>
            </SectionReveal>

            {children}
        </div>
    </section>
  );
}