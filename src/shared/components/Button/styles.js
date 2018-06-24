/* @flow */

import { StyleSheet } from 'react-native'
import { rem } from '@helpers/responsive'
import { BRAND_COLOR_GREEN, DEFAULT_TEXT_COLOR_LIGHT } from '@theme/colors'
import { AVENIR_MEDIUM } from '@theme/fonts'

const styles: Object = StyleSheet.create({
  container: {
    width: rem(160),
    height: rem(42),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: BRAND_COLOR_GREEN,
    backgroundColor: BRAND_COLOR_GREEN,
    borderRadius: 100,
  },
  text: {
    ...AVENIR_MEDIUM,
    fontSize: rem(16),
    textAlign: 'center',
    color: DEFAULT_TEXT_COLOR_LIGHT,
    backgroundColor: 'transparent',
  },
})

export default styles
