import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { StyledLanguageForm } from './LanguageForm.styles'
import { LanguageFormProps } from './LanguageForm.types'
import { FlagEn, FlagEs, FlagFr } from '../../icons'
import SelectOption from '../SelectionOptions/SelectOptions'

const OPTIONS = [
  {
    icon: FlagFr,
    title: 'parametre.general.languages.choice.fr',
    value: 'fr',
  },
  {
    icon: FlagEn,
    title: 'parametre.general.languages.choice.en',
    value: 'en',
  },
  {
    icon: FlagEs,
    title: 'parametre.general.languages.choice.es',
    value: 'es',
  },
]

const LanguageForm = ({ onSubmit }: LanguageFormProps) => {
  const { i18n } = useTranslation()
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language)

  return (
    <StyledLanguageForm>
      <SelectOption
        value={selectedLanguage}
        options={OPTIONS}
        onChange={setSelectedLanguage}
        onSubmit={onSubmit}
      />
    </StyledLanguageForm>
  )
}
export default LanguageForm
