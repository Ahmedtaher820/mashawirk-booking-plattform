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
  /** Optional. Prefer natural keywords in titles/body — avoid stuffing this tag. */
  keywords?: string
  /** Absolute URL or site-relative path for og/twitter image (default /images/og-default.jpg). */
  ogImagePath?: string
  ogImageWidth?: number
  ogImageHeight?: number
  ogImageType?: string
  ogImageAlt?: string
}

export interface QueryParams {
  filter?: Record<string, string | number | boolean>
  sort?: string
  page?: number
  limit?: number
}
