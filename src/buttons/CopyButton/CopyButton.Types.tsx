import { StyledComponentProps } from '../../types/StyledComponent'

export interface CopyButtonProps {
  /**The value to copy */
  value: string
  /**If the button can copy the value */
  copyable: boolean
}

export interface StyledTextProps extends StyledComponentProps {
  disabled: boolean
}
