import type { Meta, StoryObj } from '@storybook/react'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { OptionBloc } from '../../../src/others'
import { LineNotification } from '../../../src/icons'

const meta: Meta<typeof OptionBloc> = {
  title: 'Others/OptionBloc',
  component: OptionBloc,
  parameters: generateParameters(OptionBloc),
  argTypes: generateArgTypes(OptionBloc),
}

export default meta

export const Overview: StoryObj<typeof OptionBloc> = {
  args: {
    icon: LineNotification,
    title: 'Notifications',
    subTitle: 'Enable notifications',
    checked: true,
    onValueChange: () => {},
    disabled: false,
  },
}
