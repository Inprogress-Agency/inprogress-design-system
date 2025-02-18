import React from 'react'
import { useTranslation } from 'react-i18next'
import { SelectOptionsProps } from './SelectOptions.types'
import { StyledOptions } from './SelectOptions.styles'
import { StyledOption } from '../../modals/ModalSelect/ModalSelect.styles'
import { SettingsForm } from '../SettingsForm/SettingsForm'
import OptionBloc from '../OptionBloc/OptionBloc'

const SelectOptions = ({ value, onChange, options, onSubmit }: SelectOptionsProps) => {
  const { t } = useTranslation()
  return (
    <SettingsForm buttonLabel={t('parametre.general.languages.save')} onSubmit={onSubmit}>
      <StyledOptions>
        {options.map((option, index) => {
          return (
            <StyledOption key={index}>
              <OptionBloc
                icon={option.icon}
                title={t(option.title)}
                subTitle={t(option.subtitle ?? '')}
                checked={value === option.value}
                onValueChange={() => onChange(option.value)}
                disabled={option.disabled}
              />
            </StyledOption>
          )
        })}
      </StyledOptions>
    </SettingsForm>
  )
}
export default SelectOptions
