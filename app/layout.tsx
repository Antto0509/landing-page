import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
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
    default: "Clarity — Transformez votre landing page B2B en machine à leads",
    template: "%s | Clarity",
  },
  description:
    "Votre offre est solide. Vos prospects partent quand même. Clarity transforme votre landing page B2B en source de leads qualifiés, en 5 jours ouvrés via la Method ELEVATE.",
  openGraph: {
    title: "Clarity — Transformez votre landing page B2B en machine à leads",
    description:
      "Votre offre est solide. Vos prospects partent quand même. Diagnostic gratuit, réponse sous 48h.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased bg-[var(--background)] text-[var(--foreground)]">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
