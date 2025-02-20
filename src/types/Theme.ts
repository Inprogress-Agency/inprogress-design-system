import { Color } from './Color'

export interface Colors {
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

export interface Fonts {
  regular: string
  semiBold: string
  bold: string
}

export interface FontSize {
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

export interface FontWeight {
  normal: string
  bold: string
}

export interface Space {
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

export interface Size {
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

export interface BorderRadius {
  xxs: string
  xs: string
  s: string
  m: string
  l: string
  xl: string
  xxl: string
}

export interface Layout {
  flex: number
  display: string
  flexDirection: string
  justifyContent?: string
  alignItems?: string
}

export interface Theme {
  colors: Colors
  fonts: Fonts
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
