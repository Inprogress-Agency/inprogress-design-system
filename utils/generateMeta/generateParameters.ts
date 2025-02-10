import { DocgenComponent } from './DocgenComponent'

export const generateParameters = (component: DocgenComponent) => {
  const info = component.__docgenInfo
  console.log('info:', info)

  if (info?.composes?.length) {
    return {
      docs: {
        description: {
          component: `\n\n**Extends :** \`${info.composes.join(', ')}\``,
        },
      },
    }
  }
  return {}
}
