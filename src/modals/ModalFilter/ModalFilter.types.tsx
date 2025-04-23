import { ReactNode, RefObject } from 'react'

export interface ModalOption {
  name: string
  label: string
}

export interface ModalFilterProps {
  title: string
  options?: ModalOption[]
  onSubmit: (selected: string[] | string | null) => void
  multiple?: boolean
  initialValue?: string[] | string | null
  resettable?: boolean
  children: (ref: RefObject<any>) => ReactNode
}

export interface HeaderProps {
  modalRef: RefObject<any>
  title: string
  onReset?: () => void
}
