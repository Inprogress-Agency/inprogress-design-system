import React from 'react'
import { IconButtonProps } from './IconButton.types'
import { StyledButton } from './IconButton.style'

const IconButton = ({ icon: Icon, ...props }: IconButtonProps) => {
  return (
    <StyledButton {...props}>
      <Icon />
    </StyledButton>
  )
}

export default IconButton
