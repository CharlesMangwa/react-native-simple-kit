/* @flow */

import { createBottomTabNavigator } from 'react-navigation'

import { CounterScreen, HomeScreen, SettingsScreen } from '@App'
import { BRAND_COLOR_RED, NEUTRAL_COLOR_50 } from '@theme/colors'
import { AVENIR_REGULAR } from '@theme/fonts'
import { iPhoneX } from '@config'
import getIcon from '@helpers/icon'

export default createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      path: '',
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarAccessibilityLabel: 'Home screen',
        tabBarIcon: ({ focused, tintColor }) =>
          getIcon('home', 22, focused, tintColor),
      },
    },
    Counter: {
      screen: CounterScreen,
      path: 'counter',
      navigationOptions: {
        tabBarLabel: 'Counter',
        tabBarAccessibilityLabel: 'Counter screen',
        tabBarIcon: ({ focused, tintColor }) =>
          getIcon('people', 22, focused, tintColor),
      },
    },
    Settings: {
      screen: SettingsScreen,
      path: 'settings',
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarAccessibilityLabel: 'Settings screen',
        tabBarIcon: ({ focused, tintColor }) =>
          getIcon('profile', 22, focused, tintColor),
      },
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: BRAND_COLOR_RED,
      inactiveTintColor: NEUTRAL_COLOR_50,
      labelStyle: {
        ...AVENIR_REGULAR,
        fontSize: 12,
      },
      style: {
        backgroundColor: 'white',
        paddingTop: iPhoneX.isValid ? 5 : undefined,
      },
    },
  }
)
