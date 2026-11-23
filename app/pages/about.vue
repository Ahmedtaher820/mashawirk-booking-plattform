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
import PwaInstallButton from '~/components/shared/PwaInstallButton.vue'
import WhatsAppButton from '~/components/shared/WhatsAppButton.vue'
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
  pageName: 'About Page',
  title: 'About Page'
})

const localePath = useLocalePath()

useSeoPage(
  computed(() => ({
    title: t('about.seoTitle'),
    description: t('about.seoDescription')
  }))
)

useBreadcrumbJsonLd(
  computed(() => [
    { name: t('nav.home'), path: localePath('/') },
    { name: t('nav.about'), path: localePath('/about') }
  ])
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
const values = [
  {
    id: 'care',
    titleKey: 'about.valueCareTitle',
    textKey: 'about.valueCareText'
  },
  {
    id: 'clear',
    titleKey: 'about.valueClearTitle',
    textKey: 'about.valueClearText'
  },
  {
    id: 'coverage',
    titleKey: 'about.valueCoverageTitle',
    textKey: 'about.valueCoverageText'
  }
] as const

const focusItems = [
  'about.focusOrders',
  'about.focusSupplies',
  'about.focusIntl'
] as const
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
  <div class="about-page">
    <header class="about-page__hero">
      <p class="about-page__eyebrow">
        {{ t('about.eyebrow') }}
      </p>
      <h1>{{ t('about.title') }}</h1>
      <p class="about-page__lead">
        {{ t('about.lead') }}
      </p>
      <p>{{ t('about.text') }}</p>
    </header>

    <section class="about-page__story" aria-labelledby="about-story">
      <div>
        <h2 id="about-story">
          {{ t('about.storyTitle') }}
        </h2>
        <p>{{ t('about.storyText') }}</p>
      </div>
      <div>
        <h2>{{ t('about.missionTitle') }}</h2>
        <p>{{ t('about.missionText') }}</p>
      </div>
    </section>

    <section class="about-page__values" aria-labelledby="about-values">
      <h2 id="about-values">
        {{ t('about.valuesTitle') }}
      </h2>
      <div class="about-page__values-grid">
        <article
          v-for="item in values"
          :key="item.id"
        >
          <h3>{{ t(item.titleKey) }}</h3>
          <p>{{ t(item.textKey) }}</p>
        </article>
      </div>
    </section>

    <section class="about-page__focus" aria-labelledby="about-focus">
      <div>
        <h2 id="about-focus">
          {{ t('about.focusTitle') }}
        </h2>
        <ul>
          <li
            v-for="key in focusItems"
            :key="key"
          >
            {{ t(key) }}
          </li>
        </ul>
        <p class="about-page__note">
          {{ t('about.focusNote') }}
        </p>
      </div>
      <div class="about-page__base">
        <h2>{{ t('about.baseTitle') }}</h2>
        <p>{{ t('about.baseText') }}</p>
      </div>
    </section>

    <section class="about-page__cta" aria-labelledby="about-cta">
      <div>
        <h2 id="about-cta">
          {{ t('about.ctaTitle') }}
        </h2>
        <p>{{ t('about.ctaText') }}</p>
      </div>
      <div class="about-page__actions">
        <WhatsAppButton size="lg" />
        <PwaInstallButton size="md" />
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.about-page {
  @apply flex flex-col gap-6 md:gap-8;

  &__hero {
    @apply rounded-[2rem] bg-navy p-6 text-ivory md:p-10;

    h1 {
      @apply mb-4 text-3xl font-semibold md:text-5xl;
    }

    > p:last-child {
      @apply max-w-3xl text-sm leading-8 text-ivory/80 md:text-base;
    }
  }

  &__eyebrow {
    @apply mb-3 text-sm font-semibold text-gold;
  }

  &__lead {
    @apply mb-4 max-w-3xl text-lg font-semibold leading-8 text-ivory md:text-xl;
  }

  &__story {
    @apply grid gap-4 md:grid-cols-2;

    > div {
      @apply rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-soft;
    }

    h2 {
      @apply mb-3 text-xl font-semibold text-[var(--color-text)];
    }

    p {
      @apply text-sm leading-8 text-[var(--color-text-muted)];
    }
  }

  &__values {
    h2 {
      @apply mb-4 text-2xl font-semibold text-[var(--color-text)];
    }
  }

  &__values-grid {
    @apply grid gap-4 md:grid-cols-3;

    article {
      @apply rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-soft;
    }

    h3 {
      @apply mb-2 text-base font-bold text-gold;
    }

    p {
      @apply text-sm leading-7 text-[var(--color-text-muted)];
    }
  }

  &__focus {
    @apply grid gap-4 md:grid-cols-[1.2fr_0.8fr];

    > div {
      @apply rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-soft;
    }

    h2 {
      @apply mb-3 text-xl font-semibold text-[var(--color-text)];
    }

    ul {
      @apply mb-4 list-disc space-y-2 pe-5 text-sm leading-7 text-[var(--color-text-muted)];
    }

    p {
      @apply text-sm leading-7 text-[var(--color-text-muted)];
    }
  }

  &__note {
    @apply rounded-2xl bg-gold/10 px-4 py-3 text-xs font-medium leading-6 text-navy dark:text-ivory;
  }

  &__cta {
    @apply flex flex-col gap-5 rounded-[2rem] bg-navy p-6 text-ivory md:flex-row md:items-center md:justify-between md:p-8;

    h2 {
      @apply mb-2 text-2xl font-semibold;
    }

    p {
      @apply max-w-xl text-sm leading-7 text-ivory/80;
    }
  }

  &__actions {
    @apply flex flex-wrap gap-3;

    :deep(.app-button--secondary),
    :deep(.app-button--ghost) {
      color: #c5a46d !important;
      border-color: #c5a46d !important;
    }
  }
}
</style>
