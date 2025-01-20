import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineFocus(props) {
  const { theme } = useSelector(state => state.theme)

  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          d="M10 13.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
        />
        <Path
          d="M10 11.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"
          fill={props.color || theme?.colors?.black || '#212121'}
        />
        <Path
          d="M3.75 5.833s3.125-4.791 8.542-2.916c5.416 1.875 5.208 7.291 5.208 7.291m-1.25 3.959s-2.5 4.583-8.125 3.125C2.5 15.833 2.5 10 2.5 10v6.667m15-13.334V10"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  )
}
export default SvgLineFocus
