import { t } from 'i18next'
import React, { RefObject, useRef } from 'react'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { ModalSelectLanguageProps } from './ModalSelectLanguage.types'
import Modal from '../Modal/Modal'
import LanguageForm from '../../others/LanguageForm/LanguageForm'

const ModalSelectLanguages = ({ children: button, onSubmit }: ModalSelectLanguageProps) => {
  const ref = useRef<BottomSheetModal>(null)

  const handleChange = (language?: string) => {
    ref?.current?.dismiss?.()
    onSubmit(language)
  }

  return (
    <>
      {button(ref as RefObject<BottomSheetModal>)}
      <Modal
        ref={ref}
        title={t('parametre.general.languages.title')}
        subtitle={t('parametre.general.languages.subtitle')}
      >
        <LanguageForm onSubmit={handleChange} />
      </Modal>
    </>
  )
}

export default ModalSelectLanguages
