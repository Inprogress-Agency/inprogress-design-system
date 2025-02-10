import type { Meta, StoryObj } from '@storybook/react'
import { InputAdornment } from '../../../src/controls'
import { LineArrowRight } from '../../../src/icons'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'

const meta: Meta<typeof InputAdornment> = {
  title: 'Controls/InputAdornment',
  component: InputAdornment,
  parameters: generateParameters(InputAdornment),
  argTypes: generateArgTypes(InputAdornment),
}

export default meta

export const Overview: StoryObj<typeof InputAdornment> = {
  args: {
    value: 'Hello world',
    adornment: () => LineArrowRight({ size: 16 }),
  },
}
