import { ReactNode } from 'react'
import { LabelProps } from '../../texts/Label/Label.types'
import { InputAdornmentProps } from '../InputAdornment/InputAdornment.types'

export type LabeledInputProps = {
  /**
   * The title displayed in label
   */
  title: string
  /**
   * Component rendered after the text in input
   */
  children?: ReactNode
  /**
   * Props for label
   */
  labelProps?: LabelProps
  /**
   * Props for input
   */
  inputProps?: InputAdornmentProps
}
