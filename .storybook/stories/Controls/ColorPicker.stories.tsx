import type { Meta, StoryObj } from '@storybook/react'
import { ColorPicker } from '../../../src/controls'
import { useArgs } from '@storybook/preview-api'
import React from 'react'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'

const meta: Meta<typeof ColorPicker> = {
  title: 'Controls/ColorPicker',
  component: ColorPicker,
  argTypes: generateArgTypes(ColorPicker),
  parameters: generateParameters(ColorPicker),
}

export default meta

export const Overview: StoryObj<typeof ColorPicker> = {
  args: {
    title: 'Color',
    value: '#000000',
  },
  render: args => {
    const [, setArgs] = useArgs()
    const onChangeText = (value: string) => {
      setArgs({ value })
    }
    return <ColorPicker {...args} onChangeText={onChangeText} />
  },
}
