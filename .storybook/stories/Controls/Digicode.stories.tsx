import type { Meta, StoryObj } from '@storybook/react'
import { Digicode } from '../../../src/controls'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'

const meta: Meta<typeof Digicode> = {
  title: 'Controls/Digicode',
  component: Digicode,
  parameters: generateParameters(Digicode),
  argTypes: generateArgTypes(Digicode),
}

export default meta
type Story = StoryObj<typeof Digicode>

export const Overview: Story = {
  args: {
    onSubmit: () => {},
  },
}
