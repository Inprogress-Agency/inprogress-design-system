import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { ReactNode, RefObject } from 'react'

export interface ModalResetCodePinProps {
  onPressReset: () => Promise<void>
  children: (ref: RefObject<BottomSheetModal>) => ReactNode
}
