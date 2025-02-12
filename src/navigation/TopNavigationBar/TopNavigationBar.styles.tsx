import styled, { css } from 'styled-components/native'
import { StyledComponentProps } from '../../types/StyledComponent'
import { IconButton } from '../../buttons'
import { Text } from '../../texts'

export const StyledTopNavigationBar = styled.View`
  ${({ theme }: StyledComponentProps) => css`
    padding: ${theme.space.m};
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: ${theme.space.xs};
    margin-bottom: ${theme.space.s};
    min-height: 72px;
  `}
`

export const StyledTitle = styled(Text)`
  ${({ theme }: StyledComponentProps) => css`
    padding: ${theme.space.none} ${theme.space.m} 0 0;
    flex-grow: 1;
    font-weight: ${theme.fontWeight.bold};
  `}
`

export const StyledBackButton = styled(IconButton)`
  ${({ theme }: StyledComponentProps) => css`
    margin-right: ${theme.space.m};
  `}
`

export const StyledTitleWrapper = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
