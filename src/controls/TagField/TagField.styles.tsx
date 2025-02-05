import styled, { css } from 'styled-components/native'
import { StyledComponentProps } from '../../types/StyledComponent'
import { Text } from '../../texts'

export const StyledTagList = styled.View`
  ${({ theme }: StyledComponentProps) => css`
    padding-top: ${theme.space.xxs};
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `}
`

export const StyledTagText = styled(Text)`
  ${({ theme }: StyledComponentProps) => css`
    margin-right: ${theme.space.xs};
  `}
`

export const StyledDeleteTagText = styled(Text)`
  ${({ theme }: StyledComponentProps) => css`
    text-align: center;
    line-height: ${theme.space.ml};
    padding-top: 2px;
  `}
`

export const StyledTag = styled.TouchableOpacity`
  ${({ theme }: StyledComponentProps) => css`
    padding: ${theme.space.xs} ${theme.space.std};
    border: 2px solid ${theme.colors.grey1};
    border-radius: ${theme.borderRadius.m};
    display: flex;
    flex-direction: row;
    margin-top: ${theme.space.xs};
    margin-right: ${theme.space.xs};
    align-items: center;
  `}
`

export const StyledDeleteTag = styled.View`
  ${({ theme }: StyledComponentProps) => css`
    width: ${theme.size.xs};
    aspect-ratio: 1;
    background-color: ${theme.colors.grey1};
    border-radius: ${theme.borderRadius.xs};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `}
`
