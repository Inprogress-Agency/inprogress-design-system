import type { Meta, StoryObj } from '@storybook/react'
import { Digicode } from '../../../src/controls'

const meta: Meta<typeof Digicode> = {
  title: 'Controls/Digicode',
  component: Digicode,
}

export default meta
type Story = StoryObj<typeof Digicode>

export const Overview: Story = {
  args: {
    onSubmit: () => {},
  },
}
