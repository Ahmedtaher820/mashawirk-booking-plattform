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
import HomeBookingForm from '~/components/home/HomeBookingForm.vue'
import ServiceCard from '~/components/shared/ServiceCard.vue'
import WhatsAppButton from '~/components/shared/WhatsAppButton.vue'
//#endregion

/***************************************
 **** Section Imports Functions *******
 **************************************/
//#region Imports Functions
import { useServicesStore } from '~~/stores/servicesStore'
import { useSeoLandingsStore } from '~~/stores/seoLandingsStore'
//#endregion

/***************************************
 **** Section Meta Declaration  ******
 **************************************/
//#region meta
const { t } = useI18n()
const localePath = useLocalePath()

definePageMeta({
  pageName: 'Services Page',
  title: 'Services Page'
})

useSeoPage(
  computed(() => ({
    title: t('services.seoTitle'),
    description: t('services.seoDescription')
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
const servicesStore = useServicesStore()
const seoLandingsStore = useSeoLandingsStore()
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
const services = computed(() => servicesStore.allServices)
const hubServices = computed(() => seoLandingsStore.services)
const hubCities = computed(() => seoLandingsStore.cities)
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
  <div class="services-page">
    <header class="services-page__hero">
      <div>
        <h1>{{ t('services.pageTitle') }}</h1>
        <p>{{ t('services.pageText') }}</p>
      </div>
      <WhatsAppButton size="lg" />
    </header>

    <section class="services-page__hubs" aria-labelledby="services-hubs-title">
      <div class="services-page__section-head">
        <h2 id="services-hubs-title">
          {{ t('seoCommon.hubsTitle') }}
        </h2>
        <p>{{ t('seoCommon.hubsText') }}</p>
      </div>
      <div class="services-page__hub-grid">
        <NuxtLink
          v-for="hub in hubServices"
          :key="hub.slug"
          :to="localePath(`/services/${hub.slug}`)"
          class="services-page__hub-card"
        >
          <img
            :src="hub.image"
            :alt="t(hub.imageAltKey)"
            width="640"
            height="420"
            loading="lazy"
            decoding="async"
          >
          <div>
            <h3>{{ t(`${hub.i18nPrefix}.navLabel`) }}</h3>
            <p>{{ t(`${hub.i18nPrefix}.lead`) }}</p>
          </div>
        </NuxtLink>
      </div>
    </section>

    <div class="services-page__grid">
      <ServiceCard
        v-for="service in services"
        :key="service.id"
        :service="service"
      />
    </div>

    <section class="services-page__cities" aria-labelledby="services-cities-title">
      <div class="services-page__section-head">
        <h2 id="services-cities-title">
          {{ t('seoCommon.citiesTitle') }}
        </h2>
        <p>{{ t('seoCommon.citiesText') }}</p>
      </div>
      <ul class="services-page__city-list">
        <li
          v-for="city in hubCities"
          :key="city.slug"
        >
          <NuxtLink :to="localePath(`/cities/${city.slug}`)">
            {{ t(`${city.i18nPrefix}.navLabel`) }}
          </NuxtLink>
        </li>
      </ul>
    </section>

    <HomeBookingForm class="services-page__form" />
  </div>
</template>

<style scoped lang="scss">
.services-page {
  @apply min-h-screen;

  &__hero {
    @apply mb-8 flex flex-col gap-5 rounded-3xl bg-navy p-6 text-ivory md:flex-row md:items-center md:justify-between md:p-8;

    h1 {
      @apply mb-3 text-3xl font-semibold;
    }

    p {
      @apply max-w-3xl text-sm leading-8 text-ivory/80;
    }

    :deep(.app-button--secondary),
    :deep(.app-button--ghost) {
      color: #c5a46d !important;
      border-color: #c5a46d !important;
    }
  }

  &__section-head {
    @apply mb-5;

    h2 {
      @apply mb-2 text-2xl font-semibold text-[var(--color-text)];
    }

    p {
      @apply text-sm text-[var(--color-text-muted)];
    }
  }

  &__hubs,
  &__cities {
    @apply mb-10;
  }

  &__hub-grid {
    @apply grid gap-4 md:grid-cols-2 xl:grid-cols-3;
  }

  &__hub-card {
    @apply overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-soft transition hover:border-gold;

    img {
      @apply h-40 w-full object-cover;
    }

    > div {
      @apply p-5;
    }

    h3 {
      @apply mb-2 text-lg font-semibold text-[var(--color-text)];
    }

    p {
      @apply line-clamp-3 text-sm leading-7 text-[var(--color-text-muted)];
    }
  }

  &__grid {
    @apply grid gap-4 sm:grid-cols-2 xl:grid-cols-4;
  }

  &__city-list {
    @apply flex flex-wrap gap-3;

    a {
      @apply inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition hover:border-gold hover:text-gold;
    }
  }

  &__form {
    @apply mt-10;
  }
}
</style>
