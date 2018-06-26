/* @flow */

import { Dimensions, Platform } from 'react-native'

type iPhoneXType = {
  isValid: boolean,
  indicatorHeight: 83,
  indicatorPadding: 34,
  statusBarHeight: 44,
  statusBarPadding: 24,
}

export const iPhoneX: iPhoneXType = {
  isValid: Dimensions.get('window').height > 800 && Platform.OS === 'ios',
  indicatorHeight: 83,
  indicatorPadding: 34,
  statusBarHeight: 44,
  statusBarPadding: 24,
}
