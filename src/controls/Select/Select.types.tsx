import { ReactNode } from 'react'
import { StyledComponentProps } from '../../types/StyledComponent'
import { Color } from '../../types/Color'

interface Option {
  label: string
  value: any
}

export interface SelectProps {
  /**
   * The initial option value selected
   */
  initialValue?: any
  /**
   * The title displayed on top of the select
   */
  title: string
  /**
   * The options of the select
   */
  options: Option[]
  /**
   * The onChange event of the select
   */
  onChange: (value: any) => void
  /**
   * Custom element used to open the select modal and display the selected option
   */
  children?: (ref: any) => ReactNode
}

export interface DefaultSelectProps extends SelectProps {
  placeholder: string
  variant: 'primary' | 'secondary'
}

export interface DefaultButtonProps {
  disabled: boolean
  selected: Option | null
  placeholder: string
  value: string
  variant: 'primary' | 'secondary'
}

export interface StyledTouchableOpacityProps extends StyledComponentProps {
  variant: 'primary' | 'secondary'
  selectedBorderColor: Color | undefined
  disabled: boolean
}

export interface StyledTextProps extends StyledComponentProps {
  selectedColor: Color | undefined
  value: string
  disabled: boolean
}
