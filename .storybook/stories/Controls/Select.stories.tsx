import type { Meta } from '@storybook/react'
import { Select } from '../../../src/controls'
import React, { useState } from 'react'
import { DefaultSelect } from '../../../src/controls/Select/Select'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'

const meta: Meta<typeof Select> = {
  title: 'Controls/Select',
  component: Select,
  parameters: generateParameters(Select),
  argTypes: generateArgTypes(Select),
}

export default meta

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
