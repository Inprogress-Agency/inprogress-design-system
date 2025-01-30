import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { Image, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import styled, { css } from 'styled-components/native'

export const dimensions = {
  width: 318,
  height: 659,
}

const StyledPhoneMockup = styled(View)`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: 24px;
    border-width: 8px;
    border-color: #000;
    height: ${dimensions.height}px;
    width: ${dimensions.width}px;
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
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
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
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </StyledPhoneMockup>
  )
}

export default PhoneMockup
