import { BottomSheetModal } from '@gorhom/bottom-sheet'

export interface Option {
  label: string
  value: string
}

export interface ModalSelectProps {
  options: Option[]
  selected: Option | null
  setSelected: (option: Option) => void
  onChange: (value: any) => void
  title: string
  subtitle?: string
  children: any
}
