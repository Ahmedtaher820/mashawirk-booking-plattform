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
import HomeHeroSection from '~/components/home/HomeHeroSection.vue'
// Below-fold: Lazy* + hydrate-on-visible (SSR HTML stays, JS waits)
//#endregion

/***************************************
 **** Section Imports Functions *******
 **************************************/
//#region Imports Functions
//#endregion

/***************************************
 **** Section Meta Declaration  ******
 **************************************/
//#region meta
const { t } = useI18n()

definePageMeta({
  pageName: 'Home Page',
  title: 'Home Page'
})

useSeoPage(
  computed(() => ({
    title: t('home.seoTitle'),
    description: t('home.seoDescription')
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
  <div class="home-page">
    <HomeHeroSection />

    <div class="home-page__stack">
      <LazyHomeWhySection hydrate-on-visible />
      <LazyHomeFeaturesSection hydrate-on-visible />
      <LazyHomeStepsSection hydrate-on-visible />
      <LazyHomeServicesSection hydrate-on-visible />
      <LazyPwaInstallSection
        class="reveal-on-scroll"
        hydrate-on-visible
      />
      <LazyHomeCoverageSection hydrate-on-visible />
      <LazyInquiryStrip
        class="reveal-on-scroll"
        hydrate-on-visible
      />
      <LazyHomeWhatsappBand
        class="reveal-on-scroll"
        hydrate-on-visible
      />
      <LazyHomeBookingForm hydrate-on-visible />
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-page {
  @apply min-h-screen;

  &__stack {
    @apply mt-8 flex flex-col gap-8 md:gap-10;
  }
}
</style>
