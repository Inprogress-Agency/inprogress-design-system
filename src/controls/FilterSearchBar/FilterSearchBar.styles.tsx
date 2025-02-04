import styled, { css } from 'styled-components/native'
import { StyledComponentProps } from '../../types/StyledComponent'

export const StyledSettingsInput = styled.View`
  ${({ theme }: StyledComponentProps) => css`
    position: relative;
    border-radius: ${theme.borderRadius.l};
  `}
`

export const StyledButton = styled.TouchableOpacity`
  ${({ theme }: StyledComponentProps) => css`
    background-color: ${theme.colors.white};
    border-radius: 999px;
    padding: ${theme.space.xxs};
  `}
`
