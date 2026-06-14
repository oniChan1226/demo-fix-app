# Vibe Rescue, Before & After

Interactive portfolio demo for the **Fix your AI app** Fiverr gig. Shows common bugs in vibe-coded apps (Lovable, Bolt, Cursor, Supabase) with before/after previews.

Built by **Fahad Khan**.

**Live:** https://demo-before-and-after-fix-seven.vercel.app  
**Fiverr:** https://www.fiverr.com/s/DB49j3a

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
| [`src/config/site.ts`](src/config/site.ts) | Author name, Fiverr URL, site URL, hero tagline |
| [`src/data/gigContent.ts`](src/data/gigContent.ts) | What to send steps |
| [`src/data/sampleDeliveryReport.ts`](src/data/sampleDeliveryReport.ts) | Delivery report content |
| [`src/data/cases.tsx`](src/data/cases.tsx) | Bug cases, copy, code diffs |

## Deploy

Build outputs to `dist/`. Deploy to **Vercel** or **Netlify**:

- **Build command:** `npm run build`
- **Output directory:** `dist`

Update `siteUrl` in `site.ts` and absolute `og:*` URLs in `index.html` if the domain changes.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- Motion (toggle animation only)
- No backend — all data mocked
