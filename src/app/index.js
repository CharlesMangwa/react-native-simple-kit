/* @flow */

import { createSwitchNavigator } from 'react-navigation'
import { AppStack, AuthStack, LaunchScreen } from '@scenes'

export default createSwitchNavigator(
  {
    Launch: LaunchScreen,
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'Launch',
  }
)
