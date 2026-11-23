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
  pageName: 'FAQ Page',
  title: 'FAQ Page'
})

const localePath = useLocalePath()

useSeoPage(
  computed(() => ({
    title: t('faq.seoTitle'),
    description: t('faq.seoDescription')
  }))
)

useBreadcrumbJsonLd(
  computed(() => [
    { name: t('nav.home'), path: localePath('/') },
    { name: t('nav.faq'), path: localePath('/faq') }
  ])
)

useJsonLd(
  computed(() => ({
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: t('faq.q1'),
        acceptedAnswer: {
          '@type': 'Answer',
          text: t('faq.a1')
        }
      },
      {
        '@type': 'Question',
        name: t('faq.q2'),
        acceptedAnswer: {
          '@type': 'Answer',
          text: t('faq.a2')
        }
      },
      {
        '@type': 'Question',
        name: t('faq.q3'),
        acceptedAnswer: {
          '@type': 'Answer',
          text: t('faq.a3')
        }
      }
    ]
  })),
  'jsonld-faq'
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
const items = computed(() => [
  { q: 'faq.q1', a: 'faq.a1' },
  { q: 'faq.q2', a: 'faq.a2' },
  { q: 'faq.q3', a: 'faq.a3' }
])
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
  <div class="faq-page">
    <h1>{{ t('faq.title') }}</h1>

    <div class="faq-page__list">
      <article v-for="item in items" :key="item.q">
        <h2>{{ t(item.q) }}</h2>
        <p>{{ t(item.a) }}</p>
      </article>
    </div>

    <WhatsAppButton />
  </div>
</template>

<style scoped lang="scss">
.faq-page {
  @apply min-h-[50vh];

  h1 {
    @apply mb-6 text-3xl font-semibold text-[var(--color-text)];
  }

  &__list {
    @apply mb-6 space-y-4;
  }

  article {
    @apply rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-soft;

    h2 {
      @apply mb-2 text-lg font-semibold text-[var(--color-text)];
    }

    p {
      @apply text-sm leading-7 text-[var(--color-text-muted)];
    }
  }
}
</style>
