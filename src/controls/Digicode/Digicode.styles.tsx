import styled, { css } from 'styled-components/native'
import { StyledComponentProps } from '../../types/StyledComponent'
import { StyledCodeElementProps, StyledCodeProps, StyledTextProps } from './Digicode.types'

export const StyledDigicode = styled.View`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledKeyboard = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const StyledKeyWrapper = styled.View`
  ${({ theme }: StyledComponentProps) => css`
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: ${theme.space.std};
  `}
`

export const StyledText = styled.Text`
  ${({ theme, keyHeight }: StyledTextProps) => css`
    font-size: ${keyHeight / 26}px;
    color: ${theme.colors.primary};
    font-weight: 600;
  `}
`

export const StyledCode = styled.View`
  ${({ theme, height }: StyledCodeProps) => css`
    background-color: ${theme.colors.grey1};
    border-radius: ${theme.borderRadius.xxl};
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: ${height / 40}px;
    height: ${height / 14}px;
    width: 50%;
  `}
`

export const StyledCodeElement = styled.View`
  ${({ theme, height, full }: StyledCodeElementProps) => css`
    height: ${height / 30}px;
    aspect-ratio: 1;
    background-color: ${full ? theme.colors.primary : theme.colors.grey2};
    border-radius: ${theme.borderRadius.l};
  `}
`
export const StyledActionText = styled.Text`
  ${({ theme }: StyledComponentProps) => css`
    color: ${theme.colors.primary};
    margin-bottom: ${theme.space.s};
  `}
`

export const StyledButtons = styled.View`
  ${({ theme }: StyledComponentProps) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 0 ${theme.space.xl};
    position: absolute;
    bottom: ${theme.space.xs};
  `}
`

export const StyledDeleteButton = styled.TouchableOpacity`
  margin-left: auto;
`
