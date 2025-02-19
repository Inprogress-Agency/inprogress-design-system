import type { Meta, StoryObj } from '@storybook/react'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { LanguageSelect } from '../../../src/controls'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from '../../../utils/Store/Language'

const meta: Meta<typeof LanguageSelect> = {
  title: 'Controls/LanguageSelect',
  component: LanguageSelect,
  argTypes: generateArgTypes(LanguageSelect),
  parameters: generateParameters(LanguageSelect),
}

export default meta

export const Overview: StoryObj<typeof LanguageSelect> = {
  render: () => {
    const dispatch = useDispatch()
    const handleSubmit = (language?: string) => {
      console.log('language', language)
      return dispatch(setLanguage(language))
    }
    return <LanguageSelect onSubmit={handleSubmit} />
  },
}
