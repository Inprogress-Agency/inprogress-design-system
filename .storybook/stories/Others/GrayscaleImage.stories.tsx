import type { Meta, StoryObj } from '@storybook/react'
import { GrayscaleImage } from '../../../src/others/'

const meta: Meta<typeof GrayscaleImage> = {
  title: 'Others/GrayscaleImage',
  component: GrayscaleImage,
}

export default meta

type Story = StoryObj<typeof GrayscaleImage>

export const Overview: Story = {
  args: {
    source: { uri: '' },
    grayscale: true,
  },
}
