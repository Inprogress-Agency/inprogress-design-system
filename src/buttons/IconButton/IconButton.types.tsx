import { TouchableOpacityProps } from 'react-native'
import { Color } from '../../../src/types/Color'
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
  color: Color
}

export interface StyledButtonProps {
  color: Color
  theme: Theme
}
