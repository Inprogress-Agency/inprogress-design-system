import { TouchableOpacityProps } from 'react-native'
import { IconComponent } from '../../types/Icon'
import { Theme } from '../../types/Theme'
/**
 * Button with an icon on the left, content at center and an arrow on the right
 * @extends {TouchableOpacityProps}
 */
export interface ArrowButtonProps extends TouchableOpacityProps {
  /** Icon to display on the left */
  icon: IconComponent
  /** Title to display at the center */
  title: string
  /** Subtitle to display under the title */
  subtitle: string
}

export interface StyledButtonProps {
  theme: Theme
}

export interface StyledTitleProps {
  theme: Theme
}
