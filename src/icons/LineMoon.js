import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineMoon(props) {
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
          d="M13.399 8.396a.308.308 0 01.577 0l.264.735c.031.086.1.154.187.184l.744.26a.301.301 0 010 .571l-.744.26a.305.305 0 00-.187.185l-.264.735a.308.308 0 01-.577 0l-.264-.735a.305.305 0 00-.187-.184l-.744-.26a.301.301 0 010-.571l.744-.26a.305.305 0 00.187-.185l.264-.735zM16.307 11.662c.065-.179.321-.179.386 0l.175.49c.021.058.067.103.125.123l.496.174a.2.2 0 010 .38l-.496.174a.203.203 0 00-.125.123l-.175.49a.205.205 0 01-.386 0l-.175-.49a.203.203 0 00-.125-.123l-.496-.174a.2.2 0 010-.38l.496-.174a.203.203 0 00.125-.123l.175-.49zM17.77 4.042c.139-.39.696-.39.836 0l.478 1.334a.44.44 0 00.27.266l1.35.473a.436.436 0 010 .826l-1.35.472a.44.44 0 00-.27.267l-.478 1.334a.446.446 0 01-.837 0l-.478-1.334a.44.44 0 00-.27-.267l-1.35-.472a.436.436 0 010-.826l1.35-.473a.44.44 0 00.27-.266l.478-1.334z"
          fill={props.color || theme?.colors?.black || '#212121'}
        />
        <Path
          d="M3 14.21c0 4.164 3.474 7.54 7.76 7.54 3.3 0 6.117-2 7.24-4.822a7.04 7.04 0 01-2.93.633c-3.809 0-6.897-3-6.897-6.703 0-1.548.54-2.973 1.448-4.108C5.875 7.285 3 10.421 3 14.21z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  )
}
export default SvgLineMoon
