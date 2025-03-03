import { ReactNode } from 'react'
import { StyledComponentProps } from '../../types/StyledComponent'

export interface TabItem {
  name: string
  label: string
  icon?: React.FC<{ size: number }>
}

export interface SubTabsProps extends StyledComponentProps {
  tabs: TabItem[]
  selectedTab: TabItem
  setSelectedTab: (tab: TabItem) => void
  children?: ReactNode
  
}

export interface TabButtonProps extends StyledComponentProps {
  selected: boolean
  last: boolean
  disabled?: boolean
}

export interface TabTextProps extends StyledComponentProps{
  selected: boolean
}

