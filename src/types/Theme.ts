import { Color } from './Color'

export type Colors = {
  primary: Color
  secondary: Color
  tertiary: Color
  white: Color
  black: Color
  grey1: Color
  grey2: Color
  grey3: Color
  red: Color
  green: Color
  warning: Color
  info: Color
  success: Color
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
