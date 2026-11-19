import { defineStore } from 'pinia'
import type { CoverageItem, ServiceItem } from '~/interfaces/services'
import { cityLandingPathById, serviceLandingPathById } from '~~/stores/seoLandingsStore'

export const useServicesStore = defineStore('services', () => {
  const allServices = computed<ServiceItem[]>(() => [
    {
      id: 'orders',
      icon: 'package',
      titleKey: 'services.ordersTitle',
      descriptionKey: 'services.ordersText',
      priority: 'primary',
      whatsappMessageKey: 'services.ordersMsg',
      landingPath: serviceLandingPathById.orders
    },
    {
      id: 'supplies',
      icon: 'box',
      titleKey: 'services.suppliesTitle',
      descriptionKey: 'services.suppliesText',
      priority: 'primary',
      whatsappMessageKey: 'services.suppliesMsg',
      landingPath: serviceLandingPathById.supplies
    },
    {
      id: 'light-goods',
      icon: 'truck',
      titleKey: 'services.lightGoodsTitle',
      descriptionKey: 'services.lightGoodsText',
      disclaimerKey: 'services.lightGoodsDisclaimer',
      priority: 'primary',
      whatsappMessageKey: 'services.lightGoodsMsg',
      landingPath: serviceLandingPathById['light-goods']
    },
    {
      id: 'international',
      icon: 'globe',
      titleKey: 'services.internationalTitle',
      descriptionKey: 'services.internationalText',
      priority: 'primary',
      whatsappMessageKey: 'services.internationalMsg',
      landingPath: serviceLandingPathById.international
    },
    {
      id: 'gifts',
      icon: 'gift',
      titleKey: 'services.giftsTitle',
      descriptionKey: 'services.giftsText',
      priority: 'primary',
      whatsappMessageKey: 'services.giftsMsg',
      landingPath: serviceLandingPathById.gifts
    },
    {
      id: 'vip',
      icon: 'star',
      titleKey: 'services.vipTitle',
      descriptionKey: 'services.vipText',
      priority: 'primary',
      whatsappMessageKey: 'services.vipMsg',
      landingPath: serviceLandingPathById.vip
    },
    {
      id: 'pets',
      icon: 'pet',
      titleKey: 'services.petsTitle',
      descriptionKey: 'services.petsText',
      priority: 'primary',
      whatsappMessageKey: 'services.petsMsg',
      landingPath: serviceLandingPathById.pets
    },
    {
      id: 'passenger',
      icon: 'car',
      titleKey: 'services.passengerTitle',
      descriptionKey: 'services.passengerText',
      priority: 'primary',
      whatsappMessageKey: 'services.passengerMsg',
      landingPath: serviceLandingPathById.passenger
    },
    {
      id: 'sales-rep',
      icon: 'sales',
      titleKey: 'services.salesRepTitle',
      descriptionKey: 'services.salesRepText',
      priority: 'primary',
      whatsappMessageKey: 'services.salesRepMsg',
      landingPath: serviceLandingPathById['sales-rep']
    },
    {
      id: 'courier',
      icon: 'courier',
      titleKey: 'services.courierTitle',
      descriptionKey: 'services.courierText',
      priority: 'primary',
      whatsappMessageKey: 'services.courierMsg',
      landingPath: serviceLandingPathById.courier
    }
  ])

  const primaryServices = computed(() => allServices.value)
  const secondaryServices = computed<ServiceItem[]>(() => [])

  const coverageItems = computed<CoverageItem[]>(() => [
    {
      id: 'dubai',
      titleKey: 'coverage.dubai',
      descriptionKey: 'coverage.dubaiText',
      image: '/images/coverage/dubai-card.webp',
      landingPath: cityLandingPathById.dubai
    },
    {
      id: 'abudhabi',
      titleKey: 'coverage.abudhabi',
      descriptionKey: 'coverage.abudhabiText',
      image: '/images/coverage/abudhabi-card.webp',
      landingPath: cityLandingPathById.abudhabi
    },
    {
      id: 'sharjah',
      titleKey: 'coverage.sharjah',
      descriptionKey: 'coverage.sharjahText',
      image: '/images/coverage/sharjah-card.webp',
      landingPath: cityLandingPathById.sharjah
    },
    {
      id: 'ajman',
      titleKey: 'coverage.ajman',
      descriptionKey: 'coverage.ajmanText',
      image: '/images/coverage/ajman-card.webp',
      landingPath: cityLandingPathById.ajman
    },
    {
      id: 'rak',
      titleKey: 'coverage.rak',
      descriptionKey: 'coverage.rakText',
      image: '/images/coverage/uae-card.webp',
      landingPath: cityLandingPathById.rak
    },
    {
      id: 'fujairah',
      titleKey: 'coverage.fujairah',
      descriptionKey: 'coverage.fujairahText',
      image: '/images/coverage/uae-card.webp',
      landingPath: cityLandingPathById.fujairah
    },
    {
      id: 'uaq',
      titleKey: 'coverage.uaq',
      descriptionKey: 'coverage.uaqText',
      image: '/images/coverage/uae-card.webp',
      landingPath: cityLandingPathById.uaq
    },
    {
      id: 'saudi',
      titleKey: 'coverage.saudi',
      descriptionKey: 'coverage.internationalNote',
      image: '/images/coverage/saudi-card.webp',
      international: true,
      landingPath: '/services/international'
    },
    {
      id: 'oman',
      titleKey: 'coverage.oman',
      descriptionKey: 'coverage.internationalNote',
      image: '/images/coverage/oman-card.webp',
      international: true,
      landingPath: '/services/international'
    },
    {
      id: 'qatar',
      titleKey: 'coverage.qatar',
      descriptionKey: 'coverage.internationalNote',
      image: '/images/coverage/qatar-card.webp',
      international: true,
      landingPath: '/services/international'
    }
  ])

  return {
    primaryServices,
    secondaryServices,
    allServices,
    coverageItems
  }
})
