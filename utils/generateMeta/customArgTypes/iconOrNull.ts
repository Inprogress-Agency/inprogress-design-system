import * as icons from '../../../src/icons'

const options = {
  options: ['null', ...Object.keys(icons)],
  mapping: {
    null: null,
    ...Object.keys(icons).reduce((acc, key) => {
      acc[key] = icons[key]
      return acc
    }, {}),
  },
  control: {
    type: 'select' as const,
    labels: {
      null: 'null',
      ...Object.keys(icons).reduce((acc, key) => {
        acc[key] = key
        return acc
      }, {}),
    },
  },
} as const

export default {
  type: 'IconComponent | null',
  options,
}
