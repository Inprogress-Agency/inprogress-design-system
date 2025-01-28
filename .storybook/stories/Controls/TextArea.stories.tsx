import type { Meta, StoryObj } from '@storybook/react'
import { TextArea } from '../../../src/controls'

const meta: Meta<typeof TextArea> = {
  title: 'Controls/TextArea',
  component: TextArea,
}

export default meta
type Story = StoryObj<typeof TextArea>

export const Overview: Story = {
  args: {
    value: 'This is my bio.',
    copyable: true,
    maxLength: 100,
  },
}
