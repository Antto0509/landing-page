# CLAUDE.md — Landing Page B2B (Method ELEVATE)

## Présentation du projet

Template de landing page B2B structuré selon la **Method ELEVATE** — un framework propriétaire de conversion en 7 étapes séquentielles pour PME & SaaS B2B. Le template illustre le service de transformation de landing pages proposé par **Antoine Coutreel** ("Clarity").

**Objectif du template :** Montrer comment une landing page doit être construite pour qu'un visiteur froid comprenne l'offre en moins de 10 secondes et passe à l'action.

---

## Stack technique

| Outil | Version | Usage |
|-------|---------|-------|
| Next.js | 16 (App Router) | Framework React SSR/SSG |
| React | 19 | UI |
| TypeScript | 5 (strict) | Typage |
| Tailwind CSS | 4 | Styles utilitaires |
| Framer Motion | 12 | Animations |
| next-themes | — | Dark/light mode toggle (ThemeProvider) |
| shadcn/ui (base-ui) | latest | Composants UI |
| lucide-react | — | Icônes |
| PostCSS | — | Intégration Tailwind |

---

## Commandes

```bash
npm run dev      # Dev server → http://localhost:3000
npm run build    # Build de production (vérifie les types TS)
npm run lint     # ESLint
```

---

## Architecture des composants

```
app/
  layout.tsx           — Layout racine (fonts, métadonnées, dark theme)
  page.tsx             — Orchestration des sections dans l'ordre ELEVATE
  globals.css          — Import Tailwind + variables CSS

components/landing/
  index.tsx            — Barrel export de tous les composants
  Section.tsx          — Wrapper réutilisable (titre, sous-titre, centrage)
  SectionReveal.tsx    — Animation scroll-triggered (fade in + slide up)
  HeaderSection.tsx    — Navigation sticky
  HeroSection.tsx      — E + L : Expose + Lock (above the fold)
  SocialProofSection.tsx — E : Evidence (témoignages chiffrés)
  HowItWorksSection.tsx  — V : Verbalize (mécanisme en 3 étapes)
  BenefitsSection.tsx    — A : Align (pour qui / pas pour qui)
  FeaturesSection.tsx    — Détail de l'offre (6 éléments)
  DemoSection.tsx        — Avant / Après (exemples visuels)
  TestimonialsSection.tsx — Témoignages complémentaires
  PricingSection.tsx     — T : Trigger (diagnostic gratuit + offre complète)
  FAQSection.tsx         — E : Eliminate friction (objections neutralisées)
  FooterSection.tsx      — Pied de page
```

---

## Ordre des sections (ELEVATE — non modifiable)

```
Header
↓ E — HeroSection (accroche problème)
↓ L — HeroSection (headline + CTA above fold)
↓ E — SocialProofSection (témoignages chiffrés)
↓ V — HowItWorksSection (mécanisme en 3 étapes)
↓ A — BenefitsSection (pour qui / pas pour qui)
↓     FeaturesSection (détail de l'offre)
↓     DemoSection (avant/après)
↓ T — PricingSection (CTA principal)
↓ E — FAQSection (objections)
Footer
```

**L'ordre est une contrainte fonctionnelle, pas stylistique.** Il suit le cheminement cognitif naturel d'un visiteur froid. Ne pas le modifier.

---

## Système de design

### Thème dark/light
- Géré par `next-themes` via `components/ThemeProvider.tsx`
- Attribut `class` sur `<html>` (`.dark` class)
- Défaut : `"dark"`
- Toggle via `components/landing/ThemeToggle.tsx` (icône Sun/Moon, Lucide)
- CSS custom variant : `@custom-variant dark (&:is(.dark *))` dans globals.css

### Palette Ruby (définie dans `@theme` de globals.css)
| Classe Tailwind | Valeur oklch | Usage |
|----------------|-------------|-------|
| `bg-ruby-500` | `oklch(0.58 0.23 15)` | Accent principal |
| `text-ruby-400` | `oklch(0.70 0.18 15)` | Texte accent dark |
| `bg-ruby-500/10` | opacité 10% | Fond subtil |
| `border-ruby-500/30` | opacité 30% | Bordure accent |

### CSS Variables (utilisées via `var()` dans Tailwind)
| Variable | Light | Dark | Usage |
|----------|-------|------|-------|
| `--background` | oklch(0.98 0.004 80) | oklch(0.09 0.003 247) | Fond principal |
| `--background-card` | oklch(1 0 0) | oklch(0.13 0.005 247) | Fond carte |
| `--foreground` | oklch(0.11...) | oklch(0.985 0 0) | Texte principal |
| `--foreground-muted` | oklch(0.44...) | oklch(0.71...) | Texte secondaire |
| `--border` | oklch(0.91...) | oklch(0.21...) | Bordures |
| `--ruby-accent` | oklch(0.50 0.23 15) | oklch(0.70 0.18 15) | Accent UI |
| `--accent-cta` | oklch(0.58 0.23 15) | oklch(0.58 0.23 15) | Boutons CTA |
| `--accent-cta-hover` | oklch(0.50 0.23 15) | oklch(0.65 0.21 15) | Hover CTA |
| `--accent-glow` | 25% opacity ruby | 30% opacity ruby | Box-shadow glow |
| `--accent-subtle` | 8% opacity ruby | 10% opacity ruby | Fond chips/icônes |

### Composants shadcn/ui (base-ui)
- **Button** — `components/ui/button.tsx` (base-ui, sans asChild — utiliser `<a>` direct)
- **Badge** — `components/ui/badge.tsx`
- **Card, CardContent, CardHeader, CardFooter** — `components/ui/card.tsx`
- **Accordion, AccordionItem, AccordionTrigger, AccordionContent** — `components/ui/accordion.tsx`
- **Avatar, AvatarFallback** — `components/ui/avatar.tsx`
- **Separator** — `components/ui/separator.tsx`

**Note importante :** shadcn v4 utilise `@base-ui/react` (pas Radix UI). La prop `asChild` n'existe pas. Pour les boutons-liens, utiliser `<a>` avec classes directes.

### Typographie
- **Lexend** — Titres et labels (`var(--font-lexend)`, `font-[var(--font-heading)]`)
- **Inter** — Corps de texte (`var(--font-inter)`, `font-[var(--font-body)]`)

### Conventions de style
- Cartes : `border-[var(--border)] bg-[var(--background-card)]` via shadcn Card
- Bouton CTA primaire : `bg-[var(--accent-cta)] text-white rounded-full`
- Espacement sections : `py-16` (défini dans Section.tsx)
- Max width : `max-w-6xl mx-auto px-4`
- Sections background : `bg-[var(--background)] border-b border-[var(--border)]`

### Animations
- Entrée au scroll : `SectionReveal` — `opacity 0→1`, `y 24→0`, `duration 0.5`
- Hover cards : `y: -4`, spring `stiffness: 280, damping: 20`
- Orbes hero : CSS keyframes `float`, `float-slow`
- Pulsation CTA : CSS keyframe `pulse-glow` (box-shadow ruby)
- Respect `prefers-reduced-motion` via `SectionReveal` et media query CSS

---

## Method ELEVATE — Contexte métier

La Method ELEVATE est un framework propriétaire de structuration narrative pour landing pages B2B. **7 étapes séquentielles et non interchangeables :**

| Étape | Nom | Rôle dans la page |
|-------|-----|-------------------|
| **E** | Expose the core problem | Accroche — reconnaissance immédiate du problème |
| **L** | Lock the promise | Headline mesurable, sans jargon, test des 5 secondes |
| **E** | Evidence the result | Témoignage chiffré : nom + chiffre + durée |
| **V** | Verbalize the mechanism | Mécanisme en 1 phrase ou 3 micro-étapes max |
| **A** | Align the audience | "C'est pour vous si..." + "Pas pour vous si..." |
| **T** | Trigger the next step | CTA à friction zéro, action immédiate possible |
| **E** | Eliminate the friction | 2–3 objections silencieuses neutralisées |

---

## Avatar client cible

**Profil :** Fondateur de PME (10–50 personnes) ou SaaS B2B (pré-seed / seed), 28–45 ans, secteur services B2B (conseil, agence, SaaS).

**Problème central :** Offre incomprise par le marché → message flou → trafic sans conversion → zéro leads qualifiés.

**Mots clés de l'avatar :** landing page, offre, visibilité, leads, clients, compréhensible, LinkedIn.

**CTA idéal :** Action à friction zéro (diagnostic gratuit, sans carte bancaire, réponse rapide).

**Objections fréquentes :** "c'est trop cher", "est-ce que ça marche pour mon secteur ?", "je n'ai pas de témoignages".

---

## Conventions de code

- **Composants** : Fonctionnels TypeScript avec props typées via `interface`
- **Exports** : Named exports dans les composants, re-exportés via `index.tsx`
- **Animations** : Toujours via Framer Motion (pas de CSS animations pures pour les effets interactifs)
- **Accessibilité** : `prefers-reduced-motion` respecté via `SectionReveal`
- **Responsive** : Mobile-first, breakpoints `sm:` / `md:` / `lg:`
- **Pas de fichiers de données séparés** — les données sont inline dans les composants (template simple)
