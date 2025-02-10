import type { Meta, StoryObj } from '@storybook/react'
import { Text } from '../../../src/texts'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'

const meta: Meta<typeof Text> = {
  title: 'Texts/Text',
  component: Text,
  parameters: generateParameters(Text),
  argTypes: generateArgTypes(Text),
}

export default meta

export const Overview: StoryObj<typeof Text> = {
  args: { children: 'Exemple' },
}
