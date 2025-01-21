import { useSelector } from 'react-redux'
import { ThemeProvider as SCThemeProvider } from 'styled-components/native'

const ThemeProvider = ({ children }) => {
  const { theme } = useSelector(state => state.theme)
  return <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
}

export default ThemeProvider
