import type { Meta, StoryObj } from '@storybook/react';
import { RedBadge } from '../../../src/others';

const meta: Meta<typeof RedBadge> = {
  title: 'Others/RedBadge',
  component: RedBadge,
};

export default meta;

export const Overview: StoryObj<typeof RedBadge> = {
  args: {
    config: {
      useDisplayBadge: () => true,
    },
    children: 'ouho',
  },
};
