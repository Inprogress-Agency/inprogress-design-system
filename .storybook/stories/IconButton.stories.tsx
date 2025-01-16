import type { Meta, StoryObj } from '@storybook/react'
import { IconButton } from '../../src/buttons'
import { View } from 'react-native'

const meta: Meta<typeof IconButton> = {
  title: 'IconButton',
  component: IconButton,
}

export default meta
type Story = StoryObj<typeof IconButton>

export const Overview = {
  args: {icon: <View style={{width: 24, height: 24}} />}
}