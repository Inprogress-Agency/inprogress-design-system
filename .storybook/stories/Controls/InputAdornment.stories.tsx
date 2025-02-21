import type { Meta, StoryObj } from '@storybook/react'
import { InputAdornment } from '../../../src/controls'
import { LineArrowRight } from '../../../src/icons'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'
import { useArgs } from '@storybook/preview-api'
import React from 'react'

const meta: Meta<typeof InputAdornment> = {
  title: 'Controls/InputAdornment',
  component: InputAdornment,
  parameters: generateParameters(InputAdornment),
  argTypes: generateArgTypes(InputAdornment),
}

export default meta

export const Overview: StoryObj<typeof InputAdornment> = {
  args: {
    value: '',
    placeholder: 'Enter your text here',
    adornment: () => LineArrowRight({ size: 16 }),
  },
  render: args => {
    const [, setArgs] = useArgs()
    const onChangeText = (value: string) => {
      setArgs({ value })
    }
    return <InputAdornment {...args} onChangeText={onChangeText} />
  },
}
