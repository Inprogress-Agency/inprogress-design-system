import { TouchableOpacityProps } from 'react-native'
import { IconComponent } from '../../types/Icon'
import { Color } from '../../types/Color'
import { StyledComponentProps } from '../../types/StyledComponent'

export type ButtonVariant = 'primary' | 'secondary'

export interface ButtonProps extends TouchableOpacityProps {
  /** Icon to display before the text
   * @default null
   */
  icon?: IconComponent
  /** Icon to display after the text
   * @default null
   */
  afterIcon?: IconComponent
  /** Text to display on the button
   * @default ''
   */
  title: string
  /** Indicates if the button is loading
   * @default false
   */
  loading?: boolean
  /** Indicates if the button is disabled
   * @default false
   */
  disabled?: boolean
  /** Visual style of the button
   * @default primary
   */
  variant?: ButtonVariant
  /** Color of the button
   * @default theme.colors.primary
   */
  color?: Color
}

export interface StyledButtonProps extends StyledComponentProps {
  variant: ButtonVariant
  color: Color
  isDarkMode: boolean
  disabled: boolean
}

export interface StyledTextProps extends StyledComponentProps {
  variant: ButtonVariant
  color: Color
  isDarkMode: boolean
}
