import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineFocusGrey(props) {
  const { theme } = useSelector(state => state.theme)

  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          d="M9 12.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
        />
        <Path
          d="M9 10.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"
          fill={props.color || theme?.colors?.black || '#212121'}
        />
        <Path
          d="M2.75 4.833S5.875.042 11.292 1.917C16.708 3.792 16.5 9.208 16.5 9.208m-1.25 3.959s-2.5 4.583-8.125 3.125C1.5 14.833 1.5 9 1.5 9v6.667m15-13.334V9"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  )
}
export default SvgLineFocusGrey
