import type { Meta, StoryObj } from '@storybook/react'
import { TagField } from '../../../src/controls'
import React, { useState } from 'react'

const meta: Meta<typeof TagField> = {
  title: 'Controls/TagField',
  component: TagField,
}

export default meta
type Story = StoryObj<typeof TagField>

export const Overview: Story = {
  args: {
    tags: [],
  },
}

export const TagFieldWithTags = () => {
  const [tags, setTags] = useState<string[]>(['tag1', 'tag2', 'tag3'])

  return <TagField tags={tags} onChange={setTags} />
}
