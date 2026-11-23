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

const landing = computed(() => store.getCity(slug.value))

definePageMeta({
  pageName: 'City Landing',
  title: 'City Landing',
  validate: (route) => {
    const allowed = [
      'dubai',
      'abu-dhabi',
      'sharjah',
      'ajman',
      'ras-al-khaimah',
      'fujairah',
      'umm-al-quwain'
    ]
    return allowed.includes(String(route.params.slug || ''))
  }
})

if (!landing.value) {
  throw createError({ statusCode: 404, statusMessage: 'City page not found' })
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
    { name: t('nav.cities'), path: localePath('/services') },
    {
      name: t(`${landing.value!.i18nPrefix}.navLabel`),
      path: localePath(`/cities/${landing.value!.slug}`)
    }
  ])
)

useJsonLd(
  computed(() => {
    const prefix = landing.value!.i18nPrefix
    const pageUrl = `${siteUrl.value}${localePath(`/cities/${landing.value!.slug}`)}`
    const cityName = t(`${prefix}.schemaCity`)
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
          '@type': 'City',
          name: cityName,
          containedInPlace: {
            '@type': 'Country',
            name: 'United Arab Emirates'
          }
        },
        image: `${siteUrl.value}${landing.value!.image}`
      }
    ]
  }),
  'jsonld-city-service'
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
