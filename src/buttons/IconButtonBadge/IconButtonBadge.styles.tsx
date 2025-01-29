import styled, { css } from 'styled-components/native'
import { Text } from '../../texts'
import { StyledComponentProps } from '../../types/StyledComponent'

export const StyledBadge = styled.View`
  ${({ theme }: StyledComponentProps) => css`
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
export const StyledText = styled(Text)`
  ${({ theme }: StyledComponentProps) => css`
    color: #ffffff;
    font-size: ${theme.fontSize.xxs};
    font-weight: 500;
  `}
`
export const StyledWrapper = styled.View`
  ${({ theme }: StyledComponentProps) => css`
    width: ${theme.size.std};
    height: ${theme.size.std};
    position: relative;
  `}
`
