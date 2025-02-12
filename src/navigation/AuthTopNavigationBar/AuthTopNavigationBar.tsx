import React from 'react'
import TopNavigationBar from '../TopNavigationBar/TopNavigationBar'
import { useSelector } from 'react-redux'
import { RootState } from '../../types/RootState'
import { useNavigation, NavigationProp, StackActions } from '@react-navigation/native'
import { AuthTopNavigationBarProps, RootStackParamList } from './AuhtTopNavigationBar.types'

/**
 * This component is used to display a bar on top of a screen. <br>
 * It asume you have a user slice in the redux store. <br>
 * It asume you have a login screen and a main screen.
 */
const AuthTopNavigationBar = ({
  onGoBack,
  renderCustomAction,
  options,
  ...props
}: AuthTopNavigationBarProps) => {
  const { currentUser } = useSelector((state: RootState) => state.user)
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      return navigation.goBack()
    }
    if (currentUser?.uid) {
      return navigation.navigate('Main')
    }
    navigation.dispatch(StackActions.push('Login'))
  }

  return (
    <TopNavigationBar
      onGoBack={onGoBack}
      goBackOverride={handleGoBack}
      renderCustomAction={renderCustomAction}
      options={options}
      {...props}
    />
  )
}

export default AuthTopNavigationBar
