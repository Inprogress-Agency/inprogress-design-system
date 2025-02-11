import { ImageProps, ImageSourcePropType } from 'react-native'

export interface GrayscaleImageProps extends Omit<ImageProps, 'source'> {
  /**
   * Active/Désactive le filtre en niveaux de gris
   */
  grayscale?: boolean

  /**
   * Source de l'image
   */
  source: ImageSourcePropType
}
