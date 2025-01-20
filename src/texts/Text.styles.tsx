import { Text } from 'react-native'
import styled, { css } from 'styled-components/native'
import { StyledTextProps } from './Text.types'


export const StyledText = styled(Text)<StyledTextProps>`
  ${({ theme, color, regular, fontSize }: StyledTextProps) => css`
    font-family: ${regular ? 'Poppins-Regular' : 'Poppins-Medium'};
    color: ${color || theme.colors.black};
    font-size: ${fontSize}px;
  `}
`
