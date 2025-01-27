import type { Meta, StoryObj } from '@storybook/react'
import { CheckBox } from '../../../src/controls'

const meta: Meta<typeof CheckBox> = {
  title: 'Controls/CheckBox',
  component: CheckBox,
  argTypes: {
    borderColor: {
      control: {
        type: 'color',
      },
    },
    notCheckedBackgroundColor: {
      control: {
        type: 'color',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof CheckBox>

export const Overview: Story = {
  args: {
    value: true,
    onValueChange: () => {},
  },
}
