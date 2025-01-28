import styled, { css } from 'styled-components/native'
import { StyledInputAdornmentProps } from './InputAdornment.types'

export const StyledIcon = styled.View`
  left: 15px;
  position: absolute;
  z-index: 1;
`

export const StyledInputAdornment = styled.View`
  ${({ theme, adornment, error }: StyledInputAdornmentProps) => css`
    padding-left: ${adornment ? theme.space.xl : theme.space.none};
    position: relative;
    background: ${theme.colors.grey1};
    border-radius: ${theme.borderRadius.l};
    display: flex;
    align-items: center;
    flex-direction: row;
    padding-right: 6px;
    height: 50px;
    border: ${error ? `1px solid ${theme.colors.red}` : '1px solid transparent'};
  `}
`
