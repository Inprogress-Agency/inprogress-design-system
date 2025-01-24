import styled, { css } from 'styled-components/native'
import {
  StyledButtonProps,
  StyledContentProps,
  StyledImageProps,
} from './IllustratedArrowButton.types'

export const StyledButton = styled.TouchableOpacity<StyledButtonProps>`
  ${({ theme }: StyledButtonProps) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${theme.colors.grey1};
    border-radius: ${theme.borderRadius.l};
    padding: ${theme.space.xs};
    padding-right: ${theme.space.l};
  `}
`

export const StyledImage = styled.Image<StyledImageProps>`
  ${({ theme }: StyledImageProps) => css`
    border-radius: 999px;
    height: ${theme.size.m};
    width: ${theme.size.m};
  `}
`

export const StyledContent = styled.View<StyledContentProps>`
  ${({ theme }: StyledContentProps) => css`
    flex: 1;
    padding: ${theme.space.xs};
  `}
`
