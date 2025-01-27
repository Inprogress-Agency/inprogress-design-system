import React from 'react'
import { View } from 'react-native'
import IconButton from '../IconButton/IconButton'
import { StyledText, StyledBadge, StyledWrapper } from './IconButtonBadge.styles'
import { IconButtonBadgeProps } from './IconButtonBadge.types'

const IconButtonBadge = ({ number, ...props }: IconButtonBadgeProps) => {
  return (
    <StyledWrapper>
      {number ? (
        <StyledBadge pointerEvents="none">
          <StyledText>{number > 9 ? '9+' : number}</StyledText>
        </StyledBadge>
      ) : null}
      <IconButton {...props} />
    </StyledWrapper>
  )
}
export default IconButtonBadge
