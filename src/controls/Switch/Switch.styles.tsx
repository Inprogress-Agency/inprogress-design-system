import { View } from 'react-native'
import styled, { css } from 'styled-components/native'
import { StyledSwitchProps } from './Switch.types'

export const StyledSwitch = styled(View)<StyledSwitchProps>`
  ${({ checked, theme }: StyledSwitchProps) => css`
    align-items: center;
    justify-content: center;
    border-radius: ${theme.borderRadius.s};
    width: ${theme.fontSize.xxl2};
    height: ${theme.fontSize.l};
    background: ${checked ? theme.colors.primary : theme.colors.grey2};
  `}
`
