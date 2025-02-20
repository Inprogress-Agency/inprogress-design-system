import type { Meta, StoryObj } from '@storybook/react'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'
import { StrokeText } from '../../../src/texts'

const meta: Meta<typeof StrokeText> = {
  title: 'Texts/StrokeText',
  component: StrokeText,
  parameters: generateParameters(StrokeText),
  argTypes: generateArgTypes(StrokeText),
}

export default meta

export const Overview: StoryObj<typeof StrokeText> = {
  args: { children: 'Example', fontSize: 32 },
}
