import React, { RefObject, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { RootState } from '../../types/RootState'
import { useSelector } from 'react-redux'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import Modal from '../Modal/Modal'
import { ModalDatePickerProps } from './ModalDatePicker.types'

const ModalDatePicker = ({ title, children: button, renderPicker }: ModalDatePickerProps) => {
  const { theme } = useSelector((state: RootState) => state.theme)
  const ref = useRef<BottomSheetModal>(null)
  const { t } = useTranslation()

  return (
    <>
      {button(ref as RefObject<BottomSheetModal>)}
      <Modal
        ref={ref}
        title={t(title)}
        actions={[
          {
            color: theme.colors.primary,
            title: t('modal.btn.confirm'),
            onPress: () => ref.current?.dismiss(),
          },
        ]}
      >
        {renderPicker()}
      </Modal>
    </>
  )
}

export default ModalDatePicker
