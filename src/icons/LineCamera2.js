import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineCamera2(props) {
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
          d="M8.44 5.762C8.815 4.18 10.267 3 12 3s3.186 1.18 3.56 2.762l.155.031C18.1 6.28 20 8.038 20.622 10.338c.504 1.867.504 3.83 0 5.696-.622 2.3-2.522 4.06-4.907 4.545l-.456.093c-2.15.437-4.369.437-6.518 0l-.456-.093C5.9 20.094 4 18.334 3.378 16.034a10.905 10.905 0 010-5.696C4 8.038 5.9 6.278 8.285 5.793l.156-.031z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
          strokeLinejoin="round"
        />
        <Path
          d="M9.5 13a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
        />
      </G>
    </Svg>
  )
}
export default SvgLineCamera2
