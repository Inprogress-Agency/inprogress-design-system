import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgPlantedDrop(props) {
  const { theme } = useSelector(state => state.theme)

  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          d="M10.938 8.75c0 2.416-1.522 3.938-3.938 3.938-2.416 0-3.938-1.522-3.938-3.938 0-2.593 2.823-6.093 3.689-7.106a.328.328 0 01.498 0c.866 1.013 3.689 4.513 3.689 7.106z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeMiterlimit={10}
        />
        <Path
          d="M9.406 8.969a1.969 1.969 0 01-1.969 1.969"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  )
}
export default SvgPlantedDrop
