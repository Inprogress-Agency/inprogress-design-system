import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLinePhone(props) {
  const { theme } = useSelector(state => state.theme)

  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          d="M15.165 21.634a7.705 7.705 0 002.67 0c1.417-.25 2.558-1.201 2.951-2.46l.083-.267c.087-.278.131-.565.131-.854 0-1.272-1.138-2.303-2.541-2.303H14.54c-1.403 0-2.541 1.031-2.541 2.303 0 .289.044.576.13.854l.084.267c.393 1.259 1.534 2.21 2.951 2.46zm0 0A15.04 15.04 0 013.117 9.584m0 0a7.704 7.704 0 010-2.669c.25-1.417 1.2-2.558 2.46-2.951l.266-.083a2.86 2.86 0 01.854-.131C7.969 3.75 9 4.888 9 6.291v3.918c0 1.403-1.031 2.541-2.303 2.541-.289 0-.576-.044-.854-.13l-.267-.084c-1.259-.393-2.21-1.534-2.46-2.951z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
        />
      </G>
    </Svg>
  )
}
export default SvgLinePhone
