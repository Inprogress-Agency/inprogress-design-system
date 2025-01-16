import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgSocialYoutube(props) {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="5.368 13.434 0.69 0.69"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          fill="#fff"
          d="M5.813 13.773c-.055-.03-.108-.057-.162-.085v.17c.057-.032.117-.06.162-.085z"
        />
        <Path fill="#e8e0e0" d="M5.813 13.773c-.055-.03-.162-.085-.162-.085l.143.096.02-.011z" />
        <Path
          fill="#cd201f"
          d="M5.661 13.99a1.219 1.219 0 01-.178-.009.078.078 0 01-.041-.02.086.086 0 01-.02-.038.245.245 0 01-.008-.055 1.303 1.303 0 010-.178c.004-.033.006-.072.03-.095a.08.08 0 01.04-.02c.024-.005.125-.008.23-.008.103 0 .204.004.228.008a.078.078 0 01.047.028c.022.035.023.079.025.113v.126a.286.286 0 01-.014.093.069.069 0 01-.017.026.08.08 0 01-.042.022c-.1.007-.184.009-.28.007zm.152-.217l-.162-.086v.17l.163-.085z"
        />
      </G>
    </Svg>
  )
}
export default SvgSocialYoutube
