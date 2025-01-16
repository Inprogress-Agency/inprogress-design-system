import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineMessage4(props) {
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
          d="M8.696 9.808h6.032m-6.032 3.456h3.839m.576 6.413h1.061c2.887 0 5.398-2.077 6.076-5.025a9.955 9.955 0 000-4.455l-.09-.386c-.652-2.841-2.781-5.049-5.494-5.698l-.381-.092a9.853 9.853 0 00-4.593 0l-.224.054c-2.81.672-5.014 2.959-5.69 5.901-.37 1.61-.367 3.303.003 4.912.687 2.989 2.708 5.476 5.419 6.635l.118.05c1.173.502 2.517-.102 2.998-1.333a.866.866 0 01.797-.563z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </G>
    </Svg>
  )
}
export default SvgLineMessage4
