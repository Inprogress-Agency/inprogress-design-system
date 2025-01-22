import type { Meta, StoryObj } from '@storybook/react'
import { Text } from '../../src/texts'

const meta: Meta<typeof Text> = {
  title: 'Texts/Text',
  component: Text,
}

export default meta
type Story = StoryObj<typeof Text>

export const Overview = {
  args: { children: 'Exemple' },
}
