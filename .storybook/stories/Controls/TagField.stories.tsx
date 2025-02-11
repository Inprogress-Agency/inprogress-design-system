import type { Meta, StoryObj } from '@storybook/react'
import { TagField } from '../../../src/controls'
import React, { useState } from 'react'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'

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
}

export const TagFieldWithTags = () => {
  const [tags, setTags] = useState<string[]>(['tag1', 'tag2', 'tag3'])

  return <TagField tags={tags} onChange={setTags} />
}
