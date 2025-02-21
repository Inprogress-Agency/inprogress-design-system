import type { Meta, StoryObj } from '@storybook/react'
import { Select } from '../../../src/controls'
import React from 'react'
import { DefaultSelect } from '../../../src/controls/Select/Select'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'

const meta: Meta<typeof Select> = {
  title: 'Controls/Select',
  component: Select,
  parameters: generateParameters(Select),
  argTypes: generateArgTypes(Select),
}

export default meta

export const Overview: StoryObj<typeof DefaultSelect> = {
  args: {
    title: 'Select a fruit',
    initialValue: 'orange',
    options: [
      { label: 'Orange', value: 'orange' },
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
    ],
    onChange: () => null,
  },
  render: args => {
    return <DefaultSelect {...args} />
  },
}
