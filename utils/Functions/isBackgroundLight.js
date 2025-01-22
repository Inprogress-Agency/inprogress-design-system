export const getG = color => {
  if (!color) {
    return null
  }
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  color = color.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b
  })
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color)
  return result ? parseInt(result[2], 16) : null
}

export const isBackgroundLight = (color, isDarkMode) => {
  if (!color) {
    return null
  }
  const g = getG(color)
  return !isDarkMode ? g > 204 : g < 204
}
