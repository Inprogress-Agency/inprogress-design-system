import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../../src/buttons'
import { LinePlus } from '../../../src/icons'
import { iconOptionsWithNull } from '../../../utils/argTypesOptions/icon'

const meta: Meta<typeof Button> = {
  title: 'Buttons/Button',
  component: Button,
  argTypes: {
    icon: iconOptionsWithNull,
    afterIcon: iconOptionsWithNull,
    color: {
      control: {
        type: 'color',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Overview = {
  args: { icon: LinePlus, title: 'Button', variant: 'primary' },
}
