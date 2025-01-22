import type { Meta, StoryObj } from '@storybook/react'
import { IconButton } from '../../src/buttons'
import * as icons from '../../src/icons'

const meta: Meta<typeof IconButton> = {
  title: 'IconButton',
  component: IconButton,
  argTypes: {
    icon: {
      options: Object.keys(icons),
      mapping: Object.keys(icons).reduce((acc, key) => {
        const Icon = icons[key]
        acc[key] = <Icon size={24} />
        return acc
      }, {}),
      control: {
        type: 'select',
        labels: Object.keys(icons).reduce((acc, key) => {
          acc[key] = key
          return acc
        }, {}),
      },
    },
    color: {
      control: 'color',
    },
  },
}

export default meta
type Story = StoryObj<typeof IconButton>

export const Overview: Story = {
  args: {
    icon: <icons.LineMenu2 size={24} />,
  },
}
