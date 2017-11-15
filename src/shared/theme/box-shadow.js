/* @flow */

import { Platform } from 'react-native'

export const DEFAULT_BOX_SHADOW: Object = {
  ...Platform.select({
    android: {
      elevation: 3,
    },
    ios: {
      shadowColor: '#3F3F3F',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.3,
      shadowRadius: 10,
    },
  }),
}
