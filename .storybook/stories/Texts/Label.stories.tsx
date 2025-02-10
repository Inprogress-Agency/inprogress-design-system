import type { Meta, StoryObj } from '@storybook/react'
import { Label } from '../../../src/texts'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'

const meta: Meta<typeof Label> = {
  title: 'Texts/Label',
  component: Label,
  parameters: generateParameters(Label),
  argTypes: generateArgTypes(Label),
}

export default meta

export const Overview: StoryObj<typeof Label> = {
  args: { children: 'Exemple', optional: true },
}
