export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'whatsapp'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface AppButtonProps {
  label?: string
  variant?: ButtonVariant
  size?: ButtonSize
  block?: boolean
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  to?: string
  href?: string
  external?: boolean
  ariaLabel?: string
}
