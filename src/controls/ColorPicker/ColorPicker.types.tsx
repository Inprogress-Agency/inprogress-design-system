import { StyledComponentProps } from '../../types/StyledComponent'
import { ReactNode } from 'react'
import { Color } from '../../types/Color'
import { TextInputProps } from '../TextInput/TextInput.types'

export interface StyledViewColorProps extends StyledComponentProps {
  editable: true
  selectedColor: Color
}

export interface ColorPickerProps extends TextInputProps {
  title: string
  editable?: boolean
  children?: ReactNode
  value: Color
}
