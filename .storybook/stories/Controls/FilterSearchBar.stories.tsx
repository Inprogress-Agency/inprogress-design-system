import { Meta, StoryObj } from '@storybook/react'
import { FilterSearchBar } from '../../../src/controls'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'

const meta: Meta<typeof FilterSearchBar> = {
  title: 'Controls/FilterSearchBar',
  component: FilterSearchBar,
  parameters: generateParameters(FilterSearchBar),
  argTypes: generateArgTypes(FilterSearchBar),
}

export default meta

export const Overview: StoryObj<typeof FilterSearchBar> = {
  args: {
    value: 'example',
  },
}
