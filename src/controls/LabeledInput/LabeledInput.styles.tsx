import styled, { css } from 'styled-components/native'
import { StyledComponentProps } from '../../types/StyledComponent'

export const StyledInputWrapper = styled.View`
  ${({ theme }: StyledComponentProps) => css`
    width: 100%;
    padding-top: ${theme.space.xs};
    padding-bottom: ${theme.space.m};
  `}
`
