import type { Meta, StoryObj } from '@storybook/react'
import { TextArea } from '../../../src/controls'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'

const meta: Meta<typeof TextArea> = {
  title: 'Controls/TextArea',
  component: TextArea,
  parameters: generateParameters(TextArea),
  argTypes: generateArgTypes(TextArea),
}

export default meta

export const Overview: StoryObj<typeof TextArea> = {
  args: {
    value: 'This is my bio.',
    copyable: true,
    maxLength: 100,
  },
}
