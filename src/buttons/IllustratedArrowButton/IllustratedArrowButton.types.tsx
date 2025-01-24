import { ImageSourcePropType, TouchableOpacityProps } from 'react-native'
import { Theme } from '../../types/Theme'

/**
 * Button with an image on the left , content at center and an arrow on the right
 * @extends {TouchableOpacityProps}
 */
export interface IllustratedArrowButtonProps extends TouchableOpacityProps {
  /** Image to display on the left */
  image: ImageSourcePropType
  /** Content to display at the center */
  content: React.ReactNode
}

export interface StyledButtonProps {
  theme: Theme
}

export interface StyledImageProps {
  theme: Theme
}

export interface StyledContentProps {
  theme: Theme
}
