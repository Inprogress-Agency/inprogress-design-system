import styled, { css } from 'styled-components/native'
import { StyledButtonProps } from './IconButton.types'

export const StyledButton = styled.TouchableOpacity`
  ${({ theme, color }: StyledButtonProps) => css`
    width: ${theme.size.std};
    height: ${theme.size.std};
    background: ${color || theme.colors.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.borderRadius.l};
  `}
`
