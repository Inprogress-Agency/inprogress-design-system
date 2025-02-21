import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '../../../src/controls'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'
import { useArgs } from '@storybook/preview-api'
import React from 'react'

const meta: Meta<typeof Switch> = {
  title: 'Controls/Switch',
  component: Switch,
  argTypes: generateArgTypes(Switch),
  parameters: generateParameters(Switch),
}

export default meta

export const Overview: StoryObj<typeof Switch> = {
  args: {
    value: false,
  },
  render: args => {
    const [, setArgs] = useArgs()
    const onValueChange = (value: boolean) => {
      setArgs({ value: value })
    }
    return <Switch {...args} onValueChange={onValueChange} />
  },
}
