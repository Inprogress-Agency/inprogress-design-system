import type { Meta, StoryObj } from '@storybook/react'
import { TextInput } from '../../../src/controls'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'

const meta: Meta<typeof TextInput> = {
  title: 'Controls/TextInput',
  component: TextInput,
  parameters: generateParameters(TextInput),
  argTypes: generateArgTypes(TextInput),
}

export default meta

export const Overview: StoryObj<typeof TextInput> = {
  args: {
    value: 'Hello world',
  },
}
