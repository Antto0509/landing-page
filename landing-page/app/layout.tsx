import type { Metadata } from "next";
import { Lexend, Inter } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Démo Landing SaaS — Antoine Coutreel",
    template: "%s | Démo Landing SaaS",
  },
  description:
    "Template de landing page SaaS réalisé avec Next.js et Tailwind CSS. Démo de structure, UI et copy orientée conversion.",
  openGraph: {
    title: "Démo Landing SaaS — Antoine Coutreel",
    description:
      "Landing page de démonstration construite avec Next.js et Tailwind CSS, pensée pour présenter une structure claire et orientée conversion.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${lexend.variable} ${inter.variable}`}>
      <body className="antialiased bg-slate-950 text-slate-50">
        {children}
      </body>
    </html>
  );
}
