import type { Meta, StoryObj } from '@storybook/react'
import { DateField } from '../../../src/controls'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'
const meta: Meta<typeof DateField> = {
  title: 'Controls/DateField',
  component: DateField,
  parameters: generateParameters(DateField),
  argTypes: generateArgTypes(DateField),
}

export default meta

export const Overview: StoryObj<typeof DateField> = {
  args: {
    value: {
      isError: false,
      value: Date.now(),
    },
  },
}
