import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '../../../src/controls'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'

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
}
