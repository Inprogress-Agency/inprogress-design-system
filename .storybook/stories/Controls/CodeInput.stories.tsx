import type { Meta, StoryObj } from '@storybook/react'
import { CodeInput } from '../../../src/controls'
import React from 'react'
import { useArgs } from '@storybook/preview-api'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'

const meta: Meta<typeof CodeInput> = {
  title: 'Controls/CodeInput',
  component: CodeInput,
  argTypes: generateArgTypes(CodeInput),
  parameters: generateParameters(CodeInput),
}

export default meta

export const Overview: StoryObj<typeof CodeInput> = {
  args: {
    code: '',
  },
  render: args => {
    const [, setArgs] = useArgs()
    const onChange = (code: string) => {
      setArgs({ code })
    }
    return <CodeInput {...args} onChange={onChange} />
  },
}
