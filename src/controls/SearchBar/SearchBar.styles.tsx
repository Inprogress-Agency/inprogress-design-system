import styled, { css } from 'styled-components/native'
import { StyledComponentProps } from '../../types/StyledComponent'
import TextInput from '../TextInput/TextInput'
import { Text } from '../../texts'

export const StyledSearch = styled.View`
  ${({ theme }: StyledComponentProps) => css`
    width: ${theme.size.fill};
    padding-left: ${theme.space.std};
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${theme.colors.grey1};
    border-radius: ${theme.borderRadius.l};
    min-height: ${theme.size.m};
  `}
`

export const StyledButton = styled.TouchableOpacity`
  ${({ theme }: StyledComponentProps) => css`
    background: ${theme.colors.white};
    margin-right: ${theme.space.std};
    border-radius: 999px;
  `}
`

export const StyledFakeTextInput = styled(Text)`
  ${({ theme }: StyledComponentProps) => css`
    padding: ${theme.space.std} ${theme.space.m};
    color: ${theme.colors.grey2};
  `}
`

export const StyledTextInput = styled(TextInput)`
  ${({ theme }: StyledComponentProps) => css`
    padding: 0;
    padding-left: ${theme.space.xs};
  `}
`
