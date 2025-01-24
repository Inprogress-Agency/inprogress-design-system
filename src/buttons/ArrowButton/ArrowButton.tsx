import { Text } from '../../texts'
import React from 'react'
import { StyledButton } from '../Button/Button.styles'
import { StyledContent, StyledIconWrapper, StyledTitle } from './ArrowButton.styles'
import { useSelector } from 'react-redux'
import { StoreTheme } from '../../../utils/Store/Theme/Theme.types'
import { ArrowButtonProps } from './ArrowButton.types'
import { LineArrowRight } from '../../icons'

const ButtonArrow = ({ icon: Icon, title, subtitle, ...props }: ArrowButtonProps) => {
  const { theme } = useSelector((state: { theme: StoreTheme }) => state.theme)
  return (
    <StyledButton {...props}>
      <StyledIconWrapper>
        <Icon />
      </StyledIconWrapper>
      <StyledContent>
        <StyledTitle>{title}</StyledTitle>
        <Text color={theme.colors.grey2}>{subtitle}</Text>
      </StyledContent>
      <LineArrowRight color={theme.colors.grey2} size={14} />
    </StyledButton>
  )
}

export default ButtonArrow
