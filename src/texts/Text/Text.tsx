import React from 'react'
import { TextProps } from './Text.types'
import { StyledText } from './Text.styles'

const Text = ({ regular = false, color = null, fontSize = 14, children, ...props }: TextProps) => {
  return (
    <StyledText regular={regular} color={color} fontSize={fontSize} {...props}>
      {children}
    </StyledText>
  )
}

export default Text
