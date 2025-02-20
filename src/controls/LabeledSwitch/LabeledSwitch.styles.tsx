import styled, { css } from 'styled-components/native'
import { StyledComponentProps } from '../../types/StyledComponent'
import { Text } from '../../texts'

export const StyledOptions = styled.View`
  ${({ theme }: StyledComponentProps) => css`
    padding: ${theme.space.std} ${theme.space.m};
    background: ${theme.colors.grey1};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: ${theme.borderRadius.l};
  `}
`

export const StyledHeading = styled.View`
  flex: 1;
`

export const StyledTitle = styled(Text)`
  ${({ theme }: StyledComponentProps) => css`
    font-size: ${theme.fontSize.s};
    font-weight: 500;
    color: ${theme.colors.grey2};
  `}
`

export const StyledSubTitle = styled(Text)`
  ${({ theme }: StyledComponentProps) => css`
    font-size: ${theme.fontSize.xxs};
    font-weight: 500;
    color: ${theme.colors.grey2};
  `}
`
