export type ServicePriority = 'primary' | 'secondary'

export interface ServiceItem {
  id: string
  icon: string
  titleKey: string
  descriptionKey: string
  disclaimerKey?: string
  priority: ServicePriority
  whatsappMessageKey: string
}

export interface ServiceCardProps {
  service: ServiceItem
  compact?: boolean
  showWhatsapp?: boolean
}

export interface CoverageItem {
  id: string
  titleKey: string
  descriptionKey: string
  image: string
  international?: boolean
}
