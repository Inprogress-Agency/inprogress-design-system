import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { ReactNode, RefObject } from 'react'

export interface ModalSelectLanguageProps {
  children: (ref: RefObject<BottomSheetModal>) => ReactNode
  onSubmit: (language?: string) => void
}
