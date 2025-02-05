import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from '../../../src/controls'
import { LineShoppingCart } from '../../../src/icons'
import React, { useState } from 'react'

const meta: Meta<typeof Slider> = {
  title: 'Controls/Slider',
  component: Slider,
}

export default meta
type Story = StoryObj<typeof Slider>

export const Overview: Story = {
  args: {
    value: 0,
  },
}

export const SliderWithTitle = () => {
  const [value, setValue] = useState(0)

  return (
    <Slider
      title="Quantity"
      value={value}
      step={1}
      onValueChange={value => setValue(value[0])}
      maximumValue={100}
      minimumValue={0}
      animationType="timing"
    />
  )
}

export const SliderWithIcon = () => {
  const [value, setValue] = useState(0)

  return (
    <Slider
      icon={LineShoppingCart}
      value={value}
      step={1}
      onValueChange={value => setValue(value[0])}
      maximumValue={100}
      minimumValue={0}
      animationType="timing"
    />
  )
}
