import Clipboard from '@react-native-clipboard/clipboard'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { TouchableOpacity } from 'react-native'
import Toast from 'react-native-toast-message'
import { CopyButtonProps } from './CopyButton.Types'
import { StyledText } from './CopyButton.styles'

const CopyButton = ({ value, copyable }: CopyButtonProps) => {
  const { t } = useTranslation()

  const handleCopy = () => {
    Clipboard.setString(value)
    Toast.show({
      type: 'info',
      text1: t('toastText.copy_Link'),
      props: {
        closable: true,
      },
    })
  }

  if (!copyable) {
    return null
  }

  return (
    <TouchableOpacity onPress={handleCopy} disabled={!value.length}>
      <StyledText disabled={!value.length}>{t('copy_text_area')}</StyledText>
    </TouchableOpacity>
  )
}

export default CopyButton
