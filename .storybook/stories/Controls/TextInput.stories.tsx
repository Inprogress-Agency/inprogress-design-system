import type { Meta, StoryObj } from '@storybook/react'
import { TextInput } from '../../../src/controls'

const meta: Meta<typeof TextInput> = {
  title: 'Controls/TextInput',
  component: TextInput,
}

export default meta
type Story = StoryObj<typeof TextInput>

export const Overview: Story = {
  args: {
    value: 'Hello world',
  },
}
