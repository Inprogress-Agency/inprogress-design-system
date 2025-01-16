import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgDiscovery(props) {
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
          d="M3.353 9.7A7.511 7.511 0 018.95 4.103c2.006-.47 4.094-.47 6.1 0A7.511 7.511 0 0120.647 9.7c.47 2.006.47 4.094 0 6.1a7.511 7.511 0 01-5.597 5.597c-2.006.47-4.094.47-6.1 0A7.511 7.511 0 013.353 15.8a13.354 13.354 0 010-6.1z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
        />
        <Path
          d="M10.182 12.046a2 2 0 011.114-1.114l2.038-.815c.816-.327 1.626.483 1.3 1.3l-.816 2.037a2 2 0 01-1.114 1.114l-2.037.815c-.817.327-1.627-.483-1.3-1.3l.815-2.037z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  )
}
export default SvgDiscovery
