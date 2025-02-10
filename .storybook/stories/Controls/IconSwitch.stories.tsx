import type { Meta, StoryObj } from '@storybook/react'
import { IconSwitch } from '../../../src/controls'
import { LineTwoUsers, LineUser } from '../../../src/icons'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'

const meta: Meta<typeof IconSwitch> = {
  title: 'Controls/IconSwitch',
  component: IconSwitch,
  parameters: generateParameters(IconSwitch),
  argTypes: generateArgTypes(IconSwitch),
}

export default meta

export const Overview: StoryObj<typeof IconSwitch> = {
  args: {
    value: 'solo',
    left: {
      condition: 'solo',
      icon: LineUser,
      action: () => {},
    },
    right: {
      condition: 'multi',
      icon: LineTwoUsers,
      action: () => {},
    },
  },
}
