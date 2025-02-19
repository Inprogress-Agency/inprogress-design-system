import * as React from 'react'
import Svg, { Ellipse, Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgNotClaimed(props) {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 40 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Ellipse cx={20.013} cy={17} rx={19.088} ry={17} fill="#A90000" />
        <Ellipse cx={20.013} cy={14.614} rx={19.088} ry={14.614} fill="#FF5858" />
        <Path
          d="M18.463 4.543c0-.972-.79-1.768-1.758-1.681-1.949.175-3.842.64-5.57 1.372-2.246.952-4.143 2.326-5.516 3.994-1.373 1.669-2.178 3.578-2.338 5.55a9.22 9.22 0 00.631 4.158c.377.953 1.478 1.322 2.441.973 1.28-.465 1.773-2.003 1.548-3.345a6.348 6.348 0 01-.066-1.565c.113-1.38.676-2.717 1.637-3.885.96-1.168 2.289-2.13 3.86-2.796a12.883 12.883 0 013.376-.903c.964-.124 1.755-.9 1.755-1.872z"
          fill="#FFA5A5"
        />
        <Path
          d="M22.457 9.166c1.977 0 3.302 1.388 3.302 3.453v4.767c0 2.059-1.325 3.447-3.302 3.447h-5.058c-1.977 0-3.307-1.388-3.307-3.447v-4.767c0-2.065 1.33-3.453 3.307-3.453h5.058zm-.776 4.066a.513.513 0 00-.723 0l-1.033 1.038-1.038-1.038a.513.513 0 00-.724 0 .513.513 0 000 .723l1.039 1.04-1.039 1.032a.513.513 0 00.362.875.508.508 0 00.362-.153l1.038-1.032 1.038 1.032a.48.48 0 00.356.153.509.509 0 00.362-.153.506.506 0 000-.717l-1.038-1.038 1.038-1.039a.513.513 0 000-.723z"
          fill="#fff"
        />
      </G>
    </Svg>
  )
}
export default SvgNotClaimed
