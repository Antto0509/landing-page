# 🚀 Landing Page Template — Next.js 16 + Tailwind CSS

Template moderne et épuré pour créer rapidement une landing page de SaaS, produit, application ou service.
Basé sur Next.js 16 (App Router) et Tailwind CSS, il inclut un hero section, features, pricing, FAQ et un CTA final.
Parfait pour démarrer un projet ou montrer ce que tu sais faire côté front.

---

## ✨ Fonctionnalités

- ⚡ **Next.js 16** – App Router, performance et SEO intégrés
- 🎨 **Tailwind CSS** – styles propres, responsive et faciles à modifier
- 🧩 **Sections modulaires** :
  - Hero
  - Social proof
  - Features (“Fonctionnalités”)
  - How it works
  - Pricing
  - FAQ
  - Final CTA
  - Footer
- 🔧 **Configuration centralisée** en haut du fichier (`PRODUCT_NAME`, tagline, items, pricing…)
- 🧪 **Mockup dashboard intégré** pour illustrer un SaaS ou outil métier
- ♻️ **Template réutilisable** : change juste le nom, les textes et les tableaux

---

## 📦 Installation

```bash
git clone https://github.com/Antto0509/landing-page.git
cd landing-page
npm install
npm run dev
```

Le projet démarre sur http://localhost:3000

---

## 📁 Structure du projet

```graphql
landing-page/
├── app/
│   ├── page.tsx
│   │   # Page principale de la landing page
│   │   # Contient :
│   │   #   - La configuration globale (nom du produit, tagline, CTA…)
│   │   #   - Toutes les sections (Hero, Features, Pricing, FAQ…)
│   │   #   - Les composants UI intégrés dans un même fichier pour simplicité
│   │   #   Astuce : Tu peux séparer les sections dans /components si tu veux évoluer.
│   └── globals.css
│       # Styles globaux (si Tailwind injecte base / components / utilities ici)
│
├── public/
│   └── favicon.ico
│       # Icône affichée dans l’onglet du navigateur
│
├── tailwind.config.js
│   # Configuration Tailwind CSS :
│   #   - Palette de couleurs
│   #   - Breakpoints
│   #   - Plugins
│   #   - Chemins de scan (./app/**/*)
│
├── postcss.config.js
│   # Pipeline PostCSS utilisé par Next.js + Tailwind
│
├── tsconfig.json
│   # Configuration TypeScript :
│   #   - Paths alias
│   #   - Strict mode
│   #   - Options Next.js
│
└── README.md
    # Documentation du projet, instructions, installation et personnalisation
```

Tout est dans `app/page.tsx` = ultra simple à reprendre ou découper en composants.

---

## 🔧 Configuration (hyper simple)

Tout se passe en haut de `app/page.tsx` :

```tsx
const PRODUCT_NAME = "NovaBoard";
const TAGLINE = "Le cockpit clair pour piloter ton activité.";
const HERO_SUBTITLE = "...";

const FEATURES = [...];
const PRICING_PLANS = [...];
const FAQ_ITEMS = [...];
```

Modifie ces objets → toute la page se met à jour.

---

## 🛠️ Technologies utilisées

- Next.js 16
- Tailwind CSS
- TypeScript

---

## 📤 Déploiement

### 🚀 Vercel (recommandé)

1. Push ton repo sur GitHub
2. Va sur https://vercel.com/new
3. Import ton repo → Vercel détecte Next.js automatiquement

Deploy instantané.

### Ou via Docker (optionnel)
```bash
docker build -t landing-template .
docker run -p 3000:3000 landing-template
```

---

## 🧪 Démo (à remplir)

URL : https://…

Aperçu : _(ajouter une capture ici)_

---

## 🧩 Idées pour aller plus loin

- Ajouter un système de layout global
- Découper chaque section en composant dans components/landing/*
- Ajouter une vraie API de contact (Brevo, Resend, Supabase…)
- Ajouter un mode clair / sombre
- Ajouter un CMS headless pour éditer le contenu

---

## 📜 Licence

MIT — utilisation libre, modifiable et commerciale autorisée.
