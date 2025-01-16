import React from 'react'
import { IconButtonProps } from './IconButton.types'
import { StyledButton } from './IconButton.style'

const IconButton = ({ icon, ...props} : IconButtonProps ) => {
  return <StyledButton {...props}>{icon}</StyledButton>
}

export default IconButton
