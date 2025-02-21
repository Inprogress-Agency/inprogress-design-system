import type { Meta, StoryObj } from '@storybook/react'
import { TagField } from '../../../src/controls'
import React from 'react'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'
import { useArgs } from '@storybook/preview-api'

const meta: Meta<typeof TagField> = {
  title: 'Controls/TagField',
  component: TagField,
  parameters: generateParameters(TagField),
  argTypes: generateArgTypes(TagField),
}

export default meta

export const Overview: StoryObj<typeof TagField> = {
  args: {
    tags: [],
  },
  render: args => {
    const [, setArgs] = useArgs()
    const onChange = (tags: string[]) => {
      setArgs({ tags: tags })
    }
    return <TagField {...args} onChange={onChange} />
  },
}
