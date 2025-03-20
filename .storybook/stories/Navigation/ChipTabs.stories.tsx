import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'
import { ChipTabs } from '../../../src/navigation'
import { LineHome } from '../../../src/icons'

const meta: Meta<typeof ChipTabs> = {
  title: 'Navigation/ChipTabs',
  component: ChipTabs,
  argTypes: generateArgTypes(ChipTabs),
  parameters: generateParameters(ChipTabs),
}

export default meta

export const Overview: StoryObj<typeof ChipTabs> = {
  args: {
    tabs: [
      { name: 'tab1', label: 'Tab 1', icon: LineHome}, 
      { name: 'tab2', label: 'Tab 2', icon: LineHome},
      { name: 'tab3', label: 'Tab 3', icon: LineHome},
    ],
    selectedTab: { name: 'tab1', label: 'Tab 1', }, 
    setSelectedTab: (tab) => console.log('Tab selected:', tab), 
  },
}