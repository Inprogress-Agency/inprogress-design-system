import type { Meta, StoryObj } from '@storybook/react'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'
import { LabeledSwitch } from '../../../src/controls'
import React from 'react'
import { useArgs } from '@storybook/preview-api'

const meta: Meta<typeof LabeledSwitch> = {
  title: 'Controls/LabeledSwitch',
  component: LabeledSwitch,
  parameters: generateParameters(LabeledSwitch),
  argTypes: generateArgTypes(LabeledSwitch),
}

export default meta

export const Overview: StoryObj<typeof LabeledSwitch> = {
  args: {
    title: 'Title',
    subtitle: 'Subtitle',
    value: false,
    onChange: () => {},
    disabled: false,
  },
  render: args => {
    const [, setArgs] = useArgs()
    const onChange = (value: boolean) => {
      args.onChange(value)
      setArgs({ value })
    }

    return <LabeledSwitch {...args} onChange={onChange} />
  },
}
