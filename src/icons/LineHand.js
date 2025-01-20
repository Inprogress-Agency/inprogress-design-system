import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineHand(props) {
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
          d="M17.625 4.5c-.39 0-.774.086-1.125.254v-.629a2.625 2.625 0 00-5.123-.806A2.625 2.625 0 007.5 5.625v6l-.358-.575a2.625 2.625 0 00-4.556 2.608c1.5 3.166 2.712 5.412 4.098 6.815C8.085 21.894 9.675 22.5 12 22.5a8.26 8.26 0 008.25-8.25V7.125A2.625 2.625 0 0017.625 4.5zm1.125 9.75A6.757 6.757 0 0112 21c-1.91 0-3.142-.457-4.25-1.58-1.24-1.257-2.382-3.389-3.822-6.428a.603.603 0 00-.028-.055 1.125 1.125 0 111.962-1.103l1.75 2.813A.75.75 0 009 14.25V5.625a1.125 1.125 0 012.25 0v5.625a.75.75 0 001.5 0V4.125a1.125 1.125 0 112.25 0v7.125a.75.75 0 001.5 0V7.125a1.125 1.125 0 112.25 0v7.125z"
          fill={props.color || theme?.colors?.black || '#212121'}
        />
      </G>
    </Svg>
  )
}
export default SvgLineHand
