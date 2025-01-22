import { FC, SVGProps } from 'react'

export interface IconProps extends SVGProps<SVGSVGElement> {
  color?: string
  size?: number
}

export type IconComponent = FC<IconProps>
