import { ReactNode } from 'react'
import { StyledComponentProps } from '../../types/StyledComponent'


export interface ChipTabsWrapperProps {
  setChipTabsWrapperWidth: (width: number) => void
  children: ReactNode
}

export interface StickyTabsWrapperProps {
  setStickyTabsWidth: (width: number) => void
  children: ReactNode
}

export interface TabType {
  name?: string
  label?: string
  icon?: ReactNode
  count?: number
  sticky?: boolean
  disabled?: boolean
}

export interface TabProps {
  tabs: TabType[]
  tab: TabType
  selectedTab: TabType
  setSelectedTab: (tab: TabType) => void
  index: number
}

export interface ChipTabsProps extends StyledComponentProps{
  tabs: TabType[]
  selectedTab: TabType
  setSelectedTab: (tab: TabType) => void
  children?: ReactNode
  tabWrapper: boolean
}

export interface FilteredChipTabsProps extends ChipTabsProps {
  title: string
  options: TabType[]
}

export interface TextOrIconTabProps extends StyledComponentProps {
  selectedTab: TabType
  tab: TabType
  index: number
  setSelectedTab: (tab: TabType) => void
  last: boolean
  theme: any
  selected?: boolean
}

export interface StyledTabButtonProps extends StyledComponentProps{
  selected?: boolean;
  disabled?: boolean;
  last?: boolean;
  theme: any; 
}


