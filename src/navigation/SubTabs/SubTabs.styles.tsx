import styled, { css } from 'styled-components/native'
import { Text, TouchableOpacity } from 'react-native'
import { StyledComponentProps } from '../../types/StyledComponent'


export const StyledTabButton = styled(TouchableOpacity)`
  ${({ theme, last, selected }: SubTabsProps) => css`
    padding: ${theme.space.xs} ${theme.space.std};
    border-radius: ${theme.borderRadius.m};
    border: 1px solid ${selected ? theme.colors.primary : theme.colors.grey1};
    margin-right: ${last ? theme.space.m : theme.space.xs};
    min-width: 48px;
    justify-content: center;
    align-items: center;
    opacity: ${props => (props.disabled ? 0.6 : 1)};
    flex-direction: row;
    gap: ${theme.space.xxs};
  `}
`

export const StyledTabText = styled(Text)`
  ${({ theme, selected }: StyledComponentProps) => css`
    color: ${selected ? theme.colors.black : theme.colors.grey2};
    font-size: 14px;
  `}
`