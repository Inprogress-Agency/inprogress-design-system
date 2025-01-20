import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path, Circle } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineQuestion(props) {
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
          d="M8.95 20.647a7.511 7.511 0 01-5.597-5.597 13.354 13.354 0 010-6.1A7.511 7.511 0 018.95 3.353c2.006-.47 4.094-.47 6.1 0a7.511 7.511 0 015.597 5.597c.47 2.006.47 4.094 0 6.1a7.511 7.511 0 01-5.597 5.597c-2.006.47-4.094.47-6.1 0z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
        />
        <Circle cx={12} cy={15.5} r={1} fill={props.color || theme?.colors?.black || '#212121'} />
        <Path
          d="M10 10v-.5a2 2 0 012-2v0a2 2 0 012 2v.121c0 .563-.223 1.102-.621 1.5L12 12.5"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  )
}
export default SvgLineQuestion
