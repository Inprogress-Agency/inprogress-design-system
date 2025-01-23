import type { Meta, StoryObj } from '@storybook/react'
import { CopyButton } from '../../../src/buttons'

const meta: Meta<typeof CopyButton> = {
  title: 'Buttons/CopyButton',
  component: CopyButton,
}

export default meta
type Story = StoryObj<typeof CopyButton>

export const Overview = {
  args: { value: 'https://www.google.com', copyable: true },
}
