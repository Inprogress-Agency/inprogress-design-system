import { isBackgroundLight } from '../../utils/isBackgroundLight'
import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { useSelector } from 'react-redux'
import { ButtonProps } from './Button.types'
import { StyledButton, StyledText } from './Button.styles'
import { RootState } from '../../types/RootState'

const Button = ({
  icon: Icon,
  title,
  loading = false,
  variant = 'primary',
  afterIcon: AfterIcon,
  disabled = false,
  color,
  ...props
}: ButtonProps) => {
  const { theme, isDarkMode } = useSelector((state: RootState) => state.theme)

  return (
    <StyledButton
      variant={variant}
      disabled={loading || disabled}
      color={color || theme.colors.primary}
      isDarkMode={isDarkMode}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          color={
            variant === 'primary'
              ? isBackgroundLight(color, isDarkMode)
                ? theme.colors.black
                : theme.colors.white
              : theme.colors.primary
          }
        />
      ) : (
        <>
          {Icon && (
            <Icon
              style={{ marginRight: title ? theme.space.s : 0 }}
              color={
                variant === 'primary'
                  ? isBackgroundLight(color || theme.colors.primary, isDarkMode)
                    ? theme.colors.black
                    : theme.colors.white
                  : theme.colors.primary
              }
            />
          )}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {title && (
              <StyledText
                variant={variant}
                color={color || theme.colors.primary}
                numberOfLines={1}
                ellipsizeMode="tail"
                isDarkMode={isDarkMode}
              >
                {title}
              </StyledText>
            )}
            {AfterIcon && (
              <AfterIcon
                style={{ marginLeft: theme.space.s }}
                color={
                  variant === 'primary'
                    ? isBackgroundLight(color || theme.colors.primary, isDarkMode)
                      ? theme.colors.black
                      : theme.colors.white
                    : theme.colors.primary
                }
              />
            )}
          </View>
        </>
      )}
    </StyledButton>
  )
}

export default Button
