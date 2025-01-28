import type { Meta, StoryObj } from '@storybook/react'
import { InputAdornment } from '../../../src/controls'
import { LineArrowRight } from '../../../src/icons'
import { iconOptionsWithNull } from '../../../utils/argTypesOptions/icon'

const meta: Meta<typeof InputAdornment> = {
  title: 'Controls/InputAdornment',
  component: InputAdornment,
  argTypes: {
    adornment: iconOptionsWithNull,
  },
}

export default meta
type Story = StoryObj<typeof InputAdornment>

export const Overview: Story = {
  args: {
    value: 'Hello world',
    adornment: () => LineArrowRight({ size: 16 }),
  },
}
