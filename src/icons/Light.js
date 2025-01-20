import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLight(props) {
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
          d="M7.414 21.146c-.3-.464.167-.946.72-.946h1.733c.552 0 1.019.482.72.946-.33.511-.92.854-1.587.854a1.886 1.886 0 01-1.586-.854zM5.267 18.4a.9.9 0 00.9.9h5.666a.9.9 0 100-1.8H6.167a.9.9 0 00-.9.9zM16 10.75c0 3.438-2.483 5.274-3.519 5.85H5.52C4.483 16.024 2 14.188 2 10.75 2 7.024 5.136 4 9 4s7 3.024 7 6.75zm-1.867 0c0-2.727-2.305-4.95-5.133-4.95s-5.133 2.223-5.133 4.95c0 2.223 1.39 3.501 2.193 4.05h5.88c.803-.549 2.193-1.827 2.193-4.05z"
          fill={props.color || theme?.colors?.black || '#212121'}
        />
        <Path
          d="M19.918 6.779c.102-.277.507-.277.609 0l.277.756a.317.317 0 00.197.19l.784.267a.308.308 0 010 .587l-.784.268a.317.317 0 00-.197.19l-.277.756c-.102.276-.508.276-.61 0l-.277-.756a.318.318 0 00-.196-.19l-.784-.268a.308.308 0 010-.587l.784-.268a.318.318 0 00.196-.19l.278-.755zM15.658 2.242a.363.363 0 01.684 0l.313.882a.363.363 0 00.221.221l.882.313a.363.363 0 010 .684l-.882.313a.363.363 0 00-.221.221l-.313.882a.363.363 0 01-.684 0l-.313-.882a.363.363 0 00-.221-.221l-.882-.313a.363.363 0 010-.684l.882-.313a.363.363 0 00.221-.221l.313-.882z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  )
}
export default SvgLight
