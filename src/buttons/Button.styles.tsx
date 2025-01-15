import { Text, TouchableOpacity } from 'react-native'
import { StyledButtonProps, StyledTextProps } from './Button.types'
import styled, { css } from 'styled-components/native'

export const StyledButton = styled(TouchableOpacity)<StyledButtonProps>`
  ${({ theme, variant }: StyledButtonProps) => css`
    background-color: ${variant === 'primary' ? theme.colors.primary : theme.colors.white};
    padding: 12px;
    border-radius: 8px;
    border-width: 1px;
    border-color: ${theme.colors.primary};
  `}
`

export const StyledText = styled(Text)<StyledTextProps>`
  ${({ theme, variant }: StyledTextProps) => css`
    color: ${variant === 'primary' ? theme.colors.white : theme.colors.primary};
    text-align: center;
    font-size: 16px;
  `}
`
