export interface WhatsAppLinkOptions {
  message?: string
  phone?: string
}

export interface NavLinkItem {
  key: string
  to: string
  labelKey: string
}

export interface SocialContactInfo {
  phoneDisplay: string
  whatsappPhone: string
  addressAr: string
  addressEn: string
}

export interface SeoPageMeta {
  title: string
  description: string
  keywords: string
}

export interface QueryParams {
  filter?: Record<string, string | number | boolean>
  sort?: string
  page?: number
  limit?: number
}
