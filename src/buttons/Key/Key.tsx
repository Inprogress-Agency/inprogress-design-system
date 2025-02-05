import React from 'react'
import { KeyProps } from './Key.types'
import { StyledKey } from './Key.styles'

const Key = ({ onPress, height, ...props }: KeyProps) => {
  return <StyledKey onPress={onPress} height={height} {...props} />
}

export default Key
