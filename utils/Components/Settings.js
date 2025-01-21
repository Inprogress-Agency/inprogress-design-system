import { Switch, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'
import { setIsDarkMode } from '../Store/Theme/Theme'

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

const Settings = () => {
  const dispatch = useDispatch()
  const { isDarkMode } = useSelector(state => state.theme)

  const handleSetIsDarkMode = value => {
    dispatch(setIsDarkMode(value))
  }

  return (
    <StyledSettings>
      <Setting title="Dark mode">
        <Switch value={isDarkMode} onValueChange={handleSetIsDarkMode} />
      </Setting>
    </StyledSettings>
  )
}

export default Settings
