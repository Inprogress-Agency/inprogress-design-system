import styled, { css } from 'styled-components/native'
import { StyledWebStrokeTextProps } from './StrokeText.types'
import Text from '../Text/Text'

export const StyledWebStrokeText = styled(Text)<StyledWebStrokeTextProps>`
  ${({ color, strokeColor, fontSize, strokeWidth }: StyledWebStrokeTextProps) => css`
    font-size: ${fontSize}px;
    font-weight: 800;
    -webkit-text-fill-color: ${color};
    -webkit-text-stroke: ${strokeWidth}px;
    -webkit-text-stroke-color: ${strokeColor};
  `}
`
