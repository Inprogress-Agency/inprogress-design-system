import { ImageProps } from 'react-native'

export interface GrayscaleImageProps extends ImageProps {
  /**
   * Wether the image should be grayscale
   */
  grayscale?: boolean
  /**
   * Source of the image
   */
  source: any
}
