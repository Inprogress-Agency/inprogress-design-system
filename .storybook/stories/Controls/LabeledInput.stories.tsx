import type { Meta, StoryObj } from '@storybook/react'
import { LabeledInput } from '../../../src/controls'
import { LineEdit3 } from '../../../src/icons'
import React from 'react'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'

const meta: Meta<typeof LabeledInput> = {
  title: 'Controls/LabeledInput',
  component: LabeledInput,
  parameters: generateParameters(LabeledInput),
  argTypes: generateArgTypes(LabeledInput),
}

export default meta

export const Overview: StoryObj<typeof LabeledInput> = {
  args: {
    title: 'Champ de texte',
    labelProps: {
      optional: true,
    },
    inputProps: {
      placeholder: 'Entrez votre texte',
    },
    children: <LineEdit3 />,
  },
}
