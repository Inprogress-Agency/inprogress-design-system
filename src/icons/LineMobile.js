import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineMobile(props) {
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
        <Path
          d="M12 17.75v.023"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={2}
          strokeLinecap="round"
        />
        <Path
          d="M13.25 7.75h-2.5M19.3 14.837H4.7m10.216 6.535c-1.911.504-3.92.504-5.832 0a6.43 6.43 0 01-4.653-4.907l-.095-.456a15.977 15.977 0 010-6.518l.095-.456a6.43 6.43 0 014.653-4.907 11.422 11.422 0 015.832 0 6.43 6.43 0 014.653 4.907l.095.456c.448 2.15.448 4.369 0 6.518l-.095.456a6.43 6.43 0 01-4.653 4.907z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </G>
    </Svg>
  )
}
export default SvgLineMobile
