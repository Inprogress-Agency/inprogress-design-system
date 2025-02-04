import type { Meta, StoryObj } from '@storybook/react'
import { Label } from '../../../src/texts'

const meta: Meta<typeof Label> = {
  title: 'Texts/Label',
  component: Label,
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
    },
    optional: {
      control: {
        type: 'boolean',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Label>

export const Overview = {
  args: { children: 'Exemple', optional: true },
}
