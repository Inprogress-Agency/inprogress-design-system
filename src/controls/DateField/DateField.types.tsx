import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { IconComponent } from '../../types/Icon'
import { StyledComponentProps } from '../../types/StyledComponent'
import { ReactNode, RefObject } from 'react'
import { DateTimePickerEvent } from '@react-native-community/datetimepicker'

interface PickerValue {
  value: string | number
  isError: boolean
}

export interface ButtonWrapperProps {
  title: string
  renderPicker: any
  children: ((ref: React.RefObject<BottomSheetModal>) => ReactNode) | ReactNode | Function | null
}

export interface DatePickerButtonProps {
  value: { value: number | string; isError: boolean }
  title: string
  onChangeDate: (event: DateTimePickerEvent, date?: Date) => void
  isPickerOpen: boolean
  children: (ref: RefObject<BottomSheetModal> | null) => ReactNode
}

export interface DateFieldProps {
  value: PickerValue
  onChangeText?: ({ isError, value }: PickerValue) => void
  adornment?: IconComponent | null | undefined
  title: string
}

export interface StyledWrapperProps extends StyledComponentProps {
  adornment: IconComponent | null
  error: boolean
}
