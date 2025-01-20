import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Rect, Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineGallery(props) {
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
        <Rect
          x={13}
          y={7.75}
          width={4}
          height={4}
          rx={2}
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
        />
        <Path
          d="M4.718 17.951l1.739-1.739a4.161 4.161 0 015.885 0l1.739 1.74m0 0l.704-.705a3.12 3.12 0 014.604.209l.413.495m-5.721 0l2.6 2.601M3.353 15.8a13.354 13.354 0 010-6.1A7.511 7.511 0 018.95 4.103c2.006-.47 4.094-.47 6.1 0A7.511 7.511 0 0120.647 9.7c.47 2.006.47 4.094 0 6.1a7.511 7.511 0 01-5.597 5.597c-2.006.47-4.094.47-6.1 0A7.511 7.511 0 013.353 15.8z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  )
}
export default SvgLineGallery
