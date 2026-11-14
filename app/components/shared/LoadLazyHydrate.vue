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
import type { LoadLazyHydrateProps } from '~/interfaces/lazyHydrate'
//#endregion

/***************************************
 **** Section Props Declaration  ******
 **************************************/
//#region Props
const props = withDefaults(defineProps<LoadLazyHydrateProps>(), {
  clientOnly: true,
  margin: '240px',
  tag: 'div',
  minHeight: '8rem',
  failsafeMs: 8000
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
const shouldRender = ref(!props.clientOnly)
const rootEl = ref<HTMLElement | null>(null)
const { bindReveal } = useRevealOnScroll()
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
const placeholderStyle = computed(() =>
  shouldRender.value
    ? undefined
    : {
        minHeight: props.minHeight
      }
)
//#endregion

/***************************************
 **** Section Watchers *****************
 **************************************/
//#region Watchers
watch(shouldRender, async (value) => {
  if (!value) {
    return
  }

  await nextTick()
  bindReveal(rootEl.value)
})
//#endregion

/***************************************
 **** Section Lifecycle Hooks  *********
 **************************************/
//#region Lifecycle Hooks
onMounted(() => {
  if (!props.clientOnly) {
    shouldRender.value = true
    return
  }

  if (!rootEl.value || typeof IntersectionObserver === 'undefined') {
    shouldRender.value = true
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        shouldRender.value = true
        observer.disconnect()
      }
    },
    {
      rootMargin: props.margin
    }
  )

  observer.observe(rootEl.value)

  const failsafe = window.setTimeout(() => {
    shouldRender.value = true
    observer.disconnect()
  }, props.failsafeMs)

  onBeforeUnmount(() => {
    window.clearTimeout(failsafe)
    observer.disconnect()
  })
})
//#endregion

/***************************************
 **** Section Functions Declaration ****
 **************************************/
//#region Functions
//#endregion
</script>

<template>
  <component
    :is="tag"
    ref="rootEl"
    class="load-lazy-hydrate"
    :style="placeholderStyle"
  >
    <slot v-if="shouldRender" />
  </component>
</template>

<style scoped lang="scss">
.load-lazy-hydrate {
  @apply w-full;
  content-visibility: auto;
  contain-intrinsic-size: auto 12rem;
}
</style>
