import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { Grayscale } from 'react-native-color-matrix-image-filters'
import { GrayscaleImageProps } from './GrayscaleImage.types'


const GrayscaleImage = ({
  grayscale = true,
  source,
  style,
  ...props
}: GrayscaleImageProps) => {

  if (!grayscale) {
    return <Image source={source} style={style} {...props} />
  }

  const styles = StyleSheet.create({
    image: {
      width: '100%',
      height: '100%',
    },
  })

  return (
    <Grayscale>
      <Image
        source={source}
        style={[styles.image, style]} 
        {...props}
      />
    </Grayscale>
  )
}

export default GrayscaleImage
