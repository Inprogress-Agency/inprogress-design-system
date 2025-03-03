import type { Meta, StoryObj } from '@storybook/react'
import { ThumbnailOption } from '../../../src/buttons'
import { Text } from '../../../src/texts'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'

const meta: Meta<typeof ThumbnailOption> = {
  title: 'Buttons/ThumbnailOption',
  component: ThumbnailOption,
  parameters: generateParameters(ThumbnailOption),
  argTypes: generateArgTypes(ThumbnailOption),
}

export default meta

export const Overview: StoryObj<typeof ThumbnailOption> = {
  args: {
    title: 'Example Title',
    subtitle: 'This is a subtitle.',
    renderThumbnail: () => (
      ''
    ),
  },
}

