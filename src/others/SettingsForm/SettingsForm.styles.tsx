import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { Button } from '../../buttons'

export const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
})

export const StyledWrapper = styled.View`
  flex: 1;
  justify-content: space-between;
`

export const StyledButtonWrapper = styled.View`
  margin-bottom: 24px;
  margin-top: 12px;
`

export const StyledButton = styled(Button)`
  width: 100%;
  height: 48px;
`
