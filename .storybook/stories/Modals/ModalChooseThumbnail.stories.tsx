import type { Meta, StoryObj } from '@storybook/react';

import ModalChooseThumbnail, { ModalChooseThumbnailProps } from '../../../src/modals/ModalChooseThumbnail';
import { Button } from '../../../src/buttons';
import { generateParameters } from '../../../utils/generateMeta/generateParameters';
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes';

const meta: Meta<typeof ModalChooseThumbnail> = {
  title: 'Modals/ModalChooseThumbnail',
  component: ModalChooseThumbnail,
  parameters: generateParameters(ModalChooseThumbnail),
  argTypes: generateArgTypes(ModalChooseThumbnail),
};

export default meta;

type Story = StoryObj<typeof ModalChooseThumbnail>;

export const Overview: Story = {
  args: {
    onChange: () => console.log('[ModalChooseThumbnail] onChange'),
    onReset: () => console.log('[ModalChooseThumbnail] onReset'),
  } as ModalChooseThumbnailProps,
  render: (args) => (
    <ModalChooseThumbnail {...args}>
      {(ref) => (
        <Button title="Open modal" onPress={() => ref.current?.present()} />
      )}
    </ModalChooseThumbnail>
  ),
};
