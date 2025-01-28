import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '../../../src/controls'

const meta: Meta<typeof Switch> = {
  title: 'Controls/Switch',
  component: Switch,
  argTypes: {
    value: {
      control: {
        type: 'boolean',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Overview: Story = {
  args: {
    value: false,
  },
}
