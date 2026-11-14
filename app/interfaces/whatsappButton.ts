import type { ButtonSize, ButtonVariant } from '~/interfaces/ui'

export interface WhatsAppButtonProps {
  labelKey?: string
  message?: string
  size?: ButtonSize
  block?: boolean
  variant?: ButtonVariant
}
