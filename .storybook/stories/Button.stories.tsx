import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../src/buttons'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Overview = {
  args: { title: 'Button', variant: 'primary' },
}
