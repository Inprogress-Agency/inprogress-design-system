import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgUserScan(props) {
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
          d="M8.5 15.74c0-.982.709-1.82 1.672-1.975a11.507 11.507 0 013.656 0A1.996 1.996 0 0115.5 15.74v.218c0 .575-.462 1.041-1.033 1.041H9.533c-.57 0-1.033-.466-1.033-1.041v-.218zM14.042 9.059A2.05 2.05 0 0112 11.118a2.05 2.05 0 01-2.042-2.06A2.05 2.05 0 0112 7a2.05 2.05 0 012.042 2.059z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
        />
        <Path
          d="M21 7c0-2.21-2.239-4-5-4M3 16c0 2.761 1.79 5 4 5M7 3a4 4 0 00-4 4m13 14a5 5 0 005-5"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </G>
    </Svg>
  )
}
export default SvgUserScan
