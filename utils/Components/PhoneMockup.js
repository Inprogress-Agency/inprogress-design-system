import { Image, View } from 'react-native'
import { useSelector } from 'react-redux'
import styled, { css } from 'styled-components/native'

const StyledPhoneMockup = styled(View)`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: 24px;
    border-width: 8px;
    border-color: #000;
    height: 659px;
    width: 318px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  `}
`

const StyledStatusBar = styled(View)`
  width: 100%;
  height: 35px;
`

const StyledNavigationBar = styled(View)`
  width: 100%;
  height: 20px;
`

const StyledContent = styled(View)`
  flex-grow: 1;
  width: 100%;
  padding: 0 24px;
  padding-top: 10px;
`

const PhoneMockup = ({ children }) => {
  const { isDarkMode } = useSelector(state => state.theme)
  return (
    <StyledPhoneMockup>
      <StyledStatusBar>
        <Image
          style={{ width: '100%', height: '100%' }}
          source={{
            uri: isDarkMode ? './status-bar-dark-theme.png' : './status-bar-light-theme.png',
          }}
        />
      </StyledStatusBar>
      <StyledContent>{children}</StyledContent>
      <StyledNavigationBar>
        <Image
          style={{ width: '100%', height: '100%' }}
          source={{
            uri: isDarkMode
              ? './navigation-bar-dark-theme.png'
              : './navigation-bar-light-theme.png',
          }}
        />
      </StyledNavigationBar>
    </StyledPhoneMockup>
  )
}

export default PhoneMockup
