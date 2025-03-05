import { ReactNode } from 'react'
import { StyledComponentProps } from '../../types/StyledComponent'
import { IconComponent } from '../../types/Icon'

export interface TabItem {
  name: string
  label: string
  icon?: IconComponent 

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

