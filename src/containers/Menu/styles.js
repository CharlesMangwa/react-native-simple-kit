/* @flow */

import { StyleSheet } from 'react-native'
import { rem } from '@helpers/responsive'
import {
  BRAND_COLOR_RED,
  DEFAULT_BACKGROUND_COLOR,
  NEUTRAL_COLOR_35,
} from '@theme/colors'
import { AVENIR_REGULAR } from '@theme/fonts'

const styles: Object = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
  },
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
    height: rem(50),
    paddingLeft: rem(25),
  },
  buttonText: {
    ...AVENIR_REGULAR,
    color: BRAND_COLOR_RED,
    fontWeight: 'bold',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: NEUTRAL_COLOR_35,
  },
})

export default styles
