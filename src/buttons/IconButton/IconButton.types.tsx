import { TouchableOpacityProps } from 'react-native'
import { Theme } from '../../../src/types/Theme'
import { IconComponent } from '../../types/Icon'
import { Color } from '../../types/Color'
/**
 * Button with icon
 * @extends {TouchableOpacityProps}
 */
export interface IconButtonProps extends TouchableOpacityProps {
  /**The icon to display in the button */
  icon: IconComponent
  /**Color of the button */
  color: Color
}

export interface StyledButtonProps {
  color: Color
  theme: Theme
}
