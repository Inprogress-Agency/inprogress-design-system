import type { Meta, StoryObj } from '@storybook/react'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'
import { Subtabs } from '../../../src/navigation'
import { Text } from 'react-native'
import { LineHome } from '../../../src/icons'

const meta: Meta<typeof Subtabs> = {
  title: 'Navigation/SubTabs',
  component: Subtabs,
  argTypes: generateArgTypes(Subtabs),
  parameters: generateParameters(Subtabs),
}

export default meta

export const Overview: StoryObj<typeof Subtabs> = {
  args: {
    tabs: [
      { name: 'tab1', label: 'Tab 1', icon: LineHome}, 
      { name: 'tab2', label: 'Tab 2', icon: LineHome},
      { name: 'tab3', label: 'Tab 3', icon: LineHome},
    ],
    selectedTab: { name: 'tab1', label: 'Tab 1', }, 
    setSelectedTab: (tab) => console.log('Tab selected:', tab), 
    children: "Label", 
  },
}