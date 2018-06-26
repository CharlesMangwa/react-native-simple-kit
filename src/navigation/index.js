/* @flow */

import { createSwitchNavigator } from 'react-navigation'
import LaunchScreen from '@Launch'
import AppStack from './AppStack'
import AuthStack from './AuthStack'

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
