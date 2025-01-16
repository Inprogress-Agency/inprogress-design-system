import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineCamera(props) {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.877 0h.246c4.186 0 7.735.835 10.669 2.404a16.355 16.355 0 016.804 6.804C39.165 12.142 40 15.691 40 19.878v.245c0 4.186-.836 7.735-2.404 10.669a16.355 16.355 0 01-6.804 6.804C27.858 39.165 24.309 40 20.122 40h-.245c-4.186 0-7.735-.836-10.669-2.404a16.355 16.355 0 01-6.804-6.804C.835 27.858 0 24.309 0 20.122v-.245c0-4.186.835-7.735 2.404-10.669a16.355 16.355 0 016.804-6.804C12.142.835 15.691 0 19.878 0z"
          fill="#EBF8EB"
        />
        <Path
          d="M16.44 13.5c.374-1.582 1.826-2.762 3.56-2.762s3.186 1.18 3.56 2.762l.155.031c2.385.486 4.285 2.245 4.907 4.545.504 1.867.504 3.83 0 5.696-.622 2.3-2.522 4.06-4.907 4.545l-.456.093c-2.15.437-4.369.437-6.518 0l-.456-.093c-2.385-.486-4.285-2.245-4.906-4.545a10.904 10.904 0 010-5.696c.621-2.3 2.52-4.06 4.906-4.545l.156-.031z"
          stroke="#7ACB8B"
          strokeWidth={1.5}
          strokeLinejoin="round"
        />
        <Path
          d="M17.5 20.738a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z"
          stroke="#7ACB8B"
          strokeWidth={1.5}
        />
      </G>
    </Svg>
  )
}
export default SvgLineCamera
