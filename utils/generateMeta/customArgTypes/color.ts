const options = {
  control: {
    type: 'color' as const,
  },
} as const

export default {
  type: 'RGB | RGBA | HEX',
  options,
}
