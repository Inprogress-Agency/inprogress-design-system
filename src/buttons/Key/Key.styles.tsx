import styled, { css } from 'styled-components/native'
import { StyledKeyProps } from './Key.types'

export const StyledKey = styled.TouchableOpacity`
  ${({ theme, height }: StyledKeyProps) => css`
    height: ${height / 10}px;
    aspect-ratio: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: ${theme.borderRadius.xxl};
    background-color: ${theme.colors.grey1};
  `}
`
