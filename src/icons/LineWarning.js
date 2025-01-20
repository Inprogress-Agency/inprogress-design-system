import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineWarning(props) {
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
          d="M12 14.5c-.41 0-.75-.34-.75-.75V8.5c0-.41.34-.75.75-.75s.75.34.75.75v5.25c0 .41-.34.75-.75.75zM12 18a.99.99 0 01-.71-.29c-.09-.1-.16-.21-.22-.33A.986.986 0 0111 17c0-.26.11-.52.29-.71.37-.37 1.05-.37 1.42 0 .18.19.29.45.29.71 0 .13-.03.26-.08.38s-.12.23-.21.33A.99.99 0 0112 18z"
          fill={props.color || theme?.colors?.black || '#212121'}
        />
      </G>
    </Svg>
  )
}
export default SvgLineWarning
