import { LineArrowRight } from '../../icons'
import React from 'react'
import { View } from 'react-native'
import { StyledOption, StyledThumbnail, StyledTitle, StyledSubTitle } from './ThumbnailOption.styles'
import { ThumbnailOptionProps } from './ThumbnailOption.types'
import { useSelector } from 'react-redux'
import { RootState } from '../../types/RootState'



const ThumbnailOption = ({ title, subtitle, renderThumbnail, ...props } : ThumbnailOptionProps) => {
  const { theme } = useSelector((state: RootState) => state.theme)

  return (
    <StyledOption {...props}>
      <StyledThumbnail>{renderThumbnail()}</StyledThumbnail>
      <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center' }}>
        <View style={{ marginLeft: 12 }}>
          <StyledTitle>{title}</StyledTitle>
          <StyledSubTitle>{subtitle}</StyledSubTitle>
        </View>
         <LineArrowRight  color={theme.colors.black} />
      </View>
    </StyledOption>
  )
}

export default ThumbnailOption
