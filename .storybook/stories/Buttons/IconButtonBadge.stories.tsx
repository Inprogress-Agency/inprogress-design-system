import type { Meta, StoryObj } from '@storybook/react'
import { IconButtonBadge } from '../../../src/buttons'
import { iconOptions } from '../../../utils/argTypesOptions/icon'
import { LineMenu2 } from '../../../src/icons'
const meta: Meta<typeof IconButtonBadge> = {
  title: 'Buttons/IconButtonBadge',
  component: IconButtonBadge,
  argTypes: {
    icon: iconOptions,
  },
}

export default meta
type Story = StoryObj<typeof IconButtonBadge>

export const Overview: Story = {
  args: {
    icon: LineMenu2,
    number: 12,
  },
}
