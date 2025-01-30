import styled, { css } from 'styled-components/native'
import { StyledComponentProps } from '../../types/StyledComponent'
import { ScrollView as GestureScrollView } from 'react-native-gesture-handler'
import { Text } from '../../texts'

export const StyledHeaderWrapper = styled.View`
  ${({ theme }: StyledComponentProps) => css`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${theme.space.m};
    padding-top: ${theme.space.l};
    padding-bottom: ${theme.space.xs};
    flex-shrink: 0;
  `}
`

export const StyledHeader = styled.View`
  flex: 1;
`

export const StyledClose = styled.TouchableOpacity`
  ${({ theme }: StyledComponentProps) => css`
    width: 40px;
    aspect-ratio: 1;
    border-radius: ${theme.borderRadius.l};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.grey1};
  `}
`

export const StyledTitle = styled(Text)`
  ${({ theme }: StyledComponentProps) => css`
    font-size: 18px;
    font-weight: ${theme.fontWeight.bold};
    padding: ${theme.space.xs} ${theme.space.m};
    color: ${theme.colors.black};
  `}
`

export const StyledSubtitle = styled(Text)`
  ${({ theme }: StyledComponentProps) => css`
    color: ${theme.colors.grey2};
    padding-left: ${theme.space.m};
    padding-right: ${theme.space.m};
    padding-bottom: ${theme.space.std};
  `}
`

export const StyledScrollView = styled(GestureScrollView)`
  ${({ theme }: StyledComponentProps) => css`
    padding: 0 ${theme.space.m};
  `}
`

export const StyledView = styled.View`
  ${({ theme }: StyledComponentProps) => css`
    flex: 1;
    padding: 0 ${theme.space.m};
  `}
`
