import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineTravel(props) {
  const { theme } = useSelector(state => state.theme)

  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          d="M17.152 14.059a6.95 6.95 0 11-11.47-5.283M9.895 11.487a2.225 2.225 0 00-.064 1.789 2.113 2.113 0 001.969 1.31 1.07 1.07 0 011.07 1.071v4.824M3.347 15.13H5.92a2.142 2.142 0 012.197 2.141v3.406M20.989 4.981l-1.39-.473a.473.473 0 00-.543.18L18.043 6.26 12.48 3.48A3.462 3.462 0 007.462 5.3a.945.945 0 00.654 1.252l3.628 1.167.362.126.68 2.335a.5.5 0 00.334.348l1.64.528a.514.514 0 00.668-.57l-.361-1.738h.236l3.545 1.154a.931.931 0 001.182-.57l1.25-3.85a.472.472 0 00-.291-.501z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  )
}
export default SvgLineTravel
