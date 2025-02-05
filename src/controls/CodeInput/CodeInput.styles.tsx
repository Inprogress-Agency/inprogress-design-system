import styled, { css } from 'styled-components/native'
import { Text } from '../../texts'
import { StyledCellProps, StyledTextCodeProps } from './CodeInput.types'
import { StyleSheet } from 'react-native'

export const StyledCell = styled.View`
  ${({ cellSize, isFocused, theme }: StyledCellProps) => css`
    width: ${cellSize};
    height: ${cellSize};
    margin-right: 8px;
    border-radius: ${`${Math.round(cellSize / 3)}px`};
    border: ${isFocused ? `1px solid ${theme.colors.primary}` : 'none'};
    background-color: ${theme.colors.grey1};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

export const StyledTextCode = styled(Text)`
  ${({ cellSize }: StyledTextCodeProps) => css`
    font-size: ${cellSize / 2};
  `}
`

export const StyledCodeField = styled.View`
  width: 100%;
`

export const styles = StyleSheet.create({
  codeFieldRoot: { marginTop: 20 },
})
