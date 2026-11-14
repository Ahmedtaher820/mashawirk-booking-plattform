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
NUXT_PUBLIC_SITE_URL=https://mashawirk.ae
NUXT_PUBLIC_WHATSAPP_PHONE=971500000000
NUXT_PUBLIC_CONTACT_PHONE_DISPLAY="+971 50 000 0000"
```

## Performance notes

- Images ship as **WebP** and go through **`@nuxt/image` (NuxtImg)** with responsive `sizes` / `srcset`
- Below-fold sections use **Lazy\*** components + `hydrate-on-visible` / `hydrate-on-idle`
- Hero image is eager + preload (LCP); coverage / PWA screenshots are `loading="lazy"`

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run preview` — preview production build
