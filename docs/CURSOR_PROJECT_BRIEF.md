# Mashawirk — Cursor Agent Project Brief

Use this prompt for any future Cursor session on this project.

---

## Project

**Name:** Mashawirk / مشاويرك  
**Type:** Premium bilingual UAE transportation & delivery website + PWA  
**Stack:** Nuxt 4 + Vue 3 + TypeScript + Tailwind CSS + Pinia + Nuxt i18n + Vite PWA  
**Rendering:** SSR for all user-facing pages (SEO-critical). Do not set `ssr: false` on public pages.  
**No Vuetify.** Use Tailwind + scoped SCSS only.  
**No `@nuxt/image` / IPX** — use static WebP under `public/images/`.  
**Soft typography:** Cairo weights 400/500/600 only; no harsh bold / faux-bold.

---

## Business Focus (Updated)

Primary focus:
- Packages / orders / parcels
- Supplies & light goods
- International delivery to **Saudi Arabia, Oman, Qatar**
- UAE domestic delivery

Secondary (available, not homepage-first):
- Passenger transportation

Services (priority order):
1. Package & order delivery
2. Supplies & items delivery
3. Light goods / furniture transport (driver + vehicle ONLY — **no loading/unloading workers**)
4. International delivery (SA / OM / QA)
5. Gift delivery
6. VIP delivery
7. Pet delivery
8. Passenger transport (secondary)

WhatsApp is the **primary** booking channel. Website forms are secondary.  
All booking requests require company confirmation.  
Do not invent prices, fleet size, testimonials, or fake stats.  
Temporary phone: `+971 54 431 3696`  
Address: القصيص، دبي (Al Qusais, Dubai)

---

## Brand

- Colors: Navy `#101C2C`, Blue `#1C3448`, Gold `#C5A46D`, Ivory `#F5F3EF`, White `#FFFFFF`
- Gold = accent only
- Light mode = **default**; Dark mode supported + persisted
- Fonts: Cairo (AR), Manrope (EN)
- Logo: approved M + road + car mark (may later refine toward delivery/orders)
- Figma source of truth when linked via Figma MCP

---

## Architecture Rules (MANDATORY)

### Folders
- Shared components → `components/shared/`
- Page section components → `components/<page>/` or `components/home/`, etc.
- Interfaces → `interfaces/` (import types into components; do not inline prop types loosely)
- Stores → `stores/` (Pinia)
- Locales → `locales/ar.json` + `locales/en.json`
- Composables → `composables/`

### Component script structure (ALWAYS)

```vue
<script setup lang="ts">
/***************************************
 **** Section Imports Icons ************
 **************************************/
//#region Imports Icons
//#endregion

/***************************************
 **** Section Imports Components *******
 **************************************/
//#region Imports Components
//#endregion

/***************************************
 **** Section General Imports  *********
 **************************************/
//#region General Imports
//#endregion

/***************************************
 **** Section Props Declaration  ******
 **************************************/
//#region Props
//#endregion

/***************************************
 **** Section Emits Declaration ********
 **************************************/
//#region Emits
//#endregion

/***************************************
 **** Section Variables Declaration ****
 **************************************/
//#region Variables
//#endregion

/***************************************
 **** Section Meta Declaration  ******
 **************************************/
//#region Meta
//#endregion

/***************************************
 **** Section Computed Variables  ******
 **************************************/
//#region Computed
//#endregion

/***************************************
 **** Section Watchers *****************
 **************************************/
//#region Watchers
//#endregion

/***************************************
 **** Section Lifecycle Hooks  *********
 **************************************/
//#region Lifecycle Hooks
//#endregion

/***************************************
 **** Section Functions Declaration ****
 **************************************/
//#region Functions
//#endregion
</script>

<template>
  <div class="base-component"></div>
</template>

<style scoped lang="scss">
.base-component {
}
</style>
```

### Props / Types
- Entire app is TypeScript
- Props must be typed via interfaces imported from `~/interfaces/...`
- Always use `withDefaults(defineProps<...>(), { ... })` so nothing critical is undefined
- **Pages have NO props and NO emits**
- Pages compose section components only
- No Vuetify — Tailwind + scoped SCSS only
- Pinia stores live in `/stores` and are imported via `~~/stores/...` (Nuxt 4 `app/` srcDir)
- Public user-facing pages must remain SSR (`ssr: true`)

### Styling
- Tailwind + scoped SCSS
- Do NOT dump long Tailwind class soups in templates
- Prefer semantic BEM-like root classes + `@apply` in scoped SCSS
- Support light/dark via class strategy (`html.dark`)

### Pages pattern
- `definePageMeta` + strong `useHead` / `useSeoMeta`
- Lazy hydrate below-fold sections for performance
- SSR enabled for crawlable pages
- i18n routes for `ar` + `en` with proper `dir` RTL/LTR

### PWA
- Installable PWA
- Wire **every** install-related button to the same install composable
- Support `beforeinstallprompt` where available
- iOS: show Add to Home Screen guidance (no fake auto-install)
- Detect installed / standalone mode

### SEO / A11y / Performance
- Keyword-rich Arabic + English meta for delivery terms (طرود، توصيل الإمارات، نقل أغراض، توصيل السعودية، عمان، قطر، etc.)
- Semantic HTML, landmarks, labels, focus states, alt text
- Lazy load non-critical sections/images
- Prefer organic SEO best practices (not ads)

### Workflow
- Build feature by feature / page by page
- Do not invent business info
- Follow Figma when connected; do not redesign freely
- Explain important technical decisions briefly
- Ask before major architecture changes

---

## Public pages (SSR)

1. Home  
2. Services  
3. About  
4. Contact  
5. FAQ  
6. Privacy  
7. Terms  
(+ booking detail pages as designed)

---

## When starting a new Cursor chat

Paste this file and say:
1. Which page/feature to implement
2. Figma frame link (if any)
3. Any new business data (WhatsApp number, copy, etc.)
