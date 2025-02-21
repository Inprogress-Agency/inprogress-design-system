import type { Meta, StoryObj } from '@storybook/react'
import { GrayscaleImage } from '../../../src/others/'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'

const meta: Meta<typeof GrayscaleImage> = {
  title: 'Others/GrayscaleImage',
  component: GrayscaleImage,
  argTypes: generateArgTypes(GrayscaleImage),
  parameters: generateParameters(GrayscaleImage),
}

export default meta

export const Overview: StoryObj<typeof GrayscaleImage> = {
  args: {
    source: { uri: 'https://picsum.photos/300' },
    grayscale: true,
    resizeMode: 'contain',
  },
}
