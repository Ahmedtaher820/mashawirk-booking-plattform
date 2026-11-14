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
//#endregion

/***************************************
 **** Section General Imports  *********
 **************************************/
//#region General Imports
import { useHomeStore } from '~~/stores/homeStore'
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
const homeStore = useHomeStore()
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
const features = computed(() => homeStore.features)
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
  <section class="home-features" aria-labelledby="features-title">
    <h2 id="features-title">
      {{ t('home.featuresTitle') }}
    </h2>

    <div class="home-features__grid">
      <article v-for="item in features" :key="item.id" class="home-features__card reveal-on-scroll">
        <h3>{{ t(item.titleKey) }}</h3>
        <p>{{ t(item.descriptionKey) }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
.home-features {
  h2 {
    @apply mb-6 text-2xl font-semibold text-[var(--color-text)] md:text-3xl;
  }

  &__grid {
    @apply grid gap-4 md:grid-cols-3;
  }

  &__card {
    @apply rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-soft;

    h3 {
      @apply mb-2 text-lg font-semibold text-[var(--color-text)];
    }

    p {
      @apply text-sm leading-7 text-[var(--color-text-muted)];
    }
  }
}
</style>
