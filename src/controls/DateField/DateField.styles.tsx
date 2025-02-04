import styled, { css } from 'styled-components/native'
import { StyledWrapperProps } from './DateField.types'

export const StyledWrapper = styled.View`
  ${({ theme, adornment, error }: StyledWrapperProps) => css`
    margin-top: 8px;
    background-color: ${theme.colors.grey1};
    border-radius: ${theme.borderRadius.l};
    min-height: ${theme.size.m};
    display: flex;
    flex-direction: row;
    overflow: hidden;
    padding-left: ${theme.space.std};
    align-items: center;
    padding-left: ${adornment ? theme.space.xxl2 : theme.space.none};
    border: ${error ? `1px solid ${theme.colors.red}` : '1px solid transparent'};
  `}
`

export const StyledIcon = styled.View`
  left: 16px;
  position: absolute;
`

export const StyledTouchableOpacity = styled.TouchableOpacity`
  margin-top: 12px;
  position: absolute;
  right: 16px;
  z-index: 10;
`
