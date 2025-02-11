import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../../src/buttons'
import { LinePlus } from '../../../src/icons'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'

const meta: Meta<typeof Button> = {
  title: 'Buttons/Button',
  component: Button,
  argTypes: generateArgTypes(Button),
  parameters: generateParameters(Button),
}

export default meta

export const Overview: StoryObj<typeof Button> = {
  args: { icon: LinePlus, title: 'Button', variant: 'primary' },
}
