const fs = require('fs')
const path = require('path')

const folderPath = 'src/Assets/Icons/components/'
const themeImport = "import { useTheme } from '@/Hooks'\n"
const themeDeclaration = '  const theme = useTheme()\n'

fs.readdir(folderPath, (err1, files) => {
  if (err1) {
    console.error('Error reading folder:', err1)
    return
  }

  files.forEach(file => {
    const filePath = path.join(folderPath, file)

    fs.readFile(filePath, 'utf8', (err2, data) => {
      if (err2) {
        console.error('Error reading file:', err2)
        return
      }

      let updatedData = data

      // Vérifier si on a réellement besoin d'importer et utiliser le thème dans ce composant
      if (updatedData.includes('props.color')) {
        // Ajouter l'importation du thème après l'importation de React
        updatedData = updatedData.replace(
          "import * as React from 'react'\n",
          `$&${themeImport}`,
        )

        // Ajouter la déclaration du thème dans la fonction du composant
        updatedData = updatedData.replace(
          /function (.*?)\(props\) \{/,
          `$&\n${themeDeclaration}`,
        )
      }

      // Ajouter l'importation de l'élément 'G' dans le composant si nescessaire
      if (!updatedData.includes(' G')) {
        updatedData = updatedData.replace(
          "'react-native-svg'",
          "'react-native-svg' \nimport { G } from 'react-native-svg'",
        )
      }

      const width = updatedData.match(/width={(\d+)}/)
        ? updatedData.match(/width={(\d+)}/)[1]
        : 24
      const height = updatedData.match(/height={(\d+)}/)
        ? updatedData.match(/height={(\d+)}/)[1]
        : 24
      const base = parseInt(width, 10) >= parseInt(height, 10) ? width : height

      // Ajouter un élément 'G' englobant tous les éléments 'Path' et appliquer la propriété scale
      const haveViewBox = updatedData.includes('viewBox')
      updatedData = updatedData.replace(
        /<Svg([\s\S]*?)>\n([\s\S]*?)<\/Svg>/,
        `<Svg$1>\n  <G scale={${
          haveViewBox ? '1' : `(props.size || 24) / ${base}`
        }}>\n$2\n  </G>\n</Svg>`,
      )

      // Remplacer width et height dans l'élément Svg par props.size si size est spécifiée
      updatedData = updatedData.replace(
        /<Svg([\s\S]*?)width={(\d+)}([\s\S]*?)height={(\d+)}([\s\S]*?)>/,
        '<Svg$1width={props.size || 24}$3height={props.size || 24}$5>',
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
