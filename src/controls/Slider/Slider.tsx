import React, { useMemo } from 'react'
import { StyleSheet, View } from 'react-native'
import { Slider as RNSlider } from '@miblanchard/react-native-slider'
import {
  StyledIconContentWrapper,
  StyledIconValue,
  StyledIconWrapper,
  StyledTitle,
  StyledTitleWrapper,
  StyledValue,
} from './Slider.styles'
import { RootState } from '../../types/RootState'
import { useSelector } from 'react-redux'
import { SliderProps } from './Slider.types'

const Slider = ({ icon: Icon, title, value, styles, ...props }: SliderProps) => {
  const { theme } = useSelector((state: RootState) => state.theme)

  const defaultStyles = useMemo(() => {
    return StyleSheet.create({
      container: {
        marginTop: 16,
        height: 16,
        marginBottom: 16,
      },
      trackStyle: {
        height: 8,
        borderRadius: 8,
        backgroundColor: theme.colors.grey1,
      },
      thumbStyle: {
        borderWidth: 1,
        borderColor: theme.colors.primary,
        backgroundColor: '#FFF',
        height: 24,
        width: 24,
      },
    })
  }, [theme.colors.grey1, theme.colors.primary])

  return (
    <View>
      {title && (
        <StyledTitleWrapper>
          <StyledTitle>{title} :</StyledTitle>
          <StyledValue> {value}</StyledValue>
        </StyledTitleWrapper>
      )}
      {Icon && (
        <StyledIconWrapper>
          <StyledIconContentWrapper>
            <Icon />
            <StyledIconValue>x{value}</StyledIconValue>
          </StyledIconContentWrapper>
        </StyledIconWrapper>
      )}
      <RNSlider
        value={value}
        step={props.step}
        containerStyle={styles?.container || defaultStyles.container}
        trackStyle={styles?.trackStyle || defaultStyles.trackStyle}
        minimumTrackTintColor={styles?.TrackTint || theme.colors.primary}
        thumbStyle={styles?.thumbStyle || defaultStyles.thumbStyle}
        {...props}
      />
    </View>
  )
}

export default Slider
