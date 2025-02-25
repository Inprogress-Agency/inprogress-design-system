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
