import { t } from 'i18next'
import React, { RefObject, useRef } from 'react'
import { ModalResetCodePinProps } from './ModalResetCodePin.types'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import Modal from '../Modal/Modal'
import { RootState } from '../../types/RootState'
import { useSelector } from 'react-redux'

const ModalResetCodePin = ({ children: button, onPressReset }: ModalResetCodePinProps) => {
  const { theme } = useSelector((state: RootState) => state.theme)
  const ref = useRef<BottomSheetModal>(null)
  return (
    <>
      {button(ref as RefObject<BottomSheetModal>)}
      <Modal
        ref={ref}
        title={t('security.codepin_modal.reset.title')}
        subtitle={t('security.codepin_modal.reset.subtitle')}
        actions={[
          {
            title: t('modal.btn.confirm'),
            onPress: onPressReset,
            color: theme.colors.primary,
          },
          {
            color: theme.colors.grey1,
            title: t('modal.btn.cancel'),
            onPress: () => ref?.current?.dismiss?.(),
          },
        ]}
      />
    </>
  )
}

export default ModalResetCodePin
