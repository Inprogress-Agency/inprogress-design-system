import { LineArrowRight } from '../../icons'
import React from 'react'
import { View } from 'react-native'


import {
  SettingButtonProps,
  DefaultWrapperProps,
  SettingOptionProps
} from './SettingBloc.types'

import {
  StyledSettings,
  StyledTitle,
  StyledOptions,
  StyledWrapperInformation,
  StyledInformation,
  StyledIcon,
  StyledWrapperTextIcon,
  StyledWrapperArrowIcon,
  StyledOptionText,
  StyledOptionSubText,
  StyledOption,
  StyledLabel
} from './SettingBloc.styles'


const SettingOption = ({
  text,
  subText,
  icon: Icon,
  onPress,
  toggle,
  iconArrow,
  lastChild,
  disabled,
  label,
  
}: SettingOptionProps) => {
  return (
    <StyledOption onPress={onPress} lastChild={lastChild} disabled={disabled}>
      <StyledIcon>
        <Icon />
      </StyledIcon>
      <StyledWrapperTextIcon>
        <View>
          <StyledOptionText>{text}</StyledOptionText>
          {subText && <StyledOptionSubText>{subText}</StyledOptionSubText>}
        </View>
        {toggle ? toggle : null}
        {label ? <StyledLabel>{label}</StyledLabel> : null}
        {iconArrow && (
          <StyledWrapperArrowIcon>
            <LineArrowRight size={12} />
          </StyledWrapperArrowIcon>
        )}
      </StyledWrapperTextIcon>
    </StyledOption>
  )
}

const DefaultWrapper = ({ children }: DefaultWrapperProps) => children(null)

const SettingButton = ({
  title,
  options,
  informationText,
  bgDisabled
}: SettingButtonProps) => {

  return (
    <StyledSettings marginBottom={options[0].subText}> 
      {title && <StyledTitle>{title}</StyledTitle>}

      <StyledOptions bgDisabled={bgDisabled}>
        {options?.map(
          (
            { text,icon: Icon, subText, parent: Parent = DefaultWrapper, onPress, uri, ...props },
            index,
          ) => (
            <Parent key={text} uri={uri} >
              {ref => (
                <SettingOption
                  text={text}
                  subText={subText}  
                  icon={Icon} 
                  lastChild={options.length === index + 1}
                  onPress={() => {
                    if (onPress) {
                      ref ? onPress(ref) : onPress();
                    }
                  }}
                  {...props}
                />
              )}
            </Parent>
          ),
        )}
      </StyledOptions>

      {informationText && (
        <StyledWrapperInformation>
          <StyledInformation>{informationText}</StyledInformation>
        </StyledWrapperInformation>
      )}
    </StyledSettings>
  )
}

export default SettingButton
