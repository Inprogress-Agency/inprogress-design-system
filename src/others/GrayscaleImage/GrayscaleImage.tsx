import React from 'react'
import { Image, Platform } from 'react-native'
import { Grayscale } from 'react-native-color-matrix-image-filters'
import { GrayscaleImageProps } from './GrayscaleImage.types'

const GrayscaleImage = ({ grayscale = true, source, style, ...props }: GrayscaleImageProps) => {
  if (Platform.OS === 'web') {
    console.log('web')
    return (
      <img
        src={source.uri}
        style={{
          width: '100%',
          height: '100%',
          objectFit: (props.resizeMode === 'stretch'
            ? 'fill'
            : props.resizeMode === 'center'
              ? 'none'
              : props.resizeMode) as React.CSSProperties['objectFit'],
          ...(grayscale ? { filter: 'grayscale(100%)' } : {}),
        }}
      />
    )
  }

  if (!grayscale) {
    return <Image source={source} style={style} {...props} />
  }

  return (
    <Grayscale>
      <Image source={source} style={{ width: '100%', height: '100%' }} {...props} />
    </Grayscale>
  )
}

export default GrayscaleImage
