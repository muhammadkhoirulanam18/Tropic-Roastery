@AGENTS.md

# CLAUDE.md - Tropic Roastery Guidelines

This document serves as the single source of truth for AI agents working on the **Tropic Roastery** codebase.

## 1. Project Overview & Core Tech Stack
* **Project Name:** Tropic Roastery (Brand Profile, Product Catalog & Coffee Affiliate)
* **Framework:** Next.js 14+ (App Router, Server Components by default)
* **Language:** TypeScript (Strict mode enabled)
* **Styling:** Tailwind CSS (Utility-first, warm minimalist theme)
* **Icons:** Lucide React (`lucide-react`)
* **Deployment Target:** Vercel

## 2. Terminal Commands & Workflows
* **Development Server:** `npm run dev` (Runs locally on http://localhost:3000)
* **Build Project:** `npm run build` (Always run to test type checking)
* **Start Production Server:** `npm run start`
* **Linting:** `npm run lint`

## 3. Directory & Folder Structure
Follow this exact Next.js App Router structure:

tropic-roastery/
├── public/                     # Static assets (logos, coffee bag images, illustrations)
│   ├── images/
│   │   ├── products/           # Product images (beans, merch)
│   │   └── heroes/             # Hero banners & illustrations
│   └── icons/
├── src/
│   ├── app/                    # App Router pages & routes
│   │   ├── globals.css         # Global Tailwind directives & custom CSS
│   │   ├── layout.tsx          # Root layout (Header, Footer, Metadata)
│   │   ├── page.tsx            # Homepage
│   │   └── products/
│   │       ├── page.tsx        # Catalog / Menu page with filters
│   │       └── [slug]/
│   │           └── page.tsx    # Product Detail Page
│   ├── components/             # Reusable UI Components
│   │   ├── common/             # Atomic UI elements (Button, Card, Badge, Modal)
│   │   ├── layout/             # Header, Footer, MobileNav, Sidebar
│   │   ├── home/               # Homepage specific sections (HeroSection, StorySection)
│   │   └── products/           # Product specific components (ProductCard, FilterTabs)
│   ├── config/                 # Static site configuration & metadata
│   │   └── site.ts             # Store URLs (Shopee/Tokopedia links)
│   ├── data/                   # Mock data / JSON content
│   │   ├── products.json       # Coffee beans & merchandise dataset
│   │   └── brew-guides.json    # Brew guides data
│   ├── lib/                    # Helper functions & utilities
│   │   └── utils.ts            # Tailwind cn() helper (clsx + tailwind-merge)
│   └── types/                  # TypeScript interfaces & types
│       └── product.ts          # Product types
├── CLAUDE.md
├── package.json
└── tailwind.config.ts

## 4. Code Architecture & Conventions

### Component Standards
* **Server Components First:** Keep components as React Server Components (RSC) by default. Only add 'use client' at the top when interactivity (hooks, state, click events) is strictly required.
* **Component File Naming:** Use kebab-case for file names (e.g., product-card.tsx). Use PascalCase for React component functions.
* **Imports Order:**
  1. React & Next.js imports
  2. Third-party packages (Lucide icons, etc.)
  3. Internal components (@/components/...)
  4. Types & Data (@/types/..., @/data/...)
  5. Utility functions (@/lib/...)

### Styling & UI Standards (Tailwind CSS)
* **Color Palette Aesthetics:** Clean, warm, high-contrast, minimalist coffee aesthetic.
  * Primary Text/Dark: #2C1B10 (Warm Dark Coffee)
  * Background: #FAFAFA or #F5F2EB (Warm Off-White)
  * Accent / CTA: #D4A373 / #C68B59 (Terracotta / Roasted Gold)
  * Secondary Text: Muted gray/brown #6B5E55
* **Responsiveness:** Always design Mobile-First. Use Tailwind breakpoints (sm:, md:, lg:) for tablet and desktop views.
* **Class Names Utility:** Use the cn() utility function from @/lib/utils for conditional Tailwind class merging.

### E-Commerce & Outbound Transaction Logic
* **No Internal Checkout:** Do not build internal payment gateways, cart checkouts, or payment processing logic.
* **Marketplace Redirection:** All primary "Buy Now" or "Beli Sekarang" CTA buttons MUST act as outbound links (target="_blank" rel="noopener noreferrer").
* **Marketplace Destination:** Direct users to official external marketplaces: Shopee or Tokopedia.

## 5. TypeScript Rules
* **Strict Typing:** Avoid using 'any' at all costs. Define strict interfaces in src/types/.
* **Example Product Interface (src/types/product.ts):**

export type ProductCategory = 'single-origin' | 'espresso-blend' | 'merchandise';

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  formattedPrice: string;
  image: string;
  shortDescription: string;
  flavorNotes?: string[];
  roastLevel?: 'Light' | 'Medium' | 'Dark';
  weightGrams?: number;
  marketplaces: {
    shopeeUrl: string;
    tokopediaUrl?: string;
  };
  isFeatured?: boolean;
}

## 6. AI Agent Execution Rules (Do's and Don'ts)
* **DO NOT** delete or refactor working code unless explicitly requested.
* **DO NOT** install heavy external packages without permission (prefer native Next.js/Tailwind features).
* **DO** use semantic HTML (<header>, <main>, <section>, <footer>, <nav>).
* **DO** ensure high-contrast typography and accessible button targets.
* **DO** write concise commit messages and keep code clean and self-documenting.