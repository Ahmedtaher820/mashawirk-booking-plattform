import { defineStore } from 'pinia'
import type { SeoLandingDefinition } from '~/interfaces/seoLanding'

const servicePages: SeoLandingDefinition[] = [
  {
    slug: 'delivery',
    kind: 'service',
    image: '/images/hero-delivery.webp',
    imageAltKey: 'landingServices.delivery.imageAlt',
    i18nPrefix: 'landingServices.delivery',
    whatsappMessageKey: 'landingServices.delivery.whatsappMsg',
    pointKeys: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8'],
    howKeys: ['how1', 'how2', 'how3'],
    related: [
      { to: '/services/courier', labelKey: 'landingServices.courier.navLabel' },
      { to: '/services/supplies', labelKey: 'landingServices.supplies.navLabel' },
      { to: '/cities/dubai', labelKey: 'landingCities.dubai.navLabel' },
      { to: '/cities/sharjah', labelKey: 'landingCities.sharjah.navLabel' }
    ]
  },
  {
    slug: 'supplies',
    kind: 'service',
    image: '/images/coverage/sharjah.webp',
    imageAltKey: 'landingServices.supplies.imageAlt',
    i18nPrefix: 'landingServices.supplies',
    whatsappMessageKey: 'landingServices.supplies.whatsappMsg',
    pointKeys: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8'],
    howKeys: ['how1', 'how2', 'how3'],
    related: [
      { to: '/services/delivery', labelKey: 'landingServices.delivery.navLabel' },
      { to: '/services/light-goods', labelKey: 'landingServices.lightGoods.navLabel' },
      { to: '/cities/dubai', labelKey: 'landingCities.dubai.navLabel' },
      { to: '/cities/abu-dhabi', labelKey: 'landingCities.abuDhabi.navLabel' }
    ]
  },
  {
    slug: 'light-goods',
    kind: 'service',
    image: '/images/coverage/uae.webp',
    imageAltKey: 'landingServices.lightGoods.imageAlt',
    i18nPrefix: 'landingServices.lightGoods',
    whatsappMessageKey: 'landingServices.lightGoods.whatsappMsg',
    pointKeys: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8'],
    howKeys: ['how1', 'how2', 'how3'],
    related: [
      { to: '/services/supplies', labelKey: 'landingServices.supplies.navLabel' },
      { to: '/services/delivery', labelKey: 'landingServices.delivery.navLabel' },
      { to: '/cities/dubai', labelKey: 'landingCities.dubai.navLabel' },
      { to: '/cities/ajman', labelKey: 'landingCities.ajman.navLabel' }
    ]
  },
  {
    slug: 'international',
    kind: 'service',
    image: '/images/coverage/saudi.webp',
    imageAltKey: 'landingServices.international.imageAlt',
    i18nPrefix: 'landingServices.international',
    whatsappMessageKey: 'landingServices.international.whatsappMsg',
    pointKeys: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8'],
    howKeys: ['how1', 'how2', 'how3'],
    related: [
      { to: '/services/delivery', labelKey: 'landingServices.delivery.navLabel' },
      { to: '/services/courier', labelKey: 'landingServices.courier.navLabel' },
      { to: '/cities/dubai', labelKey: 'landingCities.dubai.navLabel' },
      { to: '/contact', labelKey: 'nav.contact' }
    ]
  },
  {
    slug: 'gifts',
    kind: 'service',
    image: '/images/coverage/dubai.webp',
    imageAltKey: 'landingServices.gifts.imageAlt',
    i18nPrefix: 'landingServices.gifts',
    whatsappMessageKey: 'landingServices.gifts.whatsappMsg',
    pointKeys: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8'],
    howKeys: ['how1', 'how2', 'how3'],
    related: [
      { to: '/services/vip', labelKey: 'landingServices.vip.navLabel' },
      { to: '/services/delivery', labelKey: 'landingServices.delivery.navLabel' },
      { to: '/cities/dubai', labelKey: 'landingCities.dubai.navLabel' },
      { to: '/cities/sharjah', labelKey: 'landingCities.sharjah.navLabel' }
    ]
  },
  {
    slug: 'vip',
    kind: 'service',
    image: '/images/coverage/abudhabi.webp',
    imageAltKey: 'landingServices.vip.imageAlt',
    i18nPrefix: 'landingServices.vip',
    whatsappMessageKey: 'landingServices.vip.whatsappMsg',
    pointKeys: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8'],
    howKeys: ['how1', 'how2', 'how3'],
    related: [
      { to: '/services/gifts', labelKey: 'landingServices.gifts.navLabel' },
      { to: '/services/delivery', labelKey: 'landingServices.delivery.navLabel' },
      { to: '/services/courier', labelKey: 'landingServices.courier.navLabel' },
      { to: '/cities/dubai', labelKey: 'landingCities.dubai.navLabel' }
    ]
  },
  {
    slug: 'pets',
    kind: 'service',
    image: '/images/coverage/ajman.webp',
    imageAltKey: 'landingServices.pets.imageAlt',
    i18nPrefix: 'landingServices.pets',
    whatsappMessageKey: 'landingServices.pets.whatsappMsg',
    pointKeys: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8'],
    howKeys: ['how1', 'how2', 'how3'],
    related: [
      { to: '/services/delivery', labelKey: 'landingServices.delivery.navLabel' },
      { to: '/services/car-lift', labelKey: 'landingServices.carLift.navLabel' },
      { to: '/cities/dubai', labelKey: 'landingCities.dubai.navLabel' },
      { to: '/cities/abu-dhabi', labelKey: 'landingCities.abuDhabi.navLabel' }
    ]
  },
  {
    slug: 'car-lift',
    kind: 'service',
    image: '/images/coverage/dubai.webp',
    imageAltKey: 'landingServices.carLift.imageAlt',
    i18nPrefix: 'landingServices.carLift',
    whatsappMessageKey: 'landingServices.carLift.whatsappMsg',
    pointKeys: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8'],
    howKeys: ['how1', 'how2', 'how3'],
    related: [
      { to: '/services/delivery', labelKey: 'landingServices.delivery.navLabel' },
      { to: '/services/sales-rep', labelKey: 'landingServices.salesRep.navLabel' },
      { to: '/cities/dubai', labelKey: 'landingCities.dubai.navLabel' },
      { to: '/cities/abu-dhabi', labelKey: 'landingCities.abuDhabi.navLabel' }
    ]
  },
  {
    slug: 'sales-rep',
    kind: 'service',
    image: '/images/coverage/abudhabi.webp',
    imageAltKey: 'landingServices.salesRep.imageAlt',
    i18nPrefix: 'landingServices.salesRep',
    whatsappMessageKey: 'landingServices.salesRep.whatsappMsg',
    pointKeys: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8'],
    howKeys: ['how1', 'how2', 'how3'],
    related: [
      { to: '/services/courier', labelKey: 'landingServices.courier.navLabel' },
      { to: '/services/delivery', labelKey: 'landingServices.delivery.navLabel' },
      { to: '/cities/dubai', labelKey: 'landingCities.dubai.navLabel' },
      { to: '/contact', labelKey: 'nav.contact' }
    ]
  },
  {
    slug: 'courier',
    kind: 'service',
    image: '/images/coverage/uae.webp',
    imageAltKey: 'landingServices.courier.imageAlt',
    i18nPrefix: 'landingServices.courier',
    whatsappMessageKey: 'landingServices.courier.whatsappMsg',
    pointKeys: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8'],
    howKeys: ['how1', 'how2', 'how3'],
    related: [
      { to: '/services/delivery', labelKey: 'landingServices.delivery.navLabel' },
      { to: '/services/sales-rep', labelKey: 'landingServices.salesRep.navLabel' },
      { to: '/cities/sharjah', labelKey: 'landingCities.sharjah.navLabel' },
      { to: '/cities/ajman', labelKey: 'landingCities.ajman.navLabel' }
    ]
  }
]

const cityPages: SeoLandingDefinition[] = [
  {
    slug: 'dubai',
    kind: 'city',
    image: '/images/coverage/dubai.webp',
    imageAltKey: 'landingCities.dubai.imageAlt',
    i18nPrefix: 'landingCities.dubai',
    whatsappMessageKey: 'landingCities.dubai.whatsappMsg',
    pointKeys: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7'],
    howKeys: ['how1', 'how2', 'how3'],
    related: [
      { to: '/services/delivery', labelKey: 'landingServices.delivery.navLabel' },
      { to: '/services/car-lift', labelKey: 'landingServices.carLift.navLabel' },
      { to: '/cities/sharjah', labelKey: 'landingCities.sharjah.navLabel' },
      { to: '/cities/abu-dhabi', labelKey: 'landingCities.abuDhabi.navLabel' }
    ]
  },
  {
    slug: 'abu-dhabi',
    kind: 'city',
    image: '/images/coverage/abudhabi.webp',
    imageAltKey: 'landingCities.abuDhabi.imageAlt',
    i18nPrefix: 'landingCities.abuDhabi',
    whatsappMessageKey: 'landingCities.abuDhabi.whatsappMsg',
    pointKeys: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7'],
    howKeys: ['how1', 'how2', 'how3'],
    related: [
      { to: '/services/delivery', labelKey: 'landingServices.delivery.navLabel' },
      { to: '/services/courier', labelKey: 'landingServices.courier.navLabel' },
      { to: '/cities/dubai', labelKey: 'landingCities.dubai.navLabel' },
      { to: '/cities/sharjah', labelKey: 'landingCities.sharjah.navLabel' }
    ]
  },
  {
    slug: 'sharjah',
    kind: 'city',
    image: '/images/coverage/sharjah.webp',
    imageAltKey: 'landingCities.sharjah.imageAlt',
    i18nPrefix: 'landingCities.sharjah',
    whatsappMessageKey: 'landingCities.sharjah.whatsappMsg',
    pointKeys: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7'],
    howKeys: ['how1', 'how2', 'how3'],
    related: [
      { to: '/services/delivery', labelKey: 'landingServices.delivery.navLabel' },
      { to: '/services/car-lift', labelKey: 'landingServices.carLift.navLabel' },
      { to: '/cities/dubai', labelKey: 'landingCities.dubai.navLabel' },
      { to: '/cities/ajman', labelKey: 'landingCities.ajman.navLabel' }
    ]
  },
  {
    slug: 'ajman',
    kind: 'city',
    image: '/images/coverage/ajman.webp',
    imageAltKey: 'landingCities.ajman.imageAlt',
    i18nPrefix: 'landingCities.ajman',
    whatsappMessageKey: 'landingCities.ajman.whatsappMsg',
    pointKeys: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7'],
    howKeys: ['how1', 'how2', 'how3'],
    related: [
      { to: '/services/delivery', labelKey: 'landingServices.delivery.navLabel' },
      { to: '/services/courier', labelKey: 'landingServices.courier.navLabel' },
      { to: '/cities/sharjah', labelKey: 'landingCities.sharjah.navLabel' },
      { to: '/cities/ras-al-khaimah', labelKey: 'landingCities.rasAlKhaimah.navLabel' }
    ]
  },
  {
    slug: 'ras-al-khaimah',
    kind: 'city',
    image: '/images/coverage/uae.webp',
    imageAltKey: 'landingCities.rasAlKhaimah.imageAlt',
    i18nPrefix: 'landingCities.rasAlKhaimah',
    whatsappMessageKey: 'landingCities.rasAlKhaimah.whatsappMsg',
    pointKeys: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7'],
    howKeys: ['how1', 'how2', 'how3'],
    related: [
      { to: '/services/delivery', labelKey: 'landingServices.delivery.navLabel' },
      { to: '/cities/fujairah', labelKey: 'landingCities.fujairah.navLabel' },
      { to: '/cities/ajman', labelKey: 'landingCities.ajman.navLabel' },
      { to: '/cities/dubai', labelKey: 'landingCities.dubai.navLabel' }
    ]
  },
  {
    slug: 'fujairah',
    kind: 'city',
    image: '/images/coverage/uae.webp',
    imageAltKey: 'landingCities.fujairah.imageAlt',
    i18nPrefix: 'landingCities.fujairah',
    whatsappMessageKey: 'landingCities.fujairah.whatsappMsg',
    pointKeys: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7'],
    howKeys: ['how1', 'how2', 'how3'],
    related: [
      { to: '/services/delivery', labelKey: 'landingServices.delivery.navLabel' },
      { to: '/cities/ras-al-khaimah', labelKey: 'landingCities.rasAlKhaimah.navLabel' },
      { to: '/cities/sharjah', labelKey: 'landingCities.sharjah.navLabel' },
      { to: '/cities/dubai', labelKey: 'landingCities.dubai.navLabel' }
    ]
  },
  {
    slug: 'umm-al-quwain',
    kind: 'city',
    image: '/images/coverage/uae.webp',
    imageAltKey: 'landingCities.ummAlQuwain.imageAlt',
    i18nPrefix: 'landingCities.ummAlQuwain',
    whatsappMessageKey: 'landingCities.ummAlQuwain.whatsappMsg',
    pointKeys: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7'],
    howKeys: ['how1', 'how2', 'how3'],
    related: [
      { to: '/services/delivery', labelKey: 'landingServices.delivery.navLabel' },
      { to: '/cities/ajman', labelKey: 'landingCities.ajman.navLabel' },
      { to: '/cities/ras-al-khaimah', labelKey: 'landingCities.rasAlKhaimah.navLabel' },
      { to: '/cities/dubai', labelKey: 'landingCities.dubai.navLabel' }
    ]
  }
]

/** Maps home/services card ids to SEO landing paths */
export const serviceLandingPathById: Record<string, string> = {
  orders: '/services/delivery',
  supplies: '/services/supplies',
  'light-goods': '/services/light-goods',
  international: '/services/international',
  gifts: '/services/gifts',
  vip: '/services/vip',
  pets: '/services/pets',
  passenger: '/services/car-lift',
  'sales-rep': '/services/sales-rep',
  courier: '/services/courier'
}

export const cityLandingPathById: Record<string, string> = {
  dubai: '/cities/dubai',
  abudhabi: '/cities/abu-dhabi',
  sharjah: '/cities/sharjah',
  ajman: '/cities/ajman',
  rak: '/cities/ras-al-khaimah',
  fujairah: '/cities/fujairah',
  uaq: '/cities/umm-al-quwain',
  other: '/services/delivery'
}

export const useSeoLandingsStore = defineStore('seoLandings', () => {
  const services = computed(() => servicePages)
  const cities = computed(() => cityPages)

  const getService = (slug: string) => servicePages.find((item) => item.slug === slug)
  const getCity = (slug: string) => cityPages.find((item) => item.slug === slug)

  return {
    services,
    cities,
    getService,
    getCity
  }
})
