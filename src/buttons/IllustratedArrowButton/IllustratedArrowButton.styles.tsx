import styled, { css } from 'styled-components/native'
import { StyledComponentProps } from '../../types/StyledComponent'

export const StyledButton = styled.TouchableOpacity`
  ${({ theme }: StyledComponentProps) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${theme.colors.grey1};
    border-radius: ${theme.borderRadius.l};
    padding: ${theme.space.xs};
    padding-right: ${theme.space.l};
  `}
`

export const StyledImage = styled.Image`
  ${({ theme }: StyledComponentProps) => css`
    border-radius: 999px;
    height: ${theme.size.m};
    width: ${theme.size.m};
  `}
`

export const StyledContent = styled.View`
  ${({ theme }: StyledComponentProps) => css`
    flex: 1;
    padding: ${theme.space.xs};
  `}
`
