import LinearGradient from 'react-native-linear-gradient'
import styled, { css } from 'styled-components/native'
import { StyledWrapperProps } from './GradientScrollView.types'

export const StyledWrapper = styled.View`
  ${({ horizontal }: StyledWrapperProps) => css`
    ${horizontal ? `width: 100%;` : `flex: 1;`}
    position: relative;
  `}
`

export const StyledLeftGradient = styled(LinearGradient)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 12px;
  pointer-events: none;
`

export const StyledRightGradient = styled(LinearGradient)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 12px;
  pointer-events: none;
`

export const StyledTopGradient = styled(LinearGradient)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 12px;
  pointer-events: none;
`

export const StyledBottomGradient = styled(LinearGradient)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 12px;
  pointer-events: none;
`
