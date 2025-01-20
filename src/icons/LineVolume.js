import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineVolume(props) {
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
          d="M8.866 7.006h-.738a7.07 7.07 0 00-2.436.434c-1.367.502-2.362 1.753-2.59 3.258l-.008.05a8.366 8.366 0 000 2.504l.008.05c.228 1.505 1.223 2.756 2.59 3.258a7.07 7.07 0 002.436.434h.738c.445 0 .871.187 1.184.52l.541.577c1.597 1.7 4.347.896 4.88-1.428a20.854 20.854 0 000-9.326c-.533-2.324-3.283-3.129-4.88-1.428l-.541.577c-.313.333-.74.52-1.184.52z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
        />
        <Path
          d="M19 7c1.793.998 3 2.863 3 5 0 2.136-1.207 4.002-3 5"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M18.5 10c.598.4 1 1.145 1 2s-.402 1.6-1 2"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  )
}
export default SvgLineVolume
