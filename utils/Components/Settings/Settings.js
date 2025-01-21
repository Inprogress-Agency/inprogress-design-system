import { Switch, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'
import { setIsDarkMode } from '../../Store/Theme'
import { setLanguage } from '../../Store/Language'
import Select from './Select'

const StyledSetting = styled(View)`
  padding: 8px 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Setting = ({ title, children }) => {
  return (
    <StyledSetting>
      <Text style={{ fontWeight: 'bold' }}>{title}</Text>
      {children}
    </StyledSetting>
  )
}

const StyledSettings = styled(View)`
  background-color: #e2e2e2;
  border-radius: 24px;
  width: 318px;
  height: min-content;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 24px;
`

const AVAILABLE_LANGUAGES = [
  {
    title: 'English',
    value: 'en',
  },
  {
    title: 'Français',
    value: 'fr',
  },
  {
    title: 'Español',
    value: 'es',
  },
]

const Settings = () => {
  const dispatch = useDispatch()
  const { isDarkMode } = useSelector(state => state.theme)
  const { lang } = useSelector(state => state.language)

  const handleSetIsDarkMode = value => {
    dispatch(setIsDarkMode(value))
  }

  const handleSetLanguage = value => {
    dispatch(setLanguage(value))
  }

  return (
    <StyledSettings>
      <Setting title="Dark mode">
        <Switch value={isDarkMode} onValueChange={handleSetIsDarkMode} />
      </Setting>
      <Setting title="Language">
        <Select options={AVAILABLE_LANGUAGES} onChange={handleSetLanguage} value={lang} />
      </Setting>
    </StyledSettings>
  )
}

export default Settings
