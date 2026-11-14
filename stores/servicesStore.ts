import { defineStore } from 'pinia'
import type { CoverageItem, ServiceItem } from '~/interfaces/services'

export const useServicesStore = defineStore('services', () => {
  const allServices = computed<ServiceItem[]>(() => [
    {
      id: 'orders',
      icon: 'package',
      titleKey: 'services.ordersTitle',
      descriptionKey: 'services.ordersText',
      priority: 'primary',
      whatsappMessageKey: 'services.ordersMsg'
    },
    {
      id: 'supplies',
      icon: 'box',
      titleKey: 'services.suppliesTitle',
      descriptionKey: 'services.suppliesText',
      priority: 'primary',
      whatsappMessageKey: 'services.suppliesMsg'
    },
    {
      id: 'light-goods',
      icon: 'truck',
      titleKey: 'services.lightGoodsTitle',
      descriptionKey: 'services.lightGoodsText',
      disclaimerKey: 'services.lightGoodsDisclaimer',
      priority: 'primary',
      whatsappMessageKey: 'services.lightGoodsMsg'
    },
    {
      id: 'international',
      icon: 'globe',
      titleKey: 'services.internationalTitle',
      descriptionKey: 'services.internationalText',
      priority: 'primary',
      whatsappMessageKey: 'services.internationalMsg'
    },
    {
      id: 'gifts',
      icon: 'gift',
      titleKey: 'services.giftsTitle',
      descriptionKey: 'services.giftsText',
      priority: 'primary',
      whatsappMessageKey: 'services.giftsMsg'
    },
    {
      id: 'vip',
      icon: 'star',
      titleKey: 'services.vipTitle',
      descriptionKey: 'services.vipText',
      priority: 'primary',
      whatsappMessageKey: 'services.vipMsg'
    },
    {
      id: 'pets',
      icon: 'pet',
      titleKey: 'services.petsTitle',
      descriptionKey: 'services.petsText',
      priority: 'primary',
      whatsappMessageKey: 'services.petsMsg'
    },
    {
      id: 'passenger',
      icon: 'car',
      titleKey: 'services.passengerTitle',
      descriptionKey: 'services.passengerText',
      priority: 'primary',
      whatsappMessageKey: 'services.passengerMsg'
    }
  ])

  const primaryServices = computed(() => allServices.value)
  const secondaryServices = computed<ServiceItem[]>(() => [])

  const coverageItems = computed<CoverageItem[]>(() => [
    {
      id: 'dubai',
      titleKey: 'coverage.dubai',
      descriptionKey: 'coverage.dubaiText',
      image: '/images/coverage/dubai-card.webp'
    },
    {
      id: 'abudhabi',
      titleKey: 'coverage.abudhabi',
      descriptionKey: 'coverage.abudhabiText',
      image: '/images/coverage/abudhabi-card.webp'
    },
    {
      id: 'sharjah',
      titleKey: 'coverage.sharjah',
      descriptionKey: 'coverage.sharjahText',
      image: '/images/coverage/sharjah-card.webp'
    },
    {
      id: 'ajman',
      titleKey: 'coverage.ajman',
      descriptionKey: 'coverage.ajmanText',
      image: '/images/coverage/ajman-card.webp'
    },
    {
      id: 'other',
      titleKey: 'coverage.otherEmirates',
      descriptionKey: 'coverage.otherEmiratesText',
      image: '/images/coverage/uae-card.webp'
    },
    {
      id: 'saudi',
      titleKey: 'coverage.saudi',
      descriptionKey: 'coverage.internationalNote',
      image: '/images/coverage/saudi-card.webp',
      international: true
    },
    {
      id: 'oman',
      titleKey: 'coverage.oman',
      descriptionKey: 'coverage.internationalNote',
      image: '/images/coverage/oman-card.webp',
      international: true
    },
    {
      id: 'qatar',
      titleKey: 'coverage.qatar',
      descriptionKey: 'coverage.internationalNote',
      image: '/images/coverage/qatar-card.webp',
      international: true
    }
  ])

  return {
    primaryServices,
    secondaryServices,
    allServices,
    coverageItems
  }
})
