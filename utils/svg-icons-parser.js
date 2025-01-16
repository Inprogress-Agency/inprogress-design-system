const fs = require('fs')
const path = require('path')

const folderPath = 'src/icons'
const themeImport = "import { useSelector } from 'react-redux'\n"
const themeDeclaration = '  const { theme } = useSelector(state => state.theme)\n'

function generateTypeDefinitions(files) {
  const typeContent = `import { SvgProps } from 'react-native-svg'
import { FC } from 'react'

export interface IconProps extends SvgProps {
  size?: number
  color?: string
}

${files
  .filter(file => file.endsWith('.js') && file !== 'index.js')
  .map(file => {
    const componentName = file.replace('.js', '')
    return `export declare const ${componentName}: FC<IconProps>`
  })
  .join('\n')}
`

  fs.writeFileSync(path.join(folderPath, 'index.d.ts'), typeContent, 'utf8')
}

fs.readdir(folderPath, (err1, files) => {
  if (err1) {
    console.error('Error reading folder:', err1)
    return
  }

  generateTypeDefinitions(files)

  files.forEach(file => {
    const filePath = path.join(folderPath, file)

    fs.readFile(filePath, 'utf8', (err2, data) => {
      if (err2) {
        console.error('Error reading file:', err2)
        return
      }

      let updatedData = data

      if (updatedData.includes('props.color')) {
        updatedData = updatedData.replace("import * as React from 'react'\n", `$&${themeImport}`)

        updatedData = updatedData.replace(/function (.*?)\(props\) \{/, `$&\n${themeDeclaration}`)
      }

      if (!updatedData.includes(' G')) {
        updatedData = updatedData.replace(
          "'react-native-svg'",
          "'react-native-svg' \nimport { G } from 'react-native-svg'"
        )
      }

      const width = updatedData.match(/width={(\d+)}/) ? updatedData.match(/width={(\d+)}/)[1] : 24
      const height = updatedData.match(/height={(\d+)}/)
        ? updatedData.match(/height={(\d+)}/)[1]
        : 24
      const base = parseInt(width, 10) >= parseInt(height, 10) ? width : height

      const haveViewBox = updatedData.includes('viewBox')
      updatedData = updatedData.replace(
        /<Svg([\s\S]*?)>\n([\s\S]*?)<\/Svg>/,
        `<Svg$1>\n  <G scale={1}>\n$2\n  </G>\n</Svg>`
      )
      if (!haveViewBox) {
        updatedData = updatedData.replace(/<Svg([^>]*)viewBox="[^"]*"([^>]*)>/, '<Svg$1$2>')
      }

      const viewBox = haveViewBox ? '' : ` viewBox="0 0 ${width} ${height}"`

      updatedData = updatedData.replace(
        /<Svg([\s\S]*?)width={(\d+)}([\s\S]*?)height={(\d+)}([\s\S]*?)>/,
        `<Svg$1width={props.size || 24}$3height={props.size || 24}${viewBox}$5>`
      )

      updatedData = updatedData.replace('<Defs></Defs>', '<Defs />')

      fs.writeFile(filePath, updatedData, 'utf8', err3 => {
        if (err3) {
          console.error('Error writing file:', err3)
          return
        }
      })
    })
  })
})
