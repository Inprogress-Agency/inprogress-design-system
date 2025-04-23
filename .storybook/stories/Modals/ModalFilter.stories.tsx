import type { Meta, StoryObj } from '@storybook/react'
import { ModalFilter } from '../../../src/modals'
import { Button } from '../../../src/buttons'
import React, { useState } from 'react'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'

const meta: Meta<typeof ModalFilter> = {
  title: 'ModalFilter/ModalFilter',
  component: ModalFilter,
  parameters: generateParameters(ModalFilter),
  argTypes: generateArgTypes(ModalFilter),
}

export default meta

export const Overview : StoryObj<typeof ModalFilter> = {
  args: {
    title: 'Filter',
    onSubmit: ()=>null,
    initialValue: '',
    options:  [
      { name: 'dfdf', label: 'hghghghgh' },
      { name: 'dfdfd', label: 'ghgh' },
      { name: 'chedfdfdrry', label: 'hggh' }],
  },
  render: args => {
    <ModalFilter {...args} >
      {
        ref=> 
          <Button title='Press' onPress={()=>ref.current.present()} />
      }
      </ModalFilter>
  }
}
