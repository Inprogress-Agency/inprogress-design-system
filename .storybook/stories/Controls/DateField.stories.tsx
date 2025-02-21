import type { Meta, StoryObj } from '@storybook/react'
import { DateField } from '../../../src/controls'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'
import { useArgs } from '@storybook/preview-api'
import React from 'react'

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
  render: args => {
    const [, setArgs] = useArgs()
    const onChangeText = ({ value }: { value: string | number }) => {
      setArgs({ value })
    }
    return <DateField {...args} onChangeText={onChangeText} />
  },
}
