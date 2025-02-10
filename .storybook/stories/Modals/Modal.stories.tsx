import type { Meta } from '@storybook/react'
import { Modal } from '../../../src/modals'
import { Button } from '../../../src/buttons'
import React, { useRef } from 'react'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { Text } from '../../../src/texts'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'

const meta: Meta<typeof Modal> = {
  title: 'Modals/Modal',
  component: Modal,
  parameters: generateParameters(Modal),
  argTypes: generateArgTypes(Modal),
}

export default meta

export const Overview = () => {
  const ref = useRef<BottomSheetModal>(null)
  return (
    <>
      <Button title="Press to show modal" onPress={() => ref.current?.present()} />
      <Modal
        ref={ref}
        actions={[{ title: 'Close', onPress: () => ref.current?.dismiss() }]}
        title="Title"
        subtitle="Subtitle"
      >
        <Text>Content</Text>
      </Modal>
    </>
  )
}
