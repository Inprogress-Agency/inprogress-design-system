import type { Meta, StoryObj } from '@storybook/react'
import { Key } from '../../../src/buttons'
import { Text } from '../../../src/texts'
import React from 'react'
import { View } from 'react-native'

const meta: Meta<typeof Key> = {
  title: 'Buttons/Key',
  component: Key,
}

export default meta
type Story = StoryObj<typeof Key>

export const Overview = () => {
  return (
    <View style={{ position: 'relative', height: 40, width: 40 }}>
      <Key height={400}>
        <Text>4</Text>
      </Key>
    </View>
  )
}
