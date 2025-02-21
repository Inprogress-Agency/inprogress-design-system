import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from '../../../src/controls'
import { LineShoppingCart } from '../../../src/icons'
import React, { useState } from 'react'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'
import { useArgs } from '@storybook/preview-api'

const meta: Meta<typeof Slider> = {
  title: 'Controls/Slider',
  component: Slider,
  parameters: generateParameters(Slider),
  argTypes: generateArgTypes(Slider),
}

export default meta

export const Overview: StoryObj<typeof Slider> = {
  args: {
    value: 0,
    minimumValue: 0,
    maximumValue: 100,
    step: 1,
  },
  render: args => {
    const [, setArgs] = useArgs()
    const onChange = (value: number[]) => {
      setArgs({ value: value[0] })
    }
    return <Slider {...args} onValueChange={onChange} />
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
