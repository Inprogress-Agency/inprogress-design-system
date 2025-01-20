import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineNewVersion(props) {
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
          d="M12 17v.023"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={2}
          strokeLinecap="round"
        />
        <Path
          d="M20 12c0 1.092-.112 2.184-.336 3.26l-.095.455a6.43 6.43 0 01-4.653 4.907c-1.911.504-3.92.504-5.832 0a6.43 6.43 0 01-4.653-4.907l-.095-.456a15.977 15.977 0 010-6.518l.095-.456a6.43 6.43 0 014.653-4.907A11.422 11.422 0 0112 3"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
          strokeLinecap="round"
        />
        <Path
          d="M20.934 6.775c0 2.208-1.792 4-4 4s-3.556-2.224-3.556-2.224m0 0h1.808m-1.808 0v2m-.444-3.776c0-2.208 1.776-4 4-4 2.668 0 4 2.224 4 2.224m0 0V3m0 2h-1.776"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  )
}
export default SvgLineNewVersion
