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
import type { AppButtonProps } from '~/interfaces/ui'
//#endregion

/***************************************
 **** Section Props Declaration  ******
 **************************************/
//#region Props
const props = withDefaults(defineProps<AppButtonProps>(), {
  label: '',
  variant: 'primary',
  size: 'md',
  block: false,
  disabled: false,
  type: 'button',
  to: undefined,
  href: undefined,
  external: false,
  ariaLabel: undefined
})
//#endregion

/***************************************
 **** Section Emits Declaration ********
 **************************************/
//#region Emits
const emit = defineEmits<{
  click: [event: MouseEvent]
}>()
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
const classes = computed(() => [
  'app-button',
  'app-button-link',
  `app-button--${props.variant}`,
  `app-button--${props.size}`,
  {
    'app-button--block': props.block,
    'app-button--disabled': props.disabled
  }
])
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
const onClick = (event: MouseEvent) => {
  if (props.disabled) {
    event.preventDefault()
    return
  }

  emit('click', event)
}
//#endregion
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :class="classes"
    :aria-label="ariaLabel || label"
    @click="onClick"
  >
    <slot>{{ label }}</slot>
  </NuxtLink>

  <a
    v-else-if="href"
    :href="href"
    :class="classes"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :aria-label="ariaLabel || label"
    @click="onClick"
  >
    <slot>{{ label }}</slot>
  </a>

  <button
    v-else
    :type="type"
    :class="classes"
    :disabled="disabled"
    :aria-label="ariaLabel || label"
    @click="onClick"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<style scoped lang="scss">
.app-button,
.app-button-link {
  @apply inline-flex items-center justify-center gap-2 rounded-xl font-medium transition duration-200;
  @apply focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold;
}

.app-button--sm {
  @apply px-3 py-2 text-sm;
}

.app-button--md {
  @apply px-5 py-3 text-sm md:text-base;
}

.app-button--lg {
  @apply px-6 py-3.5 text-base;
}

.app-button--block {
  @apply w-full;
}

.app-button--primary {
  background: #c5a46d !important;
  color: #101c2c !important;
  border: 1px solid #c5a46d;

  &:hover {
    background: #d4b984 !important;
    color: #101c2c !important;
  }
}

.app-button--secondary {
  border: 1px solid #c5a46d !important;
  background: transparent !important;
  color: #c5a46d !important;

  &:hover {
    background: rgba(197, 164, 109, 0.14) !important;
    color: #d4b984 !important;
  }
}

.app-button--ghost {
  border: 1px solid transparent;
  background: transparent !important;
  color: #c5a46d !important;

  &:hover {
    background: rgba(197, 164, 109, 0.12) !important;
    color: #d4b984 !important;
  }
}

.app-button--whatsapp {
  background: #25d366 !important;
  color: #ffffff !important;
  border: 1px solid #25d366;

  &:hover {
    background: #1ebe57 !important;
    color: #ffffff !important;
  }
}

.app-button--disabled {
  @apply cursor-not-allowed opacity-60;
}

/* Force gold text even when parents set text-ivory / text-navy */
:deep(.app-button--secondary),
.app-button--secondary,
a.app-button--secondary,
button.app-button--secondary {
  color: #c5a46d !important;
}

:deep(.app-button--ghost),
.app-button--ghost,
a.app-button--ghost,
button.app-button--ghost {
  color: #c5a46d !important;
}
</style>
