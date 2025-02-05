import { StyledButtonProps, StyledTextProps } from './Button.types'
import styled, { css } from 'styled-components/native'
import { isBackgroundLight } from '../../utils/isBackgroundLight'
import { Text } from '../../texts'

export const StyledButton = styled.TouchableOpacity`
  ${({ theme, color, variant, isDarkMode, disabled }: StyledButtonProps) => css`
    flex-shrink: 0;
    padding: 12px;
    background: ${variant === 'primary'
      ? color || theme.colors.primary
      : variant === 'secondary'
        ? 'transparent'
        : color || 'transparent'};
    color: ${variant === 'primary'
      ? isBackgroundLight(color, isDarkMode)
        ? theme.colors.black
        : theme.colors.white
      : theme.colors.primary};
    border: ${variant === 'secondary' ? `1px solid ${theme.colors.primary}` : 'none'};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.borderRadius.m};
    opacity: ${disabled ? 0.7 : 1};
  `}
`

export const StyledText = styled(Text)`
  ${({ theme, variant, color, isDarkMode }: StyledTextProps) => css`
    flex-shrink: 1;
    color: ${variant === 'primary'
      ? isBackgroundLight(color, isDarkMode)
        ? theme.colors.black
        : theme.colors.white
      : theme.colors.primary};
  `}
`
