import React from 'react'

import { StyledTabButton, StyledTabText } from './SubTabs.styles'
import { TabItem, SubTabsProps } from './SubTabs.types'
import { GradientScrollView } from '../../layout'


const Subtabs: React.FC<SubTabsProps> = ({
  tabs,
  selectedTab,
  setSelectedTab,
  children,
}) => {
  if (!tabs) return null

  return (
    <GradientScrollView horizontal fade style={{ paddingBottom: 16, flexDirection: 'row' }}>
      {tabs.map((tab: TabItem, index: number) => {
        const isSelected = selectedTab?.name === tab.name

        return (
          <StyledTabButton
            key={tab.name}
            selected={isSelected}
            onPress={() => setSelectedTab(tab)}
            last={index === tabs.length - 1}
          >
            {tab.icon && <tab.icon size={16} />}
            <StyledTabText selected={isSelected}>{tab.label}</StyledTabText>
          </StyledTabButton>
        )
      })}
      {children}
    </GradientScrollView>
  )
}

export default Subtabs
