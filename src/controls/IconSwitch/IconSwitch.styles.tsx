import { TouchableOpacity, View } from 'react-native'
import styled, { css } from 'styled-components/native'
import { StyledComponentProps } from '../../types/StyledComponent'
import { StyledIconProps } from './IconSwitch.types'

export const StyledSwitch = styled(View)<StyledComponentProps>`
  ${({ theme }: StyledComponentProps) => css`
    width: ${theme.size.l2};
    height: ${theme.fontSize.xxl2};
    background: ${theme.colors.grey1};
    border-radius: ${theme.borderRadius.m};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `}
`
export const StyledIcon = styled(TouchableOpacity)<StyledIconProps>`
  ${({ theme, active }: StyledIconProps) => css`
    width: ${theme.space.xxl};
    height: ${theme.space.xxl};
    background: ${active ? theme.colors.white : theme.colors.grey1};
    border-radius: ${theme.borderRadius.m};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`
