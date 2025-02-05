import styled, { css } from 'styled-components/native'
import { Text } from '../../texts'
import { StyledTextProps, StyledTouchableOpacityProps } from './Select.types'

export const StyledTouchableOpacity = styled.TouchableOpacity`
  ${({ theme, variant, selectedBorderColor, disabled }: StyledTouchableOpacityProps) => css`
    background-color: ${variant === 'primary' ? theme.colors.grey1 : 'transparent'};
    border: 1px solid ${variant === 'primary' ? theme.colors.grey1 : selectedBorderColor};
    border-radius: ${theme.borderRadius.l};
    padding: ${theme.space.xs} ${theme.space.std};
    width: 100%;
    opacity: ${disabled ? 0.5 : 1};
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  `}
`

export const StyledText = styled(Text)`
  ${({ theme, selectedColor, value, disabled }: StyledTextProps) => css`
    color: ${Boolean(value) || disabled ? theme.colors.grey2 : selectedColor};
    flex-shrink: 1;
    line-height: 28;
  `}
`
