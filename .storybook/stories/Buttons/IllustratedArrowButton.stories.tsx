import type { Meta, StoryObj } from '@storybook/react'
import { IllustratedArrowButton } from '../../../src/buttons'
import { Text } from '../../../src/texts'

const meta: Meta<typeof IllustratedArrowButton> = {
  title: 'Buttons/IllustratedArrowButton',
  component: IllustratedArrowButton,
}

export default meta
type Story = StoryObj<typeof IllustratedArrowButton>

export const Overview = {
  args: {
    image: { uri: 'https://inprogress.agency/logo.png' },
    content: <Text>Contenu</Text>,
  },
}
