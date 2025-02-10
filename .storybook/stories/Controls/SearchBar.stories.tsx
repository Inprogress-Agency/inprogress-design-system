import type { Meta, StoryObj } from '@storybook/react'
import { SearchBar } from '../../../src/controls'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'

const meta: Meta<typeof SearchBar> = {
  title: 'Controls/SearchBar',
  component: SearchBar,
  parameters: generateParameters(SearchBar),
  argTypes: generateArgTypes(SearchBar),
}

export default meta

export const Overview: StoryObj<typeof SearchBar> = {
  args: {
    placeholder: 'Search',
    value: '',
  },
}
