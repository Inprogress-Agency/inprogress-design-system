import { ReactNode } from 'react'


export interface RedBadgeProps {
  config: {
    useDisplayBadge?: () => boolean;
  },

  children?: ReactNode

}
