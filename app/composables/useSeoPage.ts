import type { SeoPageMeta } from '~/interfaces/shared'

export const useSeoPage = (meta: MaybeRefOrGetter<SeoPageMeta>) => {
  const config = useRuntimeConfig()
  const route = useRoute()
  const { locale } = useI18n()
  const switchLocalePath = useSwitchLocalePath()

  const resolved = computed(() => toValue(meta))
  const siteUrl = computed(() => String(config.public.siteUrl || 'https://www.mashawirk.com').replace(/\/$/, ''))
  const canonicalPath = computed(() => route.path || '/')
  const canonicalUrl = computed(() => `${siteUrl.value}${canonicalPath.value === '/' ? '/' : canonicalPath.value}`)
  const ogImage = computed(() => `${siteUrl.value}/images/hero-960.webp`)
  const arPath = computed(() => switchLocalePath('ar') || '/')
  const enPath = computed(() => switchLocalePath('en') || '/en')

  useSeoMeta({
    title: () => resolved.value.title,
    description: () => resolved.value.description,
    // Do not dump keyword research into <meta name="keywords"> — Google ignores it
    // and stuffing hurts trust. Keywords belong in title, H1, and body copy.
    ogTitle: () => resolved.value.title,
    ogDescription: () => resolved.value.description,
    ogType: 'website',
    ogUrl: () => canonicalUrl.value,
    ogLocale: () => (locale.value === 'ar' ? 'ar_AE' : 'en_AE'),
    ogImage: () => ogImage.value,
    twitterCard: 'summary_large_image',
    twitterTitle: () => resolved.value.title,
    twitterDescription: () => resolved.value.description,
    twitterImage: () => ogImage.value
  })

  useHead(() => ({
    title: resolved.value.title,
    htmlAttrs: {
      lang: locale.value === 'ar' ? 'ar' : 'en',
      dir: locale.value === 'ar' ? 'rtl' : 'ltr'
    },
    link: [
      {
        rel: 'canonical',
        href: canonicalUrl.value
      },
      {
        rel: 'alternate',
        hreflang: 'ar-AE',
        href: `${siteUrl.value}${arPath.value === '/' ? '/' : arPath.value}`
      },
      {
        rel: 'alternate',
        hreflang: 'en-AE',
        href: `${siteUrl.value}${enPath.value}`
      },
      {
        rel: 'alternate',
        hreflang: 'x-default',
        href: `${siteUrl.value}${arPath.value === '/' ? '/' : arPath.value}`
      }
    ],
    meta: [
      {
        name: 'robots',
        content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
      },
      {
        name: 'geo.region',
        content: 'AE-DU'
      },
      {
        name: 'geo.placename',
        content: 'Al Qusais, Dubai'
      }
    ]
  }))
}
