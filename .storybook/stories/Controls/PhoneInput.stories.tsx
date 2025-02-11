import type { Meta, StoryObj } from '@storybook/react'
import { PhoneInput } from '../../../src/controls'


const meta: Meta<typeof PhoneInput> = {
  title: 'Controls/PhoneInput',
  component: PhoneInput,
}

export default meta
type Story = StoryObj<typeof PhoneInput>

export const Overview: Story = {
  args: {
    value: {number:'0612345678', code: ['FR', '+33']},
  },
}
