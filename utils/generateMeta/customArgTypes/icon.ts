import * as icons from '../../../src/icons'

const options = {
  options: Object.keys(icons),
  mapping: Object.keys(icons).reduce((acc, key) => {
    acc[key] = icons[key]
    return acc
  }, {}),
  control: {
    type: 'select' as const,
    labels: Object.keys(icons).reduce((acc, key) => {
      acc[key] = key
      return acc
    }, {}),
  },
} as const

export default {
  type: 'FC<IconProps>',
  options,
}
