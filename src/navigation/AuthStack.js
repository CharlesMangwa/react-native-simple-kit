/* @flow */

import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import { ConnectionScreen, InscriptionScreen } from '@Auth'
import { BRAND_COLOR_RED } from '@theme/colors'
import { BARIOL_BOLD } from '@theme/fonts'
import { rem } from '@helpers/responsive'

export default createStackNavigator(
  {
    Connection: {
      screen: ConnectionScreen,
      navigationOptions: {
        header: null,
        title: 'Connection',
        headerBackTitle: null,
      },
    },
    Inscription: {
      screen: InscriptionScreen,
      navigationOptions: {
        title: 'Inscription',
        headerStyle: { backgroundColor: BRAND_COLOR_RED },
        headerTintColor: 'white',
        headerTitleStyle: {
          ...BARIOL_BOLD,
          fontSize: rem(20),
          color: 'white',
        },
      },
    },
  },
  {
    initialRouteName: 'Connection',
    headerMode: Platform.OS === 'ios' ? 'float' : 'screen',
  }
)
