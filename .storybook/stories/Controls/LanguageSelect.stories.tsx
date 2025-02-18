import type { Meta, StoryObj } from '@storybook/react'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { LanguageSelect } from '../../../src/controls'

const meta: Meta<typeof LanguageSelect> = {
  title: 'Controls/LanguageSelect',
  component: LanguageSelect,
  argTypes: generateArgTypes(LanguageSelect),
  parameters: generateParameters(LanguageSelect),
}

export default meta

export const Overview: StoryObj<typeof LanguageSelect> = {}
