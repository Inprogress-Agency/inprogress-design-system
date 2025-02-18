import type { Meta, StoryObj } from '@storybook/react'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { LanguageForm } from '../../../src/others'

const meta: Meta<typeof LanguageForm> = {
  title: 'Others/LanguageForm',
  component: LanguageForm,
  parameters: generateParameters(LanguageForm),
  argTypes: generateArgTypes(LanguageForm),
}

export default meta

export const Overview: StoryObj<typeof LanguageForm> = {}
