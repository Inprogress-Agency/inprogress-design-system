import type { Meta, StoryObj } from '@storybook/react'
import { TextInput } from '../../../src/controls'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'
import { useArgs } from '@storybook/preview-api'
import React from 'react'

const meta: Meta<typeof TextInput> = {
  title: 'Controls/TextInput',
  component: TextInput,
  parameters: generateParameters(TextInput),
  argTypes: generateArgTypes(TextInput),
}

export default meta

export const Overview: StoryObj<typeof TextInput> = {
  args: {
    value: '',
  },
  render: args => {
    const [, setArgs] = useArgs()
    const onChangeText = (value: string) => {
      setArgs({ value: value })
    }
    return <TextInput {...args} onChangeText={onChangeText} />
  },
}
