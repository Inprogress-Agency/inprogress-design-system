import { isBackgroundLight } from '../../../utils/Functions/isBackgroundLight'
import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { useSelector } from 'react-redux'
import { StoreTheme } from '../../../utils/Store/Theme/Theme.types'
import { ButtonProps } from './Button.types'
import { StyledButton, StyledText } from './Button.styles'

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
  const { theme, isDarkMode } = useSelector((state: { theme: StoreTheme }) => state.theme)

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
