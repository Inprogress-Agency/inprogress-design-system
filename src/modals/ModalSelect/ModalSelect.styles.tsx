import styled, { css } from 'styled-components/native'
import { StyledComponentProps } from '../../types/StyledComponent'
import { Text } from '../../texts'

export const StyledOption = styled.TouchableOpacity`
  ${({ theme, isSelected }: { isSelected: boolean } & StyledComponentProps) => css`
    padding: ${theme.space.s};
    padding-left: ${theme.space.m};
    background-color: ${isSelected ? theme.colors.primary : theme.colors.grey1};
    border-radius: ${theme.borderRadius.l};
    margin-top: ${theme.space.std};
  `}
`

export const StyledOptionText = styled(Text)`
  ${({ theme, isSelected }: { isSelected: boolean } & StyledComponentProps) => css`
    color: ${isSelected ? theme.colors.white : theme.colors.black};
    width: 100%;
    text-align: center;
  `}
`
