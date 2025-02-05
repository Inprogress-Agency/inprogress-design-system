import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { ReactNode, RefObject } from 'react'

export interface ModalDatePickerProps {
  title: string
  renderPicker: any
  children: (ref: RefObject<BottomSheetModal>) => ReactNode
}
