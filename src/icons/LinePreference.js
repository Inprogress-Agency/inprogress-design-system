import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLinePreference(props) {
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
          d="M21 14.7c0 3.483-2.817 6.3-6.3 6.3l.945-1.575M3 9.3C3 5.817 5.817 3 9.3 3l-.945 1.575m4.18 4.315a7.421 7.421 0 010-3.388 4.173 4.173 0 013.11-3.11 7.419 7.419 0 013.388 0 4.173 4.173 0 013.11 3.11 7.418 7.418 0 010 3.388 4.173 4.173 0 01-3.11 3.11 7.418 7.418 0 01-3.388 0 4.173 4.173 0 01-3.11-3.11zM1.892 18.5a7.418 7.418 0 010-3.388 4.173 4.173 0 013.11-3.11 7.418 7.418 0 013.388 0 4.173 4.173 0 013.11 3.11 7.418 7.418 0 010 3.388 4.173 4.173 0 01-3.11 3.11 7.418 7.418 0 01-3.388 0 4.173 4.173 0 01-3.11-3.11z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  )
}
export default SvgLinePreference
