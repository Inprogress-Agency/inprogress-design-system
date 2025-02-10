import type { Meta, StoryObj } from '@storybook/react'
import { IconButton } from '../../../src/buttons'
import { LineMenu2 } from '../../../src/icons'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'

const meta: Meta<typeof IconButton> = {
  title: 'Buttons/IconButton',
  component: IconButton,
  argTypes: generateArgTypes(IconButton),
  parameters: generateParameters(IconButton),
}

export default meta

export const Overview: StoryObj<typeof IconButton> = {
  args: {
    icon: LineMenu2,
  },
}
