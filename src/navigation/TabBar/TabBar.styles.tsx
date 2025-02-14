import styled, { css } from 'styled-components/native'
import { StyledComponentProps } from '../../types/StyledComponent'

export const StyledBottomBar = styled.View`
  ${({ theme }: StyledComponentProps) => css`
    background-color: ${theme.colors.white};
    border-top-right-radius: 36px;
    border-top-left-radius: 36px;
    z-index: 10;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: row;
    height: 72px;
    padding: 0 16px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  `}
`

export const StyledFakeBottomBar = styled.View`
  ${({ theme }: StyledComponentProps) => css`
    background-color: ${theme.colors.white};
    width: ${theme.size.fill};
    height: ${theme.size.m2};
  `}
`
