import type { SeoPageMeta } from '~/interfaces/shared'

export const useSeoPage = (meta: MaybeRefOrGetter<SeoPageMeta>) => {
  const config = useRuntimeConfig()
  const route = useRoute()
  const { locale } = useI18n()

  const resolved = computed(() => toValue(meta))

  useSeoMeta({
    title: () => resolved.value.title,
    description: () => resolved.value.description,
    keywords: () => resolved.value.keywords,
    ogTitle: () => resolved.value.title,
    ogDescription: () => resolved.value.description,
    ogType: 'website',
    ogUrl: () => `${config.public.siteUrl}${route.fullPath}`,
    ogLocale: () => (locale.value === 'ar' ? 'ar_AE' : 'en_AE'),
    twitterCard: 'summary_large_image',
    twitterTitle: () => resolved.value.title,
    twitterDescription: () => resolved.value.description
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
        href: `${config.public.siteUrl}${route.path}`
      }
    ]
  }))
}
