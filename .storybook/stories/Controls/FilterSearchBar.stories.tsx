import { Meta, StoryObj } from '@storybook/react'
import { FilterSearchBar } from '../../../src/controls'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { useArgs } from '@storybook/preview-api'
import React from 'react'

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
  render: args => {
    const [, setArgs] = useArgs()
    const onChange = (value: string) => {
      setArgs({ value })
    }
    return <FilterSearchBar {...args} onChange={onChange} />
  },
}
