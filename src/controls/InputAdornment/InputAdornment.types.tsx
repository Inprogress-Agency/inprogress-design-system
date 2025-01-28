import { IconComponent } from '../../types/Icon'
import { StyledComponentProps } from '../../types/StyledComponent'
import { TextInputProps } from '../TextInput/TextInput.types'

export interface InputAdornmentProps extends TextInputProps {
  /** Icon to display in the input */
  adornment: IconComponent | null
  /** Class name to apply to the children */
  childrenClassName: string | null
  /** Whether the input has an error */
  error: boolean | null
}

export interface StyledInputAdornmentProps extends StyledComponentProps {
  error: boolean | null
  adornment: IconComponent | null
}
