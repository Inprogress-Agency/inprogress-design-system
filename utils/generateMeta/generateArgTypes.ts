import { ArgTypes } from '@storybook/react'
import { DocgenComponent } from './DocgenComponent'
import customArgTypes from './customArgTypes'

export const generateArgTypes = (component: DocgenComponent): ArgTypes => {
  const info = component.__docgenInfo
  const props = info?.props
  if (!props) {
    return {} as ArgTypes
  }
  return Object.entries(props).reduce((acc: any, [key, value]: any) => {
    const customArgType = customArgTypes.find(argType => argType.type === value.tsType.raw)
    if (customArgType) {
      acc[key] = customArgType.options
    }
    return acc
  }, {}) as ArgTypes
}
