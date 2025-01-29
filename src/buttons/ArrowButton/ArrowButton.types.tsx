import { TouchableOpacityProps } from 'react-native'
import { IconComponent } from '../../types/Icon'

export interface ArrowButtonProps extends TouchableOpacityProps {
  /** Icon to display on the left */
  icon: IconComponent
  /** Title to display at the center */
  title: string
  /** Subtitle to display under the title */
  subtitle: string
}
