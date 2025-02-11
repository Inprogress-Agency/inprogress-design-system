import type { Meta, StoryObj } from '@storybook/react'
import { IllustratedArrowButton } from '../../../src/buttons'
import { Text } from '../../../src/texts'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'

const meta: Meta<typeof IllustratedArrowButton> = {
  title: 'Buttons/IllustratedArrowButton',
  component: IllustratedArrowButton,
  parameters: generateParameters(IllustratedArrowButton),
  argTypes: generateArgTypes(IllustratedArrowButton),
}

export default meta

export const Overview: StoryObj<typeof IllustratedArrowButton> = {
  args: {
    image: { uri: 'https://inprogress.agency/logo.png' },
    content: <Text>Contenu</Text>,
  },
}
