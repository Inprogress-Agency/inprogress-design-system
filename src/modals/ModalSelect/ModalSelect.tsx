import { BottomSheetModal } from '@gorhom/bottom-sheet'
import deepEqual from 'deep-equal'
import React, { useRef } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Modal from '../Modal/Modal'
import { StyledOption, StyledOptionText } from './ModalSelect.styles'
import { ModalSelectProps, Option } from './ModalSelect.types'

const ModalSelect = ({
  onChange,
  title,
  subtitle,
  options,
  selected,
  setSelected,
  children: button,
}: ModalSelectProps) => {
  const ref = useRef<BottomSheetModal>(null)

  const onPressOption = (option: Option) => {
    if (!deepEqual(selected?.value, option.value)) {
      setSelected(option)
      onChange(option.value)
    }
    ref?.current?.dismiss?.()
  }

  return (
    <>
      {button(ref)}
      <Modal ref={ref} title={title} subtitle={subtitle}>
        <ScrollView>
          {options.map((option: Option, index: number) => {
            const isSelected = deepEqual(selected?.value, option.value)
            return (
              <StyledOption
                key={index}
                onPress={() => onPressOption(option)}
                isSelected={isSelected}
              >
                <StyledOptionText isSelected={isSelected}>{option.label}</StyledOptionText>
              </StyledOption>
            )
          })}
        </ScrollView>
      </Modal>
    </>
  )
}

export default ModalSelect
