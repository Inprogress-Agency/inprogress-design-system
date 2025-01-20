import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineFilter(props) {
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
          d="M4.68 16L3 16.044M4.68 16a2.4 2.4 0 104.8 0 2.4 2.4 0 00-4.8 0zm5.489.044H21m-8.199-8.493H3m18 0h-2.52m-.6-.151a2.4 2.4 0 11-4.8 0 2.4 2.4 0 014.8 0z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </G>
    </Svg>
  )
}
export default SvgLineFilter
