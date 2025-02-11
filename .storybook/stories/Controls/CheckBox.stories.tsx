import type { Meta, StoryObj } from '@storybook/react'
import { CheckBox } from '../../../src/controls'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'

const meta: Meta<typeof CheckBox> = {
  title: 'Controls/CheckBox',
  component: CheckBox,
  argTypes: generateArgTypes(CheckBox),
  parameters: generateParameters(CheckBox),
}

export default meta

export const Overview: StoryObj<typeof CheckBox> = {
  args: {
    value: true,
    onValueChange: () => {},
  },
}
