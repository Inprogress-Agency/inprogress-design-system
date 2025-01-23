import styled, { css } from 'styled-components/native'
import { Text } from '../../texts'
import { StyledTextProps } from './CopyButton.Types'

export const StyledText = styled(Text)<StyledTextProps>`
  ${({ theme, disabled }: StyledTextProps) => css`
    color: ${disabled ? theme.colors.grey2 : theme.colors.primary};
    font-size: ${theme.size.xxs};
  `}
`
