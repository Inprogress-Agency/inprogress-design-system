import type { Meta, StoryObj } from '@storybook/react'
import { LabeledInput } from '../../../src/controls'
import { LineEdit3 } from '../../../src/icons'
import React from 'react'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { useArgs } from 'storybook/internal/preview-api'

const meta: Meta<typeof LabeledInput> = {
  title: 'Controls/LabeledInput',
  component: LabeledInput,
  parameters: generateParameters(LabeledInput),
  argTypes: generateArgTypes(LabeledInput),
}

export default meta

export const Overview: StoryObj<typeof LabeledInput> = {
  args: {
    title: 'Label',
    labelProps: {
      optional: true,
    },
    inputProps: {
      value: '',
      placeholder: 'Enter your text here',
    },
    children: <LineEdit3 />,
  },
}
