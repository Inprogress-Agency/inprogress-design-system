import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineScan(props) {
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
          d="M20.25 8.25a.75.75 0 001.5 0h-1.5zM16.5 3a.75.75 0 000 1.5V3zm-9 1.5a.75.75 0 000-1.5v1.5zM2.25 8.25a.75.75 0 001.5 0h-1.5zm4.383 3.985a.75.75 0 10.61 1.37l-.61-1.37zm1.255.263l-.305-.686.305.686zm8.224 0l-.304.685.304-.685zm.646 1.107a.75.75 0 00.61-1.37l-.61 1.37zm-1.181 7.74l.147.735-.148-.736zm-.561.111l-.148-.735.148.735zm-5.866.011l-.145.736.145-.736zm-.722-.142l.144-.736-.144.736zm-4.678-6.43a.75.75 0 00-1.5 0h1.5zm18 0a.75.75 0 00-1.5 0h1.5zm0-6.645C21.75 5.35 19.4 3 16.5 3v1.5a3.75 3.75 0 013.75 3.75h1.5zM7.5 3a5.25 5.25 0 00-5.25 5.25h1.5A3.75 3.75 0 017.5 4.5V3zm-.258 10.605l.95-.422-.609-1.37-.95.422.61 1.37zm8.566-.422l.95.422.61-1.37-.951-.423-.61 1.371zm-7.616 0a9.375 9.375 0 017.615 0l.61-1.37a10.875 10.875 0 00-8.834 0l.61 1.37zm7.237 7.426l-.56.112.294 1.47.56-.111-.294-1.471zm-6.134.122l-.723-.142-.29 1.472.723.142.29-1.472zm5.573-.01a14.316 14.316 0 01-5.573.01l-.29 1.472c2.033.4 4.127.396 6.158-.011l-.295-1.47zM2.25 14.895c0 3.495 2.54 6.478 6.033 7.166l.29-1.472c-2.824-.555-4.823-2.949-4.823-5.694h-1.5zm18 0c0 2.749-1.997 5.148-4.821 5.714l.295 1.47c3.492-.7 6.026-3.688 6.026-7.184h-1.5z"
          fill={props.color || theme?.colors?.black || '#212121'}
        />
      </G>
    </Svg>
  )
}
export default SvgLineScan
