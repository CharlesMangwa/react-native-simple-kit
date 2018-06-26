/* @flow */

import { StyleSheet } from 'react-native'
import { vh, vw } from '@helpers/responsive'
import { BRAND_COLOR_RED } from '@theme/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: vw(100),
    height: vh(100),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BRAND_COLOR_RED,
  },
})

export default styles
