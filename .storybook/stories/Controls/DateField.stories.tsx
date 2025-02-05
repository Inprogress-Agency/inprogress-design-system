import type { Meta, StoryObj } from '@storybook/react'
import { DateField } from '../../../src/controls'

const meta: Meta<typeof DateField> = {
  title: 'Controls/DateField',
  component: DateField,
}

export default meta
type Story = StoryObj<typeof DateField>

export const Overview: Story = {
  args: {
    value: {
      isError: false,
      value: Date.now(),
    },
  },
}
