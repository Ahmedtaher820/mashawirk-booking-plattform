# Mashawirk / مشاويرك

Premium bilingual UAE delivery website + PWA.

## Stack

- Nuxt 4 (SSR)
- Vue 3 + TypeScript
- Tailwind CSS + scoped SCSS
- Pinia
- Nuxt i18n (`ar` default RTL, `en` LTR)
- Vite PWA

## Conventions

See [`docs/CURSOR_PROJECT_BRIEF.md`](docs/CURSOR_PROJECT_BRIEF.md) for the full agent/project brief (components regions, interfaces, SEO, WhatsApp-first, PWA wiring).

## Run locally

```bash
npm install
npm run dev -- --host 127.0.0.1 --port 4317
```

Open `http://127.0.0.1:4317`

## Useful env vars

```bash
NUXT_PUBLIC_SITE_URL=https://www.mashawirk.com
NUXT_PUBLIC_WHATSAPP_PHONE=971544313696
NUXT_PUBLIC_CONTACT_PHONE_DISPLAY="+971 54 431 3696"
```

## Agent prompt

Paste-ready kickoff prompt (Arabic + rules): [`docs/READY_PROMPT.md`](docs/READY_PROMPT.md)

## Deploy to your domain

See [`docs/DEPLOY_DOMAIN.md`](docs/DEPLOY_DOMAIN.md) for SEO files, env vars, sitemap/robots, and Search Console steps.

## Performance notes

- Images ship as **static WebP** under `public/images/` (no IPX)
- Below-fold sections use **Lazy\*** components + `hydrate-on-visible` / `hydrate-on-idle`
- Hero image is eager + preload (LCP); coverage cards use tiny `*-card.webp` with `loading="lazy"`
- Key routes are prerendered; speculative modulepreload/prefetch hints are stripped for mobile PSI

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run preview` — preview production build
