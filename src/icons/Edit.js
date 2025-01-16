import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgEdit(props) {
  const { theme } = useSelector(state => state.theme)

  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          d="M16.5 9.136c-1.818.606-4.242-1.818-3.636-3.636m.747-.747L9.694 8.67a13.287 13.287 0 00-3.495 6.172l-.19.758a.322.322 0 00.391.39l.758-.19a13.286 13.286 0 006.172-3.494l3.917-3.917a2.571 2.571 0 10-3.636-3.636z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
        />
        <Path
          d="M19 20H5"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  )
}
export default SvgEdit
