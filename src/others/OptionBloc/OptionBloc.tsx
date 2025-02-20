import React, { memo } from 'react'
import {
  StyledCheckboxWrapper,
  StyledOption,
  StyledOptionWrapper,
  StyledSubTitle,
  StyledTitle,
  StyledTitleAndIconWrapper,
  StyledTitleWrapper,
} from './OptionBloc.styles'
import { CheckBox } from '../../controls'
import { OptionBlocProps } from './OptionBloc.types'

const OptionBloc = ({
  icon: Icon,
  title,
  subTitle,
  checked,
  onValueChange,
  disabled,
}: OptionBlocProps) => {
  return (
    <StyledOption
      onPress={() => {
        onValueChange(!checked)
      }}
      disabled={disabled}
    >
      <StyledOptionWrapper>
        <StyledTitleAndIconWrapper>
          <Icon />
          <StyledTitleWrapper>
            <StyledTitle>{title}</StyledTitle>
            {subTitle && <StyledSubTitle>{subTitle}</StyledSubTitle>}
          </StyledTitleWrapper>
        </StyledTitleAndIconWrapper>
        <StyledCheckboxWrapper>
          <CheckBox value={checked} onValueChange={onValueChange} />
        </StyledCheckboxWrapper>
      </StyledOptionWrapper>
    </StyledOption>
  )
}
export default memo(OptionBloc)
