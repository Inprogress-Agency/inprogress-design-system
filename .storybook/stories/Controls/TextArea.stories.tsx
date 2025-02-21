import type { Meta, StoryObj } from '@storybook/react'
import { TextArea } from '../../../src/controls'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'
import { useArgs } from '@storybook/preview-api'
import React from 'react'

const meta: Meta<typeof TextArea> = {
  title: 'Controls/TextArea',
  component: TextArea,
  parameters: generateParameters(TextArea),
  argTypes: generateArgTypes(TextArea),
}

export default meta

export const Overview: StoryObj<typeof TextArea> = {
  args: {
    value: '',
    copyable: true,
    maxLength: 100,
  },
  render: args => {
    const [, setArgs] = useArgs()
    const onChangeText = (value: string) => {
      setArgs({ value: value })
    }
    return <TextArea {...args} onChangeText={onChangeText} />
  },
}
