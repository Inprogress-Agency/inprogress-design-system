import type { Meta, StoryObj } from '@storybook/react'
import { SearchBar } from '../../../src/controls'

const meta: Meta<typeof SearchBar> = {
  title: 'Controls/SearchBar',
  component: SearchBar,
}

export default meta
type Story = StoryObj<typeof SearchBar>

export const Overview: Story = {
  args: {
    placeholder: 'Search',
    value: '',
  },
}
