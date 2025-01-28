import { BottomSheetTextInputProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetTextInput'
import { TextInputProps } from 'react-native'
import { StyledComponentProps } from '../../types/StyledComponent'

export interface TextAreaProps {
  /**
   * Text to display in the text area
   */
  value: string
  /**
   * Reference to the input component
   * @default null
   */
  inputRef: React.RefObject<TextInputProps> | React.RefObject<BottomSheetTextInputProps> | null
  /**
   * Whether the text area is inside a modal
   * @default false
   */
  insideModal: boolean
  /**
   * Whether the text area is copyable
   * @default false
   */
  copyable: boolean
  /**
   * Whether the text area has a white background
   * If false, the text area will have a grey background
   * @default false
   */
  bgWhite: boolean
  /**
   * Maximum length of the text area
   * If set to 0, the text area will not show the maximum length
   * @default 0
   */
  maxLength: number
}

export interface StyledWrapperProps extends StyledComponentProps {
  bgWhite: boolean
}

export interface StyledCountProps extends StyledComponentProps {
  copyable: boolean
}
