import styled, { css } from 'styled-components/native'
import { StyledBadgeProps, StyledTextProps, StyledWrapperProps } from './IconButtonBadge.types'
import { Text } from '../../texts'
import { View } from 'react-native'

export const StyledBadge = styled.View<StyledBadgeProps>`
  ${({ theme }: StyledBadgeProps) => css`
    color: ${theme.colors.white};
    background: ${theme.colors.red};
    border-radius: ${theme.borderRadius.xl};
    position: absolute;
    min-width: 18px;
    height: 18px;
    z-index: 1;
    top: -2px;
    right: -2px;
    font-size: ${theme.fontSize.xxs};
    font-weight: 500;
    border: 1px solid ${theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`
export const StyledText = styled(Text)<StyledTextProps>`
  ${({ theme }: StyledTextProps) => css`
    color: #ffffff;
    font-size: ${theme.fontSize.xxs};
    font-weight: 500;
  `}
`
export const StyledWrapper = styled(View)<StyledWrapperProps>`
  ${({ theme }: StyledWrapperProps) => css`
    width: ${theme.size.std};
    height: ${theme.size.std};
    position: relative;
  `}
`
