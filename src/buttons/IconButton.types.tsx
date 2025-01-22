import { ReactNode } from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Color } from '../types/Color'
import { Theme } from '../types/Theme'
/**
 * Button with icon
 * @extends {TouchableOpacityProps}
 */
export interface IconButtonProps extends TouchableOpacityProps {
  /**The icon to display in the button */
  icon: ReactNode
  /**Color of the button */
  color: Color
}

export interface StyledButtonProps {
  color: Color
  theme: Theme
}
