import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgGoogleMyBusiness(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 48 48"
      {...props}
    >
      <G scale={1}>
        <Path fill="#2196f3" d="M8 38a3 3 0 003 3h13.975L8 24.025V38z" />
        <Path fill="#1e88e5" d="M8 16v8.025L24.975 41H38a3 3 0 003-3V16H8z" />
        <Path
          fill="#81acea"
          d="M14.75 19.12c0 2.7-2.18 4.88-4.88 4.88C7.18 24 5 21.82 5 19.12V19h9.74c.01.04.01.08.01.12z"
        />
        <Path
          fill="#3f51b5"
          d="M24.5 19v.12c0 2.7-2.18 4.88-4.88 4.88-2.69 0-4.87-2.18-4.87-4.88 0-.04 0-.08.01-.12h9.74z"
        />
        <Path
          fill="#81acea"
          d="M34.25 19.12c0 2.7-2.18 4.88-4.88 4.88-2.69 0-4.87-2.18-4.87-4.88V19h9.74c.01.04.01.08.01.12z"
        />
        <Path
          fill="#3f51b5"
          d="M44 19v.12c0 2.7-2.18 4.88-4.88 4.88-2.69 0-4.87-2.18-4.87-4.88 0-.04 0-.08.01-.12H44z"
        />
        <Path
          fill="#82b1ff"
          d="M9.562 7a2 2 0 00-1.94 1.516L5.01 18.98C5 18.99 5 18.99 5 19h9.766l1.5-12H9.562z"
        />
        <Path
          fill="#5c6bc0"
          d="M16.266 7l-1.5 12H24.5V7zM44 19c0-.01 0-.01-.01-.02L41.378 8.516A2 2 0 0039.438 7h-6.703l1.5 12H44z"
        />
        <Path fill="#82b1ff" d="M32.735 7H24.5v12h9.735z" />
        <Path
          fill="#ededed"
          d="M33.649 38.299c-2.563 0-4.649-2.086-4.649-4.649S31.086 29 33.649 29c1.072 0 2.119.374 2.947 1.054l-1.269 1.547A2.605 2.605 0 0033.649 31C32.188 31 31 32.188 31 33.649s1.188 2.649 2.649 2.649a2.653 2.653 0 002.453-1.649h-2.1v-2h4.296v1a4.654 4.654 0 01-4.649 4.65z"
        />
      </G>
    </Svg>
  )
}
export default SvgGoogleMyBusiness
