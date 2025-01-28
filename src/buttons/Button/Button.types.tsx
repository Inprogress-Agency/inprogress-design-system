import { ColorValue, TouchableOpacityProps } from 'react-native'
import { Theme } from '../../types/Theme'
import { IconComponent } from '../../types/Icon'

export type ButtonVariant = 'primary' | 'secondary'

export interface ButtonProps extends TouchableOpacityProps {
  /** Icon to display before the text
   * @default null
   */
  icon: IconComponent | null
  /** Icon to display after the text
   * @default null
   */
  afterIcon: IconComponent | null
  /** Text to display on the button
   * @default ''
   */
  title: string
  /** Indicates if the button is loading
   * @default false
   */
  loading: boolean
  /** Indicates if the button is disabled
   * @default false
   */
  disabled: boolean
  /** Visual style of the button
   * @default primary
   */
  variant: ButtonVariant
  /** Color of the button
   * @default theme.colors.primary
   */
  color: ColorValue | null
}

export interface StyledButtonProps {
  variant: ButtonVariant
  color: ColorValue
  isDarkMode: boolean
  disabled: boolean
  theme: Theme
}

export interface StyledTextProps {
  variant: ButtonVariant
  color: ColorValue
  isDarkMode: boolean
  theme: Theme
}
