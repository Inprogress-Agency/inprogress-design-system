import type { Meta, StoryObj } from '@storybook/react'
import { FilterSearchBar } from '../../../src/controls'

const meta: Meta<typeof FilterSearchBar> = {
  title: 'Controls/FilterSearchBar',
  component: FilterSearchBar,
}

export default meta
type Story = StoryObj<typeof FilterSearchBar>

export const Overview: Story = {
  args: {
    value: 'example',
  },
}
