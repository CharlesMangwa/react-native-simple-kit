/* @flow */

import { StyleSheet } from 'react-native'
import { vh, vw } from '@helpers/responsive'
import { NEUTRAL_COLOR_00 } from '@theme/colors'

const styles: Object = StyleSheet.create({
  container: {
    flex: 1,
    width: vw(100),
    height: vh(100),
    backgroundColor: NEUTRAL_COLOR_00,
  },
})

export default styles
