import { ColorValue, TouchableOpacityProps } from 'react-native'
import { Theme } from '../../../src/types/Theme'
import { IconComponent } from '../../types/Icon'
/**
 * Button with icon
 * @extends {TouchableOpacityProps}
 */
export interface IconButtonProps extends TouchableOpacityProps {
  /**The icon to display in the button */
  icon: IconComponent
  /**Color of the button */
  color: ColorValue
}

export interface StyledButtonProps {
  color: ColorValue
  theme: Theme
}
