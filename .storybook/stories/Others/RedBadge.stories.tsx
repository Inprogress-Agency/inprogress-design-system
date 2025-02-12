import type { Meta, StoryObj } from '@storybook/react';
import { RedBadge } from '../../../src/others';
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes';
import { generateParameters } from '../../../utils/generateMeta/generateParameters';
import React from 'react';
import { Button } from '../../../src/buttons';

const meta: Meta<typeof RedBadge> = {
  title: 'Others/RedBadge',
  component: RedBadge,
  parameters: generateParameters(RedBadge),
  argTypes: generateArgTypes(RedBadge),
};

export default meta;

export const Overview: StoryObj<typeof RedBadge> = {
  args: {
    config: {
      useDisplayBadge: () => true,
    },
    children: <Button title='Button'/> ,
  },
};
