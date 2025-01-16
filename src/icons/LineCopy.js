import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineCopy(props) {
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
          d="M7.426 12.268a10.271 10.271 0 010-4.691 5.778 5.778 0 014.306-4.306 10.272 10.272 0 014.691 0 5.778 5.778 0 014.306 4.306 10.271 10.271 0 010 4.691 5.778 5.778 0 01-4.306 4.306 10.271 10.271 0 01-4.691 0m-4.306-4.306a5.778 5.778 0 004.306 4.306m-4.306-4.306a10.271 10.271 0 01-.253-2.957 8.779 8.779 0 00-.25.054 4.952 4.952 0 00-3.69 3.69 8.804 8.804 0 000 4.022 4.952 4.952 0 003.69 3.69c1.322.31 2.699.31 4.021 0a4.952 4.952 0 003.69-3.69c.02-.083.038-.167.055-.25a10.27 10.27 0 01-2.957-.253"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
        />
      </G>
    </Svg>
  )
}
export default SvgLineCopy
