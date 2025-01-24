import { LineArrowRight } from '../../icons'
import React from 'react'
import { StyledButton, StyledContent, StyledImage } from './IllustratedArrowButton.styles'
import { IllustratedArrowButtonProps } from './IllustratedArrowButton.types'

const IllustratedArrowButton = ({ image, content, ...props }: IllustratedArrowButtonProps) => {
  return (
    <StyledButton {...props}>
      <StyledImage source={image} />
      <StyledContent>{content}</StyledContent>
      <LineArrowRight size={16} />
    </StyledButton>
  )
}

export default IllustratedArrowButton
