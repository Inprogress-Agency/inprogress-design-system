import { IconComponent } from '../../types/Icon'

interface Option {
  icon: IconComponent
  title: string
  subtitle?: string
  value: string
  disabled?: boolean
}

export interface SelectOptionsProps {
  /**
   * Value of the selected option
   */
  value: string
  /**
   * Function called when the value of the selected option changes
   */
  onChange: (value: string) => void
  /**
   * Options of the select
   */
  options: Option[]
  /**
   * Function called when the form is submitted
   */
  onSubmit: (value?: string) => void
}
