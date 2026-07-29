# AGENTS.md - Multi-Agent Workflow Protocols

This document defines the roles, delegation boundaries, and handoff procedures for multi-agent execution within the Tropic Roastery codebase.

## 1. Agent Roles & Specialties

### Agent A: Frontend & UI Specialist (@ui-agent)
* **Focus:** Next.js App Router components, Tailwind CSS styling, responsive layouts, micro-interactions, and accessibility.
* **Scope:** `src/app/`, `src/components/`, `src/app/globals.css`.
* **Primary Responsibilities:**
  - Build responsive layout sections (Hero, Featured Products, Story, Footer).
  - Implement clean, warm minimalist Tailwind styling (#2C1B10 dark coffee text, #D4A373 terracotta accent).
  - Ensure mobile-first responsiveness and proper semantic HTML.
  - Implement smooth CTA buttons with outbound Shopee/Tokopedia links (`target="_blank"`).

### Agent B: Data & Architecture Specialist (@data-agent)
* **Focus:** Data models, TypeScript interfaces, mock dataset generation, and static helper utilities.
* **Scope:** `src/types/`, `src/data/`, `src/config/`, `src/lib/`.
* **Primary Responsibilities:**
  - Maintain `src/types/product.ts` and `src/data/products.json`.
  - Ensure mock data matches realistic Indonesian coffee origins (Flores Bajawa, Aceh Gayo, Toraja) and merchandise.
  - Manage site configuration (`src/config/site.ts`) for marketplace shop URLs and social handles.

  ### Agent C: QA & Code Reviewer (@qa-agent)
* **Focus:** Type checking, build verification, link safety, and performance checks.
* **Scope:** Entire project directory.
* **Primary Responsibilities:**
  - Run `npm run build` and `npm run lint` after major UI or data changes.
  - Ensure no `any` types exist in TypeScript files.
  - Verify all outbound marketplace buttons contain `rel="noopener noreferrer"`.
  - Validate that Server Components are used by default and `'use client'` is only present where state/hooks are required.

---

## 2. Delegation & Handoff Protocols

1. **Feature Request Flow:**
   - Step 1: `@data-agent` updates types and JSON data if new fields/products are needed.
   - Step 2: `@ui-agent` builds or updates the UI components utilizing the updated data types.
   - Step 3: `@qa-agent` validates the build (`npm run build`) and verifies type safety.

2. **Rules of Engagement:**
   - No agent should modify `package.json` dependencies without approval.
   - `@ui-agent` must not invent fake product structures; always rely on interfaces from `@data-agent`.
   - All agents must strictly honor the outbound marketplace model (Shopee/Tokopedia links, no internal cart/checkout logic).