/* @flow */

// import { Platform } from 'react-native'
import Navigation from 'react-native-navigation'
import registerContainers from '@core/containers'

const initializeApp = (): void => {
  registerContainers()
  Navigation.events().onAppLaunched(() => {
    Navigation.setRoot({
      container: {
        name: 'app.launch',
      },
    })
  })
}

export default initializeApp
