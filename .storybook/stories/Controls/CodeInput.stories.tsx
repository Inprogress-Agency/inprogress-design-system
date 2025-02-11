import type { Meta, StoryObj } from '@storybook/react'
import { CodeInput } from '../../../src/controls'
import React, { useState } from 'react'

const meta: Meta<typeof CodeInput> = {
  title: 'Controls/CodeInput',
  component: CodeInput,
}

export default meta
type Story = StoryObj<typeof CodeInput>
export const Overview: Story = {
  args: {
    code: '',
  },
}

export const CodeInputWithCode = () => {
  const [code, setCode] = useState('')
  return <CodeInput code={code} onChange={setCode} />
}
