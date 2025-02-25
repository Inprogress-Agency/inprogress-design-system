import type { Meta, StoryObj } from '@storybook/react'
import { SettingBloc  } from '../../../src/others'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes';
import { generateParameters } from '../../../utils/generateMeta/generateParameters';

const meta: Meta<typeof SettingBloc> = {
  title: 'Others/SettingBloc',
  component: SettingBloc,
    parameters: generateParameters(SettingBloc),
    argTypes: generateArgTypes(SettingBloc),
}

export default meta
type Story = StoryObj<typeof SettingBloc>

export const Overview: Story = {
  args: {
    title: 'Settings',
    options: [
      {
        text: 'Option 1',
        subText: 'Subtext for option 1',
        icon: '🔧',
        onPress: () => alert('Option 1 pressed'),
        toggle: null,
        iconArrow: true,
        lastChild: false,
        disabled: false,
        label: 'Label 1',
      },
      {
        text: 'Option 2',
        subText: 'Subtext for option 2',
        icon: '⚙️',
        onPress: () => alert('Option 2 pressed'),
        iconArrow: true,
        lastChild: true,
        disabled: false,
        label: 'Label 2',
      },
    ],
    informationText: 'This is some additional information.',
    bgDisabled: false,
  },
}