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
import WhatsAppButton from '~/components/shared/WhatsAppButton.vue'
//#endregion

/***************************************
 **** Section General Imports  *********
 **************************************/
//#region General Imports
import { useServicesStore } from '~~/stores/servicesStore'
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
const { t } = useI18n()
const localePath = useLocalePath()
const servicesStore = useServicesStore()
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
const coverageItems = computed(() => servicesStore.coverageItems)
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
  <section class="home-coverage" aria-labelledby="coverage-title">
    <div class="home-coverage__head">
      <div>
        <h2 id="coverage-title">
          {{ t('home.coverageTitle') }}
        </h2>
        <p>{{ t('home.coverageSubtitle') }}</p>
      </div>
      <WhatsAppButton label-key="actions.contactWhatsapp" size="sm" />
    </div>

    <div class="home-coverage__grid">
      <template
        v-for="item in coverageItems"
        :key="item.id"
      >
        <!-- Real NuxtLink required: :is="'NuxtLink'" SSRs as a dead custom element (no href). -->
        <NuxtLink
          v-if="item.landingPath"
          :to="localePath(item.landingPath)"
          class="home-coverage__card reveal-on-scroll"
          :class="{ 'home-coverage__card--intl': item.international }"
        >
          <img
            :src="item.image"
            :alt="t(item.titleKey)"
            width="400"
            height="268"
            loading="lazy"
            decoding="async"
          >
          <div class="home-coverage__panel">
            <h3>{{ t(item.titleKey) }}</h3>
            <p>{{ t(item.descriptionKey) }}</p>
          </div>
        </NuxtLink>
        <article
          v-else
          class="home-coverage__card reveal-on-scroll"
          :class="{ 'home-coverage__card--intl': item.international }"
        >
          <img
            :src="item.image"
            :alt="t(item.titleKey)"
            width="400"
            height="268"
            loading="lazy"
            decoding="async"
          >
          <div class="home-coverage__panel">
            <h3>{{ t(item.titleKey) }}</h3>
            <p>{{ t(item.descriptionKey) }}</p>
          </div>
        </article>
      </template>
    </div>
  </section>
</template>

<style scoped lang="scss">
.home-coverage {
  &__head {
    @apply mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between;

    h2 {
      @apply mb-2 text-2xl font-semibold text-[var(--color-text)] md:text-3xl;
    }

    p {
      @apply text-sm text-[var(--color-text-muted)];
    }
  }

  &__grid {
    @apply grid gap-4 sm:grid-cols-2 xl:grid-cols-4;
  }

  &__card {
    @apply block overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] text-inherit no-underline shadow-soft transition duration-300;

    img,
    :deep(img) {
      @apply h-44 w-full object-cover transition duration-500 sm:h-48;
    }

    &:hover img {
      @apply scale-105;
    }

    &--intl {
      @apply ring-1 ring-gold/40;
    }
  }

  a.home-coverage__card {
    @apply cursor-pointer;
  }

  &__panel {
    @apply p-4;

    h3 {
      @apply mb-1 text-base font-bold text-[var(--color-text)];
    }

    p {
      @apply text-xs leading-6 text-[var(--color-text-muted)];
    }
  }
}
</style>
