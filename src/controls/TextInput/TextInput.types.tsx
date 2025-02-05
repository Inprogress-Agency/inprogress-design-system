import { StyledComponentProps } from '../../types/StyledComponent'
import { TextInputProps as RNTextInputProps } from 'react-native'

export interface TextInputProps extends RNTextInputProps {
  /** Text to display in the input */
  value: string
  /** Whether the input is inside a modal
   * @default false
   */
  insideModal?: boolean
  /** Whether the input should be disabled
   * @default false
   */
  disabled?: boolean
  /** Whether the input has an error
   * @default null
   */
  error?: boolean
}

export interface StyledTextInputProps extends StyledComponentProps {
  disabled?: boolean
  error?: boolean
}
