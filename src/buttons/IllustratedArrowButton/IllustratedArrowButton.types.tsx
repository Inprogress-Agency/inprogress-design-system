import { ImageSourcePropType, TouchableOpacityProps } from 'react-native'

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
