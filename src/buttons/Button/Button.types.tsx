import { TouchableOpacityProps } from 'react-native'
import { Theme } from '../../types/Theme'
import { Color } from '../../types/Color'
import { IconComponent } from '../../types/Icon'

export type ButtonVariant = 'primary' | 'secondary'

export interface ButtonProps extends TouchableOpacityProps {
  /** Icon à afficher sur le bouton avant le text
   * @default null
   */
  icon: IconComponent | null
  /** Icon à afficher sur le bouton après le text
   * @default null
   */
  afterIcon: IconComponent | null
  /** Text à afficher sur le bouton
   * @default ''
   */
  title: string
  /** Indique si le bouton est en cours de chargement
   * @default false
   */
  loading: boolean
  /** Indique si le bouton est désactivé
   * @default false
   */
  disabled: boolean
  /** Le style visuel du bouton
   * @default primary
   */
  variant: ButtonVariant
  /** Couleur du bouton
   * @default theme.colors.primary
   */
  color: Color | null
}

export interface StyledButtonProps {
  variant: ButtonVariant
  color: Color
  isDarkMode: boolean
  disabled: boolean
  theme: Theme
}

export interface StyledTextProps {
  variant: ButtonVariant
  color: Color
  isDarkMode: boolean
  theme: Theme
}
