import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StyledButton, StyledButtonWrapper, StyledWrapper, styles } from './SettingsForm.styles'
import { SettingsFormProps } from './SettingsForm.types'
import { useTranslation } from 'react-i18next'

export const SettingsForm = ({
  onSubmit = () => null,
  buttonLabel = 'parametre.general.personal_info.btn',
  children,
  renderCustomButton,
}: SettingsFormProps) => {
  const { t } = useTranslation()
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.contentContainer}
      scrollEnabled={true}
      keyboardOpeningTime={0}
      showsVerticalScrollIndicator={false}
    >
      <StyledWrapper>
        {children}
        <StyledButtonWrapper>
          {renderCustomButton ? (
            renderCustomButton()
          ) : (
            <StyledButton title={t(buttonLabel)} onPress={onSubmit} />
          )}
        </StyledButtonWrapper>
      </StyledWrapper>
    </KeyboardAwareScrollView>
  )
}
