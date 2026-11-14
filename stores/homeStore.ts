import { defineStore } from 'pinia'
import type {
  HomeFeatureItem,
  HomeHighlightItem,
  HomeStepItem
} from '~/interfaces/home'

export const useHomeStore = defineStore('home', () => {
  const highlights = computed<HomeHighlightItem[]>(() => [
    {
      id: 'orders',
      number: '٠١',
      titleKey: 'highlights.orders',
      subtitleKey: 'highlights.ordersSub'
    },
    {
      id: 'supplies',
      number: '٠٢',
      titleKey: 'highlights.supplies',
      subtitleKey: 'highlights.suppliesSub'
    },
    {
      id: 'international',
      number: '٠٣',
      titleKey: 'highlights.international',
      subtitleKey: 'highlights.internationalSub'
    }
  ])

  const features = computed<HomeFeatureItem[]>(() => [
    {
      id: 'fast',
      icon: 'bolt',
      titleKey: 'features.fastTitle',
      descriptionKey: 'features.fastText'
    },
    {
      id: 'pros',
      icon: 'shield',
      titleKey: 'features.prosTitle',
      descriptionKey: 'features.prosText'
    },
    {
      id: 'safe',
      icon: 'lock',
      titleKey: 'features.safeTitle',
      descriptionKey: 'features.safeText'
    }
  ])

  const steps = computed<HomeStepItem[]>(() => [
    {
      id: 'one',
      step: '1',
      titleKey: 'steps.oneTitle',
      descriptionKey: 'steps.oneText'
    },
    {
      id: 'two',
      step: '2',
      titleKey: 'steps.twoTitle',
      descriptionKey: 'steps.twoText'
    },
    {
      id: 'three',
      step: '3',
      titleKey: 'steps.threeTitle',
      descriptionKey: 'steps.threeText'
    }
  ])

  return {
    highlights,
    features,
    steps
  }
})
