import type { Meta, StoryObj } from '@storybook/react'
import { IconButton } from '../../../src/buttons'
import { LineMenu2 } from '../../../src/icons'
import { iconOptions } from '../../../utils/argTypesOptions/icon'

const meta: Meta<typeof IconButton> = {
  title: 'Buttons/IconButton',
  component: IconButton,
  argTypes: {
    icon: iconOptions,
    color: {
      control: {
        type: 'color',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof IconButton>

export const Overview: Story = {
  args: {
    icon: LineMenu2,
  },
}
