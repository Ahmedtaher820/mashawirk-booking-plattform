<script setup lang="ts">
/***************************************
 **** Section Imports Icons ***********
 **************************************/
//#region Imports Icons
//#endregion

/***************************************
 **** Section Imports Components ******
 **************************************/
//#region Imports Components
import SeoLandingView from '~/components/seo/SeoLandingView.vue'
//#endregion

/***************************************
 **** Section Imports Functions *******
 **************************************/
//#region Imports Functions
import { useSeoLandingsStore } from '~~/stores/seoLandingsStore'
//#endregion

/***************************************
 **** Section Meta Declaration  ******
 **************************************/
//#region meta
const route = useRoute()
const { t } = useI18n()
const store = useSeoLandingsStore()
const slug = computed(() => String(route.params.slug || ''))

const landing = computed(() => store.getService(slug.value))

definePageMeta({
  pageName: 'Service Landing',
  title: 'Service Landing',
  validate: (route) => {
    const allowed = [
      'delivery',
      'supplies',
      'light-goods',
      'international',
      'gifts',
      'vip',
      'pets',
      'car-lift',
      'sales-rep',
      'courier'
    ]
    return allowed.includes(String(route.params.slug || ''))
  }
})

if (!landing.value) {
  throw createError({ statusCode: 404, statusMessage: 'Service page not found' })
}

const localePath = useLocalePath()
const config = useRuntimeConfig()
const siteUrl = computed(() =>
  String(config.public.siteUrl || 'https://www.mashawirk.com').replace(/\/$/, '')
)

useSeoPage(
  computed(() => ({
    title: t(`${landing.value!.i18nPrefix}.seoTitle`),
    description: t(`${landing.value!.i18nPrefix}.seoDescription`)
  }))
)

useBreadcrumbJsonLd(
  computed(() => [
    { name: t('nav.home'), path: localePath('/') },
    { name: t('nav.services'), path: localePath('/services') },
    {
      name: t(`${landing.value!.i18nPrefix}.navLabel`),
      path: localePath(`/services/${landing.value!.slug}`)
    }
  ])
)

useJsonLd(
  computed(() => {
    const prefix = landing.value!.i18nPrefix
    const pageUrl = `${siteUrl.value}${localePath(`/services/${landing.value!.slug}`)}`
    return [
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: t(`${prefix}.h1`),
        description: t(`${prefix}.seoDescription`),
        url: pageUrl,
        serviceType: t(`${prefix}.navLabel`),
        provider: {
          '@id': `${siteUrl.value}/#business`
        },
        areaServed: {
          '@type': 'Country',
          name: 'United Arab Emirates'
        },
        image: `${siteUrl.value}${landing.value!.image}`
      }
    ]
  }),
  'jsonld-service'
)
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
  <SeoLandingView
    v-if="landing"
    :landing="landing"
  />
</template>
