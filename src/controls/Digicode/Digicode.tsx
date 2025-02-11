import React, { memo, useCallback, useMemo, useState } from 'react'
import { LayoutChangeEvent, TouchableOpacity } from 'react-native'
import {
  StyledActionText,
  StyledButtons,
  StyledCode,
  StyledCodeElement,
  StyledDeleteButton,
  StyledDigicode,
  StyledKeyboard,
  StyledKeyWrapper,
  StyledText,
} from './Digicode.styles'
import KeyBase from '../../buttons/Key/Key'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { DigicodeProps, KeyProps } from './Digicode.types'
import ModalResetCodePin from '../../modals/ModalResetCodePin/ModalResetCodePin'
import { useTranslation } from 'react-i18next'

const Key = memo(({ value, onPress, disabled, height }: KeyProps) => {
  const renderKey = useCallback(() => {
    if (!value) {
      return null
    }
    if (typeof value === 'function') {
      const Component = value as React.ComponentType
      return <Component />
    }

    return (
      <KeyBase onPress={() => onPress(value as string)} disabled={disabled} height={height}>
        <StyledText keyHeight={height}>{value}</StyledText>
      </KeyBase>
    )
  }, [value, onPress, disabled, height])

  return <StyledKeyWrapper>{renderKey()}</StyledKeyWrapper>
})

const getAdditionalOptionButton = (option: any) => {
  if (!option) {
    return ''
  }
  return option.components.security
}

const Digicode = ({
  haveCode,
  onPressReset,
  onSubmit,
  disabled,
  additionalOptions = [],
}: DigicodeProps) => {
  const { t } = useTranslation()
  const [value, setValue] = useState('')
  const [height, setHeight] = useState(0)
  const digits = useMemo(
    () => [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      getAdditionalOptionButton(additionalOptions[0]),
      '0',
      getAdditionalOptionButton(additionalOptions[1]),
    ],
    [additionalOptions]
  )

  const onPress = useCallback(
    (v: string) => {
      const newValue = value + v
      if (newValue.length === 4) {
        setValue(newValue)
        setTimeout(() => {
          setValue('')
          onSubmit(newValue)
        }, 600)
        return
      }
      setValue(newValue)
    },
    [value, onSubmit]
  )

  const onDelete = useCallback(() => {
    if (value.length === 0) {
      return null
    }
    const newPin = value.slice(0, -1)
    setValue(newPin)
  }, [value])

  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    setHeight(event.nativeEvent.layout.height)
  }, [])

  return (
    <StyledDigicode height={height} onLayout={handleLayout}>
      <StyledCode height={height}>
        {[0, 1, 2, 3].map(elementIndex => {
          return (
            <StyledCodeElement
              key={elementIndex}
              full={Boolean(value[elementIndex])}
              last={elementIndex === 3}
              height={height}
            />
          )
        })}
      </StyledCode>
      <StyledKeyboard>
        {digits.map((digit, index) => {
          return (
            <Key
              key={index}
              value={digit}
              onPress={onPress}
              disabled={disabled || value.length === 4}
              height={height}
            />
          )
        })}
      </StyledKeyboard>

      <StyledButtons>
        {Boolean(haveCode) && onPressReset && (
          <ModalResetCodePin onPressReset={() => onPressReset()}>
            {(ref: React.RefObject<BottomSheetModal>) => (
              <TouchableOpacity onPress={() => ref.current?.present()}>
                <StyledActionText>{t('security.codepin_modal.forgot')} ?</StyledActionText>
              </TouchableOpacity>
            )}
          </ModalResetCodePin>
        )}

        <StyledDeleteButton onPress={onDelete}>
          <StyledActionText>{t('security.codepin_modal.delete')}</StyledActionText>
        </StyledDeleteButton>
      </StyledButtons>
    </StyledDigicode>
  )
}

export default Digicode
