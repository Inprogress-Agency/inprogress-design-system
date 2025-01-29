import styled, { css } from 'styled-components/native'
import { StyledCheckBoxProps } from './CheckBox.types'

export const StyledCheckBox = styled.TouchableOpacity`
  ${({ theme, borderColor, notCheckedBackgroundColor, checked }: StyledCheckBoxProps) => css`
    justify-content: center;
    align-items: center;
    width: ${theme.size.s};
    height: ${theme.size.s};
    border: ${checked
      ? `2px solid ${theme.colors.primary}`
      : `2px solid ${borderColor || theme.colors.grey2}`};
    border-radius: ${theme.borderRadius.xs};
    background: ${checked ? theme.colors.primary : notCheckedBackgroundColor || theme.colors.grey1};
  `};
`
