/* @flow */

import { StyleSheet } from 'react-native'
import { rem } from '@helpers/responsive'
import { SUCCESS_COLOR, DEFAULT_TEXT_COLOR } from '@theme/colors'
import { AVENIR_MEDIUM } from '@theme/fonts'

const styles: Object = StyleSheet.create({
  container: {
    minWidth: rem(160),
    minHeight: rem(42),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: SUCCESS_COLOR,
    backgroundColor: SUCCESS_COLOR,
    borderRadius: 100,
  },
  text: {
    ...AVENIR_MEDIUM,
    fontSize: rem(16),
    textAlign: 'center',
    color: DEFAULT_TEXT_COLOR,
    backgroundColor: 'transparent',
  },
})

export default styles
