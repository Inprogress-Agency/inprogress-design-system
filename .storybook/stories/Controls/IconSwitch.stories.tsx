import type { Meta, StoryObj } from '@storybook/react'
import { IconSwitch } from '../../../src/controls'
import { LineTwoUsers, LineUser } from '../../../src/icons'

const meta: Meta<typeof IconSwitch> = {
  title: 'Controls/IconSwitch',
  component: IconSwitch,
}

export default meta
type Story = StoryObj<typeof IconSwitch>

export const Overview: Story = {
  args: {
    value: 'solo',
    left: {
      condition: 'solo',
      icon: LineUser,
      action: () => {},
    },
    right: {
      condition: 'multi',
      icon: LineTwoUsers,
      action: () => {},
    },
  },
}
