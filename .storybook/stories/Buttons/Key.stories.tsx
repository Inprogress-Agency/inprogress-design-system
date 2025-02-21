import type { Meta, StoryObj } from '@storybook/react'
import { Key } from '../../../src/buttons'
import { Text } from '../../../src/texts'
import React from 'react'
import { View } from 'react-native'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'

const meta: Meta<typeof Key> = {
  title: 'Buttons/Key',
  component: Key,
  parameters: generateParameters(Key),
  argTypes: generateArgTypes(Key),
  decorators: [
    Story => (
      <View style={{ position: 'relative', height: 40, width: 40 }}>
        <Story />
      </View>
    ),
  ],
}

export default meta

export const Overview: StoryObj<typeof Key> = {
  args: {
    height: 400,
    children: <Text>4</Text>,
  },
}
