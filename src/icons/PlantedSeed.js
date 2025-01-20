import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgPlantedSeed(props) {
  const { theme } = useSelector(state => state.theme)

  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          d="M2.499.75A4.084 4.084 0 016.53 4.189a3.78 3.78 0 012.676-1.106h1.167c.805 0 1.458.653 1.458 1.459a3.792 3.792 0 01-3.791 3.791H6.582v2.334a.583.583 0 01-1.166 0V6.583H4.249A4.083 4.083 0 01.166 2.5c0-.966.783-1.75 1.75-1.75h.583zm8.166 3.792a.292.292 0 00-.291-.292H9.207a2.625 2.625 0 00-2.625 2.625v.292h1.459a2.625 2.625 0 002.624-2.625zM2.5 1.917h-.583a.583.583 0 00-.584.583A2.917 2.917 0 004.25 5.417h1.167v-.584a2.917 2.917 0 00-2.917-2.916z"
          fill={props.color || theme?.colors?.black || '#212121'}
        />
      </G>
    </Svg>
  )
}
export default SvgPlantedSeed
