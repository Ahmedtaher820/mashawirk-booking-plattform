// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  ssr: true,

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt'
  ],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'ar',
        dir: 'rtl'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
      link: [
        { rel: 'icon', type: 'image/png', href: '/icons/icon-192.png' },
        { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon.png' },
        { rel: 'manifest', href: '/manifest.webmanifest' }
      ],
      meta: [
        { name: 'theme-color', content: '#101C2C' },
        { name: 'format-detection', content: 'telephone=no' },
        {
          name: 'google-site-verification',
          content: 'XCioJI4fU0GX2kVOJLk9TKkYDDUFW95gHkAhKxrL0rI'
        }
      ]
    }
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://mashawirk.com',
      whatsappPhone: process.env.NUXT_PUBLIC_WHATSAPP_PHONE || '971544313696',
      contactPhoneDisplay: process.env.NUXT_PUBLIC_CONTACT_PHONE_DISPLAY || '+971 54 431 3696',
      companyAddressAr: 'القصيص، دبي',
      companyAddressEn: 'Al Qusais, Dubai'
    }
  },

  i18n: {
    locales: [
      {
        code: 'ar',
        language: 'ar-AE',
        name: 'العربية',
        dir: 'rtl',
        file: 'ar.json'
      },
      {
        code: 'en',
        language: 'en-AE',
        name: 'English',
        dir: 'ltr',
        file: 'en.json'
      }
    ],
    defaultLocale: 'ar',
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: 'locales',
    restructureDir: 'i18n',
    // Avoid root redirect hop (hurts Lighthouse). Users switch language manually.
    detectBrowserLanguage: false,
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://mashawirk.com'
  },

  pinia: {
    storesDirs: ['./stores/**']
  },

  vite: {
    build: {
      cssCodeSplit: true,
      minify: 'esbuild',
      target: 'es2020',
      // Stop dumping every Lazy* chunk into <link rel=modulepreload> —
      // that starves LCP on Slow 4G / PageSpeed mobile.
      modulePreload: false
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  },

  routeRules: {
    '/**': {
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'X-Frame-Options': 'SAMEORIGIN'
      }
    },
    '/': { prerender: true },
    '/services': { prerender: true },
    '/about': { prerender: true },
    '/contact': { prerender: true },
    '/faq': { prerender: true },
    '/privacy': { prerender: true },
    '/terms': { prerender: true },
    '/en': { prerender: true },
    '/en/services': { prerender: true },
    '/en/about': { prerender: true },
    '/en/contact': { prerender: true },
    '/en/faq': { prerender: true },
    '/en/privacy': { prerender: true },
    '/en/terms': { prerender: true }
  },

  pwa: {
    registerType: 'autoUpdate',
    // Register SW after first paint — critical for Lighthouse LCP
    injectRegister: false,
    strategies: 'generateSW',
    includeAssets: [
      'icons/icon-192.png',
      'icons/icon-512.png',
      'icons/apple-touch-icon.png'
    ],
    manifest: {
      id: '/',
      name: 'Mashawirk | مشاويرك',
      short_name: 'مشاويرك',
      description:
        'توصيل طرود وطلبات ومستلزمات داخل الإمارات مع توصيل دولي إلى السعودية وعمان وقطر',
      theme_color: '#101C2C',
      background_color: '#F5F3EF',
      display: 'standalone',
      orientation: 'portrait-primary',
      lang: 'ar',
      dir: 'rtl',
      start_url: '/',
      scope: '/',
      icons: [
        {
          src: '/icons/icon-192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/icon-512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/icon-512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ]
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico,webp,woff2,webmanifest}'],
      cleanupOutdatedCaches: true
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 0
    },
    devOptions: {
      enabled: false,
      suppressWarnings: true,
      type: 'module',
      navigateFallback: '/'
    }
  },

  nitro: {
    compressPublicAssets: true,
    minify: true,
    prerender: {
      crawlLinks: false,
      routes: [
        '/',
        '/services',
        '/about',
        '/contact',
        '/faq',
        '/privacy',
        '/terms',
        '/en',
        '/en/services',
        '/en/about',
        '/en/contact',
        '/en/faq',
        '/en/privacy',
        '/en/terms'
      ]
    }
  },

  experimental: {
    payloadExtraction: true,
    componentIslands: true,
    // Fewer speculative prefetches competing with LCP on mobile PSI
    defaults: {
      nuxtLink: {
        prefetchOn: {
          interaction: true,
          visibility: false
        }
      }
    }
  }
})
