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
  isValid:
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (Dimensions.get('window').height === 812 ||
      Dimensions.get('window').width === 812),
  indicatorHeight: 83,
  indicatorPadding: 34,
  statusBarHeight: 44,
  statusBarPadding: 24,
}
