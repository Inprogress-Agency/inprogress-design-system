import React, { memo, useState } from 'react'
import { Dimensions, LayoutChangeEvent } from 'react-native'
import {
  CodeField as RNCodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field'
import { CodeFieldProps } from './CodeInput.types'
import { StyledCell, StyledCodeField, StyledTextCode, styles } from './CodeInput.styles'

const CELL_COUNT = 6

const CodeField = memo(({ code, onChange }: CodeFieldProps) => {
  const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT })
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: code,
    setValue: onChange,
  })
  const [cellSize, setCellSize] = useState(0)

  const handleLayout = ({ nativeEvent }: LayoutChangeEvent) => {
    setCellSize((nativeEvent.layout.width - 24 - CELL_COUNT * 8) / CELL_COUNT)
  }

  return (
    <StyledCodeField onLayout={handleLayout}>
      <RNCodeField
        ref={ref}
        value={code}
        onChangeText={onChange}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({
          index,
          symbol,
          isFocused,
        }: {
          index: number
          symbol: string
          isFocused: boolean
        }) => (
          <StyledCell
            cellSize={cellSize}
            className="items-center justify-center"
            isFocused={isFocused}
          >
            <StyledTextCode
              key={index}
              cellSize={cellSize}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </StyledTextCode>
          </StyledCell>
        )}
      />
    </StyledCodeField>
  )
})

export default CodeField
