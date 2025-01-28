import * as icons from '../../src/icons'

export const iconOptions = {
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

export const iconOptionsWithNull = {
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
