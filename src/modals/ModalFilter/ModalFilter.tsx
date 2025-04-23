import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable, View } from 'react-native'
import { Text } from '../../texts'
import Modal from '../Modal/Modal'
import { CheckBox } from '../../controls'
import { IconButton } from '../../buttons'
import { LineArrowLeft } from '../../icons'
import { StyledCheckableElement, StyledTop, StyledContainer, StyledText, StyledCheckText } from './ModalFilter.styles'
import { ModalFilterProps, HeaderProps } from './ModalFilter.types'
import { useSelector } from 'react-redux'
import { RootState } from '../../types/RootState'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

const Header= ({ modalRef, title, onReset } : HeaderProps) => {
  const { theme } = useSelector((state: RootState) => state.theme)
  const { t } = useTranslation()

  return (
    <StyledTop>
      <StyledContainer>
        <IconButton
          onPress={() => modalRef?.current?.dismiss()}
          color={theme.colors.black} 
          icon={(props) => <LineArrowLeft {...props} />}
        />
        <StyledText>{title}</StyledText>
      </StyledContainer>
      {onReset && (
        <Pressable onPress={onReset}>
          <Text color={theme.colors.primary}>{t('edit_profil.reset')}</Text>
        </Pressable>
      )}
    </StyledTop>
  )
}

const ModalFilter = ({
  title,
  options = [],
  onSubmit,
  multiple = false,
  initialValue,
  resettable = false,
  children: button,
} : ModalFilterProps) => {
  const { theme } = useSelector((state: RootState) => state.theme)
  const { t } = useTranslation()
  const ref = useRef<any>(null)

  const defaultValue = multiple ? [] : null
  const [selectedCheckBox, setSelectedCheckBox] = useState<string[] | string | null>(defaultValue)

  useEffect(() => {
    if (initialValue !== undefined) {
      setSelectedCheckBox(initialValue)
    }
  }, [initialValue])

  const handleSubmit = useCallback(() => {
    onSubmit(selectedCheckBox)
    ref.current?.dismiss()
  }, [selectedCheckBox, onSubmit])

  const getIsSelected = useCallback(
    (name: string) => {
      if (multiple && Array.isArray(selectedCheckBox)) {
        return selectedCheckBox.includes(name)
      }
      return selectedCheckBox === name
    },
    [selectedCheckBox, multiple]
  )

  const handleSelect = useCallback(
    (option: { name: string }) => {
      if (multiple) {
        const isSelected = getIsSelected(option.name)
        setSelectedCheckBox(prev => {
          const prevArray = Array.isArray(prev) ? prev : []
          return isSelected
            ? prevArray.filter(item => item !== option.name)
            : [...prevArray, option.name]
        })
      } else {
        setSelectedCheckBox(option.name)
      }
    },
    [multiple, getIsSelected]
  )

  return (
    <>
      {button(ref)}
      <Modal
        header={
          <Header
            modalRef={ref}
            title={title}
            onReset={
              resettable
                ? () => setSelectedCheckBox(initialValue ?? (multiple ? [] : null))
                : undefined
            }            
          />
        }
        ref={ref}
        actions={[
          {
            title: 'Confirm' ,
            onPress: handleSubmit,
            color: theme.colors.primary,
          },
        ]}
      >
        {options.map(option => (
          <StyledCheckableElement key={option.name} onPress={() => handleSelect(option)}>
            <CheckBox
              onValueChange={() => handleSelect(option)}
              value={getIsSelected(option.name)}
            />
            <StyledCheckText>{option.label}</StyledCheckText>
          </StyledCheckableElement>
        ))}
      </Modal>
    </>
  )
}

export default ModalFilter
