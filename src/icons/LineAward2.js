import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineAward2(props) {
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
          d="M14.203 15.344a5.5 5.5 0 001.977-.884l1.146 4.507c.345 1.353-1.103 2.478-2.392 1.859l-1.933-.929a2.32 2.32 0 00-2.002 0l-1.933.929c-1.29.619-2.737-.506-2.392-1.86L7.82 14.46a5.5 5.5 0 001.978.884m4.405 0a9.95 9.95 0 01-4.405 0m4.405 0c2.005-.456 3.572-1.973 4.042-3.915a9.052 9.052 0 000-4.267c-.47-1.943-2.037-3.46-4.043-3.915a9.95 9.95 0 00-4.404 0c-2.006.456-3.573 1.972-4.043 3.915a9.055 9.055 0 000 4.266c.47 1.943 2.037 3.46 4.043 3.916"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
        />
      </G>
    </Svg>
  )
}
export default SvgLineAward2
