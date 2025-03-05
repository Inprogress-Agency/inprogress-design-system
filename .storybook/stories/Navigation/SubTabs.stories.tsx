import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'
import { Subtabs } from '../../../src/navigation'
import { LineHome } from '../../../src/icons'
import { useArgs } from 'storybook/internal/preview-api'
import { TabItem } from '../../../src/navigation/SubTabs/SubTabs.types'

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
  },
  render: args => {
    const [ , setArgs] = useArgs()
    const setSelectedTab = (value: TabItem) => {
      args.setSelectedTab(value)
      setArgs({ selectedTab : value })
    }

    return <Subtabs {...args} setSelectedTab={setSelectedTab} />
  },
}