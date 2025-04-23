import styled, { css } from 'styled-components/native'
import { Pressable, View } from 'react-native'
import { Text } from '../../texts'
import { StyledComponentProps } from '../../types/StyledComponent'

export const StyledCheckableElement = styled(Pressable)`
  ${({ theme } : StyledComponentProps) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${theme.space.m};
    border-bottom-color: rgba(142, 142, 149, 0.1);
    border-bottom-width: 1px;
  `}
`

export const StyledTop = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  display: flex;
`

export const StyledContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`


export const StyledText = styled(Text)`
  margin-left: 12px;
`
export const StyledCheckText = styled(Text)`
  margin-left: 8px;
`
