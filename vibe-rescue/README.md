# Vibe Rescue, Before & After

A single-page React portfolio demo for the **Fix your AI app** Fiverr gig. Shows common bugs in vibe-coded apps (Lovable, Bolt, Cursor, Supabase) with interactive before/after previews.

Built by **Fahad Khan**.

## Quick start

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Customize

| File | What to edit |
|------|----------------|
| [`src/config/site.ts`](src/config/site.ts) | Author name, Fiverr URL, tagline, `siteUrl` after deploy |
| [`src/data/cases.tsx`](src/data/cases.tsx) | Bug cases, copy, code diffs, sample reports |
| [`src/data/testimonials.ts`](src/data/testimonials.ts) | Client outcome quotes (anonymized) |
| [`src/data/process.ts`](src/data/process.ts) | How-it-works steps |

## Deploy

Build outputs to `dist/`. Deploy to **Vercel** or **Netlify**:

- **Build command:** `npm run build`
- **Output directory:** `dist`

After deploying, set `siteUrl` in `site.ts` to your live URL for absolute Open Graph links.

**Live URL:** _(add after deploy)_

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- No backend — all data mocked
