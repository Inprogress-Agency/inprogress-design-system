import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineQuestionPrimary(props) {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.377 0h.246c4.186 0 7.735.835 10.669 2.404a16.355 16.355 0 016.804 6.804c1.569 2.934 2.404 6.483 2.404 10.67v.245c0 4.186-.836 7.735-2.404 10.669a16.355 16.355 0 01-6.804 6.804C28.358 39.165 24.809 40 20.622 40h-.245c-4.186 0-7.735-.836-10.669-2.404a16.355 16.355 0 01-6.804-6.804C1.335 27.858.5 24.309.5 20.122v-.245c0-4.186.835-7.735 2.404-10.669a16.355 16.355 0 016.804-6.804C12.642.835 16.191 0 20.378 0z"
          fill="#7ACB8B"
        />
        <Path
          d="M17.45 28.385a7.511 7.511 0 01-5.597-5.598 13.354 13.354 0 010-6.099 7.511 7.511 0 015.597-5.597c2.006-.47 4.094-.47 6.1 0a7.511 7.511 0 015.597 5.597c.47 2.006.47 4.094 0 6.1a7.511 7.511 0 01-5.597 5.597c-2.006.47-4.094.47-6.1 0z"
          stroke="#fff"
          strokeWidth={1.5}
        />
        <Circle cx={20.5} cy={23.238} r={1} fill="#fff" />
        <Path
          d="M18.5 17.738v-.5a2 2 0 012-2v0a2 2 0 012 2v.121c0 .563-.224 1.102-.621 1.5L20.5 20.238"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  )
}
export default SvgLineQuestionPrimary
