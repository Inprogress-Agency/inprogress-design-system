import React, { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Keyboard } from 'react-native'
import Toast from 'react-native-toast-message'
import TextInput from '../TextInput/TextInput'
import {
  StyledDeleteTag,
  StyledDeleteTagText,
  StyledTag,
  StyledTagList,
  StyledTagText,
} from './TagField.styles'
import { TagFieldProps, TagListProps } from './TagField.types'

const TagList = ({ tags = [], onRemove }: TagListProps) => {
  return (
    <StyledTagList>
      {tags.map((tag, index) => {
        return (
          <StyledTag key={index} onPress={() => onRemove(tag)}>
            <StyledTagText>{tag}</StyledTagText>
            <StyledDeleteTag>
              <StyledDeleteTagText>×</StyledDeleteTagText>
            </StyledDeleteTag>
          </StyledTag>
        )
      })}
    </StyledTagList>
  )
}

const format = (value: string) => {
  const tag = changeSpecialCharacters(value)
  return `#${tag}`
}

const validate = ({ value, tags }: { value: string; tags: string[] }) => {
  if (tags.length >= 3) {
    return 'edit_profil.informations.hashtags.error1'
  }
  if (value.length < 3 || value.length > 24) {
    return 'edit_profil.informations.hashtags.error2'
  }
  if (tags.includes(value)) {
    return 'edit_profil.informations.hashtags.error3'
  }
}

const changeSpecialCharacters = (str: string) => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^A-Za-z0-9-]+/g, '')
}

const TagField = ({ tags = [], onChange, ...props }: TagFieldProps) => {
  const [value, setValue] = useState('')
  const { t } = useTranslation()

  const disabled = tags.length >= 3

  const handleChange = useCallback(
    (value: string, { submit }: { submit?: boolean } = {}) => {
      if (!value) {
        return setValue('')
      }

      if (value.indexOf(' ') === -1 && !submit) {
        return setValue(value)
      }
      const formattedHashtag = format(value)
      Keyboard.dismiss()
      const error = validate({ value, tags })
      if (error) {
        return Toast.show({
          type: 'error',
          text1: t(error),
          props: {
            closable: true,
          },
        })
      }
      const values = [...tags, formattedHashtag]
      onChange(values)
      setValue('')
    },
    [tags, onChange, value, t]
  )

  const handleRemove = (tag: string) => {
    onChange(tags.filter(item => item !== tag))
  }

  return (
    <>
      <TextInput
        placeholder={t('profilepage.galerie.edit_photo.add_hashtag')}
        value={value}
        onChangeText={handleChange}
        disabled={disabled}
        editable={!disabled}
        blurOnSubmit={false}
        onSubmitEditing={() => handleChange(value, { submit: true })}
        {...props}
      />
      <TagList onRemove={handleRemove} tags={tags} />
    </>
  )
}

export default TagField
