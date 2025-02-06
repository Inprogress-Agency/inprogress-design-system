import type { Meta, StoryObj } from '@storybook/react'
import { ColorPicker } from '../../../src/controls'

const meta: Meta<typeof ColorPicker> = {
  title: 'Controls/ColorPicker',
  component: ColorPicker,
}

export default meta
type Story = StoryObj<typeof ColorPicker>

export const Overview: Story = {
  args: {
    value: '#000',
    autoCapitalize: 'none',
  },
}
