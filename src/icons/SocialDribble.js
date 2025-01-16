import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgSocialDribble(props) {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 12.8 12.8"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          d="M.8 6.4c0-1.015.25-1.953.75-2.811A5.56 5.56 0 013.59 1.55C4.447 1.05 5.385.8 6.4.8s1.953.25 2.811.75A5.56 5.56 0 0111.25 3.59c.5.858.75 1.796.75 2.811s-.25 1.953-.75 2.811A5.56 5.56 0 019.21 11.25c-.858.5-1.796.75-2.811.75a5.486 5.486 0 01-2.811-.75A5.56 5.56 0 011.55 9.21 5.486 5.486 0 01.8 6.4zm.93 0c0 1.165.392 2.191 1.176 3.08.358-.702.925-1.37 1.702-2.005.777-.634 1.534-1.034 2.274-1.198-.112-.262-.22-.497-.325-.706-1.284.41-2.673.616-4.167.616-.29 0-.507-.004-.65-.011 0 .03-.001.067-.005.112a1.393 1.393 0 00-.005.112zm.145-1.154c.164.015.407.023.728.023 1.247 0 2.43-.168 3.55-.504-.567-1.008-1.19-1.848-1.87-2.52a4.547 4.547 0 00-1.517 1.243 4.782 4.782 0 00-.89 1.758zm1.669 4.839a4.528 4.528 0 002.856.985c.553 0 1.101-.104 1.646-.313a16.446 16.446 0 00-.873-3.707c-.687.149-1.38.526-2.078 1.13-.698.606-1.215 1.24-1.551 1.905zm1.714-8.199c.657.68 1.265 1.527 1.825 2.543C8.1 4.003 8.864 3.462 9.38 2.805A4.54 4.54 0 006.4 1.73c-.38 0-.762.052-1.142.156zm2.228 3.338c.112.239.24.541.381.907a19.222 19.222 0 011.803-.078c.463 0 .923.011 1.378.033a4.497 4.497 0 00-1.098-2.71c-.485.724-1.306 1.34-2.464 1.848zm.661 1.691c.381 1.105.639 2.24.773 3.405.59-.38 1.071-.87 1.445-1.467a4.524 4.524 0 00.672-1.938 21.959 21.959 0 00-1.49-.056c-.41 0-.877.019-1.4.056z"
          fill="#100000"
        />
      </G>
    </Svg>
  )
}
export default SvgSocialDribble
