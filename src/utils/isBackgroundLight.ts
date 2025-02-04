import { Color } from '../types/Color'

export const getG = (color: Color) => {
  let processedColor = color as string
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  processedColor = processedColor.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b
  })
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(processedColor)
  return result ? parseInt(result[2], 16) : 0
}

export const isBackgroundLight = (color: Color | null | undefined, isDarkMode: boolean) => {
  if (!color) {
    throw new Error('Color is required')
  }
  const g = getG(color)
  return !isDarkMode ? g > 204 : g < 204
}
