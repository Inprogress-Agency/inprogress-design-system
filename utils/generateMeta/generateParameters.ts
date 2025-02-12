import { DocgenComponent } from './DocgenComponent'

export const generateParameters = (component: DocgenComponent) => {
  const info = component.__docgenInfo
  const formattedDescription = info?.description ? `**Description :** ${info?.description}\n\n` : ''
  const formattedComposes = info?.composes?.length
    ? `**Extends :** ${info?.composes?.map(comp => `\`${comp}\``).join(', ')}\n\n`
    : ''
  return {
    docs: {
      description: {
        component: `${formattedComposes}${formattedDescription}`,
      },
    },
  }
}
