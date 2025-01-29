import { TouchableOpacityProps } from 'react-native'
import { IconComponent } from '../../types/Icon'
import { Color } from '../../types/Color'
import { StyledComponentProps } from '../../types/StyledComponent'

export interface IconButtonProps extends TouchableOpacityProps {
  /**The icon to display in the button */
  icon: IconComponent
  /**Color of the button */
  color: Color
}

export interface StyledButtonProps extends StyledComponentProps {
  color: Color
}
