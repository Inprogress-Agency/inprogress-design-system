import type { Meta, StoryObj } from '@storybook/react'
import { IconButtonBadge } from '../../../src/buttons'
import { LineMenu2 } from '../../../src/icons'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'

const meta: Meta<typeof IconButtonBadge> = {
  title: 'Buttons/IconButtonBadge',
  component: IconButtonBadge,
  argTypes: generateArgTypes(IconButtonBadge),
  parameters: generateParameters(IconButtonBadge),
}

export default meta

export const Overview: StoryObj<typeof IconButtonBadge> = {
  args: {
    icon: LineMenu2,
    number: 12,
  },
}
