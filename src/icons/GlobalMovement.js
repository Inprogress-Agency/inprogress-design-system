import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgGlobalMovement(props) {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 22 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          d="M10.949 11.277c3.431 0 6.361.545 6.361 2.721s-2.911 2.74-6.361 2.74c-3.431 0-6.36-.544-6.36-2.72 0-2.177 2.91-2.74 6.36-2.74zm5.486-1.31c1.312-.025 2.722.156 3.243.284 1.104.216 1.83.66 2.131 1.304a1.923 1.923 0 010 1.67c-.46.998-1.944 1.319-2.52 1.402-.12.018-.215-.086-.203-.206.295-2.767-2.048-4.08-2.654-4.381-.026-.014-.032-.034-.03-.047.003-.01.013-.024.033-.026zm-10.87 0c.02.003.03.017.032.025.003.014-.003.034-.028.048-.607.302-2.95 1.614-2.656 4.38.013.121-.082.224-.201.207-.577-.083-2.06-.404-2.52-1.402a1.916 1.916 0 010-1.67c.3-.644 1.026-1.087 2.13-1.305.522-.127 1.93-.307 3.244-.283zM10.95.737a4.206 4.206 0 014.21 4.234 4.207 4.207 0 01-4.21 4.234 4.207 4.207 0 01-4.21-4.234A4.206 4.206 0 0110.95.738zm5.714.707c2.257 0 4.029 2.135 3.425 4.514-.407 1.6-1.882 2.665-3.525 2.621a3.4 3.4 0 01-.483-.047.158.158 0 01-.107-.244 5.765 5.765 0 00.984-3.24c0-1.25-.39-2.416-1.068-3.372-.022-.03-.038-.075-.016-.11.018-.028.05-.042.082-.05.228-.046.463-.072.708-.072zm-11.327 0c.245 0 .48.026.71.073.03.007.064.022.081.05.021.033.006.08-.016.11a5.807 5.807 0 00-1.068 3.37c0 1.198.357 2.314.984 3.241a.158.158 0 01-.106.244 3.283 3.283 0 01-.484.047c-1.643.043-3.118-1.02-3.525-2.621-.604-2.379 1.168-4.514 3.424-4.514z"
          fill="#7ACB8B"
        />
      </G>
    </Svg>
  )
}
export default SvgGlobalMovement
