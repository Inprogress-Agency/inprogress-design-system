import React from 'react'
import { useTranslation } from 'react-i18next'
import { LabelProps } from './Label.types'
import { StyledLabel, StyledOptionalText } from './Label.styles'
import { useSelector } from 'react-redux'
import { RootState } from '../../types/RootState'
import Text from '../Text/Text'

const Label = ({
  color,
  children = '',
  optional = false,
  containerProps = {},
  ...props
}: LabelProps) => {
  const { theme } = useSelector((state: RootState) => state.theme)
  const { t } = useTranslation()
  return (
    <StyledLabel {...containerProps}>
      <Text color={color || theme.colors.grey3} {...props}>
        {children}
      </Text>
      {optional && (
        <StyledOptionalText color={theme.colors.grey2}>
          {t('onboarding.step2.optional')}
        </StyledOptionalText>
      )}
    </StyledLabel>
  )
}

export default Label
