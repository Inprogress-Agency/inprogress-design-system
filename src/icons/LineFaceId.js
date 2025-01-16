import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineFaceId(props) {
  const { theme } = useSelector(state => state.theme)

  return (
    <Svg
      fill={props.color || theme?.colors?.black || '#212121'}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path d="M7.5 3a.5.5 0 010 1h-2A1.5 1.5 0 004 5.5v2.031a.5.5 0 11-1 0V5.5A2.5 2.5 0 015.5 3h2zm9 1a.5.5 0 110-1h2A2.5 2.5 0 0121 5.5v2a.5.5 0 11-1 0v-2A1.5 1.5 0 0018.5 4h-2zM20 16.5a.5.5 0 111 0v2a2.5 2.5 0 01-2.5 2.5h-2a.5.5 0 110-1h2a1.5 1.5 0 001.5-1.5v-2zm-17 0a.5.5 0 111 0v2A1.5 1.5 0 005.5 20h2a.5.5 0 110 1h-2A2.5 2.5 0 013 18.5v-2zm5-8a.5.5 0 011 0v1a.5.5 0 01-1 0v-1zm8 0a.5.5 0 111 0v1a.5.5 0 11-1 0v-1zm-4 0a.5.5 0 111 0v4a1.5 1.5 0 01-1.5 1.5.5.5 0 110-1 .5.5 0 00.5-.5v-4zm-3.9 7.3a.5.5 0 01.8-.6c.911 1.215 1.935 1.8 3.1 1.8s2.189-.585 3.1-1.8a.5.5 0 01.8.6C14.811 17.252 13.502 18 12 18c-1.502 0-2.811-.748-3.9-2.2z" />
      </G>
    </Svg>
  )
}
export default SvgLineFaceId
