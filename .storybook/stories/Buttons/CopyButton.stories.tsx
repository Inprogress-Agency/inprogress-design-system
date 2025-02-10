import type { Meta, StoryObj } from '@storybook/react'
import { CopyButton } from '../../../src/buttons'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'

const meta: Meta<typeof CopyButton> = {
  title: 'Buttons/CopyButton',
  component: CopyButton,
  parameters: generateParameters(CopyButton),
  argTypes: generateArgTypes(CopyButton),
}

export default meta

export const Overview: StoryObj<typeof CopyButton> = {
  args: { value: 'https://www.google.com', copyable: true },
}
