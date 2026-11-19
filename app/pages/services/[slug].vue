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

useSeoPage(
  computed(() => ({
    title: t(`${landing.value!.i18nPrefix}.seoTitle`),
    description: t(`${landing.value!.i18nPrefix}.seoDescription`)
  }))
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
