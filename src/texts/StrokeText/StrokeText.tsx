import { StrokeText as RNStrokeText } from '@charmy.tech/react-native-stroke-text'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../types/RootState'
import { StrokeTextProps } from './StrokeText.types'
import { StyledWebStrokeText } from './StrokeText.styles'
import { Platform } from 'react-native'

const MAX_STROKE_WIDTH = 10

const StrokeText = ({
  fontSize,
  color,
  strokeColor,
  strokeWidth,
  fontFamily,
  children,
  ...props
}: StrokeTextProps) => {
  const { theme } = useSelector((state: RootState) => state.theme)
  const strokeWidthByFontSize = Math.min((fontSize || 14) / 8, MAX_STROKE_WIDTH)

  console.log('fonts:', theme.fonts)

  if (Platform.OS === 'web') {
    return (
      <StyledWebStrokeText
        color={color || theme.colors.white}
        strokeColor={strokeColor || theme.colors.primary}
        fontSize={fontSize || 14}
        strokeWidth={strokeWidth || strokeWidthByFontSize}
      >
        {children}
      </StyledWebStrokeText>
    )
  }

  return (
    <RNStrokeText
      text={`${children}`}
      fontSize={fontSize || 14}
      color={color || theme.colors.white}
      strokeColor={strokeColor || theme.colors.primary}
      strokeWidth={strokeWidth || strokeWidthByFontSize}
      fontFamily={fontFamily || theme.fonts.semiBold}
      {...props}
    />
  )
}

export default StrokeText
