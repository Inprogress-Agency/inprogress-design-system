import React from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'
import { StyledLineArrowBottom, StyledSelector } from './LanguageSelect.styles'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { FlagEn, FlagEs, FlagFr } from '../../icons'
import { LanguageFlags, LanguageSelectProps } from './LanguageSelect.types'
import { SupportedLanguage } from '../../types/SupportedLanguage'
import ModalSelectLanguage from '../../modals/ModalSelectLanguage/ModalSelectLanguage'

const FLAGS: LanguageFlags = {
  en: <FlagEn size={32} />,
  fr: <FlagFr size={32} />,
  es: <FlagEs size={32} />,
}

const LanguageSelect = ({ onSubmit }: LanguageSelectProps) => {
  const { i18n } = useTranslation()

  return (
    <ModalSelectLanguage onSubmit={onSubmit}>
      {(ref: React.RefObject<BottomSheetModal>) => (
        <StyledSelector onPress={() => ref.current.present()}>
          <View>{FLAGS[i18n.language as SupportedLanguage]}</View>
          <StyledLineArrowBottom />
        </StyledSelector>
      )}
    </ModalSelectLanguage>
  )
}

export default LanguageSelect
