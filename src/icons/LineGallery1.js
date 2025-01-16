import * as React from 'react'
import Svg, { Path, Rect } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineGallery1(props) {
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
        <Rect x={21} y={14.738} width={4} height={4} rx={2} stroke="#7ACB8B" strokeWidth={1.5} />
        <Path
          d="M12.718 24.94l1.739-1.74a4.161 4.161 0 015.885 0l1.739 1.74m0 0l.704-.705a3.12 3.12 0 014.604.209l.413.495m-5.721 0l2.6 2.601m-13.328-4.752a13.354 13.354 0 010-6.1 7.511 7.511 0 015.597-5.597c2.006-.47 4.094-.47 6.1 0a7.511 7.511 0 015.597 5.597c.47 2.006.47 4.094 0 6.1a7.511 7.511 0 01-5.597 5.597c-2.006.47-4.094.47-6.1 0a7.511 7.511 0 01-5.597-5.598z"
          stroke="#7ACB8B"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  )
}
export default SvgLineGallery1
