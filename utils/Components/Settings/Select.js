import { View, Text } from 'react-native'
import React from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import { LineArrowBottom, LineArrowTop } from '../../../src/icons'
const Select = ({ value, options, onChange }) => {
  const selectedOption = options.find(item => item.value === value)
  return (
    <SelectDropdown
      data={options}
      onSelect={(option, index) => onChange(option.value, index)}
      renderButton={(option, isOpened) => {
        return (
          <View
            style={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <Text>{selectedOption.title}</Text>
            {isOpened ? <LineArrowTop size={16} /> : <LineArrowBottom size={16} />}
          </View>
        )
      }}
      renderItem={(option, index, isSelected) => {
        return (
          <View>
            <Text>{option?.title || placeholder}</Text>
          </View>
        )
      }}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default Select
