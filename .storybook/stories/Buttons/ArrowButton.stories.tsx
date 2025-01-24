import type { Meta, StoryObj } from '@storybook/react'
import { ArrowButton } from '../../../src/buttons'
import { iconOptions } from '../../../utils/argTypesOptions/icon'
import { LineHome } from '../../../src/icons'

const meta: Meta<typeof ArrowButton> = {
  title: 'Buttons/ArrowButton',
  component: ArrowButton,
  argTypes: {
    icon: iconOptions,
  },
}

export default meta
type Story = StoryObj<typeof ArrowButton>

export const Overview = {
  args: { icon: LineHome, title: 'ArrowButton', subtitle: 'This is an arrow button' },
}
