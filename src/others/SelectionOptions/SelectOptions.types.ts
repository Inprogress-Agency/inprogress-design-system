import { IconComponent } from '../../types/Icon'

interface Option {
  icon: IconComponent
  title: string
  subtitle?: string
  value: string
  disabled?: boolean
}

export interface SelectOptionsProps {
  value: string
  onChange: (value: string) => void
  options: Option[]
  onSubmit: () => void
}
