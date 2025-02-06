import styled, { css } from "styled-components/native";
import { StyledViewColorProps } from "./ColorPicker.types";
import { StyledComponentProps } from "../../types/StyledComponent";
import { Text } from "../../texts";
import TextInput from "../TextInput/TextInput";


export const StyledViewColor = styled.TouchableOpacity`
  ${({ theme, selectedColor }: StyledViewColorProps) => css`
    padding: ${theme.space.l};
    border-radius: 20px;
    border: ${
      selectedColor
        ? `2px solid ${selectedColor}`
        : `2px solid ${theme.colors.grey2}`};
    margin-right: ${theme.space.xs};
    background: ${
      selectedColor ? selectedColor : theme.colors.white};
    border: 1px solid ${theme.colors.grey1};
  `}
`
export const StyledTitle = styled(Text)`
  ${({ theme }: StyledComponentProps) => css`
    font-size: ${theme.fontSize.std};
    font-weight: 600;
    color: ${theme.colors.black};
    margin-bottom: ${theme.space.m};
  `}
`
export const StyledTopItem = styled.View`
  ${({ theme }: StyledComponentProps) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: ${theme.colors.black};
  `}
`

export const StyledColor = styled.View`
  ${({ theme }: StyledComponentProps) => css`
    display: flex;
    flex-direction: row;
    color: ${theme.colors.black};
  `}
`

export const StyledTextInput = styled(TextInput)`
  flex: 1;
`
