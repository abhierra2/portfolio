# Abhi Erra — Portfolio

Personal portfolio built with **Next.js 14** (App Router), **TypeScript**, and **Tailwind CSS**. Editorial typography, off-white background, deep blue accent, and reusable components. No UI frameworks or heavy animation libraries.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Structure

- `app/layout.tsx` — Root layout with Playfair Display (serif) and Inter (sans) via Next.js Google fonts
- `app/page.tsx` — Homepage: hero, featured projects, philosophy
- `app/projects/abra/page.tsx` — ABRA project deep-dive
- `app/projects/taxi/page.tsx` — Taxi ETA analysis project
- `app/about/page.tsx` — About and values
- `components/` — `ProjectCard`, `SectionHeader`, `TagBadge`, `Navigation`

Design: confident, analytical, infrastructure-focused. Tailwind only; semantic HTML.
