import type { Meta, StoryObj } from '@storybook/react'
import { ArrowButton } from '../../../src/buttons'
import { LineHome } from '../../../src/icons'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'

const meta: Meta<typeof ArrowButton> = {
  title: 'Buttons/ArrowButton',
  component: ArrowButton,
  argTypes: generateArgTypes(ArrowButton),
  parameters: generateParameters(ArrowButton),
}

export default meta

export const Overview: StoryObj<typeof ArrowButton> = {
  args: { icon: LineHome, title: 'ArrowButton', subtitle: 'This is an arrow button' },
}
