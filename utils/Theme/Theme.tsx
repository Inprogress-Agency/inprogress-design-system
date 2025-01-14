import { Colors, Theme } from './Theme.types'

export const lightColors: Colors = {
  primary: '#5E43FF',
  secondary: '#F4F4F4',
  tertiary: '#FFFFFF',
  white: '#FFFFFF',
  black: '#212121',
  grey1: '#F4F4F4',
  grey2: '#8E8E95',
  grey3: '#3C3F42',
  red: '#FF006D',
  green: '#008000',
  warning: '#FFA500',
  info: '#1900ff',
  success: '#00c066',
}

export const darkColors: Colors = {
  primary: '#5E43FF',
  secondary: '#2e3745',
  tertiary: '#1b212a',
  white: '#1b212a',
  black: '#FFF',
  grey1: '#2e3745',
  grey2: '#7f8ca0',
  grey3: '#98a3b3',
  red: '#FF006D',
  green: '#008000',
  warning: '#FFA500',
  info: '#1900ff',
  success: '#00c066',
}

const theme: Theme = {
  colors: lightColors,
  fontSize: {
    xxs: '10px',
    xs: '12px',
    s: '14px',
    std: '16px',
    m: '18px',
    ml: '20px',
    l: '24px',
    xl: '30px',
    xxl: '38px',
    xxl2: '44px',
    xxl3: '56px',
    xxl4: '64px',
    xxl5: '72px',
  },
  fontWeight: {
    normal: 'normal',
    bold: 'bold',
  },
  space: {
    none: '0px',
    xxs: '4px',
    xs: '8px',
    s: '10px',
    std: '12px',
    m: '16px',
    ml: '20px',
    l: '24px',
    xl: '32px',
    xxl: '40px',
    xxl2: '48px',
    xxl3: '72px',
    auto: 'auto',
  },
  size: {
    xxs: '12px',
    xs: '16px',
    s: '24px',
    s2: '32px',
    std: '40px',
    m: '48px',
    m2: '64px',
    l: '72px',
    l2: '84px',
    xl: '96px',
    xl2: '104px',
    xl3: '124px',
    fill: '100%',
  },
  borderRadius: {
    xxs: '4px',
    xs: '8px',
    s: '12px',
    m: '16px',
    l: '24px',
    xl: '32px',
    xxl: '44px',
  },
  layouts: {
    colCenter: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    col: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    row: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
    },
  },
  wrappers: {
    rowCenter: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
}

export default theme
