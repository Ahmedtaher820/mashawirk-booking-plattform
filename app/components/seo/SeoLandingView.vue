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
import type { SeoLandingViewProps } from '~/interfaces/seoLanding'
//#endregion

/***************************************
 **** Section Props Declaration  ******
 **************************************/
//#region Props
const props = defineProps<SeoLandingViewProps>()
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
const prefix = computed(() => props.landing.i18nPrefix)
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
const points = computed(() =>
  props.landing.pointKeys.map((key) => t(`${prefix.value}.${key}`))
)

const whatsappMessage = computed(() => t(props.landing.whatsappMessageKey))
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
  <article class="seo-landing">
    <header class="seo-landing__hero">
      <div class="seo-landing__copy">
        <p class="seo-landing__eyebrow">
          {{ t(`${prefix}.eyebrow`) }}
        </p>
        <h1>{{ t(`${prefix}.h1`) }}</h1>
        <p class="seo-landing__lead">
          {{ t(`${prefix}.lead`) }}
        </p>
        <WhatsAppButton
          size="lg"
          :message="whatsappMessage"
        />
      </div>
      <figure class="seo-landing__media">
        <img
          :src="landing.image"
          :alt="t(landing.imageAltKey)"
          width="960"
          height="640"
          loading="eager"
          decoding="async"
        >
      </figure>
    </header>

    <section class="seo-landing__body" aria-labelledby="seo-overview">
      <h2 id="seo-overview">
        {{ t(`${prefix}.overviewTitle`) }}
      </h2>
      <p>{{ t(`${prefix}.body1`) }}</p>
      <p>{{ t(`${prefix}.body2`) }}</p>
    </section>

    <section class="seo-landing__points" aria-labelledby="seo-points">
      <h2 id="seo-points">
        {{ t(`${prefix}.pointsTitle`) }}
      </h2>
      <ul>
        <li
          v-for="(point, index) in points"
          :key="`${landing.slug}-point-${index}`"
        >
          {{ point }}
        </li>
      </ul>
    </section>

    <section class="seo-landing__audience" aria-labelledby="seo-audience">
      <div>
        <h2 id="seo-audience">
          {{ t(`${prefix}.audienceTitle`) }}
        </h2>
        <p>{{ t(`${prefix}.audienceText`) }}</p>
      </div>
      <div>
        <h2>{{ t(`${prefix}.processTitle`) }}</h2>
        <p>{{ t(`${prefix}.processText`) }}</p>
      </div>
    </section>

    <section class="seo-landing__related" aria-labelledby="seo-related">
      <h2 id="seo-related">
        {{ t('seoCommon.relatedTitle') }}
      </h2>
      <ul>
        <li
          v-for="link in landing.related"
          :key="`${landing.slug}-${link.to}`"
        >
          <NuxtLink :to="localePath(link.to)">
            {{ t(link.labelKey) }}
          </NuxtLink>
        </li>
      </ul>
    </section>

    <section class="seo-landing__cta" aria-labelledby="seo-cta">
      <div>
        <h2 id="seo-cta">
          {{ t(`${prefix}.ctaTitle`) }}
        </h2>
        <p>{{ t(`${prefix}.ctaText`) }}</p>
      </div>
      <WhatsAppButton
        size="lg"
        :message="whatsappMessage"
      />
    </section>
  </article>
</template>

<style scoped lang="scss">
.seo-landing {
  @apply flex flex-col gap-8 md:gap-10;

  &__hero {
    @apply grid gap-6 overflow-hidden rounded-[2rem] bg-navy text-ivory lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch;
  }

  &__copy {
    @apply flex flex-col justify-center gap-4 p-6 md:p-10;

    h1 {
      @apply text-3xl font-semibold leading-tight md:text-4xl;
    }
  }

  &__eyebrow {
    @apply text-sm font-semibold text-gold;
  }

  &__lead {
    @apply max-w-2xl text-sm leading-8 text-ivory/85 md:text-base;
  }

  &__media {
    @apply m-0 min-h-[16rem] overflow-hidden;

    img {
      @apply h-full w-full object-cover;
    }
  }

  &__body,
  &__points,
  &__audience > div,
  &__related {
    @apply rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-soft md:p-8;
  }

  &__body,
  &__points,
  &__audience,
  &__related {
    h2 {
      @apply mb-3 text-xl font-semibold text-[var(--color-text)] md:text-2xl;
    }

    p {
      @apply text-sm leading-8 text-[var(--color-text-muted)];
    }
  }

  &__body p + p {
    @apply mt-4;
  }

  &__points ul {
    @apply list-disc space-y-3 pe-5 text-sm leading-7 text-[var(--color-text-muted)];
  }

  &__audience {
    @apply grid gap-4 md:grid-cols-2;
  }

  &__related ul {
    @apply flex flex-wrap gap-3;
  }

  &__related a {
    @apply inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition hover:border-gold hover:text-gold;
  }

  &__cta {
    @apply flex flex-col gap-5 rounded-[2rem] bg-navy p-6 text-ivory md:flex-row md:items-center md:justify-between md:p-8;

    h2 {
      @apply mb-2 text-2xl font-semibold;
    }

    p {
      @apply max-w-xl text-sm leading-7 text-ivory/80;
    }

    :deep(.app-button--secondary),
    :deep(.app-button--ghost) {
      color: #c5a46d !important;
      border-color: #c5a46d !important;
    }
  }
}
</style>
