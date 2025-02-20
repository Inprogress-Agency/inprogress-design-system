import type { Meta, StoryObj } from '@storybook/react'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { SelectOptions } from '../../../src/others'
import { FlagEn, FlagEs, FlagFr } from '../../../src/icons'

const meta: Meta<typeof SelectOptions> = {
  title: 'Others/SelectOptions',
  component: SelectOptions,
  parameters: generateParameters(SelectOptions),
  argTypes: generateArgTypes(SelectOptions),
}

export default meta

export const Overview: StoryObj<typeof SelectOptions> = {
  args: {
    value: 'en',
    onChange: () => {},
    options: [
      {
        icon: FlagEn,
        title: 'English',
        value: 'en',
      },
      {
        icon: FlagFr,
        title: 'French',
        value: 'fr',
      },
      {
        icon: FlagEs,
        title: 'Spanish',
        value: 'es',
      },
    ],
    onSubmit: () => {},
  },
}
