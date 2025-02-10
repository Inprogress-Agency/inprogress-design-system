import { ComponentType } from 'react'

export type DocgenComponent = ComponentType<any> & {
  __docgenInfo?: {
    props?: any
    composes?: string[]
  }
}
