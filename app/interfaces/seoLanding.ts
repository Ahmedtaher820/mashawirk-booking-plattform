export interface SeoRelatedLink {
  to: string
  labelKey: string
}

export interface SeoLandingDefinition {
  slug: string
  kind: 'service' | 'city'
  image: string
  imageAltKey: string
  i18nPrefix: string
  whatsappMessageKey: string
  related: SeoRelatedLink[]
  pointKeys: string[]
  /** Optional how-it-works step keys under i18nPrefix (e.g. how1, how2, how3) */
  howKeys?: string[]
}

export interface SeoLandingViewProps {
  landing: SeoLandingDefinition
}
