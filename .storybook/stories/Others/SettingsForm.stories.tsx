import type { Meta, StoryObj } from '@storybook/react'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { SettingsForm } from '../../../src/others/SettingsForm/SettingsForm'
import { Text } from '../../../src/texts'
import React from 'react'
import { View } from 'react-native'

const meta: Meta<typeof SettingsForm> = {
  title: 'Others/SettingsForm',
  component: SettingsForm,
  parameters: generateParameters(SettingsForm),
  argTypes: generateArgTypes(SettingsForm),
}

export default meta

export const Overview: StoryObj<typeof SettingsForm> = {
  args: {
    buttonLabel: 'Save',
    onSubmit: () => null,
    children: (
      <View style={{ width: '100%', flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Children</Text>
      </View>
    ),
  },
}
