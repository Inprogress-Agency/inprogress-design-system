import { Theme } from '../../types/Theme'

/**
 * Button to copy a value
 */
export interface CopyButtonProps {
  /**The value to copy */
  value: string
  /**If the button can copy the value */
  copyable: boolean
}

export interface StyledTextProps {
  disabled: boolean
  theme: Theme
}
