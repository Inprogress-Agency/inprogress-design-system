import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineChest(props) {
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
          d="M8.884 4.079l-.453.1a7.353 7.353 0 00-5.546 5.408 13.076 13.076 0 000 6.302 7.353 7.353 0 005.546 5.407l.453.1a14.4 14.4 0 006.232 0l.453-.1a7.353 7.353 0 005.546-5.407c.514-2.07.514-4.233 0-6.302a7.353 7.353 0 00-5.546-5.408l-.453-.1a14.401 14.401 0 00-6.232 0z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
          strokeLinecap="round"
        />
        <Path
          d="M9.5 11.738a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
        />
        <Path
          d="M22.002 11.648h-7.65M9.65 11.648H2"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
          strokeMiterlimit={10}
        />
      </G>
    </Svg>
  )
}
export default SvgLineChest
