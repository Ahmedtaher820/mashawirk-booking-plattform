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
  pageName: 'Privacy Page',
  title: 'Privacy Page'
})

useSeoPage(
  computed(() => ({
    title: t('privacy.seoTitle'),
    description: t('privacy.seoDescription'),
    keywords: t('privacy.seoTitle')
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
  <article class="legal-page">
    <h1>{{ t('privacy.title') }}</h1>
    <p>{{ t('privacy.text') }}</p>
  </article>
</template>

<style scoped lang="scss">
.legal-page {
  @apply min-h-[40vh] rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-soft md:p-10;

  h1 {
    @apply mb-4 text-3xl font-semibold text-[var(--color-text)];
  }

  p {
    @apply text-sm leading-8 text-[var(--color-text-muted)] md:text-base;
  }
}
</style>
