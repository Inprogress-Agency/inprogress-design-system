import * as Sentry from '@sentry/react-native'

const errorsMessageToIgnore = ['ECONNRESET']

export const handleError = error => {
  if (__DEV__) {
    console.warn(error)
    return
  }

  if (errorsMessageToIgnore.includes(error.message)) {
    return
  }

  Sentry.captureException(error)
}
