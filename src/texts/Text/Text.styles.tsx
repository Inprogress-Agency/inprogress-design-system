import { Platform } from 'react-native'
import styled, { css } from 'styled-components/native'
import { StyledTextProps } from './Text.types'

export const StyledText = styled.Text`
  ${({ theme, color, regular, fontSize }: StyledTextProps) => css`
    ${Platform.OS === 'web'
      ? `font-weight: ${regular ? '400' : '600'};`
      : `font-family: ${regular ? 'Poppins-Regular' : 'Poppins-SemiBold'};`}
    color: ${color || theme.colors.black};
    font-size: ${fontSize}px;
  `}
`
