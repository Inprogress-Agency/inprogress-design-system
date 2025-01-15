import { create } from '@storybook/theming'

export default create({
  base: 'light',
  // Typography
  fontBase: 'Poppins, sans-serif',
  fontCode: 'monospace',

  brandTitle: 'InProgress',
  brandUrl: 'https://inprogress.agency',
  brandImage: '/logo.png',
  brandTarget: '_self',

  //
  colorPrimary: '#5E43FF',
  colorSecondary: '#5E43FF',

  // UI
  appBg: '#F4F4F4',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#8E8E95',
  appBorderRadius: 4,

  // Text colors
  textColor: '#212121',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#8E8E95',
  barSelectedColor: '#5E43FF',
  barHoverColor: '#2f217a',
  barBg: '#F4F4F4',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#8E8E95',
  inputTextColor: '#212121',
  inputBorderRadius: 4,
})
