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
import AppButton from '~/components/shared/AppButton.vue'
import PwaInstallButton from '~/components/shared/PwaInstallButton.vue'
import WhatsAppButton from '~/components/shared/WhatsAppButton.vue'
//#endregion

/***************************************
 **** Section General Imports  *********
 **************************************/
//#region General Imports
import type { HomeHeroProps } from '~/interfaces/home'
import { useHomeStore } from '~~/stores/homeStore'
//#endregion

/***************************************
 **** Section Props Declaration  ******
 **************************************/
//#region Props
const props = withDefaults(defineProps<HomeHeroProps>(), {
  showInstallButton: true
})
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
const { t } = useI18n()
const localePath = useLocalePath()
const homeStore = useHomeStore()
//#endregion

/***************************************
 **** Section Meta Declaration  ******
 **************************************/
//#region Meta
// Preload the mobile LCP candidate (static WebP, no IPX round-trip)
useHead({
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: '/images/hero-640.webp',
      type: 'image/webp',
      fetchpriority: 'high'
    } as Record<string, string>
  ]
})
//#endregion

/***************************************
 **** Section Computed Variables  ******
 **************************************/
//#region Computed
const highlights = computed(() => homeStore.highlights)
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
  <section class="home-hero">
    <div class="home-hero__media" aria-hidden="true">
      <div class="home-hero__media-frame">
        <picture>
          <source
            media="(max-width: 768px)"
            type="image/webp"
            srcset="/images/hero-640.webp"
          >
          <source
            media="(min-width: 769px)"
            type="image/webp"
            srcset="/images/hero-960.webp 1x, /images/hero-1200.webp 2x"
          >
          <img
            src="/images/hero-640.webp"
            alt=""
            width="640"
            height="361"
            class="home-hero__image"
            loading="eager"
            fetchpriority="high"
            decoding="async"
          >
        </picture>
      </div>
    </div>

    <div class="home-hero__content">
      <p class="home-hero__eyebrow">
        {{ t('home.heroEyebrow') }}
      </p>
      <h1 class="home-hero__title">
        {{ t('home.heroTitle') }}
      </h1>
      <p class="home-hero__text">
        {{ t('home.heroText') }}
      </p>

      <div class="home-hero__actions">
        <WhatsAppButton size="lg" />
        <AppButton
          :to="localePath('/services')"
          :label="t('actions.exploreServices')"
          variant="secondary"
          size="lg"
        />
        <PwaInstallButton
          v-if="props.showInstallButton"
          size="md"
          variant="primary"
          label-key="actions.installApp"
        />
      </div>
    </div>

    <div class="home-hero__highlights">
      <article
        v-for="item in highlights"
        :key="item.id"
        class="home-hero__highlight"
      >
        <span class="home-hero__number">{{ item.number }}</span>
        <div>
          <h2>{{ t(item.titleKey) }}</h2>
          <p>{{ t(item.subtitleKey) }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
.home-hero {
  @apply grid gap-6 rounded-[2rem] bg-navy p-5 text-ivory md:p-8 lg:grid-cols-[1.05fr_0.95fr];

  &__media {
    @apply order-first lg:order-none;
  }

  &__media-frame {
    @apply aspect-[16/9] overflow-hidden rounded-[1.5rem] bg-navy-soft;
  }

  &__image {
    @apply h-full w-full object-cover;
  }

  &__content {
    @apply flex min-h-[14rem] flex-col justify-center md:min-h-[16rem];
  }

  &__eyebrow {
    @apply mb-3 min-h-[1.25rem] text-sm font-medium text-gold;
  }

  &__title {
    @apply mb-4 text-3xl font-semibold leading-[1.35] md:text-5xl;
  }

  &__text {
    @apply mb-6 max-w-xl text-sm font-normal leading-8 text-ivory/80 md:text-base;
  }

  &__actions {
    @apply flex flex-wrap gap-3;

    :deep(.app-button--secondary),
    :deep(.app-button--ghost) {
      color: #c5a46d !important;
      border-color: #c5a46d !important;
    }
  }

  &__highlights {
    @apply grid gap-3 lg:col-span-2 lg:grid-cols-3;
  }

  &__highlight {
    @apply flex items-start gap-3 rounded-2xl bg-white/5 p-4;
  }

  &__number {
    @apply text-lg font-semibold text-gold;
  }

  h2 {
    @apply text-base font-semibold;
  }

  p {
    @apply text-sm font-normal leading-7 text-ivory/75;
  }
}
</style>
