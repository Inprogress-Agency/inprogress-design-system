import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgTripadvisor(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 34 34"
      {...props}
    >
      <G scale={1}>
        <Path
          d="M16.98 6.82c-4.425 0-8.425 1.117-11.578 3.176l-5.308.008s1.254 1.668 1.66 3.355L15.18 23.664l1.804 2.691 1.82-2.714 13.458-10.29c.402-1.695 1.668-3.39 1.668-3.39l-5.657-.004C25.105 7.91 21.25 6.82 16.98 6.82zm0 0"
          fill="#000a12"
        />
        <Path
          d="M25.191 9.934a8.427 8.427 0 00-7.43 4.922 8.52 8.52 0 00-.745 2.894c-.317-4.328-3.887-7.762-8.274-7.852 2.426-1.035 5.215-1.597 8.235-1.597 3.043 0 5.789.547 8.214 1.633"
          fill="#fcc40f"
        />
        <Path
          d="M16.05 18.71a7.583 7.583 0 01-7.581 7.587 7.586 7.586 0 010-15.172 7.585 7.585 0 017.582 7.586zm0 0"
          fill="#fff"
          strokeWidth={1.7646830700000002}
          stroke="#000a12"
        />
        <Path
          d="M11.879 18.71a3.41 3.41 0 11-6.822 0 3.41 3.41 0 016.822 0zm0 0"
          fill="none"
          strokeWidth={1.5398346200000002}
          stroke="#000a12"
        />
        <Path
          d="M9.875 18.71a1.409 1.409 0 11-2.817.004 1.409 1.409 0 012.817-.003zm0 0"
          fill="#ef6a45"
        />
        <Path
          d="M33.117 18.695a7.584 7.584 0 01-7.586 7.586 7.583 7.583 0 01-7.582-7.586 7.585 7.585 0 017.582-7.586 7.586 7.586 0 017.586 7.586zm0 0"
          fill="#fff"
          strokeWidth={1.7646830700000002}
          stroke="#000a12"
        />
        <Path
          d="M28.941 18.695a3.41 3.41 0 11-6.819-.001 3.41 3.41 0 016.82.001zm0 0"
          fill="none"
          strokeWidth={1.5398346200000002}
          stroke="#000a12"
        />
        <Path
          d="M26.941 18.695a1.409 1.409 0 11-2.815.003 1.409 1.409 0 012.815-.003zm0 0"
          fill="#00b087"
        />
      </G>
    </Svg>
  )
}
export default SvgTripadvisor
