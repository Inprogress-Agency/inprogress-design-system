import type { Meta, StoryObj } from '@storybook/react'
import { Select } from '../../../src/controls'
import React, { useState } from 'react'
import { DefaultSelect } from '../../../src/controls/Select/Select'

const meta: Meta<typeof Select> = {
  title: 'Controls/Select',
  component: Select,
}

export default meta
type Story = StoryObj<typeof Select>

export const Overview = () => {
  const [selected, setSelected] = useState<string>('orange')

  return (
    <DefaultSelect
      variant="primary"
      title="Select a fruit"
      placeholder="Select a fruit"
      initialValue="orange"
      options={[
        { label: 'Orange', value: 'orange' },
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
      ]}
      onChange={setSelected}
    />
  )
}
