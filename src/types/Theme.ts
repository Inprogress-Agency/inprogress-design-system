import { ColorValue } from 'react-native'

export type Colors = {
  primary: ColorValue
  secondary: ColorValue
  tertiary: ColorValue
  white: ColorValue
  black: ColorValue
  grey1: ColorValue
  grey2: ColorValue
  grey3: ColorValue
  red: ColorValue
  green: ColorValue
  warning: ColorValue
  info: ColorValue
  success: ColorValue
}

export type FontSize = {
  xxs: string
  xs: string
  s: string
  std: string
  m: string
  ml: string
  l: string
  xl: string
  xxl: string
  xxl2: string
  xxl3: string
  xxl4: string
  xxl5: string
}

export type FontWeight = {
  normal: string
  bold: string
}

export type Space = {
  none: string
  xxs: string
  xs: string
  s: string
  std: string
  m: string
  ml: string
  l: string
  xl: string
  xxl: string
  xxl2: string
  xxl3: string
  auto: string
}

export type Size = {
  xxs: string
  xs: string
  s: string
  s2: string
  std: string
  m: string
  m2: string
  l: string
  l2: string
  xl: string
  xl2: string
  xl3: string
  fill: string
}

export type BorderRadius = {
  xxs: string
  xs: string
  s: string
  m: string
  l: string
  xl: string
  xxl: string
}

export type Layout = {
  flex: number
  display: string
  flexDirection: string
  justifyContent?: string
  alignItems?: string
}

export type Theme = {
  colors: Colors
  fontSize: FontSize
  fontWeight: FontWeight
  space: Space
  size: Size
  borderRadius: BorderRadius
  layouts: {
    colCenter: Layout
    col: Layout
    row: Layout
  }
  wrappers: {
    rowCenter: Omit<Layout, 'flex'>
  }
}
