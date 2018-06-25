/* @flow */

import { Dimensions, Platform } from 'react-native'

type iPhoneXType = {
  isValid: boolean,
  indicatorHeight: 83,
  indicatorPadding: 34,
  statusBarHeight: 44,
  statusBarPadding: 24,
}

// StarWars API from Apollo Launchpad - https://launchpad.graphql.com/mpjk0plp9
export const API = 'https://mpjk0plp9.lp.gql.zone/graphql'
export const SUBSCRIPTIONS_API =
  'wss://subscriptions.graph.cool/v1/PUT_YOUR_OWN_ENDPOINT_HERE'

export const iPhoneX: iPhoneXType = {
  isValid: Dimensions.get('window').height > 800 && Platform.OS === 'ios',
  indicatorHeight: 83,
  indicatorPadding: 34,
  statusBarHeight: 44,
  statusBarPadding: 24,
}
